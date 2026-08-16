/**
 * UPSCSphere Daily Current Affairs Notification & PWA Manager
 */

export function isNotificationSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window && 'serviceWorker' in navigator;
}

export function getNotificationPermission(): 'granted' | 'denied' | 'default' | 'unsupported' {
  if (!isNotificationSupported()) return 'unsupported';
  return Notification.permission;
}

/**
 * Register Service Worker for PWA and Push Notifications
 */
export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return null;

  try {
    const reg = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
    return reg;
  } catch (err) {
    console.warn('Service Worker registration failed:', err);
    return null;
  }
}

/**
 * Request notification permission and enable daily morning CA reminders (07:30 AM IST)
 */
export async function enableDailyCANotifications(): Promise<{ success: boolean; permission: string; message: string }> {
  if (!isNotificationSupported()) {
    return {
      success: false,
      permission: 'unsupported',
      message: 'Notifications are not supported in this browser.',
    };
  }

  try {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      localStorage.setItem('upsc_daily_ca_alerts_enabled', 'true');
      localStorage.setItem('upsc_daily_ca_alert_time', '07:30');

      const registration = await registerServiceWorker();

      // Show immediate confirmation notification
      if (registration && registration.showNotification) {
        registration.showNotification('🔔 Daily Current Affairs Alerts Enabled!', {
          body: 'You will now receive today\'s 20 fresh UPSC Prelims MCQs and editorial dossiers every morning at 7:30 AM IST.',
          icon: '/logo.png',
          badge: '/logo.png',
          tag: 'daily-ca-enabled-confirm',
          data: { url: '/daily-ca' },
        });
      }

      return {
        success: true,
        permission: 'granted',
        message: '✅ Daily 7:30 AM Current Affairs Alerts successfully enabled!',
      };
    } else if (permission === 'denied') {
      localStorage.setItem('upsc_daily_ca_alerts_enabled', 'false');
      return {
        success: false,
        permission: 'denied',
        message: 'Notification permission was denied. Please allow notifications in your browser settings.',
      };
    } else {
      return {
        success: false,
        permission: 'default',
        message: 'Notification permission prompt was dismissed.',
      };
    }
  } catch (err: any) {
    console.error('Error requesting notification permission:', err);
    return {
      success: false,
      permission: 'error',
      message: err.message || 'Failed to enable notifications.',
    };
  }
}

/**
 * Disable daily notifications
 */
export function disableDailyCANotifications(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('upsc_daily_ca_alerts_enabled', 'false');
  }
}

/**
 * Triggers an instant test notification so the user can verify it working
 */
export async function triggerTestNotification(): Promise<{ success: boolean; message: string }> {
  if (!isNotificationSupported()) {
    return { success: false, message: 'Notifications are not supported in this browser.' };
  }

  if (Notification.permission !== 'granted') {
    const req = await enableDailyCANotifications();
    if (!req.success) return { success: false, message: req.message };
  }

  try {
    const reg = await navigator.serviceWorker.ready;
    if (reg && reg.showNotification) {
      await reg.showNotification('🏛️ UPSCSphere Daily CA Alert (Test)', {
        body: 'Today\'s 20 fresh UPSC Prelims Current Affairs MCQs with official book citations & elimination traps are ready. Tap to solve now!',
        icon: '/logo.png',
        badge: '/logo.png',
        tag: 'daily-ca-test-sample',
        data: { url: '/daily-ca' },
      });
      return { success: true, message: '🎉 Test alert sent! Check your notification center.' };
    } else {
      new Notification('🏛️ UPSCSphere Daily CA Alert (Test)', {
        body: 'Today\'s 20 fresh UPSC Prelims Current Affairs MCQs are ready. Tap to solve!',
        icon: '/logo.png',
      });
      return { success: true, message: '🎉 Test alert sent!' };
    }
  } catch (err: any) {
    return { success: false, message: err.message || 'Could not dispatch test notification.' };
  }
}

/**
 * Check if daily alerts are currently active in localStorage
 */
export function isDailyCAAlertEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('upsc_daily_ca_alerts_enabled') === 'true' && Notification.permission === 'granted';
}

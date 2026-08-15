// UPSCSphere Service Worker & Push Notification Handler
const CACHE_NAME = 'upscsphere-v1';

// Install event
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Push notification event (triggered from Web Push server)
self.addEventListener('push', (event) => {
  let data = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch {
      data = { title: 'UPSCSphere Daily CA', body: event.data.text() };
    }
  }

  const title = data.title || '🏛️ Today\'s 20 Daily UPSC CA Questions Live!';
  const options = {
    body: data.body || 'Today\'s 20 fresh UPSC Prelims Current Affairs MCQs with official book citations & elimination traps are ready to solve.',
    icon: '/emblem.png',
    badge: '/emblem.png',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/daily-ca',
      dateOfNotification: Date.now()
    },
    actions: [
      { action: 'solve_now', title: '⚡ Solve 20 MCQs Now' },
      { action: 'view_dossier', title: '📖 View Editorial Dossier' }
    ],
    tag: 'daily-ca-reminder',
    renotify: true
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetUrl = event.notification.data?.url || '/daily-ca';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('/daily-ca') && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});

// Client message handler for scheduled local triggers
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_TEST_NOTIFICATION') {
    self.registration.showNotification('🏛️ UPSCSphere Daily Current Affairs Alert', {
      body: 'Today\'s 20 fresh UPSC Prelims MCQs from The Hindu, PIB & Indian Express are ready with verified book citations. Tap to solve now!',
      icon: '/emblem.png',
      badge: '/emblem.png',
      vibrate: [200, 100, 200],
      tag: 'daily-ca-test-reminder',
      data: { url: '/daily-ca' },
      actions: [
        { action: 'solve_now', title: '⚡ Solve Now' }
      ]
    });
  }
});

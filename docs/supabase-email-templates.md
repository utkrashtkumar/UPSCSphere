# 📧 UPSCSphere — Supabase Custom Email Templates

Use these responsive HTML email templates in your **Supabase Dashboard** under:
👉 `Authentication` ➔ `Email Templates`

---

## 1. Confirm Signup (Email Confirmation)

**Template Tab in Supabase:** `Confirm signup`  
**Subject Line:** `Confirm Your Email — Welcome to UPSCSphere 🏛️`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Confirm Your UPSCSphere Account</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 580px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
          
          <!-- Top Indian Tricolour Gradient Header Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #ff671f 0%, #ffffff 50%, #046a38 100%);"></td>
          </tr>

          <!-- Brand Logo Header -->
          <tr>
            <td style="padding: 32px 36px 20px 36px; text-align: center;">
              <div style="display: inline-block; padding: 10px 16px; border-radius: 12px; background-color: #fff7ed; border: 1px solid #ffedd5;">
                <span style="font-size: 20px; font-weight: 900; letter-spacing: -0.5px; color: #0f172a;">
                  UPSC<span style="color: #ea580c;">Sphere</span>
                </span>
                <span style="display: inline-block; margin-left: 6px; padding: 2px 8px; border-radius: 9999px; background-color: #dcfce7; color: #15803d; font-size: 10px; font-weight: 700; text-transform: uppercase;">
                  Prelims
                </span>
              </div>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 10px 36px 30px 36px;">
              <h1 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 800; color: #0f172a; text-align: center; line-height: 1.3;">
                Welcome to UPSCSphere, Aspirant! 🎯
              </h1>
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #475569; text-align: center;">
                Thank you for joining India&apos;s 100% free UPSC Civil Services Prelims preparation platform. Please confirm your email address to activate your account and start your preparation.
              </p>

              <!-- Highlight Callout Box -->
              <table role="presentation" width="100%" style="margin: 24px 0; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; padding: 16px;">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #334155;">
                      ✨ <strong>What you unlock upon confirmation:</strong><br />
                      • 12-Year Official PYQ Vault (2015–2026)<br />
                      • Page-exact textbook citations (Laxmikanth, Spectrum, NCERT)<br />
                      • Real-time All-India Ranking & Weak-Area Radar
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Primary Action CTA Button -->
              <table role="presentation" width="100%" style="margin: 28px 0;">
                <tr>
                  <td align="center">
                    <a href="{{ .ConfirmationURL }}" target="_blank" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #ea580c 0%, #f59e0b 50%, #059669 100%); color: #ffffff; font-size: 14px; font-weight: 800; text-decoration: none; border-radius: 12px; box-shadow: 0 4px 14px rgba(234, 88, 12, 0.35); text-transform: uppercase; letter-spacing: 0.5px;">
                      Confirm My Email & Activate Account →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 20px 0 0 0; font-size: 12px; line-height: 1.5; color: #94a3b8; text-align: center;">
                If the button above does not work, copy and paste this link into your browser:<br />
                <a href="{{ .ConfirmationURL }}" style="color: #ea580c; word-break: break-all; font-size: 11px;">{{ .ConfirmationURL }}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 36px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 600; color: #64748b;">
                UPSCSphere • Open-Access Civil Services Preparation Ecosystem
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                If you did not sign up for an account on <a href="https://www.upscsphere.in" style="color: #64748b; text-decoration: underline;">upscsphere.in</a>, please disregard this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 2. Reset Password (Password Recovery)

**Template Tab in Supabase:** `Reset password`  
**Subject Line:** `Reset Your Password — UPSCSphere 🔐`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset Your UPSCSphere Password</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 580px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
          
          <!-- Top Indian Tricolour Gradient Header Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #ff671f 0%, #ffffff 50%, #046a38 100%);"></td>
          </tr>

          <!-- Brand Logo Header -->
          <tr>
            <td style="padding: 32px 36px 20px 36px; text-align: center;">
              <div style="display: inline-block; padding: 10px 16px; border-radius: 12px; background-color: #fff7ed; border: 1px solid #ffedd5;">
                <span style="font-size: 20px; font-weight: 900; letter-spacing: -0.5px; color: #0f172a;">
                  UPSC<span style="color: #ea580c;">Sphere</span>
                </span>
                <span style="display: inline-block; margin-left: 6px; padding: 2px 8px; border-radius: 9999px; background-color: #fee2e2; color: #dc2626; font-size: 10px; font-weight: 700; text-transform: uppercase;">
                  Security
                </span>
              </div>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 10px 36px 30px 36px;">
              <h1 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 800; color: #0f172a; text-align: center; line-height: 1.3;">
                Password Reset Request 🔐
              </h1>
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #475569; text-align: center;">
                We received a request to reset the password for your UPSCSphere account associated with <strong>{{ .Email }}</strong>.
              </p>

              <!-- Primary Action CTA Button -->
              <table role="presentation" width="100%" style="margin: 28px 0;">
                <tr>
                  <td align="center">
                    <a href="{{ .ConfirmationURL }}" target="_blank" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #ea580c 0%, #f59e0b 100%); color: #ffffff; font-size: 14px; font-weight: 800; text-decoration: none; border-radius: 12px; box-shadow: 0 4px 14px rgba(234, 88, 12, 0.35); text-transform: uppercase; letter-spacing: 0.5px;">
                      Reset Password →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Security Notice Box -->
              <table role="presentation" width="100%" style="margin: 20px 0 0 0; background-color: #fef2f2; border-radius: 12px; border: 1px solid #fecaca; padding: 14px;">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #991b1b;">
                      ⚠️ <strong>Security Notice:</strong> This password reset link is valid for 60 minutes. If you did not request a password reset, please ignore this email. Your password will remain unchanged.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin: 20px 0 0 0; font-size: 12px; line-height: 1.5; color: #94a3b8; text-align: center;">
                Direct link:<br />
                <a href="{{ .ConfirmationURL }}" style="color: #ea580c; word-break: break-all; font-size: 11px;">{{ .ConfirmationURL }}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 36px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 600; color: #64748b;">
                UPSCSphere • Official Account Security
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                Visit website: <a href="https://www.upscsphere.in" style="color: #64748b; text-decoration: underline;">https://www.upscsphere.in</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 3. Magic Link (Passwordless One-Click Sign In)

**Template Tab in Supabase:** `Magic link`  
**Subject Line:** `Your One-Click Login Link — UPSCSphere ✨`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your UPSCSphere Login Link</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 580px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
          
          <!-- Top Indian Tricolour Gradient Header Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #ff671f 0%, #ffffff 50%, #046a38 100%);"></td>
          </tr>

          <!-- Brand Logo Header -->
          <tr>
            <td style="padding: 32px 36px 20px 36px; text-align: center;">
              <div style="display: inline-block; padding: 10px 16px; border-radius: 12px; background-color: #fff7ed; border: 1px solid #ffedd5;">
                <span style="font-size: 20px; font-weight: 900; letter-spacing: -0.5px; color: #0f172a;">
                  UPSC<span style="color: #ea580c;">Sphere</span>
                </span>
                <span style="display: inline-block; margin-left: 6px; padding: 2px 8px; border-radius: 9999px; background-color: #dbeafe; color: #1d4ed8; font-size: 10px; font-weight: 700; text-transform: uppercase;">
                  Instant Access
                </span>
              </div>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 10px 36px 30px 36px;">
              <h1 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 800; color: #0f172a; text-align: center; line-height: 1.3;">
                Instant One-Click Login ⚡
              </h1>
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #475569; text-align: center;">
                Click the button below to sign in instantly to your UPSCSphere account without entering a password.
              </p>

              <!-- Primary Action CTA Button -->
              <table role="presentation" width="100%" style="margin: 28px 0;">
                <tr>
                  <td align="center">
                    <a href="{{ .ConfirmationURL }}" target="_blank" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #2563eb 0%, #059669 100%); color: #ffffff; font-size: 14px; font-weight: 800; text-decoration: none; border-radius: 12px; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35); text-transform: uppercase; letter-spacing: 0.5px;">
                      Sign In Instantly to UPSCSphere →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 20px 0 0 0; font-size: 12px; line-height: 1.5; color: #94a3b8; text-align: center;">
                This link is valid for 15 minutes and can only be used once. If you did not request this login link, you can safely ignore this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 36px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 600; color: #64748b;">
                UPSCSphere • Secure Authentication
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                <a href="https://www.upscsphere.in" style="color: #64748b; text-decoration: underline;">www.upscsphere.in</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 4. Reauthentication / Resend Confirmation Email

**Template Tab in Supabase:** `Reauthentication` / `Confirm signup (Resent)`  
**Subject Line:** `Verify Your Account — UPSCSphere ✉️`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your UPSCSphere Email</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 580px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
          
          <!-- Top Indian Tricolour Gradient Header Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #ff671f 0%, #ffffff 50%, #046a38 100%);"></td>
          </tr>

          <!-- Brand Logo Header -->
          <tr>
            <td style="padding: 32px 36px 20px 36px; text-align: center;">
              <div style="display: inline-block; padding: 10px 16px; border-radius: 12px; background-color: #fff7ed; border: 1px solid #ffedd5;">
                <span style="font-size: 20px; font-weight: 900; letter-spacing: -0.5px; color: #0f172a;">
                  UPSC<span style="color: #ea580c;">Sphere</span>
                </span>
                <span style="display: inline-block; margin-left: 6px; padding: 2px 8px; border-radius: 9999px; background-color: #fef3c7; color: #b45309; font-size: 10px; font-weight: 700; text-transform: uppercase;">
                  Verification
                </span>
              </div>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 10px 36px 30px 36px;">
              <h1 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 800; color: #0f172a; text-align: center; line-height: 1.3;">
                Confirm Your Email Address 📬
              </h1>
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #475569; text-align: center;">
                Here is your requested verification link for your UPSCSphere account (<strong>{{ .Email }}</strong>).
              </p>

              <!-- Primary Action CTA Button -->
              <table role="presentation" width="100%" style="margin: 28px 0;">
                <tr>
                  <td align="center">
                    <a href="{{ .ConfirmationURL }}" target="_blank" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #ea580c 0%, #059669 100%); color: #ffffff; font-size: 14px; font-weight: 800; text-decoration: none; border-radius: 12px; box-shadow: 0 4px 14px rgba(234, 88, 12, 0.35); text-transform: uppercase; letter-spacing: 0.5px;">
                      Verify & Activate Account →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 20px 0 0 0; font-size: 12px; line-height: 1.5; color: #94a3b8; text-align: center;">
                After clicking, you will be automatically redirected to your UPSCSphere portal.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 36px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 600; color: #64748b;">
                UPSCSphere • Civil Services Preparation Platform
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                <a href="https://www.upscsphere.in" style="color: #64748b; text-decoration: underline;">www.upscsphere.in</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 5. Change Email Address (Email Change Confirmation)

**Template Tab in Supabase:** `Change email address`  
**Subject Line:** `Confirm Your New Email Address — UPSCSphere 📧`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Confirm Your New Email Address</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 580px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
          
          <!-- Top Indian Tricolour Gradient Header Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #ff671f 0%, #ffffff 50%, #046a38 100%);"></td>
          </tr>

          <!-- Brand Logo Header -->
          <tr>
            <td style="padding: 32px 36px 20px 36px; text-align: center;">
              <div style="display: inline-block; padding: 10px 16px; border-radius: 12px; background-color: #fff7ed; border: 1px solid #ffedd5;">
                <span style="font-size: 20px; font-weight: 900; letter-spacing: -0.5px; color: #0f172a;">
                  UPSC<span style="color: #ea580c;">Sphere</span>
                </span>
              </div>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 10px 36px 30px 36px;">
              <h1 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 800; color: #0f172a; text-align: center; line-height: 1.3;">
                Confirm Email Change 🔄
              </h1>
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #475569; text-align: center;">
                We received a request to change your registered email address on UPSCSphere to <strong>{{ .Email }}</strong>.
              </p>

              <!-- Primary Action CTA Button -->
              <table role="presentation" width="100%" style="margin: 28px 0;">
                <tr>
                  <td align="center">
                    <a href="{{ .ConfirmationURL }}" target="_blank" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #ea580c 0%, #059669 100%); color: #ffffff; font-size: 14px; font-weight: 800; text-decoration: none; border-radius: 12px; box-shadow: 0 4px 14px rgba(234, 88, 12, 0.35); text-transform: uppercase; letter-spacing: 0.5px;">
                      Confirm New Email Address →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 20px 0 0 0; font-size: 12px; line-height: 1.5; color: #94a3b8; text-align: center;">
                If you did not initiate this change, please contact us immediately or reset your password.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 36px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 600; color: #64748b;">
                UPSCSphere • Civil Services Preparation Platform
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                <a href="https://www.upscsphere.in" style="color: #64748b; text-decoration: underline;">www.upscsphere.in</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 6. Password Changed Notification (Security Alert)

**Template Tab / Usage:** Custom Security Alert / Email Template  
**Subject Line:** `Security Alert: Your UPSCSphere Password Was Changed 🛡️`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your UPSCSphere Password Was Changed</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 580px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
          
          <!-- Top Indian Tricolour Gradient Header Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #ff671f 0%, #ffffff 50%, #046a38 100%);"></td>
          </tr>

          <!-- Brand Logo Header -->
          <tr>
            <td style="padding: 32px 36px 20px 36px; text-align: center;">
              <div style="display: inline-block; padding: 10px 16px; border-radius: 12px; background-color: #fff7ed; border: 1px solid #ffedd5;">
                <span style="font-size: 20px; font-weight: 900; letter-spacing: -0.5px; color: #0f172a;">
                  UPSC<span style="color: #ea580c;">Sphere</span>
                </span>
                <span style="display: inline-block; margin-left: 6px; padding: 2px 8px; border-radius: 9999px; background-color: #dcfce7; color: #15803d; font-size: 10px; font-weight: 700; text-transform: uppercase;">
                  Security Alert
                </span>
              </div>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 10px 36px 30px 36px;">
              <h1 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 800; color: #0f172a; text-align: center; line-height: 1.3;">
                Your Password Has Been Updated ✅
              </h1>
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #475569; text-align: center;">
                This is a confirmation that the password for your UPSCSphere account (<strong>{{ .Email }}</strong>) has been successfully changed.
              </p>

              <!-- Activity Details Card -->
              <table role="presentation" width="100%" style="margin: 20px 0; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; padding: 16px;">
                <tr>
                  <td>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="4" style="font-size: 13px; color: #334155;">
                      <tr>
                        <td style="font-weight: 600; width: 120px; color: #64748b;">Event:</td>
                        <td style="font-weight: 700; color: #0f172a;">Password Modified</td>
                      </tr>
                      <tr>
                        <td style="font-weight: 600; color: #64748b;">Account:</td>
                        <td style="font-weight: 700; color: #ea580c;">{{ .Email }}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: 600; color: #64748b;">Status:</td>
                        <td style="font-weight: 700; color: #16a34a;">Active & Protected 🛡️</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Primary Action CTA Button -->
              <table role="presentation" width="100%" style="margin: 28px 0;">
                <tr>
                  <td align="center">
                    <a href="https://www.upscsphere.in/auth" target="_blank" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #ea580c 0%, #059669 100%); color: #ffffff; font-size: 14px; font-weight: 800; text-decoration: none; border-radius: 12px; box-shadow: 0 4px 14px rgba(234, 88, 12, 0.35); text-transform: uppercase; letter-spacing: 0.5px;">
                      Log In to UPSCSphere →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Unauthorized Alert Warning Box -->
              <table role="presentation" width="100%" style="margin: 20px 0 0 0; background-color: #fef2f2; border-radius: 12px; border: 1px solid #fecaca; padding: 14px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; color: #991b1b;">
                      🚨 Did not make this change?
                    </p>
                    <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #7f1d1d;">
                      If you did not initiate this password change, your account may be compromised. Please <a href="https://www.upscsphere.in/auth/forgot-password" style="color: #dc2626; font-weight: 700; text-decoration: underline;">reset your password immediately</a> or contact us directly at <a href="mailto:utkrashtkumar@gmail.com" style="color: #dc2626; font-weight: 700;">utkrashtkumar@gmail.com</a>.
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 36px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 600; color: #64748b;">
                UPSCSphere • Official Account Security
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                <a href="https://www.upscsphere.in" style="color: #64748b; text-decoration: underline;">https://www.upscsphere.in</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```


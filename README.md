# alexa-reminders

> [!WARNING]
> **Deprecated / no longer functional (as of 2026).** This library is kept for
> historical reference only. Please use one of the [modern alternatives](#modern-alternatives) below.

A Node.js library (circa 2017) to create Amazon Echo / Alexa reminders — built
back when there was **no** official reminders API, as a pseudo push-notification
hack ([original write-up](http://theappslab.com/2017/12/08/alexa-push-notifications-via-reminders/)).

## Why it no longer works

It logged in by **scripting the `alexa.amazon.com` sign-in page with a headless
browser** ([Nightmare](https://github.com/segmentio/nightmare)), scraping cookies
+ CSRF, then calling a private `createReminder` endpoint. Every link in that chain
has since broken:

- **Nightmare is abandoned** (Electron-based, no release since ~2018) and won't run
  on modern Node; the `request` dependency is also deprecated.
- **Amazon's sign-in is now bot-protected** — CAPTCHA and (typically mandatory)
  2FA/MFA make headless password login fail.
- **The web app and private endpoints changed** — the old cookie/CSRF +
  `/api/notifications/createReminder` flow no longer matches.

In short: `login()` fails before anything else can happen. The scrape approach
isn't fixable — the better news is the gap it filled has since been closed.

## Modern alternatives

**Official — [Alexa Reminders API](https://developer.amazon.com/en-US/docs/alexa/smapi/alexa-reminders-overview.html)** (the proper API this project asked for, shipped 2018).
Create reminders from an Alexa **skill** via `POST /v1/alerts/reminders` with the
`alexa::alerts:reminders:skill:readwrite` permission. Skill-scoped: the user
enables your skill and grants permission, and your skill manages reminders it
created. ([REST reference](https://developer.amazon.com/en-US/docs/alexa/smapi/alexa-reminders-api-reference.html))

**Unofficial / personal automation — [`alexa-remote2`](https://www.npmjs.com/package/alexa-remote2)** (actively maintained).
Handles modern Amazon auth (proxy login that survives MFA, token refresh) and
supports **reminders, notifications, announcements, and TTS** on your own devices.
It's what Home Assistant's `alexa_media_player` and ioBroker use — the spiritual
successor to this project for "remind/announce on my own Echo from a script."

## License

MIT

# Next.js Intercepting Route Bug Reproduction

Reproduces a bug where intercepting routes stop working after a full-page navigation to the target route in production (`next build` + `next start`).

## The Bug

After visiting `/login` via a full-page navigation (URL bar, reload, `<a href>`), subsequent client-side navigations (`router.push` / `<Link>`) to `/login` show a **full page** instead of the intercepted modal.

`next dev` is NOT affected.

## Reproduction Steps

```bash
npm install
npm run build && npm start
# Open http://localhost:3000
```

1. Click **Login (router.push)** → modal appears ✓
2. Visit `http://localhost:3000/login` directly in the URL bar → full page ✓
3. Click **Other Page** to go back
4. Click **Login (router.push)** again → ❌ full page (modal should appear)

## Root Cause

Static prerendering bakes `couldBeIntercepted: false` into the RSC payload because `setVaryHeader()` hasn't been called yet when `getRSCPayload()` reads the `Vary` header during build. See `app-render.js:965-966`.

## Environment

- Next.js 16.2.7
- React 19.2.3
- Node 24.14.0

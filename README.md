# Next.js Intercepting Route Bug Reproduction

Reproduces a bug where intercepting routes stop working after a full-page navigation to the target route in production (`next build` + `next start`).

https://github.com/cshiraga/next-interception-repro

---

## To Reproduce

1. Clone the repo and run `npm install`
2. Run `npm run build && npm start`
3. Open http://localhost:3000
4. Click "Login (router.push)" → modal appears (interception works)
5. Navigate to http://localhost:3000/login directly via browser URL bar → full page (correct)
6. Click "Other Page" to navigate back to `/`
7. Click "Login (router.push)" again → ❌ **Full page is shown, modal does not appear**

---

## Current vs. Expected behavior

**Current:** After a full-page (non-intercepted) navigation to `/login`, all subsequent client-side navigations to `/login` fail to trigger the interception route, even though the first client-side navigation worked correctly.

**Expected:** A client-side navigation to `/login` should always trigger the interception route when one exists, regardless of whether the user has previously visited `/login` via a full-page navigation.

---

## Environment

- **Next.js:** 16.2.7
- **React:** 19.2.3
- **Node:** 24.14.0
- **OS:** Darwin (arm64)

---

## Affected Areas

- Parallel & Intercepting Routes
- Runtime

## Affected Stages

- `next build` (local)
- `next start` (local)
- Deployed (self-hosted)

`next dev` is NOT affected.

---

## Root Cause

Static prerendering bakes `couldBeIntercepted: false` into the RSC payload because `setVaryHeader()` (which adds `Vary: next-url`) hasn't been called yet when `getRSCPayload()` reads `ctx.res.getHeader('vary')`.

In `app-render.js:965-966`:
```js
const varyHeader = ctx.res.getHeader('vary');
const couldBeIntercepted = !!process.env.__NEXT_DEV_SERVER || typeof varyHeader === 'string' && varyHeader.includes(NEXT_URL);
```

During build-time static prerendering, `ctx.res` doesn't yet have the `Vary: next-url` header (it's set later by `base-server.js:1175`). So `couldBeIntercepted` is always `false` for statically prerendered pages that have interception routes.

This causes the client to learn the route as non-interceptable via `discoverKnownRoute()` in `create-initial-router-state.js:44`. On subsequent client navigations, `optimistic-routes.js:277` sees `couldBeIntercepted: false` and serves a synthetic tree without the `@modal` slot.

**Why `next dev` works:** The dev server always sets `couldBeIntercepted: true` via `!!process.env.__NEXT_DEV_SERVER`.

---

## Additional Symptom

While the login modal is open (URL is `/login` via interception), navigating to another page (e.g., `/other`) via client-side navigation keeps the modal overlay visible instead of dismissing it. The `@modal` slot should render `default.tsx` (null), but the optimistic route cache serves a stale tree with `(.)login` still mounted.

---

## Related Issues

- [#63076](https://github.com/vercel/next.js/issues/63076) — "Intercepting routes feature not working in production"
- [#74895](https://github.com/vercel/next.js/issues/74895) — "Intercepting & Parallel route on vercel is broken"
- [#86035](https://github.com/vercel/next.js/issues/86035) — "Intercepting route modal shows stale background after first open/close in production"

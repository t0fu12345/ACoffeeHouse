# GitHub Pages + React + Vite - Bug Guide & Solutions

**For:** React developers deploying to GitHub Pages with Vite + React Router + Tailwind CSS  
**Updated:** July 2026  
**Language:** Vietnamese + English code examples

---

## Quick Diagnostic Checklist

Before diving into bugs, run this:
```bash
# 1. Test local build
npm run build
npx serve dist

# 2. Check all routes by clicking + reloading page
# 3. Open DevTools: F12 → Console → any errors?
# 4. Clear browser cache: Ctrl+Shift+Delete
# 5. Check Node version matches
node --version
# 6. Check Actions log on GitHub
```

If it works locally with `npx serve dist` but fails on GitHub Pages → it's a **deployment issue**, not code.

---

## Bug #1: Blank Page / 404 on Reload

**Symptoms:**
- ✗ First visit to site works fine
- ✗ Click a link → navigation works
- ✗ Reload page (F5) → **blank page or 404**
- ✗ Direct URL like `yoursite.com/projects` → doesn't work

**Root Cause:**
BrowserRouter sends actual URL to server. GitHub Pages is static (no server). When you reload `/projects`, GitHub looks for file `/projects` → doesn't exist → 404.

**Solution 1: Use HashRouter (Easiest, 100% works)**

```jsx
// App.jsx - BEFORE
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

// App.jsx - AFTER
import { HashRouter } from 'react-router-dom'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  )
}
```

**Result:** URLs become `yoursite.com/#/` instead of `yoursite.com/`. Works 100% on GitHub Pages.

**Pros:**
- ✓ No config needed
- ✓ Works immediately
- ✓ Guaranteed to fix 404 issues

**Cons:**
- ✗ URLs have `#` (less pretty)

---

**Solution 2: Use BrowserRouter + Base Config (More Complex)**

Only if you want clean URLs without `#`.

**Step 1: Add base to `vite.config.js`**
```js
// vite.config.js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // ← CRITICAL: Match your GitHub repo name exactly
})
```

**Step 2: Verify your repo name**
- Go to GitHub → Your repo → Settings
- Repository name at top = your `base` value
- Example: if repo is `portfolio` → `base: '/portfolio/'`

**Step 3: Test locally**
```bash
npm run build
npx serve dist

# Visit: http://localhost:3000/your-repo-name/
# Not: http://localhost:3000/
```

**Step 4: Still not working?**

Check your links in JSX:
```jsx
// ✗ WRONG - hardcoded paths (will break with base)
<Link to="/projects">Projects</Link>

// ✓ CORRECT - React Router auto-handles base
<Link to="/projects">Projects</Link>  // Automatically becomes /repo-name/projects

// ✓ Also OK - explicit base
const { PUBLIC_URL } = process.env
<a href={`${PUBLIC_URL}projects`}>Projects</a>
```

**Pro Tip:** React Router automatically prepends `base` from `vite.config.js` to all `<Link>` and `<Navigate>` components. You don't need to manually add it.

---

## Bug #2: Cache Hell (Most Frustrating)

**Symptoms:**
- ✓ Push code → Actions succeed
- ✓ Visit site → **still see old version**
- ✓ Wait 5 minutes → **still old version**
- ✗ Clear cache → finally works
- ✓ Push new code → **cache again!** 😤

**Root Cause:**
3 layers of caching:
1. **Browser cache** (stores old JS/CSS files)
2. **GitHub Pages CDN cache** (caches your `index.html` for 10 minutes)
3. **NPM local cache** (packages resolve differently)

**Solution: Hard Refresh**

```
Windows/Linux:  Ctrl + Shift + Delete   → Clear cache + reload
Mac:            Cmd + Shift + Delete    → Clear cache + reload

Or:
F12 → Network tab → "Disable cache" checkbox → Keep DevTools open while testing
```

**For GitHub Actions (Prevent stale builds):**

```yaml
# .github/workflows/deploy.yml
- name: Install dependencies
  run: npm ci --no-cache  # ← Force fresh install
```

**Production Fix: Vite Cache Busting (Auto)**

Vite automatically adds hash to filenames:
```
dist/index-abc123.js    # Hash changes on every build
dist/style-def456.css
```

This forces browsers to download new files. But sometimes GitHub's CDN still serves old `index.html`.

```yaml
# Force GitHub Pages to refresh
- name: Purge cache hint
  run: echo "Cache busted at $(date)" >> dist/.cache-version
```

---

## Bug #3: Node Version Mismatch

**Symptoms:**
- ✓ `npm run build` works on your machine
- ✗ GitHub Actions build fails
- ✗ Error: "peer dep missing" or "cannot find module"
- ✗ Works local, fails on Actions (most confusing!)

**Root Cause:**
```
Your machine:     node v18.17.0
GitHub Actions:   node v18 → installs v18.0.0 (different minor!)
```

Different node versions resolve dependencies differently → build succeeds locally, fails on Actions.

**Solution: Lock Node Version**

**Step 1: Check your version**
```bash
node --version  # e.g., v18.17.0
```

**Step 2: Create `.nvmrc`**
```bash
echo "18.17.0" > .nvmrc
git add .nvmrc
git commit -m "Lock Node version"
```

**Step 3: Update `.github/workflows/deploy.yml`**
```yaml
# ✗ WRONG - vague version
- uses: actions/setup-node@v4
  with:
    node-version: '18'

# ✓ CORRECT - exact version
- uses: actions/setup-node@v4
  with:
    node-version: '18.17.0'  # ← Exact, not '18'
    cache: 'npm'
```

**Step 4: Commit `package-lock.json`**
```bash
git add package-lock.json
git commit -m "Lock dependencies"
```

This ensures GitHub Actions installs **exact same versions** as your machine.

**Verify:**
```bash
npm ci  # installs from package-lock.json (not package.json)
```

---

## Bug #4: Vite Config Issues

**Symptom:** CSS doesn't load, assets return 404

**Problem 1: Missing `base` but using BrowserRouter**

```js
// ✗ WRONG
export default defineConfig({
  plugins: [react()],
  // No base specified!
})

// ✓ CORRECT
export default defineConfig({
  plugins: [react()],
  base: '/repo-name/',  // ← Must match your repo
})
```

**Problem 2: `base` but deploying to root**

```js
// ✗ WRONG if deploying to yoursite.com (not subdirectory)
export default defineConfig({
  base: '/repo-name/',
})

// ✓ CORRECT for root deployment
export default defineConfig({
  base: '/',
})
```

**How to know?**
- GitHub Pages on free tier → always subdirectory: `username.github.io/repo-name/` → need `base: '/repo-name/'`
- Custom domain → root: `mysite.com/` → need `base: '/'`

**Problem 3: Tailwind not building**

```js
// ✗ WRONG - missing Tailwind
export default defineConfig({
  plugins: [react()],
})

// ✓ CORRECT - Tailwind auto-detected in postcss.config.js
// Just make sure you have:
// 1. postcss.config.js
// 2. tailwind.config.js
// 3. src/index.css with @tailwind directives
```

Check `postcss.config.js`:
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## Bug #5: GitHub Actions Build Fails

**Symptom:** Push → Actions red X → build error

**Common Errors:**

### Error: "npm ERR! peer dep"
```
Solution: npm install peer dependency manually
npm install package-name
git add package-lock.json
git commit -m "Add peer dependency"
git push
```

### Error: "Cannot find module 'react-router-dom'"
```
Solution: npm install got corrupted
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "Reinstall dependencies"
```

### Error: "Out of memory" or "Build timeout"
```yaml
# Increase Node memory
- name: Install dependencies
  run: npm ci
  env:
    NODE_OPTIONS: --max-old-space-size=4096
```

### Error: "vite: command not found"
```
Solution: vite not installed
npm install vite --save-dev
git add package.json package-lock.json
git commit -m "Install vite"
```

**Debug Actions Locally (Optional):**

Use `act` tool to run GitHub Actions locally:
```bash
npm install -g @act/cli
act push -j build  # Simulates Actions workflow
```

---

## Bug #6: 404 on Specific Routes Only

**Symptom:**
- ✓ Homepage works: `yoursite.com/`
- ✗ Route doesn't work: `yoursite.com/projects` → 404
- ✓ But works with HashRouter: `yoursite.com/#/projects`

**Root Cause:** BrowserRouter + no base config

**Instant Fix:** Switch to HashRouter (see Bug #1 - Solution 1)

**Or:** Proper base config (see Bug #1 - Solution 2)

---

## Bug #7: Styling/CSS Breaks on Deploy

**Symptom:**
- ✓ Dev: `npm run dev` → styling perfect
- ✗ Deploy: styling broken/missing
- ✓ HTML loads, CSS file 404

**Root Cause:** CSS file path broken by incorrect `base`

**Solution 1: Check CSS import in `index.css`**
```css
/* ✗ Don't do this */
@import url('/styles.css');

/* ✓ Just use relative imports or @tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Solution 2: Verify `base` in vite.config**
```js
export default defineConfig({
  plugins: [react()],
  base: '/repo-name/',  // ← Must match repo name exactly
})
```

**Solution 3: Check built files**
```bash
npm run build
ls dist/  # Should see index.html, assets/index-xyz.js, etc.
```

If CSS is in `assets/` but HTML looks for it in root → `base` is wrong.

---

## Bug #8: Env Variables Not Loading

**Symptom:**
- ✓ Dev works: `import.meta.env.VITE_API_URL`
- ✗ Deploy broken: env variable is `undefined`

**Root Cause:** GitHub Actions doesn't know your env vars

**Solution: Use GitHub Secrets**

**Step 1: Add secret to repo**
- GitHub → Settings → Secrets and variables → Actions
- New repository secret: `VITE_API_URL = https://api.example.com`

**Step 2: Update workflow**
```yaml
# .github/workflows/deploy.yml
- name: Build
  run: npm run build
  env:
    VITE_API_URL: ${{ secrets.VITE_API_URL }}
```

**Step 3: Use in code**
```js
// src/api.js
const API_URL = import.meta.env.VITE_API_URL
console.log(API_URL)  // Now defined during build
```

**Important:** Only `VITE_*` prefixed variables are exposed to frontend.

---

## Bug #9: Assets/Images Return 404

**Symptom:**
- ✗ Images in `public/` folder don't display
- ✗ Console shows: `GET /image.png 404`

**Root Cause:** Asset path missing `base`

**Solution 1: Images in `src/`**
```jsx
// ✓ CORRECT - import images
import logo from '../assets/logo.png'

export default function Home() {
  return <img src={logo} alt="logo" />
}
```

**Solution 2: Images in `public/`**
```jsx
// ✗ WRONG - hardcoded path
<img src="/logo.png" />

// ✓ CORRECT - use base
import { basename } from 'path'
<img src={`${import.meta.env.BASE_URL}logo.png`} />

// Or simpler - use relative path
<img src="./logo.png" />  // Relative to public folder
```

**Solution 3: Verify `public/` folder**
```
project/
├── public/
│   ├── logo.png  ← Should be here
│   └── favicon.ico
├── src/
└── vite.config.js
```

---

## Bug #10: Infinite Redirect or CORS Issues

**Symptom:**
- ✗ Page keeps redirecting to itself
- ✗ Fetch fails: "CORS error"

**Root Cause:** API URL or redirect wrong, or API doesn't allow GitHub Pages origin

**Solution 1: Check API endpoint**
```js
// ✗ WRONG - points to localhost (doesn't exist on deploy)
const API = 'http://localhost:3001/api'

// ✓ CORRECT - use environment variable
const API = import.meta.env.VITE_API_URL || 'https://api.example.com'
```

**Solution 2: CORS on backend**
Backend must allow GitHub Pages origin:
```
Allow-Origin: https://username.github.io
// or
Allow-Origin: https://yoursite.com
```

**Solution 3: Use CORS proxy if needed**
```js
const API = 'https://cors-anywhere.herokuapp.com/https://api.example.com'
```

---

## Quick Reference: Most Common Fixes

| Problem | Quick Fix | Time to Fix |
|---------|-----------|------------|
| 404 on reload | Switch to `HashRouter` | 2 min |
| Blank page | Clear cache: `Ctrl+Shift+Del` | 30 sec |
| Build fails | Update Node version in workflow | 5 min |
| CSS broken | Check `base` in `vite.config.js` | 2 min |
| Cache hell | Hard refresh + disable cache in DevTools | 1 min |
| Routes don't work | Test locally with `npx serve dist` | 3 min |
| Assets 404 | Import images instead of hardcoding paths | 5 min |

---

## Preventive Workflow (Avoid 90% of bugs)

```bash
# 1. Before you push, test locally
npm run build
npx serve dist

# 2. Click all links, reload pages
# If 404 → fix locally first!

# 3. Commit and push
git add .
git commit -m "Feature: add projects page"
git push origin main

# 4. Check Actions (wait 2-3 min)
# GitHub → Actions tab → see green checkmark?

# 5. Visit deployed site
# yoursite.com → click around → test routes

# 6. Clear cache if something looks old
Ctrl+Shift+Delete
```

---

## Essential Files Checklist

```
✓ vite.config.js          - has correct base for your deployment
✓ .github/workflows/deploy.yml  - GitHub Actions workflow
✓ .nvmrc                  - locks Node version
✓ package-lock.json       - committed to git
✓ tailwind.config.js      - exists if using Tailwind
✓ postcss.config.js       - exists if using Tailwind
✓ src/index.css           - has @tailwind directives (if using Tailwind)
✓ public/                 - folder exists (can be empty)
```

---

## When to Use Each Solution

**Use HashRouter if:**
- ✓ You want simplest solution
- ✓ You're OK with `#` in URLs
- ✓ You want guaranteed 100% working solution
- ✓ You're deploying to GitHub Pages subdirectory

**Use BrowserRouter + base if:**
- ✓ You want clean URLs without `#`
- ✓ You're deploying to custom domain (root)
- ✓ You have time to debug config
- ✓ You're building production app

**Recommended for Learning:** HashRouter (no config headaches!)

---

## Resources

- Vite Docs: https://vitejs.dev/guide/static-deploy.html
- React Router Docs: https://reactrouter.com/
- GitHub Pages Docs: https://docs.github.com/en/pages
- Tailwind + Vite: https://tailwindcss.com/docs/guides/vite

---

**Last Updated:** July 2026  
**Written for:** t0fu's GitHub Pages + React + Vite setup  
**Best for:** Quick reference when troubleshooting deployment issues

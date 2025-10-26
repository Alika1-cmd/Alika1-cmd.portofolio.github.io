# Student Attendance Management — Web Prototype

**Type:** Prototype (Web form)  
**Goal:** Simple web form to record student attendance into Google Sheets automatically.

# Files
- `index.html` — web form (minimal UI)
- `style.css` — minimal styles
- `script.js` — sends form data to Google Apps Script web app

# How it works
1. Form data is POSTed to a Google Apps Script web app.
2. Apps Script writes the record to a Google Sheet (sheet name: `Attendance`).
3. Dashboard sheet shows charts and summary.

# Setup (quick)
1. Open the Google Sheet → Extensions → Apps Script → paste `Code.gs` code → Deploy as Web App (Anyone, even anonymous).
2. Copy the Deployment URL, replace `APPS_SCRIPT_URL` in `script.js`.
3. Host `index.html`, `style.css`, `script.js` on GitHub Pages or Netlify.

# Hosting suggestion
- GitHub Pages: push files to a repo and enable Pages (branch `main` / `gh-pages`).
- Netlify: drop the folder for a quick static demo.

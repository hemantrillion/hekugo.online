# HeKuGo Website — File Structure

```
hekugo.online/  (your GitHub repo root)
│
├── index.html              ← Main homepage (project grid)
├── andr loop.mp4           ← Mobile background video (already there)
├── reel go.mp4             ← Desktop background video (already there)
├── sound1 bud.mp3          ← Background audio (already there)
│
├── projects/               ← App icons folder
│   └── zeitplan/
│       └── icon.png        ← Zeitplan app icon (1024x1024 recommended)
│
└── Zeitplan/               ← Project page, accessible at hekugo.online/Zeitplan
    ├── index.html          ← Zeitplan project page with download button
    └── zeitplan.apk        ← (optional) put your APK here for direct download
```

## How to add a new project

1. Create a new folder: `ProjectName/`
2. Add `ProjectName/index.html` (copy from `Zeitplan/index.html` and edit)
3. Add icon: `projects/projectname/icon.png`
4. In `index.html`, copy one `<a class="project-card">` block and update:
   - `href="/ProjectName"`
   - `src="projects/projectname/icon.png"`
   - The name and tagline text

That's it — it auto-appears in the grid on the homepage.

## APK hosting

Option A — Host APK directly in the project folder:
- Place `zeitplan.apk` inside `Zeitplan/` folder
- The download button already points to `zeitplan.apk`

Option B — Link to external host (Google Drive, GitHub Releases, etc.):
- Change `href="zeitplan.apk"` to your external URL in `Zeitplan/index.html`

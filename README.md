# Malaika Asghar — React + Tailwind Portfolio

Built with React, Vite, Tailwind CSS and Three.js. Custom CSS supplies the detailed artwork composition and animation effects alongside Tailwind utilities.

## Local development

```sh
npm install
npm run dev
```

Open the localhost URL printed by Vite. Source edits refresh automatically.

## Source files

- `src/App.jsx`: React sections, gallery and Three.js motion
- `src/main.jsx`: React entry point
- `src/index.css`: Tailwind directives and custom styles
- `public/assets/`: paintings, artist portrait and CV
- `tailwind.config.js`: Tailwind theme and source scanning

## Deploy on Vercel

Import the GitHub repository. Select **Vite**, keep Root Directory empty (repository root), Build Command `npm run build`, and Output Directory `dist`. No environment variables are needed. `vercel.json` includes these settings.

`npm run build` generates production assets in `dist`. `npm run preview` serves that production build locally.

The generated decorative studio studies are labeled separately from the original artworks.

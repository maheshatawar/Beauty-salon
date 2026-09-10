# Luma & Co. salon website

Responsive React and Vite website for browsing salon services and requesting an appointment.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Create a GitHub repository and push the contents of this `BeautySaloon` folder to it.
2. Open **Settings > Pages** in the repository.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch. The workflow will build and publish the site automatically.

For a project repository, the site will be available at:
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

The Vite config uses a relative asset base, so the same build works at both a project URL and a custom domain.

## Netlify deployment and bookings

Deploy this project to Netlify using **Add new site > Import an existing project**, select the GitHub repository, and use these settings:

- Build command: `npm run build`
- Publish directory: `dist`

The included `netlify.toml` already contains these settings. Netlify Forms detects the `booking` form during deployment. Submitted bookings are stored in the Netlify dashboard under **Site configuration > Forms**, where they can be reviewed or exported as CSV for Excel.

Netlify stores each booking centrally and provides CSV export from the Forms dashboard.

GitHub Pages remains available for the static version, but Netlify is required for the central form submission storage.

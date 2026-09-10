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

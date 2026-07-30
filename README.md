# Manzi Ya Musana Ivan — Portfolio & Resume

Responsive personal portfolio and resume site built with React, Tailwind CSS, and Framer Motion. Showcases skills, work experience, education, projects, and certifications, with a service-request contact form for prospective clients.

**Live site:** https://responsive-resume-assign-git-54c6f9-manziivan453-9405s-projects.vercel.app/

## Stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [React Icons](https://react-icons.github.io/react-icons/)
- A Vercel serverless function (`api/contact.js`) + [Resend](https://resend.com/) for contact form emails

## Getting Started

```bash
npm install
npm run dev       # start local dev server (frontend only — see note below)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

`npm run dev` runs Vite only, so the contact form's `/api/contact` route won't
respond locally. To exercise the full form (frontend + serverless function),
install the [Vercel CLI](https://vercel.com/docs/cli) and run `vercel dev`
instead, with `RESEND_API_KEY` set in a local `.env` file (see below).

## Configuration

The contact form submits to `api/contact.js`, a Vercel serverless function
that emails submissions via [Resend](https://resend.com/). To enable it:

1. Create a free account at [resend.com](https://resend.com/) and generate an API key.
2. In the Vercel project's **Settings -> Environment Variables**, add `RESEND_API_KEY` with that key.
3. Redeploy. Submissions will arrive at the address hardcoded in `api/contact.js` (`i.manziyamu@alustudent.com` — must match the email your Resend account is registered with unless a custom sending domain is verified).

For local testing with `vercel dev`, copy `.env.example` to `.env` and fill in the key.

## Deployment

Deployed on [Vercel](https://vercel.com/), which builds automatically from the `main` branch. The `dist/` build output is not committed to the repository.

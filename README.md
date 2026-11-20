# Mohammed Shabeer E — Portfolio Website

Personal portfolio for **Mohammed Shabeer E**, Branch Accountant | Cashier | Exchange House Operations (Dubai, UAE).

Built with Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

---

## 1. Add your CV (required before going live)

Put your CV PDF in the `public` folder with **exactly** this name:

```
public/Mohammed-Shabeer-E-CV.pdf
```

Every "Download CV" button on the site points to this file. If the file is missing, the buttons will show a 404 page.

## 2. Run it on your computer (optional)

You need Node.js 18.18 or newer (https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:3000. To test the production build:

```bash
npm run build
npm start
```

## 3. Upload to GitHub

1. Sign in at https://github.com and click **New repository**.
2. Name it, for example `mohammed-shabeer-portfolio`. Leave "Add a README" unticked, then click **Create repository**.
3. In a terminal, inside this project folder:

```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/mohammed-shabeer-portfolio.git
git push -u origin main
```

**No terminal?** On the empty repository page, click **uploading an existing file**. Drag in everything inside this folder (not the folder itself, and not `node_modules` or `.next` if they exist), then click **Commit changes**.

## 4. Deploy on Vercel

1. Go to https://vercel.com and sign up with your GitHub account.
2. Click **Add New… → Project**, find the repository and click **Import**.
3. Vercel detects Next.js automatically. Leave the settings as they are and click **Deploy**.
4. After about a minute your site is live at `https://your-project.vercel.app`.

Each new push to the `main` branch on GitHub redeploys the site automatically.

### Custom domain (optional)
In Vercel, open **Project → Settings → Domains**, add your domain and follow the DNS instructions. Then add an environment variable `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com` (Settings → Environment Variables) and redeploy, so SEO and share links use your domain.

## 5. Contact form

By default, the contact form opens the visitor's email app with the message already filled in, addressed to shabeermohd68@gmail.com.

To have messages delivered straight to the inbox instead:

1. Get a free access key at https://web3forms.com, using shabeermohd68@gmail.com.
2. In Vercel, add the environment variable `NEXT_PUBLIC_WEB3FORMS_KEY` with that key.
3. Redeploy (Deployments → ⋯ → Redeploy).

## 6. Editing content

All text lives in **`src/data/profile.ts`**: contact details, experience, skills, software, education, certifications and languages. Edit it there and the whole site updates.

- Photo: replace `public/images/mohammed-shabeer-e.jpg` with a square image, keeping the same name.
- Share image (shown when the link is posted on WhatsApp or LinkedIn): `public/og-image.jpg`, 1200 × 630.

## Project structure

```
public/
  images/mohammed-shabeer-e.jpg   Profile photo
  og-image.jpg                    Social share image
  Mohammed-Shabeer-E-CV.pdf       ← add your CV here
src/
  app/          layout (SEO, fonts), page, icon, robots, sitemap
  components/   Hero, About, Experience, Achievements, Competencies,
                Technology, Education, Contact, Navbar, Footer, Loader
  data/         profile.ts — all site content
```

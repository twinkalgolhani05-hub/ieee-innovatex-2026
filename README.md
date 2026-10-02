# IEEE InnovateX 2026 — Official Event Website

> **Recruitment Drive 2026 — IEEE IAS & RAS SBC • MITS Gwalior**  
> **Domain 03: TECHNICAL | Task 1: Event Website**

---

## 📌 Project Overview
A responsive, single-page event website designed and developed for **IEEE InnovateX 2026**, a national flagship symposium on Autonomous Robotics, Industrial Automation, and Sustainable Intelligence hosted by **IEEE Industry Applications Society (IAS)** & **IEEE Robotics and Automation Society (RAS)** Student Branch Chapters at **Madhav Institute of Technology & Science (MITS), Gwalior**.

---

## ✨ Features & Requirements Fulfilled

1. **Official Society Logos**:
   - Header navigation cluster includes official logos for **IEEE**, **IEEE IAS SBC**, and **IEEE RAS SBC**, loaded locally with fallback CDN support.
2. **Hero Section**:
   - Compelling title, metadata badges (Dates, Venue at MITS Gwalior Colloquium Hall, Capacity).
   - Live dynamic **Countdown Timer** ticking down to October 24, 2026.
   - High-visibility **Register Now** call-to-action button.
3. **Event Schedule (4 Sessions)**:
   - Modern timeline layout with category badges, time tags, speaker references, and venue locations.
   - Includes opening keynote, RoboCode IoT sprint, industrial keynote, and valedictory awards.
4. **Keynote Speakers (2 Speaker Cards)**:
   - High-fidelity keynote cards featuring **Dr. Aris Thorne** (Autonomous Robotics & Swarm AI) and **Dr. Elena Vance** (Smart Grids & Industrial Power).
   - Includes topic tags, designations, credentials, and social links.
5. **Footer with Provided Image Asset**:
   - Integrates the exact official **footer image** from the task specifications.
   - Includes quick navigation links, IEEE branch details, address, and official links.
6. **Interactive Registration System**:
   - Client-side validated modal form (Full Name, Email, College, Branch, Track, IEEE ID).
   - Automatic generation of a **Digital Attendee Ticket** (`INX-2026-XXXX`) with verified badge and `localStorage` persistence.
7. **Responsive & Modern UI**:
   - Mobile-first CSS media queries supporting phones (375px/414px), tablets (768px), and high-res desktops.
   - Accessible navigation drawer on mobile viewports.

---

## 🚀 Running Locally

You can run this project with any local HTTP server:

### Option A: Using Node.js (Built-in)
```bash
npx serve .
# or
node server.js
```

### Option B: Using Python
```bash
python -m http.server 3000
```

Open `http://localhost:3000` in your web browser.

---

## 🌐 Deploying to GitHub & Live Hosting

### 1. Push to GitHub
```bash
git add .
git commit -m "feat: complete IEEE InnovateX 2026 event website"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

### 2. Live Deployment

- **GitHub Pages**:
  1. In your GitHub repository, navigate to **Settings** > **Pages**.
  2. Under **Branch**, select `main` and root `/` folder, then click **Save**.
  3. Your site will be live at `https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/`.

- **Vercel**:
  1. Visit [vercel.com](https://vercel.com) and import your GitHub repository.
  2. Click **Deploy**. Vercel will instantly publish the single-page website.

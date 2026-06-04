# 🌟 Spica Suite Consult — Full-Stack Website

> *... Creating Unforgettable and Magical Moments*

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, React Router v6, Axios, Framer Motion, React Icons |
| Backend | Node.js, Express.js, Nodemailer |
| Styling | Custom CSS (no UI library) — clean, vibrant, modern |

---

## 📁 Project Structure

```
spica-suite/
├── frontend/               # React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js / Navbar.css
│   │   │   └── Footer.js / Footer.css
│   │   ├── pages/
│   │   │   ├── Home.js / Home.css
│   │   │   ├── Services.js / Services.css
│   │   │   ├── About.js / About.css
│   │   │   └── Contact.js / Contact.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
└── backend/                # Express API
    ├── routes/
    │   ├── contact.js      # POST /api/contact
    │   └── services.js     # GET  /api/services
    ├── controllers/
    │   └── contactController.js
    ├── server.js
    ├── .env.example
    └── package.json
```

---

## 🚀 Getting Started

### 1. Backend Setup

```bash
cd backend
npm install

# Copy and configure environment variables
cp .env.example .env
# Edit .env with your Gmail credentials
```

**Configure your `.env`:**
```env
PORT=5000
EMAIL_USER=spicasuiteconsult@gmail.com
EMAIL_PASS=your_gmail_app_password     # Gmail App Password (not your main password)
ALLOWED_ORIGINS=http://localhost:3000
```

> **Gmail App Password**: Go to Google Account → Security → 2-Step Verification → App Passwords → Generate one for "Mail"

**Start the backend:**
```bash
npm run dev    # development (with nodemon)
npm start      # production
```

API runs on: `http://localhost:5000`

---

### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

App runs on: `http://localhost:3000`

The frontend proxies API calls to `http://localhost:5000` automatically (configured in `package.json`).

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/services` | List all services |
| POST | `/api/contact` | Submit contact form |

### POST `/api/contact` Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+233 ...",
  "service": "Event Planning",
  "message": "I'd like to plan a wedding..."
}
```

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero, Stats, Services Grid, CTA |
| `/services` | Services — Detailed breakdown of all 6 services |
| `/about` | About — Story, values, company info |
| `/contact` | Contact — Form with email submission |

---

## 🎨 Design System

- **Primary color:** `#1a3fa8` (Spica Blue)
- **Navy:** `#0d1b4b`
- **Accent:** `#f59e0b` (Gold)
- **Fonts:** Syne (headings) + Inter (body)
- **Style:** Modern, vibrant, clean — no UI frameworks

---

## 🚢 Deployment

### Frontend (Netlify / Vercel)
```bash
cd frontend
npm run build
# Deploy the `build/` folder
```
Set environment variable: `REACT_APP_API_URL=https://your-backend-url.com`

### Backend (Render / Railway / VPS)
```bash
cd backend
npm start
```
Set all `.env` variables in your hosting dashboard.

---

## 📞 Contact Info (from flyer)
- **Email:** spicasuiteconsult@gmail.com
- **Phone:** +233 (0) 553386282 | +233 (0) 542172880

# Easy Data Solutions Website — Design System

## Concept & Target User

**Company:** Easy Data Solutions Co., Ltd. (泰国易数据解决方案有限公司 / บริษัท อีซี่ ดาต้า โซลูชั่น จำกัด)
**Founded:** 2024
**HQ:** Thailand (EEC region)
**Roots:** Suzhou, China
**Services:** IT infrastructure, hardware procurement, server & virtualization, network security, MES integration for manufacturing
**Primary Clients:** BOI-approved factories in Chonburi, Rayong, Chachoengsao (EEC)
**Key Reference:** Chicony Power Technology (THB 4.35M project, Oracle/VMware/Windows Server)
**Languages:** English, Chinese (Simplified), Thai

**Target User:**
- Factory IT managers at BOI-approved manufacturing plants (200+ employees)
- Procurement directors at Chinese, Japanese, and American manufacturers expanding in Thailand
- EEC industrial estate managers seeking tenant IT partners
- BOI One-Stop Service officers referring local IT providers

**User Goal:** Find a trustworthy, bilingual IT infrastructure partner who understands BOI manufacturing needs in the EEC.

**User Pain Points:**
- IT infrastructure is an afterthought in factory construction (planned too late)
- Language barriers with Thai IT vendors
- Unclear whether IT spend qualifies for BOI incentives
- Need local support, not just hardware delivery

---

## Page List & Routes

| Route (EN) | Route (ZH) | Route (TH) | Purpose | SEO Target |
|-----------|-----------|-----------|---------|------------|
| /en/ | /zh/ | /th/ | Home — hero, overview, EEC map, client proof, CTA | "IT solutions EEC Thailand" |
| /en/about | /zh/about | /th/about | Company story, team, credentials | "Easy Data Solutions Thailand" |
| /en/services | /zh/services | /th/services | 4 service cards with scope & timeline | "IT infrastructure services Thailand" |
| /en/eec-it-solutions | /zh/eec-it-solutions | /th/eec-it-solutions | Province landing (Chonburi, Rayong, Chachoengsao) | "IT infrastructure Chonburi Rayong" |
| /en/boi-incentives | /zh/boi-incentives | /th/boi-incentives | BOI IT qualification, tax incentives, FastPass | "BOI IT infrastructure Thailand" |
| /en/case-studies | /zh/case-studies | /th/case-studies | Chicony, Merry, 2 placeholders | "Oracle VMware Thailand manufacturing" |
| /en/blog | /zh/blog | /th/blog | Post grid, categories | "EEC manufacturing IT news" |
| /en/contact | /zh/contact | /th/contact | Form, WeChat QR, email, phone, map | "IT infrastructure partner EEC" |

**Shared Components:** Header (with language switcher + mobile hamburger), Footer (links, contact, WeChat QR), SEO Helmet wrapper, Section divider.

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | #1a237e | Dark navy — headers, primary buttons, footer bg, headings |
| `--color-accent` | #2962ff | Accent blue — links, hover states, CTAs, active nav, highlights |
| `--color-bg` | #ffffff | White — page backgrounds |
| `--color-surface` | #f5f7fa | Light gray — card backgrounds, alternating sections |
| `--color-text` | #1a1a2e | Near-black — body text |
| `--color-text-muted` | #5a5a6e | Muted gray — secondary text, captions |
| `--color-border` | #e2e8f0 | Light border — cards, dividers |
| `--color-success` | #059669 | Green — checkmarks, success states |
| `--color-warning` | #d97706 | Orange — alerts, warnings |

---

## Typography

| Role | Font | Weight | Size (Desktop) | Size (Mobile) | Line Height |
|------|------|--------|----------------|---------------|-------------|
| H1 (Hero) | Inter | 700 | 48px | 32px | 1.1 |
| H2 (Section) | Inter | 700 | 36px | 28px | 1.2 |
| H3 (Card Title) | Inter | 600 | 24px | 20px | 1.3 |
| H4 (Subsection) | Inter | 600 | 18px | 16px | 1.4 |
| Body | Inter | 400 | 16px | 15px | 1.6 |
| Caption | Inter | 400 | 14px | 13px | 1.5 |
| Button | Inter | 600 | 14px | 14px | 1.0 |
| Nav | Inter | 500 | 15px | 15px | 1.0 |

**Chinese fallback:** `font-family: 'Inter', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;`
**Thai fallback:** `font-family: 'Inter', 'Sarabun', 'Noto Sans Thai', sans-serif;`

---

## Layout Rules

- **Max content width:** 1200px, centered with `mx-auto px-4 sm:px-6 lg:px-8`
- **Section vertical padding:** 80px desktop, 48px mobile
- **Grid:** 12-column conceptual, implemented with Tailwind flexbox + grid
- **Card grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` for services, `grid-cols-1 md:grid-cols-3` for blog
- **Breakpoints:** `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- **Mobile-first:** All styles mobile-first, enhance at `md:` and `lg:`

---

## Shared Components

### Header
- Sticky top, `bg-white/95 backdrop-blur-sm shadow-sm z-50`
- Logo left: "Easy Data Solutions" wordmark + small tagline "IT Infrastructure | EEC Thailand"
- Nav center (desktop): Home, About, Services, EEC IT, BOI, Case Studies, Blog, Contact
- Language switcher right (desktop): EN | 中文 | ไทย (pill buttons)
- Mobile: hamburger menu, slide-out drawer with nav + language switcher
- Active nav: `text-[#2962ff] border-b-2 border-[#2962ff]`
- Hover: `text-[#2962ff] transition-colors duration-200`

### Footer
- `bg-[#1a237e] text-white`
- 4 columns: Company (logo, tagline, address), Quick Links (all pages), Services (4 service links), Contact (email, phone, WeChat QR placeholder, social icons)
- Bottom bar: copyright + "Made in Thailand for EEC Manufacturers"
- Language switcher repeated at bottom

### SEO Helmet Wrapper
- React component wrapping each page
- Sets `<title>`, `<meta name="description">`, `<meta name="keywords">`
- Injects `<link rel="alternate" hreflang="..." href="...">` for all 3 languages
- Injects Schema JSON-LD based on page type

### Section Divider
- `w-20 h-1 bg-[#2962ff] mx-auto mb-8`
- Used below every H2 section heading

---

## Interaction Language

- **Hover:** `transition-all duration-200 ease-out`
- **Buttons:** `hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0`
- **Cards:** `hover:shadow-xl hover:border-[#2962ff]/30 transition-all duration-300`
- **Links:** `hover:text-[#2962ff] underline-offset-4 hover:underline`
- **Nav scroll:** Header gains `shadow-md` after scrolling 50px
- **Page entrance:** Sections fade in with `opacity-0 translate-y-4` → `opacity-100 translate-y-0` on scroll (use IntersectionObserver)
- **Mobile menu:** Slide in from right, `transition-transform duration-300 ease-out`

---

## Dependencies

| Package | Purpose |
|---------|---------|
| react | UI framework |
| react-dom | DOM renderer |
| react-router-dom | Multi-page routing |
| react-i18next | Internationalization |
| i18next | i18n core |
| i18next-browser-languagedetector | Auto-detect user language |
| tailwindcss | Utility CSS |
| @tailwindcss/vite | Tailwind Vite plugin |
| typescript | Type safety |
| vite | Build tool |
| @vitejs/plugin-react | React Vite plugin |
| lucide-react | Icons (server, network, shield, cpu, factory, etc.) |
| interweave | Safe HTML rendering for blog content |

---

## Asset Manifest

| Filename | Type | Page | Description |
|----------|------|------|-------------|
| `eec-map.svg` | SVG | Home, EEC page | Simplified EEC map showing Chonburi, Rayong, Chachoengsao |
| `server-room.jpg` | Image | Home, Services | Server room / data center (sourced from unsplash or similar) |
| `factory-it.jpg` | Image | Home, About | Factory IT installation scene |
| `chicony-logo.png` | Image | Home, Case Studies | Chicony Power Technology logo (placeholder) |
| `wechat-qr.png` | Image | Contact | WeChat QR code placeholder |
| `team-photo.jpg` | Image | About | Team photo placeholder |
| `blog-1.jpg` | Image | Blog | Data center boom article thumbnail |
| `blog-2.jpg` | Image | Blog | FastPass article thumbnail |
| `blog-3.jpg` | Image | Blog | Chonburi IT checklist thumbnail |
| `blog-4.jpg` | Image | Blog | Oracle case study thumbnail |
| `blog-5.jpg` | Image | Blog | Robot cluster article thumbnail |
| `blog-6.jpg` | Image | Blog | EV supply chain thumbnail |

**Fallback:** All images use a gradient placeholder (`bg-gradient-to-br from-[#1a237e] to-[#2962ff]`) with a centered icon if the image fails to load.

---

## Schema Markup Plan

| Page | Schema Type | Key Properties |
|------|-------------|---------------|
| All | Organization | name, url, logo, address (EEC Thailand), sameAs (LinkedIn) |
| All | LocalBusiness | name, address (geo coordinates for EEC), telephone, email, openingHours |
| Home | Service | provider = Easy Data, areaServed = EEC, serviceType = IT Infrastructure |
| Services | Service | 4 service items with name, description, provider |
| BOI | FAQPage | 5-8 FAQs about BOI IT incentives |
| Case Studies | ItemList | 2+ case studies as list items |
| Contact | ContactPage | contactPoint (email, phone, WeChat) |

---

## Performance Targets

- Mobile: <3s LCP
- Desktop: <2s LCP
- Images: lazy loaded, WebP format where possible, max 1200px width
- CSS: Tailwind purge, minimal custom CSS
- JS: Code-split by route (React.lazy + Suspense)
- No heavy animation libraries; use CSS transitions + IntersectionObserver
- Font: Inter from Google Fonts with `font-display: swap`

# Launch & Close Website Overview

## 🎨 Design System

### Color Palette
- **Primary (Electric Blue)**: #0066FF - Used for CTAs, links, and key interactive elements
- **Accent (Muted Gold)**: #C9A961 - Used for secondary highlights and accents
- **Background**: Clean white (#FFFFFF) with light grey (#F5F7FA) sections
- **Glass Effects**: Backdrop blur with translucent overlays for premium feel

### Design Features
- **Glass Card Components**: Frosted glass effect with backdrop blur
- **Smooth Animations**: 0.3s transitions with cubic-bezier easing
- **Hover Effects**: Lift and glow effects on interactive elements
- **Gradient Backgrounds**: Subtle gradients for hero sections
- **Shadow System**: Layered shadows for depth and dimension

## 📄 Pages

### 1. Home Page (`/`)
**Sections:**
- Hero: Main value proposition with dual CTAs
- Pain Points: 3-column grid showing common founder challenges
- Solution Snapshot: 4 service pillars overview
- Process: 3-phase timeline (Audit → Build → Optimize)
- Social Proof: Metrics, testimonials, and trust indicators
- Final CTA: Strategy call booking prompt

### 2. Services Page (`/services`)
**Content:**
- Page header with value proposition
- 4 Detailed Service Pillars:
  1. Consulting & Strategy (Strategic Foundations)
  2. Sales & Marketing Execution (Revenue Generation)
  3. Account Management & CS (Retention & Growth)
  4. Corporate Training (Team Empowerment)
- Each pillar includes:
  - Detailed description
  - Key activities and deliverables
  - Ideal customer profile
- Comparison table: Traditional vs Launch & Close
- CTA to engagement models

### 3. How We Work Page (`/how-we-work`)
**Content:**
- 3 Engagement Models:
  1. **B.O.T. Model** (Build-Operate-Transfer)
     - 3 phases over 9-12 months
     - Full IP transfer included
  2. **Fractional/Part-Time Contract**
     - Flexible hours (10-40/week)
     - Month-to-month commitment
  3. **Full-Time Placement**
     - Embedded execution
     - 3-12 month placements
- Comparison table across all models
- Success stories for each model
- CTA to strategy call

### 4. About Page (`/about`)
**Content:**
- Company story and mission
- Team highlights (collective achievements)
- Core values (4 pillars)
- Operator backgrounds and expertise
- How we're different (comparison)
- Industries and stages we serve
- Recognition and partnerships
- CTA to contact

### 5. Contact Page (`/contact`)
**Content:**
- Booking widget section (Calendly placeholder)
- Contact form with validation
- Call timeline (what to expect)
- Alternative contact methods (email, LinkedIn)
- FAQ section (6 common questions)
- Trust badges
- Final CTA

## 🧩 Components

### Common Components
- **Header**: Fixed navigation with scroll effect, mobile hamburger menu
- **Footer**: 3-column layout with quick links, contact info, and social
- **GlassCard**: Reusable card component with glass effect and hover states

### UI Components (shadcn/ui)
All standard shadcn/ui components are available:
- Button, Input, Textarea, Label
- Select, Dialog, Card
- Toast notifications
- And more...

## 🎯 Key Features

### Navigation
- Fixed header with transparent-to-solid transition on scroll
- Responsive mobile menu
- Active page highlighting
- Prominent "Book a Strategy Call" CTA in header

### Interactions
- Smooth hover effects on all cards and buttons
- Glow animations on primary CTAs
- Form validation with toast notifications
- Responsive grid layouts

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile
- Adaptive layouts for all screen sizes

## 🚀 Technical Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Linting**: Biome

## 📝 Content Strategy

### Tone & Voice
- Professional yet approachable
- Results-focused and action-oriented
- Transparent about process and pricing
- Emphasizes execution over theory

### Key Messages
1. "Senior Revenue Leadership. Without the Headcount Risk."
2. "We Don't Just Advise. We Execute."
3. "Operators, Not Just Consultants."
4. Focus on accountability and results

### Call-to-Actions
- Primary: "Book a Strategy Call"
- Secondary: "View Engagement Models", "Talk to an Expert"
- All CTAs lead to contact page or relevant service pages

## 🔧 Customization Guide

### Updating Colors
Edit `/src/index.css` variables:
- `--primary`: Main brand color
- `--accent`: Secondary accent color
- `--gradient-primary`: Primary gradient

### Adding New Pages
1. Create page component in `/src/pages/`
2. Add route to `/src/routes.tsx`
3. Update navigation in Header if needed

### Modifying Content
- All content is in the page components
- No external CMS - direct code editing
- Search for specific text to find and update

### Integrating Calendly
Replace the placeholder in `/src/pages/Contact.tsx` with actual Calendly embed code.

## 📊 Performance Considerations

- All images optimized and lazy-loaded
- Minimal JavaScript bundle
- CSS-based animations (GPU accelerated)
- No external dependencies for core functionality
- Fast page transitions with React Router

## 🎓 Best Practices Implemented

✅ Semantic HTML structure
✅ Accessible navigation and forms
✅ Responsive design patterns
✅ SEO-friendly page structure
✅ Performance-optimized animations
✅ Type-safe TypeScript code
✅ Component reusability
✅ Consistent design system
✅ Clean code organization

## 📞 Contact Integration

### Email
- Configured: hello@launchandclose.com
- Used in footer and contact page

### Social Media
- LinkedIn link in footer
- Can be updated to actual profile URL

### Booking
- Calendly placeholder ready for integration
- Contact form with validation
- Toast notifications for user feedback

---

**Note**: This is a static website with no backend. For production use, you may want to integrate:
- Actual Calendly booking widget
- Form submission handling (e.g., Formspree, Netlify Forms)
- Analytics tracking (Google Analytics, Plausible)
- Cookie consent banner

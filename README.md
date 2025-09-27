# Salim Aissaoui - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a clean design with dark/light theme support, smooth animations, and optimized performance.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Beautiful UI**: shadcn/ui components with consistent design system
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Dark/Light Theme**: Toggle with system preference detection and localStorage persistence
- **Responsive Design**: Mobile-first approach with optimal viewing on all devices
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, and structured data
- **Performance**: Image optimization, lazy loading, and efficient bundle splitting
- **Accessibility**: WCAG compliant with proper focus management and semantic HTML
- **Project Filtering**: Tag-based filtering with URL state persistence

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── about/
│   ├── contact/
│   ├── experience/
│   ├── projects/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui base components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── section-header.tsx
│   ├── skill-badge.tsx
│   ├── project-card.tsx
│   ├── timeline-item.tsx
│   └── tag-filter.tsx
├── data/                  # Content and data files
│   ├── skills.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── links.ts
├── lib/
│   └── utils.ts
└── public/               # Static assets
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Development**: ESLint, Prettier, TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/salimaissaoui/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

```bash
npm run build
npm run start
```

## 🌍 Deploy to Vercel

The easiest way to deploy this portfolio is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m \"Initial commit\"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click \"New Project\"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings
   - Click \"Deploy\"

3. **Custom Domain (Optional)**
   - In your Vercel project dashboard, go to \"Settings\" → \"Domains\"
   - Add your custom domain and follow the DNS configuration instructions

### Environment Variables

For production deployment, you may want to add environment variables:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

## 📝 Customization

### Content Updates

1. **Personal Information**: Update `data/links.ts` with your contact details and social links
2. **Skills**: Modify `data/skills.ts` to reflect your technical skills
3. **Projects**: Add your projects to `data/projects.ts`
4. **Experience**: Update your work experience in `data/experience.ts`

### Styling

- **Colors**: Modify the color palette in `tailwind.config.ts`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Components**: Customize component styles in the `components/` directory

### Adding New Features

1. **New Pages**: Create new route files in the `app/` directory
2. **Components**: Add reusable components to `components/`
3. **Data**: Extend data structures in the `data/` directory

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 📱 Pages Overview

- **Home (`/`)**: Hero section, skills overview, featured projects
- **Projects (`/projects`)**: Complete project gallery with filtering
- **Experience (`/experience`)**: Professional timeline
- **About (`/about`)**: Personal background and interests
- **Contact (`/contact`)**: Contact form and information

## 🎨 Design Features

- **Responsive Grid**: 12-column layout system
- **Typography**: Consistent heading and text styles
- **Color System**: Dark/light theme with CSS custom properties
- **Animations**: Smooth page transitions and hover effects
- **Accessibility**: Keyboard navigation and screen reader support

## 📈 Performance

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Bundle Analysis**: Tree-shaking and code splitting
- **SEO**: Complete meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon set

---

Built with ❤️ by [Salim Aissaoui](https://github.com/salimaissaoui)
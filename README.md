# Semiconductor Workshop 2025

A modern, responsive website for the Semiconductor Design and Development Workshop hosted by AVPTI, Rajkot. Built with Next.js, React, and Tailwind CSS.

## 🚀 Live Demo

**[View Live Site](https://vercel.com/jdthakrar05-gmailcoms-projects/v0-semiconductor-workshop-ze59wubtbf0)**

## 📋 About the Workshop

The Semiconductor Design and Development Workshop is a 3-day intensive program scheduled for **January 27-29, 2025** at GISC, AVPTI, Rajkot. This workshop brings together industry experts, distinguished guests, and students to explore the latest trends and technologies in semiconductor design and development.

### Workshop Highlights
- **Duration**: 3 Days (January 27-29, 2025)
- **Venue**: GISC, AVPTI, Rajkot
- **Participants**: Limited to 70 students
- **Topics**: Semiconductor Design, Fabrication, ATMP, DFT, Physical Design, and Future Technologies

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── WorkshopDetails.tsx
│   │   ├── Timeline.tsx
│   │   ├── FAQSection.tsx
│   │   ├── SponsorSection.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── guests/             # Guests page
│   ├── team/               # Team page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # shadcn/ui components
├── lib/                    # Utility functions
├── public/                 # Static assets
└── ...
\`\`\`

## ✨ Features

### 🎨 Modern Design
- Responsive design that works on all devices
- Dark theme with blue accent colors
- Smooth animations and transitions
- Circuit-inspired background patterns

### 📱 Pages
- **Home**: Hero section, workshop details, timeline, FAQ, and program highlights
- **Guests**: Showcase of distinguished guests and industry experts
- **Team**: Display of patrons, team members, and volunteers

### 🎭 Interactive Elements
- Animated components with Framer Motion
- Hover effects and smooth transitions
- Collapsible FAQ section
- Responsive navigation

### 🖼️ Image Integration
- Optimized image loading with Next.js Image component
- Support for various image formats
- Responsive image sizing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/semiconductor-workshop.git
   cd semiconductor-workshop
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎯 Key Components

### Header
- Fixed navigation with smooth animations
- Responsive mobile menu
- Links to all major sections

### Hero Section
- Gradient text effects
- Call-to-action button
- Animated background elements

### Timeline
- Interactive workshop schedule
- Day-wise event breakdown
- Animated timeline visualization

### Team Showcase
- Three categories: Patrons, Team, Volunteers
- Responsive card layouts
- Hover effects and image optimization

## 🎨 Customization

### Colors
The project uses a custom color scheme defined in `tailwind.config.ts`:
- Primary: Gray-900 background
- Accent: Blue-400 for highlights
- Text: White and gray variants

### Animations
Framer Motion is used for:
- Page transitions
- Component entrance animations
- Hover effects
- Timeline animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Adding New Components
1. Create component in `app/components/`
2. Export from the component file
3. Import and use in pages

### Styling Guidelines
- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing and typography

## 📞 Contact Information

- **Email**: dicavpti2025@gmail.com
- **Organization**: Design Innovation Center, AVPTI, Rajkot

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **AVPTI, Rajkot** for hosting the workshop
- **Industry Experts** for their valuable participation
- **Students and Volunteers** for their dedication
- **v0.dev** for the development platform

---

**Built with ❤️ for the Semiconductor Community**

*Automatically synced with [v0.app](https://v0.app) deployments*

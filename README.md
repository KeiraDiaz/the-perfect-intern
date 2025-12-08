# The Perfect Intern - Portfolio Website

A passion project in hopes of getting into my favorite startup

## 🚀 Live Portfolio Website

A modern, responsive portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- 🎨 **Modern Design**: Clean and professional layout with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance**: Built with Next.js for optimal loading speed
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML
- 🧭 **Smooth Navigation**: Fixed navbar with smooth scrolling between sections
- 📋 **Sections Included**:
  - Hero/Landing section
  - About Me
  - Featured Projects
  - Skills & Technologies
  - Contact Form
  - Social Media Links
  - Footer

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: ESLint

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KeiraDiaz/the-perfect-intern.git
cd the-perfect-intern
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: Edit the content in the component files:
   - `components/Hero.tsx` - Update your name and tagline
   - `components/About.tsx` - Add your personal story and background
   - `components/Projects.tsx` - Replace with your own projects
   - `components/Skills.tsx` - Update with your technical skills
   - `components/Contact.tsx` - Add your social media links

2. **Update Metadata**: Edit `app/layout.tsx` to change the page title and description

3. **Customize Colors**: Modify `tailwind.config.js` and `app/globals.css` for your color scheme

4. **Add Your Projects**: Replace the placeholder projects in `components/Projects.tsx` with your actual work

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero/landing section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## 🚀 Deployment

This Next.js app can be deployed to various platforms:

- **Vercel** (Recommended): [Deploy with Vercel](https://vercel.com/new)
- **Netlify**: [Deploy with Netlify](https://www.netlify.com/)
- **AWS**, **Google Cloud**, or any Node.js hosting service

## 📄 License

This project is open source and available for personal use.

## 💙 About This Project

This portfolio was created as a passion project to showcase skills and dedication in hopes of joining a favorite startup. It demonstrates proficiency in modern web development technologies and best practices.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

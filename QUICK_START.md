# 🚀 Quick Start Guide

Get your interactive animated resume up and running in minutes!

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## Customize Your Data

Edit `src/data/resumeData.js` to add your personal information:

```javascript
export const resumeData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    // ... your details
  },
  // ... customize all sections
};
```

## Key Sections

### 1. Personal Info
- Name, title, location
- Contact information
- Social media links
- Professional summary

### 2. Skills
- Technical skills with proficiency levels
- Categories (Frontend, Backend, etc.)
- Animated progress bars

### 3. Experience
- Work history
- Job titles and companies
- Achievements and responsibilities
- Technology stack

### 4. Projects
- Portfolio projects
- Descriptions and images
- Live links and GitHub
- Featured projects

### 5. Education
- Academic background
- Certifications
- Awards and achievements

### 6. Contact
- Contact form
- Direct contact info
- Language proficiency

## Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

Deploy the `dist/` folder to your hosting platform.

## Deploy

### Vercel
1. Push to GitHub
2. Import project on Vercel
3. Deploy automatically

### Netlify
1. Drag `dist/` folder to Netlify Drop
2. Or connect GitHub repo

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"
```

## Tips

- Add your own images to projects
- Customize colors in CSS variables
- Adjust animation speeds in components
- Test on mobile devices
- Use real data for best results

## Need Help?

- Check README.md for details
- See FEATURES.md for capabilities
- Review component code for customization
- Test in development mode first

Happy coding! 🎉



# 🌟 Cancer Awareness & Support Platform

A modern, responsive web application dedicated to cancer awareness, support, and hope. Built with React and Vite for optimal performance and user experience.

## ✨ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📋 Features

✅ Beautiful hero banner with professional gradient overlay  
✅ Daily inspiration quotes with auto-refresh (20 seconds)  
✅ Copy-to-clipboard quote functionality  
✅ Professional contact form  
✅ Smooth animations and transitions  
✅ Glass-morphism card design  
✅ Fully responsive (mobile, tablet, desktop)  
✅ High performance with Vite  
✅ Modern color scheme (purple gradient theme)  
✅ Accessibility-focused design  

---

## 📁 Project Structure

```
src/
├── components/
│   ├── QuoteSection.jsx       # Quotes + banner
│   ├── QuoteSection.css
│   ├── ContactForm.jsx        # Contact form
│   ├── ContactForm.css
│   └── Hero.jsx / Hero.css    # Legacy hero
├── App.jsx
└── main.jsx
```

---

## 🎨 Key Components

### QuoteSection
- Hero banner with image
- Daily inspiration quotes
- Quote refresh button
- Copy-to-clipboard
- Auto-rotate every 20 seconds

### ContactForm
- Name, email, message fields
- Form validation
- Submit button
- Responsive design

---

## 🛠 Technology Stack

- **React 18** - UI library
- **Vite** - Build tool
- **CSS3** - Styling (animations, gradients, filters)
- **ESLint** - Code quality

---

## 🎯 Customization

### Change Banner Image
Edit `src/components/QuoteSection.jsx`:
```jsx
const BANNER_IMAGE = "https://template.canva.com/EAE0HK7TP7Y/1/0/1600w-fj5Ej0JtAC4.jpg";
```

### Add Quotes
Edit the `QUOTES` array in `QuoteSection.jsx`:
```jsx
const QUOTES = [
  { content: "Your quote", author: "Author" },
  // ...
];
```

### Change Colors
Edit CSS files:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

---

## 📱 Responsive Design

- **Desktop** (1024px+): Full layout
- **Tablet** (768px-1023px): Adjusted spacing
- **Mobile** (Below 768px): Stack layout
- **Small Mobile** (Below 480px): Compact design

---

## 🌐 Browser Support

✅ Chrome (Latest)  
✅ Firefox (Latest)  
✅ Safari (Latest)  
✅ Edge (Latest)  
✅ Mobile browsers  

---

## 🚀 Deployment

### Build
```bash
npm run build
```

### Deploy Options
- **Netlify** - Connect GitHub, auto-deploy
- **GitHub Pages** - Static hosting
- **Traditional Hosting** - Upload `dist/` folder

---

## 📝 File Reference

| File | Purpose |
|------|---------|
| `QuoteSection.jsx` | Main quotes component |
| `ContactForm.jsx` | Contact form |
| `App.jsx` | Root app component |
| `vite.config.js` | Vite configuration |
| `index.html` | HTML entry point |

---

## 🎭 Animation Features

🌊 **Floating background elements** - Subtle animated circles  
✨ **Quote fade-in** - Smooth appearance  
🎯 **Hover effects** - Interactive animations  
⬇️ **Slide down** - Title entrance  
💫 **Button shimmer** - Submit button shine  
⚠️ **Bounce** - Error icon animation  

---

## 💡 Development Tips

1. **Hot Reload** - Changes save instantly
2. **DevTools** - Use React Developer Tools extension
3. **Lighthouse** - Check performance in Chrome
4. **Accessibility** - Test keyboard navigation
5. **Mobile** - Use Chrome DevTools device emulation

---

## 🎯 Future Enhancements

- Backend integration for forms
- Email notifications
- Quote API integration
- User authentication
- Dark mode
- Multi-language support
- Social sharing

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [CSS-Tricks](https://css-tricks.com)
- [MDN Web Docs](https://developer.mozilla.org)

---

## ✅ First Run Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] App visible at localhost
- [ ] Quotes display correctly
- [ ] Form works
- [ ] Banner loads
- [ ] Mobile responsive

---

## 🎉 Thank You

Built with care to promote cancer awareness and hope.

**Together, we can make a difference!** 💪

---

**Version:** 1.0.0  
**Status:** Production Ready ✅  
**Last Updated:** December 29, 2025

# Minaal Publicity - React Website

A modern, responsive React application for Minaal Publicity, a leading outdoor advertising agency in Rajkot and Saurashtra region. This project converts the original HTML/CSS/JavaScript website into a full-featured React application with modern routing and component architecture.

## Features

### 🌟 Core Features

- **Modern React Architecture**: Built with React 18 and functional components
- **React Router**: Single-page application with client-side routing
- **Responsive Design**: Mobile-first responsive design that works on all devices
- **Interactive Components**: Engaging carousels, animations, and user interactions
- **Professional UI**: Clean, modern design with smooth transitions

### 📱 Pages & Components

- **Home Page**: Hero billboard with interactive carousel, features grid, campaign showcase
- **About Page**: Company information, mission/vision, process workflow
- **Services Page**: Comprehensive service offerings with detailed descriptions
- **Portfolio Page**: Filterable project gallery with success stories
- **Clients Page**: Client testimonials, FAQ section, and brand showcase
- **Contact Page**: Interactive contact form with multiple contact options

### 🎨 Interactive Elements

- **Billboard Carousel**: Auto-playing carousel with manual controls
- **Campaign Showcase**: Navigable campaign slider
- **Portfolio Filters**: Filter projects by category
- **FAQ Accordion**: Expandable FAQ sections
- **Contact Form**: Validated form with loading states
- **Smooth Animations**: CSS-based animations and hover effects

## Installation & Setup

### Prerequisites

- Node.js (version 14.0 or higher)
- npm or yarn package manager

### Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000`

3. **Build for Production**

   ```bash
   npm run build
   ```

4. **Run Tests**
   ```bash
   npm test
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BillboardHero.js     # Hero section with carousel
│   ├── FeaturesGrid.js      # Features showcase grid
│   ├── CampaignShowcase.js  # Campaign slider component
│   ├── WhyChooseUs.js       # Why choose us section
│   ├── CTABanner.js         # Call-to-action banner
│   ├── Navbar.js            # Navigation component
│   ├── Footer.js            # Footer component
│   ├── LoadingScreen.js     # Loading screen component
│   ├── WhatsAppFloat.js     # Floating WhatsApp button
│   └── BackToTop.js         # Back to top button
├── pages/               # Page components
│   ├── Home.js              # Home page
│   ├── About.js             # About page
│   ├── Services.js          # Services page
│   ├── Portfolio.js         # Portfolio page
│   ├── Clients.js           # Clients page
│   └── Contact.js           # Contact page
├── hooks/               # Custom React hooks (for future extensions)
├── App.js              # Main application component
├── App.css             # Global styles
└── index.js            # Application entry point
```

## Key Components

### Navigation (Navbar.js)

- Responsive navigation with mobile menu
- Active page highlighting
- Scroll-based styling changes

### Billboard Hero (BillboardHero.js)

- Auto-rotating carousel with 4 slides
- Manual slide navigation with dots
- Floating statistics animations
- Responsive hero content

### Portfolio (Portfolio.js)

- Filterable project gallery
- Category-based filtering
- Success metrics showcase

### Contact Form (Contact.js)

- Form validation
- Loading states during submission
- Multiple contact options
- Quick action buttons

## Customization

### Colors & Styling

Update CSS custom properties in `App.css`:

```css
:root {
  --primary-color: #e4a20f;
  --secondary-color: #f5c93b;
  --accent-color: #ffda44;
  /* ... other variables */
}
```

### Content Updates

- **Company Information**: Update contact details in `Contact.js`
- **Service Offerings**: Modify services array in `Services.js`
- **Portfolio Items**: Update portfolio data in `Portfolio.js`
- **Client List**: Update clients array in `Clients.js`

### Images & Assets

- Place images in the `public` folder
- Update image references in components
- Ensure responsive image handling

## Features Converted from Original

### ✅ Successfully Converted

- [x] Loading screen with animation
- [x] Responsive navigation with mobile menu
- [x] Billboard hero carousel
- [x] Features grid section
- [x] Campaign showcase carousel
- [x] "Why Choose Us" section
- [x] Services page with service cards
- [x] Portfolio with filtering
- [x] Client testimonials
- [x] FAQ accordion
- [x] Contact form with validation
- [x] Footer with links
- [x] WhatsApp floating button
- [x] Back to top functionality
- [x] Smooth scrolling
- [x] Hover effects and animations
- [x] Responsive design

### 🎯 React-Specific Improvements

- Modern React hooks for state management
- Component-based architecture
- React Router for navigation
- Improved form handling
- Better separation of concerns
- Enhanced reusability

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading ready (can be implemented)
- Optimized images (webp support)
- CSS animations for smooth performance
- Minimal bundle size with React

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Minaal Publicity. All rights reserved.

## Support

For technical support or questions about this React application, please contact the development team.

---

**Built with ❤️ using React for Minaal Publicity - Pioneers in Out of Home Advertising**

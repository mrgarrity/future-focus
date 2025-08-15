# Tech Stack Modernization Proposal

A React-based presentation site for proposing the modernization of our web development tech stack from LAMP/Bootstrap/jQuery to React + TypeScript + modern CI/CD workflows.

## Features

- **10 Professional Slides**: Comprehensive coverage of the modernization proposal
- **Interactive Navigation**: Click through slides or use navigation buttons
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS and Lucide React icons
- **TypeScript**: Type-safe development with excellent IDE support

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Presentation Structure

The presentation covers these key areas:

1. **Introduction** - Current challenges and goals
2. **Three Focus Areas** - Frontend, Automation, Mobile-First
3. **Current Limitations** - Problems with jQuery and Bootstrap
4. **React + TypeScript Benefits** - Why modern frameworks matter
5. **UI Framework Options** - TailwindCSS vs Material UI
6. **Automation & Documentation** - GitHub and CI/CD benefits
7. **Development Workflow** - Proposed process improvements
8. **Mobile-First & PWAs** - Modern mobile strategy
9. **Implementation Plan** - Phased approach
10. **Future Opportunities** - Long-term vision

## Customization

### Adding New Slides

1. Create a new slide component in `src/components/Presentation.tsx`
2. Add it to the `slides` array
3. The presentation will automatically include it in navigation

### Styling

- The presentation uses Tailwind CSS for styling
- Color scheme and spacing can be customized in `tailwind.config.js`
- Component-specific styles are inline with Tailwind classes

### Content Updates

All slide content is contained within the individual slide components in `src/components/Presentation.tsx`. You can easily update text, add new bullet points, or modify the layout.

## Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized static files that can be deployed to any web server.

## Technologies Used

- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **Vite** - Fast build tool and dev server

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is for internal use at FutureFocus for the tech stack modernization proposal.

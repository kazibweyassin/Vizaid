# Vizaid Travel Website

A modern, professional travel agency website for Vizaid Travel - a Uganda-based travel agency specializing in air ticketing, visa assistance, and tours (both international and domestic).

## Features

- **Air Ticketing Services**: Flight booking inquiry forms with comprehensive options
- **Visa Assistance**: Expert visa application guidance and support
- **Tour Packages**: International and domestic tour offerings with detailed information
- **Inquiry Forms**: Multi-step forms for each service type with validation
- **Responsive Design**: Fully responsive, mobile-first design
- **SEO Optimized**: Built-in SEO with metadata and structured data
- **Modern UI/UX**: Clean, professional design with smooth animations

## Technology Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **UI Components**: Custom component library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
vizaid-travel/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── services/          # Service pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── blog/              # Blog page
│   └── testimonials/      # Testimonials page
├── components/
│   ├── ui/                # Reusable UI components
│   ├── forms/             # Form components
│   ├── sections/          # Page sections
│   └── layout/            # Layout components
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## Key Pages

- **Homepage** (`/`): Hero section, services overview, featured tours, testimonials
- **Air Ticketing** (`/services/air-ticketing`): Flight booking inquiry form
- **Visa Assistance** (`/services/visa-assistance`): Visa application support
- **Tours** (`/services/tours`): Tour packages overview
- **International Tours** (`/services/tours/international`): International tour packages
- **Domestic Tours** (`/services/tours/domestic`): Uganda domestic tours
- **About** (`/about`): Company information and team
- **Contact** (`/contact`): Contact form and information
- **Testimonials** (`/testimonials`): Customer reviews
- **Blog** (`/blog`): Travel blog and tips

## API Routes

- **POST `/api/inquiry`**: Handles inquiry form submissions (air ticketing, visa, tour, contact)

## Configuration

### Email Service

The email functionality in `lib/email.ts` is currently a placeholder. To enable actual email sending:

1. Choose an email service (SendGrid, Resend, or Nodemailer)
2. Update `lib/email.ts` with your email service configuration
3. Add environment variables for API keys

### WhatsApp Integration

Update the phone number in `components/layout/WhatsAppButton.tsx` with your actual WhatsApp business number.

## Deployment

The site can be deployed to Vercel, Netlify, or any platform that supports Next.js.

### Vercel Deployment

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables if needed
4. Deploy

## Customization

- Update contact information in `components/layout/Footer.tsx` and `app/contact/page.tsx`
- Add your logo and branding assets to `public/`
- Customize colors in Tailwind CSS configuration
- Update tour packages and destinations in respective page files
- Add real testimonials and blog content

## License

This project is proprietary and confidential.

## Support

For support, email info@vizaidtravel.com or contact us through the website.

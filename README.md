# Anxiety Management Landing Page

A modern, responsive landing page for an anxiety management eBook with email collection and payment integration capabilities.

## Features

- 🎨 Modern, responsive design with dark theme
- 📱 Mobile-first approach with smooth animations
- 📧 Email collection with validation and success modals
- 💳 Payment integration ready (Stripe/PayPal)
- 🎭 Framer Motion animations and scroll effects
- 🔧 Built with Next.js 14, TypeScript, and Tailwind CSS
- 🎯 SEO optimized with proper meta tags

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend (configurable)
- **Font**: DM Sans (Google Fonts)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret_here
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions
│   ├── utils.ts           # General utilities
│   ├── validations.ts     # Form validation schemas
│   └── theme.ts           # Theme configuration
├── types/                 # TypeScript type definitions
└── hooks/                 # Custom React hooks
```

## Components

### UI Components
- **Button**: Multiple variants (primary, secondary, success, outline)
- **Modal**: Success/error/info modals with backdrop blur
- **TestimonialCard**: User testimonial display
- **PricingCard**: Pricing plan display
- **SectionContainer**: Consistent section spacing

### Page Sections
- **HeroSection**: Main headline with email capture
- **TestimonialsSection**: 4-column testimonial grid
- **LearnSection**: Step-by-step learning with video preview
- **SocialProofSection**: Results and testimonials
- **PricingSection**: Two pricing tiers
- **FinalCtaSection**: Last conversion opportunity
- **ContactSection**: Contact form

## Email Integration

The project includes a ready-to-use email service integration:

1. **API Route**: `/api/send-email` handles email sending
2. **Email Service**: Configured for Resend (easily changeable)
3. **Form Validation**: Email format validation with real-time feedback
4. **Success/Error Handling**: User-friendly modal notifications

To set up email sending:
1. Get an API key from [Resend](https://resend.com)
2. Add it to your `.env.local` file
3. Uncomment the real email sending code in `/api/send-email/route.ts`

## Payment Integration

The project is prepared for payment integration:
- Abstract payment service interface
- Ready for Stripe, PayPal, or other providers
- Secure handling of payment data
- Smooth checkout experience

## Customization

### Colors
The color scheme is defined in `tailwind.config.ts` and `src/lib/theme.ts`:
- Primary: Dark background (#0a0a0a)
- Accent Yellow: #fbbf24
- Accent Purple: #8b5cf6
- Accent Green: #10b981

### Content
All content is currently hardcoded in the components. To make it dynamic:
1. Create a CMS or content management system
2. Replace hardcoded content with API calls
3. Add admin interface for content updates

## Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended):
   ```bash
   npx vercel
   ```

3. **Set environment variables** in your deployment platform

## Performance

- Optimized images and lazy loading
- Server-side rendering where appropriate
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind for optimal performance

## Accessibility

- WCAG compliant with proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- High contrast design
- Focus indicators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational and commercial use.

## Support

For questions or support, please contact the development team.

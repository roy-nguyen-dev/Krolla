// src/app/terms/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions for our service.',
}

export default function TermsPage() {
  return (
    <div className="prose prose-invert mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <h1>Terms & Conditions</h1>
      <p className="text-sm text-text-secondary">Effective Date: September 28, 2025</p>

      <h2>1. Introduction</h2>
      <p>
        These Terms of Service (“Terms”) govern your access to and use of Kroolla products and
        services, including but not to limited to digital courses, ebooks, audio programs, toolkits,
        community memberships, and add-on services (collectively, the “Services”).
      </p>
      <p>
        By accessing or purchasing from Kroolla, you acknowledge that you have read, understood, and
        agreed to these Terms. If you do not agree, you must discontinue use of the Services
        immediately.
      </p>

      <h2>2. Services Provided</h2>
      <p>
        Kroolla provides educational resources focused on anxiety recovery, self-development, and
        personal growth.
      </p>
      <ul>
        <li>All content is for educational and informational purposes only.</li>
        <li>Kroolla does not provide medical, psychological, or therapeutic treatment.</li>
        <li>
          The Services are not a substitute for professional healthcare advice, diagnosis, or
          treatment. Always consult a licensed professional for medical or mental health concerns.
        </li>
      </ul>

      <h2>3. Eligibility</h2>
      <ul>
        <li>You must be at least 18 years old to purchase or access Services.</li>
        <li>Individuals under 18 may only use Kroolla with parental or guardian consent.</li>
        <li>By using Kroolla, you represent that you meet these eligibility requirements.</li>
      </ul>

      <h2>4. Accounts & Fair Use</h2>
      <p>When creating an account or accessing services, you agree to:</p>
      <ul>
        <li>Provide accurate, complete, and current information.</li>
        <li>Keep your login credentials secure and private.</li>
        <li>Not share or transfer your account with others.</li>
        <li>Use Services for personal, non-commercial purposes only.</li>
      </ul>
      <h3>Prohibited Uses:</h3>
      <ul>
        <li>
          Copying, distributing, reselling, or redistributing Kroolla content without prior written
          consent.
        </li>
        <li>Attempting to reverse-engineer, hack, or bypass security measures.</li>
        <li>Misusing community spaces (e.g., spam, abuse, harassment).</li>
        <li>
          Violation of this section may result in immediate suspension or termination of your
          account without refund.
        </li>
      </ul>

      <h2>5. Payments & Access</h2>
      <ul>
        <li>Payments are processed securely through third-party providers.</li>
        <li>
          Access to products or memberships is granted only after successful payment confirmation.
        </li>
        <li>
          Subscriptions: Unless cancelled, memberships renew automatically at the end of each
          billing cycle.
        </li>
        <li>
          You are responsible for maintaining up-to-date payment information to avoid disruption of
          access.
        </li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        All content, branding, designs, logos, course materials, and resources are the exclusive
        property of Kroolla and protected by international copyright, trademark, and intellectual
        property laws.
      </p>
      <p>
        You are granted a limited, non-transferable, non-exclusive license to use the content solely
        for personal use.
      </p>
      <p>You may not:</p>
      <ul>
        <li>Copy, modify, or reproduce materials.</li>
        <li>Use content for commercial purposes without written permission.</li>
        <li>Claim ownership or authorship of Kroolla’s content.</li>
      </ul>

      <h2>7. Refunds & Cancellations</h2>
      <p>
        Refunds and cancellations are governed by our separate Refund Policy, which is incorporated
        into these Terms by reference. Please review it carefully before making a purchase.
      </p>

      <h2>8. Limitation of Liability</h2>
      <ul>
        <li>
          Kroolla is not responsible for any damages, losses, or injuries that may result from use
          or misuse of our Services.
        </li>
        <li>All participation is voluntary and at your own risk.</li>
        <li>
          To the fullest extent permitted by law, Kroolla disclaims all warranties, express or
          implied, including fitness for a particular purpose.
        </li>
        <li>If you are dissatisfied with the Services, your sole remedy is to discontinue use.</li>
      </ul>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Kroolla, its owners, employees,
        contractors, and affiliates from any claims, damages, liabilities, or expenses arising from:
      </p>
      <ul>
        <li>Your use of the Services.</li>
        <li>Your violation of these Terms.</li>
        <li>Your infringement of intellectual property rights or misuse of content.</li>
      </ul>

      <h2>10. External Links & Third-Party Services</h2>
      <p>
        Kroolla may integrate or link to third-party platforms (e.g., Discord, Whop, payment
        processors). These services are not controlled by Kroolla.
      </p>
      <ul>
        <li>We are not responsible for their policies, content, or practices.</li>
        <li>
          Your interactions with third-party services are solely between you and those providers.
        </li>
      </ul>

      <h2>11. Governing Law & Dispute Resolution</h2>
      <ul>
        <li>
          These Terms are governed by the laws of the jurisdiction in which Kroolla operates
          (Vietnam, unless otherwise specified).
        </li>
        <li>Any disputes will be resolved through good-faith negotiation first.</li>
        <li>
          If unresolved, disputes shall be submitted to binding arbitration or mediation, unless
          prohibited by law.
        </li>
      </ul>

      <h2>12. Changes to Terms</h2>
      <p>
        Kroolla reserves the right to update or modify these Terms at any time without prior notice.
        Updates become effective upon posting to this page.
      </p>
      <p>
        Your continued use of the Services after changes indicates your acceptance of the revised
        Terms.
      </p>

      <h2>13. Contact</h2>
      <p>For questions or concerns regarding these Terms, please contact:</p>
      <p>📩 support@kroolla.com</p>
    </div>
  )
}

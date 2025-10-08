// src/app/privacy/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy outlines how we handle your personal data and your rights.',
}

export default function PrivacyPage() {
  return (
    <div className="prose prose-invert mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-text-secondary">Effective Date: September 28, 2025</p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following categories of data when you use Kroolla services:</p>
      <h3>Personal Data:</h3>
      <ul>
        <li>
          Name, email address, billing information (processed securely by third-party payment
          providers such as Lemon Squeezy, Stripe, or PayPal).
        </li>
        <li>Account details you provide when joining our community or purchasing a course.</li>
      </ul>
      <h3>Usage Data:</h3>
      <ul>
        <li>IP address, browser type, operating system, device identifiers.</li>
        <li>Date/time of access, pages visited, and navigation patterns.</li>
        <li>Cookies, pixels, and analytics data.</li>
      </ul>
      <h3>Communication Data:</h3>
      <ul>
        <li>Messages exchanged with our support team.</li>
        <li>Subscription preferences and consent to marketing communications.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We process your data for the following purposes:</p>
      <ul>
        <li>
          <strong>Service Delivery:</strong> To provide you with purchased ebooks, audio courses,
          memberships, or add-on services.
        </li>
        <li>
          <strong>Customer Support:</strong> To respond to your inquiries, requests, and
          refund/cancellation matters.
        </li>
        <li>
          <strong>Marketing & Communication:</strong> To send newsletters, educational updates,
          offers, and promotions (if you opt-in).
        </li>
        <li>
          <strong>Analytics & Improvements:</strong> To analyze trends, monitor performance, and
          enhance user experience.
        </li>
        <li>
          <strong>Legal Compliance:</strong> To prevent fraud, comply with tax obligations, and meet
          regulatory requirements.
        </li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>
        We respect your privacy. Your data will never be sold to third parties. We may share data
        only in the following cases:
      </p>
      <ul>
        <li>
          With service providers who perform functions on our behalf (e.g., Lemon Squeezy for
          payments, Mailgun for email delivery, Discord/Whop for community access).
        </li>
        <li>When required by law, regulation, or legal process.</li>
        <li>To protect the rights, safety, or property of Kroolla, our users, or others.</li>
        <li>
          All third-party providers are required to process your data securely and in compliance
          with applicable privacy regulations.
        </li>
      </ul>

      <h2>4. Data Security</h2>
      <ul>
        <li>
          We use reasonable administrative, technical, and physical safeguards to protect your
          personal data against unauthorized access, alteration, disclosure, or destruction.
        </li>
        <li>
          Despite these measures, no system is completely secure. By using Kroolla, you acknowledge
          that information shared online carries inherent risks.
        </li>
      </ul>

      <h2>5. Cookies & Tracking</h2>
      <ul>
        <li>
          <strong>Cookies:</strong> We use cookies and similar technologies to personalize content,
          analyze usage, and improve our services.
        </li>
        <li>
          <strong>Analytics:</strong> We use tools like Google Analytics or equivalent providers to
          better understand user behavior.
        </li>
        <li>
          <strong>Control:</strong> You can disable cookies through your browser settings, but some
          features of our website may not function properly as a result.
        </li>
      </ul>

      <h2>6. Your Rights</h2>
      <p>
        Depending on your location (e.g., EU/EEA under GDPR, California under CCPA), you may have
        the right to:
      </p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction of inaccurate or incomplete information.</li>
        <li>Request deletion of your personal data (“right to be forgotten”).</li>
        <li>Opt out of marketing communications at any time.</li>
        <li>Request data portability (a copy of your information in a machine-readable format).</li>
        <li>Object to or restrict certain processing activities.</li>
      </ul>
      <p>To exercise these rights, contact us at: support@kroolla.com.</p>

      <h2>7. Data Retention</h2>
      <ul>
        <li>
          We retain personal data only for as long as necessary to fulfill the purposes outlined in
          this policy, comply with legal obligations, resolve disputes, and enforce agreements.
        </li>
        <li>When no longer required, your data will be securely deleted or anonymized.</li>
      </ul>

      <h2>8. International Data Transfers</h2>
      <p>
        If you access Kroolla from outside the country where our servers are located, your
        information may be transferred across borders. We ensure such transfers comply with
        applicable laws and use appropriate safeguards (e.g., Standard Contractual Clauses).
      </p>

      <h2>9. Children’s Privacy</h2>
      <ul>
        <li>Our services are not directed at individuals under the age of 18.</li>
        <li>We do not knowingly collect personal data from minors.</li>
        <li>
          If we become aware that we have inadvertently collected information from a child under 18,
          we will delete it immediately.
        </li>
      </ul>

      <h2>10. External Links</h2>
      <p>
        Kroolla may contain links to external websites or third-party platforms. We are not
        responsible for the privacy practices, policies, or content of those third parties. Please
        review their policies separately.
      </p>

      <h2>11. Updates to This Privacy Policy</h2>
      <p>We may update this Privacy Policy periodically.</p>
      <ul>
        <li>Updates take effect once posted on this page.</li>
        <li>
          If significant changes are made, we will notify users via email or platform notices where
          applicable.
        </li>
      </ul>

      <h2>12. Contact Us</h2>
      <p>For any privacy-related concerns or requests, please reach out to:</p>
      <p>📩 support@kroolla.com</p>
    </div>
  )
}

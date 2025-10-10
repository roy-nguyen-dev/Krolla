// src/app/refund-policy/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund, Cancellation & Access Policy',
  description:
    'Our policy regarding refunds, cancellations, and access to Kroolla products and services.',
}

export default function RefundPolicyPage() {
  return (
    <div className="prose prose-invert mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <h1>Refund, Cancellation & Access Policy</h1>
      <p className="text-sm text-text-secondary">Effective Date: September 28, 2025</p>

      <h2>1. Scope of This Policy</h2>
      <p>This policy applies to all products and services offered by Kroolla, including:</p>
      <ul>
        <li>
          <strong>Digital Products & Courses:</strong> eBooks, audio courses, toolkits, downloadable
          resources.
        </li>
        <li>
          <strong>Membership Subscriptions:</strong> Kroolla Community and Anxiety Recovery Hub.
        </li>
        <li>
          <strong>Personalized Service Packages:</strong> Calm Start ($97), Full Recovery ($197).
        </li>
        <li>
          <strong>Add-ons / Additional Services:</strong> Priority Support ($47), 3 Months Support
          ($97), Deep Analysis ($127).
        </li>
      </ul>

      <h2>2. Refund Policy</h2>
      <h3>2.1 Digital Products (eBooks, Audio Courses, Toolkits)</h3>
      <ul>
        <li>All digital products are covered by a 14-day money-back guarantee.</li>
        <li>
          To request a refund, email support@kroolla.com within 14 days of purchase with your order
          details.
        </li>
        <li>Refunds will be issued to the original payment method.</li>
        <li>No refunds will be granted after the 14-day period.</li>
      </ul>

      <h3>2.2 Service-Based Products (Calm Start & Full Recovery)</h3>
      <ul>
        <li>Eligible for a conditional refund if requested before service delivery begins.</li>
        <li>
          Service delivery begins once any of the following occur:
          <ul>
            <li>Written feedback has been prepared or delivered.</li>
            <li>Support sessions have been scheduled or initiated.</li>
            <li>Analysis of your submitted information has started.</li>
          </ul>
        </li>
        <li>If a refund request is received after service has begun, no refund will be issued.</li>
        <li>If approved, refunds are processed to the original payment method.</li>
      </ul>

      <h3>2.3 Add-ons (Priority Support, 3 Months Support, Deep Analysis)</h3>
      <ul>
        <li>
          Refunds are possible only if you contact support@kroolla.com immediately after purchase
          and before any consultation, priority response, or analysis has begun.
        </li>
        <li>
          Once services such as urgent support responses, ongoing habit coaching, or trauma analysis
          are initiated, refunds are no longer available.
        </li>
      </ul>

      <h2>3. Cancellation Policy</h2>
      <h3>3.1 One-Time Purchases</h3>
      <ul>
        <li>
          No cancellation is necessary for one-time products (eBooks, audio courses, Calm Start,
          Full Recovery, Add-ons).
        </li>
        <li>
          Once delivered, access is permanent and non-refundable beyond the terms stated in Section
          2.
        </li>
      </ul>

      <h3>3.2 Membership Subscriptions</h3>
      <ul>
        <li>
          You may cancel your subscription at any time via your account dashboard or by emailing
          support@kroolla.com.
        </li>
        <li>Your access will remain active until the end of your current billing cycle.</li>
        <li>No partial or prorated refunds are provided for unused time.</li>
      </ul>

      <h2>4. Access & Usage Policy</h2>
      <ul>
        <li>All access rights are personal, individual, and non-transferable.</li>
        <li>
          Sharing login details, redistributing materials, or unauthorized duplication is strictly
          prohibited.
        </li>
        <li>
          Kroolla reserves the right to suspend or revoke access without refund if misuse or policy
          violation is detected.
        </li>
      </ul>

      <h2>5. Processing & Timelines</h2>
      <ul>
        <li>Approved refunds are typically processed within 5–10 business days.</li>
        <li>Timelines may vary depending on your bank or payment provider.</li>
      </ul>

      <h2>6. Contact</h2>
      <p>For all refund, cancellation, or support inquiries, please contact us at:</p>
      <p>📩 support@kroolla.com</p>
    </div>
  )
}

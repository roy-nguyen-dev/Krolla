// src/app/disclaimer/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for the educational and informational content provided by our service.',
}

export default function DisclaimerPage() {
  return (
    <div className="prose prose-invert mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <h1>Disclaimer</h1>
      <p className="text-sm text-text-secondary">Effective Date: September 28, 2025</p>

      <h2>1. Educational & Informational Purpose Only</h2>
      <p>
        All content, products, and services provided by Kroolla — including but not limited to
        courses, ebooks, audio programs, community discussions, coaching add-ons, and toolkits — are
        intended solely for educational and informational purposes.
      </p>
      <p>
        They are designed to share knowledge, experiences, and general wellness strategies. They are
        not designed or intended to replace professional medical advice, diagnosis, or treatment.
      </p>

      <h2>2. No Professional–Client Relationship</h2>
      <p>
        Engaging with Kroolla, purchasing products, joining the community, or communicating with our
        support team does not create a doctor–patient, therapist–client, counselor–client, or any
        other licensed healthcare professional relationship.
      </p>
      <p>
        No element of our services should be interpreted as professional medical care or
        psychological therapy.
      </p>

      <h2>3. Not a Substitute for Medical Advice or Treatment</h2>
      <ul>
        <li>
          Always consult a licensed physician, psychologist, or qualified healthcare provider for
          questions or concerns regarding your health, mental health, or medical conditions.
        </li>
        <li>
          Do not disregard, avoid, or delay seeking professional medical advice based on any
          information obtained from Kroolla.
        </li>
        <li>
          If you are experiencing severe anxiety, panic attacks, depression, suicidal thoughts, or
          any other serious condition, seek immediate professional help or contact your local
          emergency services.
        </li>
      </ul>

      <h2>4. Personal Responsibility & Individual Results</h2>
      <ul>
        <li>
          By using Kroolla’s products and services, you acknowledge that you are fully responsible
          for your own decisions, actions, and outcomes.
        </li>
        <li>
          Results vary significantly from person to person. We do not guarantee any specific results
          in terms of mental health improvement, anxiety reduction, or recovery.
        </li>
        <li>
          Any testimonials, reviews, or case studies shared by past customers represent individual
          experiences only and should not be interpreted as promises of similar outcomes.
        </li>
      </ul>

      <h2>5. Limitation of Liability</h2>
      <ul>
        <li>
          Participation in Kroolla’s programs and communities is voluntary and at your own risk.
        </li>
        <li>
          Kroolla, its owners, employees, contractors, and affiliates shall not be held liable for
          any direct, indirect, incidental, consequential, or special damages arising out of your
          use of our content, products, or services.
        </li>
        <li>
          By accessing Kroolla, you expressly release us from any liability related to your health,
          mental wellbeing, or lifestyle choices.
        </li>
      </ul>

      <h2>6. External Links & Third-Party Services</h2>
      <ul>
        <li>
          Our website, courses, and community may contain links or integrations with third-party
          tools and platforms (e.g., payment processors, communication apps such as Discord,
          learning platforms).
        </li>
        <li>
          These platforms operate independently of Kroolla. We are not responsible for their
          content, services, policies, or security practices.
        </li>
        <li>
          You are encouraged to review the terms and privacy policies of any third-party service you
          choose to engage with.
        </li>
      </ul>

      <h2>7. No Emergency or Crisis Support</h2>
      <p>Kroolla is not an emergency service and cannot provide crisis intervention.</p>
      <ul>
        <li>
          If you are in crisis, feeling unsafe, or considering self-harm, please immediately call
          your local emergency number (for example, 911 in the U.S.) or seek help from a qualified
          mental health professional in your area.
        </li>
        <li>
          Many countries also provide dedicated hotlines for suicide prevention and mental health
          emergencies — please use those resources if needed.
        </li>
      </ul>

      <h2>8. Intellectual Property Notice</h2>
      <ul>
        <li>
          All content, designs, texts, graphics, and materials provided by Kroolla are protected by
          intellectual property laws.
        </li>
        <li>
          Unauthorized reproduction, distribution, or modification of our materials without written
          consent is strictly prohibited.
        </li>
      </ul>

      <h2>9. Updates & Revisions</h2>
      <ul>
        <li>
          Kroolla reserves the right to amend or update this Disclaimer at any time without prior
          notice.
        </li>
        <li>Any revisions will become effective immediately upon posting on our website.</li>
        <li>
          Continued use of our products or services after updates constitutes acceptance of the
          revised Disclaimer.
        </li>
      </ul>
    </div>
  )
}

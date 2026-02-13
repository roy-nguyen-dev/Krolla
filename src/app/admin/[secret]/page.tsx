'use client'

import React, { useState, useEffect, useCallback } from 'react'
import type {
  SiteContent,
  HeroTestimonial,
  SocialTestimonial,
  CoachingPackage,
  ProcessStep,
  FAQItem,
  AddOn,
  NavItem,
  FooterNavColumn,
} from '@/lib/content'

// ─── Reusable UI Components ─────────────────────────────────────

function Input({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  placeholder?: string
}) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
      />
    </div>
  )
}

function Textarea({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  rows?: number
}) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
      />
    </div>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4 text-black">{title}</h3>
      {children}
    </div>
  )
}

function ArrayItemCard({
  index,
  title,
  onRemove,
  children,
}: {
  index: number
  title: string
  onRemove: () => void
  children: React.ReactNode
}) {
  return (
    <div className="border border-gray-200 rounded-md p-4 mb-3 bg-gray-50">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-gray-600">
          {title} #{index + 1}
        </span>
        <button
          type="button"
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 text-sm font-medium"
        >
          Remove
        </button>
      </div>
      {children}
    </div>
  )
}

function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-md text-sm text-gray-600 hover:border-gray-400 hover:text-gray-800 w-full"
    >
      + {label}
    </button>
  )
}

// ─── Section Editors ─────────────────────────────────────────────

function HeaderEditor({
  data,
  onChange,
}: {
  data: SiteContent['header']
  onChange: (d: SiteContent['header']) => void
}) {
  const update = (patch: Partial<SiteContent['header']>) => onChange({ ...data, ...patch })

  const updateNavItem = (i: number, patch: Partial<NavItem>) => {
    const navItems = [...data.navItems]
    navItems[i] = { ...navItems[i], ...patch }
    update({ navItems })
  }

  return (
    <Card title="Header">
      <Input label="Logo Text" value={data.logoText} onChange={(v) => update({ logoText: v })} />
      <Input
        label="CTA Button Text"
        value={data.ctaButtonText}
        onChange={(v) => update({ ctaButtonText: v })}
      />
      <h4 className="text-sm font-medium text-gray-700 mt-4 mb-2">Navigation Items</h4>
      {data.navItems.map((item, i) => (
        <ArrayItemCard
          key={i}
          index={i}
          title="Nav Item"
          onRemove={() => update({ navItems: data.navItems.filter((_, j) => j !== i) })}
        >
          <Input label="Label" value={item.label} onChange={(v) => updateNavItem(i, { label: v })} />
          <Input label="Href" value={item.href} onChange={(v) => updateNavItem(i, { href: v })} />
          <Input label="Section ID" value={item.section} onChange={(v) => updateNavItem(i, { section: v })} />
        </ArrayItemCard>
      ))}
      <AddButton
        label="Add Nav Item"
        onClick={() =>
          update({ navItems: [...data.navItems, { label: '', href: '#', section: '' }] })
        }
      />
    </Card>
  )
}

function HeroEditor({
  data,
  onChange,
}: {
  data: SiteContent['hero']
  onChange: (d: SiteContent['hero']) => void
}) {
  const update = (patch: Partial<SiteContent['hero']>) => onChange({ ...data, ...patch })

  const updateTestimonial = (i: number, patch: Partial<HeroTestimonial>) => {
    const testimonials = [...data.testimonials]
    testimonials[i] = { ...testimonials[i], ...patch }
    update({ testimonials })
  }

  return (
    <Card title="Hero Section">
      <Input label="Badge Text" value={data.badgeText} onChange={(v) => update({ badgeText: v })} />
      <Input label="Headline Line 1" value={data.headlineLine1} onChange={(v) => update({ headlineLine1: v })} />
      <Input label="Headline Line 2 (italic)" value={data.headlineLine2} onChange={(v) => update({ headlineLine2: v })} />
      <Input label="Email Placeholder" value={data.emailPlaceholder} onChange={(v) => update({ emailPlaceholder: v })} />
      <Input label="Button Text" value={data.buttonText} onChange={(v) => update({ buttonText: v })} />
      <Input label="Rating Score" value={data.ratingScore} onChange={(v) => update({ ratingScore: v })} />
      <Input label="Rating Text" value={data.ratingText} onChange={(v) => update({ ratingText: v })} />

      <h4 className="text-sm font-medium text-gray-700 mt-4 mb-2">Testimonials</h4>
      {data.testimonials.map((t, i) => (
        <ArrayItemCard
          key={i}
          index={i}
          title="Testimonial"
          onRemove={() => update({ testimonials: data.testimonials.filter((_, j) => j !== i) })}
        >
          <Input label="Name" value={t.name} onChange={(v) => updateTestimonial(i, { name: v })} />
          <Input label="Age/Context" value={t.ageContext} onChange={(v) => updateTestimonial(i, { ageContext: v })} />
          <Input label="Avatar URL" value={t.avatar} onChange={(v) => updateTestimonial(i, { avatar: v })} />
          <Textarea label="Quote" value={t.quote} onChange={(v) => updateTestimonial(i, { quote: v })} />
        </ArrayItemCard>
      ))}
      <AddButton
        label="Add Testimonial"
        onClick={() =>
          update({
            testimonials: [
              ...data.testimonials,
              { name: '', ageContext: '', avatar: '', quote: '', rating: 5 },
            ],
          })
        }
      />
    </Card>
  )
}

function CoursePreviewEditor({
  data,
  onChange,
}: {
  data: SiteContent['coursePreview']
  onChange: (d: SiteContent['coursePreview']) => void
}) {
  const update = (patch: Partial<SiteContent['coursePreview']>) => onChange({ ...data, ...patch })

  return (
    <Card title="Course Preview Section">
      <Input label="Section Headline" value={data.sectionHeadline} onChange={(v) => update({ sectionHeadline: v })} />
      <Input label="Section Subheadline" value={data.sectionSubheadline} onChange={(v) => update({ sectionSubheadline: v })} />
      <Input label="Badge" value={data.badge} onChange={(v) => update({ badge: v })} />
      <Input label="Course Title" value={data.courseTitle} onChange={(v) => update({ courseTitle: v })} />
      <Textarea label="Course Description" value={data.courseDescription} onChange={(v) => update({ courseDescription: v })} />
      <Input label="Button Text" value={data.buttonText} onChange={(v) => update({ buttonText: v })} />
      <Input label="Rating Score" value={data.ratingScore} onChange={(v) => update({ ratingScore: v })} />
      <Input label="Rating Text" value={data.ratingText} onChange={(v) => update({ ratingText: v })} />
    </Card>
  )
}

function SocialTestimonialsEditor({
  data,
  onChange,
}: {
  data: SiteContent['socialTestimonials']
  onChange: (d: SiteContent['socialTestimonials']) => void
}) {
  const update = (patch: Partial<SiteContent['socialTestimonials']>) =>
    onChange({ ...data, ...patch })

  const updateTestimonial = (i: number, patch: Partial<SocialTestimonial>) => {
    const testimonials = [...data.testimonials]
    testimonials[i] = { ...testimonials[i], ...patch }
    update({ testimonials })
  }

  return (
    <Card title="Social Testimonials Section">
      <Input label="Headline" value={data.headline} onChange={(v) => update({ headline: v })} />
      <Input label="Subheadline" value={data.subheadline} onChange={(v) => update({ subheadline: v })} />

      <h4 className="text-sm font-medium text-gray-700 mt-4 mb-2">Testimonials</h4>
      {data.testimonials.map((t, i) => (
        <ArrayItemCard
          key={i}
          index={i}
          title="Testimonial"
          onRemove={() => update({ testimonials: data.testimonials.filter((_, j) => j !== i) })}
        >
          <Input label="Name" value={t.name} onChange={(v) => updateTestimonial(i, { name: v })} />
          <Input label="Handle" value={t.handle} onChange={(v) => updateTestimonial(i, { handle: v })} />
          <Input label="Avatar URL" value={t.avatar} onChange={(v) => updateTestimonial(i, { avatar: v })} />
          <Textarea label="Quote" value={t.quote} onChange={(v) => updateTestimonial(i, { quote: v })} />
        </ArrayItemCard>
      ))}
      <AddButton
        label="Add Testimonial"
        onClick={() =>
          update({
            testimonials: [...data.testimonials, { name: '', handle: '', avatar: '', quote: '' }],
          })
        }
      />
    </Card>
  )
}

function AuthorEditor({
  data,
  onChange,
}: {
  data: SiteContent['author']
  onChange: (d: SiteContent['author']) => void
}) {
  const update = (patch: Partial<SiteContent['author']>) => onChange({ ...data, ...patch })

  return (
    <Card title="Author Section">
      <Input label="Headline" value={data.headline} onChange={(v) => update({ headline: v })} />
      <Input label="Tagline" value={data.tagline} onChange={(v) => update({ tagline: v })} />
      <Textarea label="Description" value={data.description} onChange={(v) => update({ description: v })} />
      <Input label="Primary CTA" value={data.primaryCta} onChange={(v) => update({ primaryCta: v })} />
      <Input label="Secondary CTA" value={data.secondaryCta} onChange={(v) => update({ secondaryCta: v })} />
    </Card>
  )
}

function CoachingEditor({
  data,
  onChange,
}: {
  data: SiteContent['coaching']
  onChange: (d: SiteContent['coaching']) => void
}) {
  const update = (patch: Partial<SiteContent['coaching']>) => onChange({ ...data, ...patch })

  const updatePackage = (i: number, patch: Partial<CoachingPackage>) => {
    const packages = [...data.packages]
    packages[i] = { ...packages[i], ...patch }
    update({ packages })
  }

  return (
    <Card title="Coaching Section">
      <Input label="Headline" value={data.headline} onChange={(v) => update({ headline: v })} />
      <Input label="Subheadline" value={data.subheadline} onChange={(v) => update({ subheadline: v })} />

      <h4 className="text-sm font-medium text-gray-700 mt-4 mb-2">Packages</h4>
      {data.packages.map((pkg, i) => (
        <ArrayItemCard
          key={i}
          index={i}
          title="Package"
          onRemove={() => update({ packages: data.packages.filter((_, j) => j !== i) })}
        >
          <Input label="Name" value={pkg.name} onChange={(v) => updatePackage(i, { name: v })} />
          <Input label="Price" value={pkg.price} onChange={(v) => updatePackage(i, { price: v })} />
          <Input label="Payment Type" value={pkg.paymentType} onChange={(v) => updatePackage(i, { paymentType: v })} />
          <Input label="CTA Text" value={pkg.ctaText} onChange={(v) => updatePackage(i, { ctaText: v })} />
          <h5 className="text-xs font-medium text-gray-600 mt-2 mb-1">Features</h5>
          {pkg.features.map((f, fi) => (
            <div key={fi} className="flex gap-2 mb-1">
              <input
                value={f}
                onChange={(e) => {
                  const features = [...pkg.features]
                  features[fi] = e.target.value
                  updatePackage(i, { features })
                }}
                className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="button"
                onClick={() => {
                  const features = pkg.features.filter((_, j) => j !== fi)
                  updatePackage(i, { features })
                }}
                className="text-red-500 hover:text-red-700 text-xs"
              >
                x
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => updatePackage(i, { features: [...pkg.features, ''] })}
            className="text-xs text-gray-500 hover:text-gray-700 mt-1"
          >
            + Add Feature
          </button>
        </ArrayItemCard>
      ))}
      <AddButton
        label="Add Package"
        onClick={() =>
          update({
            packages: [
              ...data.packages,
              { name: '', price: '', paymentType: 'One-time payment', features: [], ctaText: 'Break the Cycle' },
            ],
          })
        }
      />
    </Card>
  )
}

function HowItWorksEditor({
  data,
  onChange,
}: {
  data: SiteContent['howItWorks']
  onChange: (d: SiteContent['howItWorks']) => void
}) {
  const update = (patch: Partial<SiteContent['howItWorks']>) => onChange({ ...data, ...patch })

  const updateStep = (i: number, patch: Partial<ProcessStep>) => {
    const steps = [...data.steps]
    steps[i] = { ...steps[i], ...patch }
    update({ steps })
  }

  return (
    <Card title="How It Works Section">
      <Input label="Headline" value={data.headline} onChange={(v) => update({ headline: v })} />

      <h4 className="text-sm font-medium text-gray-700 mt-4 mb-2">Steps</h4>
      {data.steps.map((step, i) => (
        <ArrayItemCard
          key={i}
          index={i}
          title="Step"
          onRemove={() => update({ steps: data.steps.filter((_, j) => j !== i) })}
        >
          <Input label="Title" value={step.title} onChange={(v) => updateStep(i, { title: v })} />
          <Textarea label="Description" value={step.description} onChange={(v) => updateStep(i, { description: v })} />
        </ArrayItemCard>
      ))}
      <AddButton
        label="Add Step"
        onClick={() => update({ steps: [...data.steps, { title: '', description: '' }] })}
      />
    </Card>
  )
}

function FAQEditor({
  data,
  onChange,
}: {
  data: SiteContent['faq']
  onChange: (d: SiteContent['faq']) => void
}) {
  const update = (patch: Partial<SiteContent['faq']>) => onChange({ ...data, ...patch })

  const updateFaq = (i: number, patch: Partial<FAQItem>) => {
    const faqs = [...data.faqs]
    faqs[i] = { ...faqs[i], ...patch }
    update({ faqs })
  }

  return (
    <Card title="FAQ Section">
      <Input label="Headline" value={data.headline} onChange={(v) => update({ headline: v })} />
      <Textarea label="Subheadline" value={data.subheadline} onChange={(v) => update({ subheadline: v })} />

      <h4 className="text-sm font-medium text-gray-700 mt-4 mb-2">FAQs</h4>
      {data.faqs.map((faq, i) => (
        <ArrayItemCard
          key={i}
          index={i}
          title="FAQ"
          onRemove={() => update({ faqs: data.faqs.filter((_, j) => j !== i) })}
        >
          <Input label="Question" value={faq.question} onChange={(v) => updateFaq(i, { question: v })} />
          <Textarea label="Answer" value={faq.answer} onChange={(v) => updateFaq(i, { answer: v })} rows={4} />
        </ArrayItemCard>
      ))}
      <AddButton
        label="Add FAQ"
        onClick={() => update({ faqs: [...data.faqs, { question: '', answer: '', defaultOpen: false }] })}
      />
    </Card>
  )
}

function CommunityCTAEditor({
  data,
  onChange,
}: {
  data: SiteContent['communityCTA']
  onChange: (d: SiteContent['communityCTA']) => void
}) {
  const update = (patch: Partial<SiteContent['communityCTA']>) => onChange({ ...data, ...patch })

  return (
    <Card title="Community CTA Section">
      <Input label="Headline" value={data.headline} onChange={(v) => update({ headline: v })} />
      <Textarea label="Description" value={data.description} onChange={(v) => update({ description: v })} />
      <Input label="Button Text" value={data.buttonText} onChange={(v) => update({ buttonText: v })} />
    </Card>
  )
}

function FooterEditor({
  data,
  onChange,
}: {
  data: SiteContent['footer']
  onChange: (d: SiteContent['footer']) => void
}) {
  const update = (patch: Partial<SiteContent['footer']>) => onChange({ ...data, ...patch })

  const updateColumn = (i: number, patch: Partial<FooterNavColumn>) => {
    const navigationColumns = [...data.navigationColumns]
    navigationColumns[i] = { ...navigationColumns[i], ...patch }
    update({ navigationColumns })
  }

  return (
    <Card title="Footer">
      <Input label="Brand Letter" value={data.brandLetter} onChange={(v) => update({ brandLetter: v })} />
      <Input label="Brand Name" value={data.brandName} onChange={(v) => update({ brandName: v })} />
      <Textarea label="Description" value={data.description} onChange={(v) => update({ description: v })} />
      <Input label="Copyright" value={data.copyright} onChange={(v) => update({ copyright: v })} />
      <Input label="Refund Link Text" value={data.refundLinkText} onChange={(v) => update({ refundLinkText: v })} />
      <Input label="CTA Button Text" value={data.ctaButtonText} onChange={(v) => update({ ctaButtonText: v })} />

      <h4 className="text-sm font-medium text-gray-700 mt-4 mb-2">Navigation Columns</h4>
      {data.navigationColumns.map((col, i) => (
        <ArrayItemCard
          key={i}
          index={i}
          title="Column"
          onRemove={() =>
            update({ navigationColumns: data.navigationColumns.filter((_, j) => j !== i) })
          }
        >
          <Input label="Title" value={col.title} onChange={(v) => updateColumn(i, { title: v })} />
          <h5 className="text-xs font-medium text-gray-600 mt-2 mb-1">Links</h5>
          {col.links.map((link, li) => (
            <div key={li} className="flex gap-2 mb-1">
              <input
                value={link}
                onChange={(e) => {
                  const links = [...col.links]
                  links[li] = e.target.value
                  updateColumn(i, { links })
                }}
                className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="button"
                onClick={() => updateColumn(i, { links: col.links.filter((_, j) => j !== li) })}
                className="text-red-500 hover:text-red-700 text-xs"
              >
                x
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => updateColumn(i, { links: [...col.links, ''] })}
            className="text-xs text-gray-500 hover:text-gray-700 mt-1"
          >
            + Add Link
          </button>
        </ArrayItemCard>
      ))}
      <AddButton
        label="Add Column"
        onClick={() =>
          update({
            navigationColumns: [...data.navigationColumns, { title: '', links: [] }],
          })
        }
      />
    </Card>
  )
}

function AddOnsEditor({
  data,
  onChange,
}: {
  data: SiteContent['addOns']
  onChange: (d: SiteContent['addOns']) => void
}) {
  const update = (patch: Partial<SiteContent['addOns']>) => onChange({ ...data, ...patch })

  const updateAddOn = (i: number, patch: Partial<AddOn>) => {
    const addOns = [...data.addOns]
    addOns[i] = { ...addOns[i], ...patch }
    update({ addOns })
  }

  return (
    <Card title="Add-Ons Section">
      <Input label="Headline" value={data.headline} onChange={(v) => update({ headline: v })} />

      <h4 className="text-sm font-medium text-gray-700 mt-4 mb-2">Add-Ons</h4>
      {data.addOns.map((addOn, i) => (
        <ArrayItemCard
          key={i}
          index={i}
          title="Add-On"
          onRemove={() => update({ addOns: data.addOns.filter((_, j) => j !== i) })}
        >
          <Input label="Name" value={addOn.name} onChange={(v) => updateAddOn(i, { name: v })} />
          <Input label="Price" value={addOn.price} onChange={(v) => updateAddOn(i, { price: v })} />
          <Textarea label="Description" value={addOn.description} onChange={(v) => updateAddOn(i, { description: v })} />
        </ArrayItemCard>
      ))}
      <AddButton
        label="Add Add-On"
        onClick={() => update({ addOns: [...data.addOns, { name: '', price: '', description: '' }] })}
      />
    </Card>
  )
}

// ─── Tabs ────────────────────────────────────────────────────────

const TABS = [
  'Header',
  'Hero',
  'Course Preview',
  'Social Testimonials',
  'Author',
  'Coaching',
  'How It Works',
  'FAQ',
  'Community CTA',
  'Footer',
  'Add-Ons',
] as const

type Tab = (typeof TABS)[number]

// ─── Main Admin Page ─────────────────────────────────────────────

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [content, setContent] = useState<SiteContent | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('Header')
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const fetchContent = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/content')
      const data = await res.json()
      if (data.success) {
        setContent(data.content)
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to load content.' })
    } finally {
      setLoading(false)
    }
  }, [])

  const handleLogin = async () => {
    if (!password.trim()) return
    setLoading(true)
    try {
      // Verify password by attempting a read with the password header
      const res = await fetch('/api/content')
      const data = await res.json()
      if (data.success) {
        setContent(data.content)
        setIsAuthenticated(true)
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to connect.' })
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!content) return
    setSaving(true)
    setMessage(null)
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
        body: JSON.stringify(content),
      })
      const data = await res.json()
      if (data.success) {
        // Re-fetch the latest saved content from the server
        const refreshRes = await fetch('/api/content')
        const refreshData = await refreshRes.json()
        if (refreshData.success) {
          setContent(refreshData.content)
        }
        setMessage({ type: 'success', text: 'Content saved and refreshed successfully!' })
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to save.' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to save content.' })
    } finally {
      setSaving(false)
    }
  }

  const updateSection = <K extends keyof SiteContent>(key: K, value: SiteContent[K]) => {
    if (!content) return
    setContent({ ...content, [key]: value })
  }

  // ─── Login Screen ──────────────────────────────────────────────

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
          <h1 className="text-2xl font-bold text-black mb-2">Admin Panel</h1>
          <p className="text-gray-500 text-sm mb-6">Enter your admin password to continue.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Admin password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          />
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
          {message && (
            <p className={`mt-4 text-sm ${message.type === 'error' ? 'text-red-500' : 'text-green-600'}`}>
              {message.text}
            </p>
          )}
        </div>
      </div>
    )
  }

  // ─── Loading State ─────────────────────────────────────────────

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading content...</p>
      </div>
    )
  }

  // ─── Admin Dashboard ──────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold text-black">Content Editor</h1>
          <div className="flex items-center gap-3">
            {message && (
              <span
                className={`text-sm ${message.type === 'error' ? 'text-red-500' : 'text-green-600'}`}
              >
                {message.text}
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={saving || loading}
              className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 text-sm"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={fetchContent}
              disabled={loading || saving}
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 disabled:opacity-50 text-sm"
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar Tabs */}
          <div className="w-56 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden sticky top-20">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium border-b border-gray-100 last:border-b-0 transition-colors ${
                    activeTab === tab
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content Editor */}
          <div className="flex-1 min-w-0">
            {activeTab === 'Header' && (
              <HeaderEditor data={content.header} onChange={(d) => updateSection('header', d)} />
            )}
            {activeTab === 'Hero' && (
              <HeroEditor data={content.hero} onChange={(d) => updateSection('hero', d)} />
            )}
            {activeTab === 'Course Preview' && (
              <CoursePreviewEditor
                data={content.coursePreview}
                onChange={(d) => updateSection('coursePreview', d)}
              />
            )}
            {activeTab === 'Social Testimonials' && (
              <SocialTestimonialsEditor
                data={content.socialTestimonials}
                onChange={(d) => updateSection('socialTestimonials', d)}
              />
            )}
            {activeTab === 'Author' && (
              <AuthorEditor data={content.author} onChange={(d) => updateSection('author', d)} />
            )}
            {activeTab === 'Coaching' && (
              <CoachingEditor
                data={content.coaching}
                onChange={(d) => updateSection('coaching', d)}
              />
            )}
            {activeTab === 'How It Works' && (
              <HowItWorksEditor
                data={content.howItWorks}
                onChange={(d) => updateSection('howItWorks', d)}
              />
            )}
            {activeTab === 'FAQ' && (
              <FAQEditor data={content.faq} onChange={(d) => updateSection('faq', d)} />
            )}
            {activeTab === 'Community CTA' && (
              <CommunityCTAEditor
                data={content.communityCTA}
                onChange={(d) => updateSection('communityCTA', d)}
              />
            )}
            {activeTab === 'Footer' && (
              <FooterEditor data={content.footer} onChange={(d) => updateSection('footer', d)} />
            )}
            {activeTab === 'Add-Ons' && (
              <AddOnsEditor data={content.addOns} onChange={(d) => updateSection('addOns', d)} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

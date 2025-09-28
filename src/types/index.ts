export interface Testimonial {
  id: string
  name: string
  avatar: string
  testimonial: string
  rating?: number
}

export interface Proof {
  id: string
  quote: string
  name: string
  avatar?: string
  rating?: number
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  features: string[]
  buttonText: string
  variant: 'yellow' | 'green'
  popular?: boolean
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  type: 'success' | 'error' | 'info'
}

export interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export interface ProofCardProps {
  proof: Proof
  className?: string
}

export interface PricingCardProps {
  plan: PricingPlan
  className?: string
}

export interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  background?: 'primary' | 'card'
  id?: string
}

export interface EmailFormData {
  email: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

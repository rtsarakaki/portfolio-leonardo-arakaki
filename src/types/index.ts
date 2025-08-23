export interface Project {
  id: string
  title: string
  description: string
  category: string
  year: string
  image?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  projects: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  period: string
  description?: string
}

export interface Language {
  name: string
  level: string
  certificate?: string
}

export interface ContactInfo {
  email: string
  phone: string
  linkedin?: string
}

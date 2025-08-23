interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

const Section = ({ id, title, subtitle, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Section Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section

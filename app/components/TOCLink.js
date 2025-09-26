'use client'

export default function TOCLink({ href, children, className, ...props }) {
  // Check if this is a TOC link (starts with #)
  if (href && href.startsWith('#')) {
    const targetId = href.substring(1) // Remove the #
    
    const handleClick = (e) => {
      e.preventDefault()
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    return (
      <a
        href={href}
        onClick={handleClick}
        className={`text-btf-accent hover:text-btf-dark hover:underline transition-colors cursor-pointer font-medium ${className || ''}`}
        {...props}
      >
        {children}
      </a>
    )
  }
  
  // Regular external links
  return (
    <a
      href={href}
      className={`text-btf-accent hover:text-btf-dark hover:underline transition-colors ${className || ''}`}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  )
}

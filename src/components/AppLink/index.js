import Link from 'next/link'

function AppLink({ href, className, children }) {
  const hrefPath = href?.startsWith('http')

  return (
    <Link
      href={href}
      passHref
      aria-hidden="true"
      target={hrefPath ? '_blank' : '_self'}
      rel={hrefPath && 'noopener noreferrer'}
    >
      <a
        target={hrefPath ? '_blank' : '_self'}
        className={className}
        aria-hidden="true"
      >
        {children}
      </a>
    </Link>
  )
}

export default AppLink

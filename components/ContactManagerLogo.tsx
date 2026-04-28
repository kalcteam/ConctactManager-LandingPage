interface ContactManagerLogoProps {
  dark?: boolean
  width?: number
}

export function ContactManagerLogo({ dark = false, width = 140 }: ContactManagerLogoProps) {
  const height = Math.round(width / 4)
  const textContact = dark ? '#FFFFFF' : '#0035b9'
  const textManager = dark ? '#93C5FD' : '#254edb'
  const accentColor = '#c7d2fe'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 100"
      width={width}
      height={height}
      aria-label="ContactManager"
    >
      <circle cx="50" cy="50" r="45" fill="#0035b9" />
      <circle cx="50" cy="32" r="13" fill="white" />
      <path d="M25 72 Q25 52 50 52 Q75 52 75 72" fill="white" />
      <circle cx="82" cy="28" r="5" fill="#0035b9" stroke={accentColor} strokeWidth="2" />
      <circle cx="90" cy="48" r="5" fill="#0035b9" stroke={accentColor} strokeWidth="2" />
      <circle cx="82" cy="68" r="5" fill="#0035b9" stroke={accentColor} strokeWidth="2" />
      <line x1="75" y1="35" x2="82" y2="28" stroke={accentColor} strokeWidth="1.5" />
      <line x1="75" y1="50" x2="90" y2="48" stroke={accentColor} strokeWidth="1.5" />
      <line x1="75" y1="64" x2="82" y2="68" stroke={accentColor} strokeWidth="1.5" />
      <text
        x="107" y="48"
        fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="34" fontWeight="900" letterSpacing="-1" fill={textContact}
      >Contact</text>
      <text
        x="110" y="73"
        fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="19" fontWeight="700" letterSpacing="3.5" fill={textManager}
      >MANAGER</text>
    </svg>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ContactManager — Gestiona tus contactos en equipo',
  description: 'Plataforma SaaS para que tu organización comparta y gestione su cartera de contactos desde web y móvil. Prueba gratis 3 días.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white antialiased">
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(r=>{for(const sw of r)sw.unregister()})}`
        }} />
      </body>
    </html>
  )
}

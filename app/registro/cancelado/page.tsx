import Link from 'next/link'
import { ContactManagerLogo } from '@/components/ContactManagerLogo'

export default function RegistroCanceladoPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="mb-10">
        <ContactManagerLogo width={180} />
      </div>
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
          <svg className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
        </div>
        <h1 className="text-2xl font-black text-gray-900">Pago cancelado</h1>
        <p className="mt-3 text-sm text-gray-500">
          Has cancelado el proceso de pago. Tu cuenta ha sido creada pero sin suscripción activa. Puedes añadir un plan desde el panel.
        </p>
        <div className="mt-8 space-y-3">
          <Link
            href="/registro"
            className="block w-full rounded-xl bg-[#0035b9] py-3.5 text-sm font-semibold text-white hover:bg-[#002494] transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-100"
          >
            Intentar de nuevo
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}
            className="block w-full rounded-xl border border-gray-200 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Entrar sin suscripción
          </Link>
        </div>
      </div>
    </div>
  )
}

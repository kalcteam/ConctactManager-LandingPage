import Link from 'next/link'
import { ContactManagerLogo } from '@/components/ContactManagerLogo'

export default function RegistroExitoPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="mb-10">
        <ContactManagerLogo width={180} />
      </div>
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-2xl font-black text-gray-900">¡Cuenta creada!</h1>
        <p className="mt-3 text-sm text-gray-500">
          Tu organización está lista. Revisa tu bandeja de entrada para verificar tu email y empieza a usar ContactManager.
        </p>
        <div className="mt-8 space-y-3">
          <Link
            href={process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}
            className="block w-full rounded-xl bg-[#0035b9] py-3.5 text-sm font-semibold text-white hover:bg-[#002494] transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-100"
          >
            Ir a la aplicación →
          </Link>
          <Link
            href="/"
            className="block w-full rounded-xl border border-gray-200 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

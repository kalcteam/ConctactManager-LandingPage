import Link from 'next/link'
import { Header } from '@/components/Header'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ContactManagerLogo } from '@/components/ContactManagerLogo'

/* ── Feature data ───────────────────────────────── */
const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: 'Cartera compartida',
    desc: 'Todo tu equipo comparte la misma base de contactos. Sin silos, sin duplicados, con visibilidad total.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
    ),
    title: 'Etiquetas personalizadas',
    desc: 'Crea etiquetas con colores propios para clasificar y filtrar tu cartera de la forma que mejor funcione para tu negocio.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: 'Historial de actividad',
    desc: 'Registra llamadas, reuniones, emails y notas en cada contacto. Nunca pierdas el hilo de una conversación.',
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: 'Gestión de equipo',
    desc: 'Invita a tus colaboradores, asigna roles y controla quién puede hacer qué dentro de tu organización.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: 'Import / Export CSV',
    desc: 'Importa tu base de datos existente con un CSV o exporta todos tus contactos cuando lo necesites.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H7.5V15Zm0-3h.008v.008H7.5V12Zm0-3h.008v.008H7.5V9Z" />
      </svg>
    ),
    title: 'Acceso desde cualquier lugar',
    desc: 'Disponible en web y app móvil (iOS y Android). Tu cartera de contactos siempre contigo.',
    color: 'bg-pink-50 text-pink-600',
  },
]

/* ── Pricing data ────────────────────────────────── */
const plans = [
  {
    id: 'monthly',
    name: 'Mensual',
    price: 29,
    billed: '29 € / mes',
    perMonth: null,
    saving: null,
    popular: false,
  },
  {
    id: 'quarterly',
    name: 'Trimestral',
    price: 75,
    billed: '75 € / trimestre',
    perMonth: '25 € / mes',
    saving: 'Ahorra un 14%',
    popular: false,
  },
  {
    id: 'biannual',
    name: 'Semestral',
    price: 138,
    billed: '138 € / semestre',
    perMonth: '23 € / mes',
    saving: 'Ahorra un 21%',
    popular: false,
  },
  {
    id: 'annual',
    name: 'Anual',
    price: 240,
    billed: '240 € / año',
    perMonth: '20 € / mes',
    saving: 'Ahorra un 31%',
    popular: true,
  },
]

const planFeatures = [
  'Contactos ilimitados',
  'Equipo ilimitado',
  'Etiquetas personalizadas',
  'Historial de actividad',
  'Import / Export CSV',
  'App móvil incluida',
  'Soporte por email',
]

/* ── Page ───────────────────────────────────────── */
export default function LandingPage() {
  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pt-16">
        {/* Gradient blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse at center, #c7d2fe 0%, transparent 70%)' }}
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-6 pb-24 pt-20 lg:flex-row lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0035b9]">
              ✦ Prueba gratis — 3 días sin compromiso
            </span>
            <h1 className="animate-fade-in-up delay-100 mt-5 text-5xl font-black leading-tight tracking-tight text-gray-900 lg:text-6xl">
              Gestiona tus
              <br />
              <span className="text-[#0035b9]">contactos</span>
              <br />
              en equipo
            </h1>
            <p className="animate-fade-in-up delay-200 mt-6 max-w-lg text-lg leading-relaxed text-gray-500 lg:mx-0 lg:max-w-md">
              Una plataforma SaaS para que tu organización comparta y gestione su cartera de contactos profesionales desde web y móvil.
            </p>
            <div className="animate-fade-in-up delay-300 mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/registro"
                className="w-full rounded-xl bg-[#0035b9] px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-blue-200 hover:bg-[#002494] transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                Empezar gratis →
              </Link>
              <a
                href="#funciones"
                className="w-full rounded-xl border border-gray-200 px-8 py-3.5 text-center text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors sm:w-auto"
              >
                Ver funciones
              </a>
            </div>
          </div>

          {/* Mock UI card */}
          <div className="animate-fade-in delay-400 mt-16 w-full max-w-md lg:mt-0 lg:flex-shrink-0">
            <div className="animate-float relative rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-200/80">
              {/* Header bar */}
              <div className="mb-5 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-sm font-semibold text-gray-700">Dashboard</span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: 'Contactos', value: '847' },
                  { label: 'Miembros', value: '12' },
                  { label: 'Esta semana', value: '34' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                    <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                    <p className="mt-0.5 text-[11px] text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Activity list */}
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Actividad reciente</p>
              <div className="space-y-2">
                {[
                  { name: 'Carlos Ruiz', action: 'Llamada', time: 'hace 2h', color: '#0035b9' },
                  { name: 'María García', action: 'Reunión', time: 'hace 5h', color: '#254edb' },
                  { name: 'Pedro López', action: 'Email', time: 'ayer', color: '#22c55e' },
                  { name: 'Ana Martínez', action: 'Nota', time: 'ayer', color: '#f97316' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.action}</p>
                    </div>
                    <span className="shrink-0 text-xs text-gray-400">{item.time}</span>
                  </div>
                ))}
              </div>

              {/* Labels row */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {[
                  { name: 'Cliente VIP', color: '#0035b9' },
                  { name: 'Proveedor', color: '#22c55e' },
                  { name: 'Lead', color: '#f97316' },
                  { name: 'Partner', color: '#8b5cf6' },
                ].map((l) => (
                  <span
                    key={l.name}
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{ backgroundColor: l.color + '18', color: l.color, border: `1px solid ${l.color}33` }}
                  >
                    {l.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="funciones" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal className="text-center">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0035b9]">
              Funciones
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">
              Todo lo que necesitas,
              <br />
              <span className="text-[#0035b9]">nada de lo que no.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
              Diseñado para equipos que necesitan organización sin complejidad. Simple de usar, potente cuando lo necesitas.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80} className="h-full">
                <div className="group h-full rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${f.color}`}>
                    {f.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="precios" className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal className="text-center">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0035b9]">
              Precios
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900">
              Un plan, cuatro formas de pagarlo
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-gray-500">
              Todas las funciones incluidas en cualquier opción. Sin límites de contactos ni de usuarios.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              ✦ Prueba gratuita de 3 días · Tarjeta requerida · Cancela cuando quieras
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.id} delay={i * 80} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg ${
                    plan.popular
                      ? 'border-[#0035b9] bg-[#0035b9] text-white shadow-xl shadow-blue-200'
                      : 'border-gray-200 bg-white hover:border-blue-200 hover:shadow-blue-50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-[#c7d2fe] px-3 py-1 text-xs font-bold text-[#0035b9]">
                        Más popular
                      </span>
                    </div>
                  )}

                  <p className={`text-sm font-semibold ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                    {plan.name}
                  </p>

                  <div className="mt-3">
                    <p className={`text-3xl font-black ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.perMonth ?? plan.billed.split(' ')[0] + ' €'}
                    </p>
                    {plan.perMonth && (
                      <p className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`}>
                        por mes
                      </p>
                    )}
                    {!plan.perMonth && (
                      <p className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`}>
                        por mes
                      </p>
                    )}
                  </div>

                  <p className={`mt-1 text-xs ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`}>
                    {plan.billed}
                  </p>

                  {plan.saving && (
                    <span
                      className={`mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
                        plan.popular
                          ? 'bg-blue-400/30 text-blue-100'
                          : 'bg-emerald-50 text-emerald-600'
                      }`}
                    >
                      {plan.saving}
                    </span>
                  )}

                  <ul className="mt-5 flex-1 space-y-2">
                    {planFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <svg
                          className={`mt-0.5 h-4 w-4 shrink-0 ${plan.popular ? 'text-blue-200' : 'text-emerald-500'}`}
                          fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/registro?plan=${plan.id}`}
                    className={`mt-6 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                      plan.popular
                        ? 'bg-white text-[#0035b9] hover:bg-blue-50 shadow-md'
                        : 'bg-[#0035b9] text-white hover:bg-[#002494] shadow-md shadow-blue-100'
                    }`}
                  >
                    Empezar prueba gratuita
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="bg-[#0035b9] py-20">
        <ScrollReveal className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-black text-white">
            ¿Listo para empezar?
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Crea tu cuenta en menos de 2 minutos. 3 días gratuitos, sin compromiso.
          </p>
          <Link
            href="/registro"
            className="mt-8 inline-block rounded-xl bg-white px-10 py-4 text-base font-bold text-[#0035b9] shadow-lg hover:bg-blue-50 transition-all hover:-translate-y-0.5"
          >
            Crear cuenta gratis →
          </Link>
        </ScrollReveal>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <ContactManagerLogo dark width={190} />
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
                La plataforma SaaS para gestionar tu cartera de contactos en equipo. Desde web y móvil.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Producto</p>
              <ul className="space-y-2.5">
                {['Funciones', 'Precios', 'Seguridad', 'Changelog'].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Empresa</p>
              <ul className="space-y-2.5">
                {['Sobre nosotros', 'Contacto', 'Política de privacidad', 'Términos de uso'].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-gray-600">© {new Date().getFullYear()} Tres Tristes Tigres · ContactManager</p>
            <p className="text-xs text-gray-600">Hecho con ♥ en España</p>
          </div>
        </div>
      </footer>
    </>
  )
}

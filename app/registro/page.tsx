'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ContactManagerLogo } from '@/components/ContactManagerLogo'

/* ── Types ─────────────────────────────────────── */
interface EmpresaData {
  nombre: string
  razonSocial: string
  nif: string
  direccionFiscal: string
}

interface PersonalData {
  nombre: string
  email: string
  password: string
  confirmPassword: string
}

type PlanId = 'monthly' | 'quarterly' | 'biannual' | 'annual'

const PLANS: Record<PlanId, { name: string; price: string; desc: string }> = {
  monthly:   { name: 'Mensual',    price: '29 € / mes',             desc: 'Facturación mensual' },
  quarterly: { name: 'Trimestral', price: '25 € / mes (75 € / 3m)', desc: 'Facturación trimestral' },
  biannual:  { name: 'Semestral',  price: '23 € / mes (138 € / 6m)', desc: 'Facturación semestral' },
  annual:    { name: 'Anual',      price: '20 € / mes (240 € / año)', desc: 'Facturación anual' },
}

const STEPS = [
  { number: 1, label: 'Empresa',  sublabel: 'Datos de tu organización' },
  { number: 2, label: 'Personal', sublabel: 'Tu cuenta de acceso' },
  { number: 3, label: 'Pago',     sublabel: 'Elige tu plan' },
]

/* ── Step indicators ────────────────────────────── */
function StepSidebar({ current }: { current: number }) {
  return (
    <aside className="flex w-full flex-col bg-gray-50 px-8 py-10 lg:w-80 lg:min-h-screen lg:border-r lg:border-gray-200">
      <Link href="/" className="mb-10 block">
        <ContactManagerLogo width={180} />
      </Link>

      <div className="space-y-1">
        {STEPS.map((step) => {
          const done = step.number < current
          const active = step.number === current
          return (
            <div
              key={step.number}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-colors ${
                active ? 'bg-white shadow-sm' : ''
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all ${
                  done
                    ? 'bg-emerald-500 text-white'
                    : active
                    ? 'bg-[#0035b9] text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {done ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <div>
                <p className={`text-sm font-semibold ${active ? 'text-gray-900' : done ? 'text-gray-600' : 'text-gray-400'}`}>
                  {step.label}
                </p>
                <p className={`text-xs ${active ? 'text-gray-500' : done ? 'text-gray-400' : 'text-gray-300'}`}>
                  {step.sublabel}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-auto pt-10">
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-xs font-semibold text-[#0035b9]">✦ 3 días gratis</p>
          <p className="mt-1 text-xs text-blue-500">
            No se realiza ningún cobro hasta que finalice el periodo de prueba. Cancela en cualquier momento.
          </p>
        </div>
      </div>
    </aside>
  )
}

/* ── Step 1: Empresa ────────────────────────────── */
function Step1({
  data,
  onChange,
  onNext,
}: {
  data: EmpresaData
  onChange: (d: EmpresaData) => void
  onNext: () => void
}) {
  const [errors, setErrors] = useState<Partial<EmpresaData>>({})

  function validate() {
    const e: Partial<EmpresaData> = {}
    if (!data.nombre.trim()) e.nombre = 'El nombre de la empresa es obligatorio'
    if (!data.nif.trim()) e.nif = 'El NIF/CIF es obligatorio'
    if (!data.direccionFiscal.trim()) e.direccionFiscal = 'La dirección fiscal es obligatoria'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleNext() {
    if (validate()) onNext()
  }

  return (
    <div className="animate-scale-in">
      <h2 className="text-2xl font-black text-gray-900">Datos de tu empresa</h2>
      <p className="mt-1 text-sm text-gray-500">Información de tu organización para la facturación.</p>

      <div className="mt-8 space-y-5">
        <Field
          label="Nombre de la empresa *"
          value={data.nombre}
          onChange={(v) => onChange({ ...data, nombre: v })}
          error={errors.nombre}
          placeholder="Ej. Acme S.L."
        />
        <Field
          label="Razón social"
          value={data.razonSocial}
          onChange={(v) => onChange({ ...data, razonSocial: v })}
          placeholder="Si es diferente al nombre comercial"
        />
        <Field
          label="NIF / CIF *"
          value={data.nif}
          onChange={(v) => onChange({ ...data, nif: v })}
          error={errors.nif}
          placeholder="Ej. B12345678"
        />
        <Field
          label="Dirección fiscal *"
          value={data.direccionFiscal}
          onChange={(v) => onChange({ ...data, direccionFiscal: v })}
          error={errors.direccionFiscal}
          placeholder="Calle, número, CP, ciudad, provincia"
          multiline
        />
      </div>

      <button
        onClick={handleNext}
        className="mt-8 w-full rounded-xl bg-[#0035b9] py-3.5 text-sm font-semibold text-white hover:bg-[#002494] transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-100"
      >
        Continuar →
      </button>
    </div>
  )
}

/* ── Step 2: Personal ───────────────────────────── */
function Step2({
  data,
  onChange,
  onNext,
  onBack,
}: {
  data: PersonalData
  onChange: (d: PersonalData) => void
  onNext: () => void
  onBack: () => void
}) {
  const [errors, setErrors] = useState<Partial<PersonalData>>({})
  const [showPass, setShowPass] = useState(false)

  function validate() {
    const e: Partial<PersonalData> = {}
    if (!data.nombre.trim()) e.nombre = 'Tu nombre es obligatorio'
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = 'Introduce un email válido'
    if (data.password.length < 8) e.password = 'La contraseña debe tener al menos 8 caracteres'
    if (data.password !== data.confirmPassword) e.confirmPassword = 'Las contraseñas no coinciden'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleNext() {
    if (validate()) onNext()
  }

  return (
    <div className="animate-scale-in">
      <h2 className="text-2xl font-black text-gray-900">Tu cuenta personal</h2>
      <p className="mt-1 text-sm text-gray-500">Serás el administrador (owner) de la organización.</p>

      <div className="mt-8 space-y-5">
        <Field
          label="Nombre completo *"
          value={data.nombre}
          onChange={(v) => onChange({ ...data, nombre: v })}
          error={errors.nombre}
          placeholder="Ej. Carlos Rodríguez"
        />
        <Field
          label="Email *"
          type="email"
          value={data.email}
          onChange={(v) => onChange({ ...data, email: v })}
          error={errors.email}
          placeholder="tu@empresa.com"
        />

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">Contraseña *</label>
          <div className="relative">
            <input
              type={showPass ? 'text' : 'password'}
              value={data.password}
              onChange={(e) => onChange({ ...data, password: e.target.value })}
              placeholder="Mínimo 8 caracteres"
              className={`h-11 w-full rounded-xl border bg-white px-4 pr-11 text-sm outline-none transition-all focus:ring-2 focus:ring-[#0035b9]/20 focus:border-[#0035b9] ${
                errors.password ? 'border-red-400' : 'border-gray-200'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPass ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
        </div>

        <Field
          label="Confirmar contraseña *"
          type="password"
          value={data.confirmPassword}
          onChange={(v) => onChange({ ...data, confirmPassword: v })}
          error={errors.confirmPassword}
          placeholder="Repite la contraseña"
        />
      </div>

      <div className="mt-8 flex gap-3">
        <button
          onClick={onBack}
          className="w-1/3 rounded-xl border border-gray-200 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
        >
          ← Atrás
        </button>
        <button
          onClick={handleNext}
          className="flex-1 rounded-xl bg-[#0035b9] py-3.5 text-sm font-semibold text-white hover:bg-[#002494] transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-100"
        >
          Continuar →
        </button>
      </div>
    </div>
  )
}

const PLAN_PRICE_IDS: Record<PlanId, string> = {
  monthly:   process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY   ?? '',
  quarterly: process.env.NEXT_PUBLIC_STRIPE_PRICE_QUARTERLY ?? '',
  biannual:  process.env.NEXT_PUBLIC_STRIPE_PRICE_BIANNUAL  ?? '',
  annual:    process.env.NEXT_PUBLIC_STRIPE_PRICE_ANNUAL    ?? '',
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8000'

/* ── Step 3: Pago ───────────────────────────────── */
function Step3({
  initialPlan,
  empresa,
  personal,
  onBack,
}: {
  initialPlan: PlanId
  empresa: EmpresaData
  personal: PersonalData
  onBack: () => void
}) {
  const [selected, setSelected] = useState<PlanId>(initialPlan)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCheckout() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/v1/public/checkout-init`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: personal.nombre,
          email: personal.email,
          password: personal.password,
          password_confirmation: personal.confirmPassword,
          tenant_name: empresa.nombre,
          razon_social: empresa.razonSocial || undefined,
          nif: empresa.nif || undefined,
          direccion_fiscal: empresa.direccionFiscal || undefined,
          price_id: PLAN_PRICE_IDS[selected],
        }),
      })
      const json = await res.json()
      if (res.ok && json.data?.checkout_url) {
        window.location.href = json.data.checkout_url
      } else {
        setError(json.message ?? 'No se pudo iniciar el pago. Inténtalo de nuevo.')
        setLoading(false)
      }
    } catch {
      setError('Error de conexión. Inténtalo de nuevo.')
      setLoading(false)
    }
  }

  return (
    <div className="animate-scale-in">
      <h2 className="text-2xl font-black text-gray-900">Elige tu plan</h2>
      <p className="mt-1 text-sm text-gray-500">
        3 días de prueba gratuita. No se cobra hasta que finalice el periodo de prueba.
      </p>

      <div className="mt-8 space-y-3">
        {(Object.entries(PLANS) as [PlanId, typeof PLANS[PlanId]][]).map(([id, plan]) => (
          <label
            key={id}
            className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-all ${
              selected === id
                ? 'border-[#0035b9] bg-blue-50/50 ring-2 ring-[#0035b9]/20'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <input
              type="radio"
              name="plan"
              value={id}
              checked={selected === id}
              onChange={() => setSelected(id)}
              className="h-4 w-4 accent-[#0035b9]"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{plan.name}</p>
              <p className="text-xs text-gray-500">{plan.desc}</p>
            </div>
            <p className="text-sm font-bold text-gray-900 text-right">{plan.price}</p>
          </label>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4">
        <p className="text-sm font-medium text-amber-800">
          💳 Se requiere tarjeta de crédito
        </p>
        <p className="mt-1 text-xs text-amber-700">
          No se realizará ningún cargo durante los 3 días de prueba. Puedes cancelar antes de que finalice sin coste alguno.
        </p>
      </div>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="mt-8 flex gap-3">
        <button
          onClick={onBack}
          className="w-1/3 rounded-xl border border-gray-200 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
        >
          ← Atrás
        </button>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0035b9] py-3.5 text-sm font-semibold text-white hover:bg-[#002494] disabled:opacity-70 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-100"
        >
          {loading ? (
            <>
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Redirigiendo a Stripe…
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
              Ir al pago con Stripe
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-gray-400">
        Al continuar aceptas nuestros{' '}
        <a href="#" className="text-[#0035b9] hover:underline">términos de uso</a>{' '}
        y{' '}
        <a href="#" className="text-[#0035b9] hover:underline">política de privacidad</a>.
      </p>
    </div>
  )
}

/* ── Reusable Field ─────────────────────────────── */
function Field({
  label, value, onChange, error, placeholder, type = 'text', multiline = false,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
  placeholder?: string
  type?: string
  multiline?: boolean
}) {
  const cls = `w-full rounded-xl border bg-white px-4 text-sm outline-none transition-all focus:ring-2 focus:ring-[#0035b9]/20 focus:border-[#0035b9] ${
    error ? 'border-red-400' : 'border-gray-200'
  }`
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className={`${cls} py-3 resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${cls} h-11`}
        />
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

/* ── Main page ──────────────────────────────────── */
function RegistroContent() {
  const searchParams = useSearchParams()
  const planParam = (searchParams.get('plan') ?? 'annual') as PlanId
  const validPlan = planParam in PLANS ? planParam : 'annual'

  const [step, setStep] = useState(1)
  const [empresa, setEmpresa] = useState<EmpresaData>({
    nombre: '', razonSocial: '', nif: '', direccionFiscal: '',
  })
  const [personal, setPersonal] = useState<PersonalData>({
    nombre: '', email: '', password: '', confirmPassword: '',
  })

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <StepSidebar current={step} />

      <main className="flex flex-1 items-start justify-center px-6 py-12 lg:items-center lg:py-0">
        <div className="w-full max-w-md">
          {/* Progress bar (mobile) */}
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            {STEPS.map((s) => (
              <div
                key={s.number}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  s.number <= step ? 'bg-[#0035b9]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {step === 1 && (
            <Step1
              data={empresa}
              onChange={setEmpresa}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <Step2
              data={personal}
              onChange={setPersonal}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <Step3
              initialPlan={validPlan}
              empresa={empresa}
              personal={personal}
              onBack={() => setStep(2)}
            />
          )}

        </div>
      </main>
    </div>
  )
}

export default function RegistroPage() {
  return (
    <Suspense>
      <RegistroContent />
    </Suspense>
  )
}

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Wave CRM helped us unify sales and success data so every conversation feels personal. Pipeline velocity is up 28% in two quarters.',
    name: 'Ava Patel',
    role: 'VP Sales, Northwind',
  },
  {
    quote: 'The automations are a game changer. We replaced a tangle of tools with one clean system our team actually loves to use.',
    name: 'Liam Chen',
    role: 'Head of RevOps, Spire',
  },
  {
    quote: 'From onboarding to analytics, everything is thoughtful and fast. Security checks passed without a hitch.',
    name: 'Maya Rodriguez',
    role: 'COO, Polaris',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Stars />
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Teams move faster with Wave</h2>
          <p className="mt-2 text-slate-600">Loved by modern GTM teams across SaaS, fintech, and marketplaces.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Quote className="h-8 w-8 text-indigo-600" />
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <div className="mt-6">
                <p className="font-medium text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

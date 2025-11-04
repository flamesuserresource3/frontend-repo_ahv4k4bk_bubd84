import Spline from '@splinetool/react-spline'
import { Shield, Zap, CreditCard } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            New: Glassmorphic 3D cards
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Manage customer relationships with clarity and style
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            Wave CRM helps modern teams track interactions, automate workflows, and close deals faster — wrapped in a minimalist, delightful interface.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 font-medium shadow-sm hover:bg-slate-800">
              Start free trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 hover:bg-slate-50">
              See features
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-600" /> SOC2 ready</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-600" /> Automations</div>
            <div className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-indigo-600" /> No card needed</div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] md:h-[600px] lg:h-[660px] rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-blue-500/10 to-cyan-500/10 blur-2xl pointer-events-none" />
          <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-200/60 shadow-2xl shadow-indigo-500/10">
            <Spline 
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" 
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

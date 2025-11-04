import { useState } from 'react'
import { Menu, X, Rocket, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-500 grid place-items-center shadow-lg shadow-indigo-500/20">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-800">Wave CRM</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-slate-900 transition-colors">Stories</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-slate-600 hover:text-slate-900">Sign in</a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800 transition-colors">
            <User className="h-4 w-4" />
            Get Started
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg border border-slate-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4">
          <a href="#features" className="block text-slate-700">Features</a>
          <a href="#testimonials" className="block text-slate-700">Stories</a>
          <a href="#pricing" className="block text-slate-700">Pricing</a>
          <a href="#cta" className="block rounded-lg bg-slate-900 text-white px-4 py-2 text-center">Get Started</a>
        </div>
      )}
    </header>
  )
}

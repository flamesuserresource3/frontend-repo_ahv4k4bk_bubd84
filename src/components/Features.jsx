import { Sparkles, Workflow, BarChart3, Users, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Smart timelines',
    desc: 'Every touchpoint automatically organized across channels so your team never misses context.'
  },
  {
    icon: Workflow,
    title: 'Automated workflows',
    desc: 'Drag-and-drop sequences that qualify leads, assign owners, and move deals forward.'
  },
  {
    icon: BarChart3,
    title: 'Real-time analytics',
    desc: 'Forecast with confidence using up-to-the-minute pipeline, revenue, and activity insights.'
  },
  {
    icon: Users,
    title: 'Account hierarchies',
    desc: 'Model complex org structures with parent-child accounts and role-based visibility.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    desc: 'SSO, SCIM, audit logs, and fine-grained permissions built-in from day one.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo-50 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Designed for momentum</h2>
          <p className="mt-3 text-slate-600">Tools that keep your team focused on what matters — relationships and revenue.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-600 grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

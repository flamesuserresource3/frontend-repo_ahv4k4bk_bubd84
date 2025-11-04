import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
              <p className="mt-2 text-slate-600">Start free. Scale as your team grows.</p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Starter</h3>
                <p className="mt-1 text-sm text-slate-600">For individuals and small teams evaluating Wave.</p>
                <p className="mt-6 text-4xl font-extrabold">$0</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-700 list-disc pl-5">
                  <li>Up to 3 pipelines</li>
                  <li>Basic automations</li>
                  <li>Community support</li>
                </ul>
                <a href="#cta" className="mt-6 inline-flex rounded-lg bg-slate-900 text-white px-4 py-2 font-medium">Get started</a>
              </div>

              <div className="rounded-2xl border-2 border-slate-900 bg-gradient-to-b from-white to-slate-50 p-6 shadow-md">
                <p className="inline-flex items-center rounded-full bg-slate-900 text-white px-2 py-1 text-xs">Most popular</p>
                <h3 className="mt-3 text-lg font-semibold">Growth</h3>
                <p className="mt-1 text-sm text-slate-600">Advanced features for growing teams.</p>
                <p className="mt-6 text-4xl font-extrabold">$29<span className="text-base font-semibold text-slate-600">/user</span></p>
                <ul className="mt-6 space-y-2 text-sm text-slate-700 list-disc pl-5">
                  <li>Unlimited pipelines</li>
                  <li>Advanced automations</li>
                  <li>Analytics & forecasts</li>
                  <li>SSO and SCIM</li>
                </ul>
                <a href="#cta" className="mt-6 inline-flex rounded-lg bg-slate-900 text-white px-4 py-2 font-medium">Choose Growth</a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Enterprise</h3>
                <p className="mt-1 text-sm text-slate-600">Custom controls and support for large organizations.</p>
                <p className="mt-6 text-4xl font-extrabold">Custom</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-700 list-disc pl-5">
                  <li>Dedicated success manager</li>
                  <li>Advanced governance</li>
                  <li>Onboarding & training</li>
                </ul>
                <a href="#cta" className="mt-6 inline-flex rounded-lg border border-slate-300 px-4 py-2 font-medium">Contact sales</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App

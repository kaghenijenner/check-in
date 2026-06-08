import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.18),_transparent_26%),linear-gradient(180deg,_#08111f_0%,_#050816_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 -translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 translate-x-1/3 rounded-full bg-blue-500/20 blur-3xl animate-drift" />

      <Header />
      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 pb-20 pt-10 md:px-10 lg:px-12">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-xl animate-pop-in">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Stay consistent with tasks, goals, and accountability
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl animate-slide-up">
                A check-in app that keeps your daily and monthly goals on track.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl animate-slide-up [animation-delay:120ms]">
                Set tasks, goals, or recurring monthly targets, then check them
                off as you complete them. Add an accountability partner who gets
                notified too, so you never have to stay on track alone.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row animate-slide-up [animation-delay:180ms]">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 font-medium text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                Start checking in
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-medium text-white backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-white/10"
              >
                See the flow
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 animate-slide-up [animation-delay:240ms]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="text-2xl font-semibold">Daily</div>
                <div className="mt-1 text-sm text-slate-300">
                  Keep habits visible
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="text-2xl font-semibold">Monthly</div>
                <div className="mt-1 text-sm text-slate-300">
                  Track long-term goals
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="text-2xl font-semibold">Partner</div>
                <div className="mt-1 text-sm text-slate-300">
                  Stay accountable together
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in [animation-delay:120ms]">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-sm text-slate-400">
                    Check-in dashboard
                  </div>
                  <div className="text-lg font-medium">
                    Tasks, goals, reminders
                  </div>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Live
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-slate-400">Today’s progress</div>
                  <div className="mt-3 text-3xl font-semibold">8/10</div>
                  <div className="mt-4 h-24 rounded-xl bg-[linear-gradient(135deg,_rgba(56,189,248,0.2),_rgba(59,130,246,0.05))] p-3">
                    <div className="flex h-full items-end gap-2">
                      <div className="h-6 w-2 rounded-full bg-cyan-200/80 animate-grow" />
                      <div className="h-10 w-2 rounded-full bg-cyan-200/80 animate-grow [animation-delay:100ms]" />
                      <div className="h-16 w-2 rounded-full bg-cyan-200/80 animate-grow [animation-delay:180ms]" />
                      <div className="h-12 w-2 rounded-full bg-cyan-200/80 animate-grow [animation-delay:260ms]" />
                      <div className="h-20 w-2 rounded-full bg-cyan-200/80 animate-grow [animation-delay:340ms]" />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-slate-400">Reminder flow</div>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
                      Task not checked in by the deadline
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
                      Email sent to the user
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
                      Email sent to the accountability partner
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.03))] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-slate-400">Built for</div>
                      <div className="mt-1 text-lg font-medium">
                        People who want structure and accountability
                      </div>
                    </div>
                    <div className="flex gap-2 text-xs text-slate-300">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        Daily tasks
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        Monthly goals
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        Email alerts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl animate-slide-up">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
              Daily check-ins
            </div>
            <h2 className="mt-3 text-3xl font-semibold">
              Build a simple habit you can actually repeat.
            </h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Add your tasks for the day, mark them complete, and keep your
              momentum visible instead of letting important work disappear.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2">
                Task lists
              </span>
              <span className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2">
                Daily reminders
              </span>
              <span className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2">
                Progress tracking
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl animate-slide-up [animation-delay:120ms]">
            <div className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
              Accountability partners
            </div>
            <h2 className="mt-3 text-3xl font-semibold">
              Let another person help keep you honest.
            </h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Invite someone you trust, let them see your missed check-ins, and
              automatically notify both of you when a task is overdue.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2">
                Partner invites
              </span>
              <span className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2">
                Email alerts
              </span>
              <span className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2">
                Shared accountability
              </span>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
            <div className="text-lg font-medium">Daily and monthly tasks</div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Keep short-term habits and long-term goals in one place so nothing
              gets lost.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
            <div className="text-lg font-medium">
              Accountability partner support
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Invite someone to help you stay consistent and receive alerts when
              check-ins are missed.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
            <div className="text-lg font-medium">Automatic email reminders</div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Notify the user and their partner when a task passes the time they
              specified.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

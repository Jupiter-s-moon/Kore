// src/components/TailwindShowcase.tsx
const TailwindShowcase = () => {
  return (
    <div className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-fuchsia-900">
      {/* Blobs animados de fondo */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl animate-ping [animation-duration:3s]" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl animate-pulse [animation-duration:4s]" />

      {/* Tarjeta “glass” centrada */}
      <div className="relative z-10 mx-4 max-w-3xl w-full">
        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-10 text-white">
          {/* Header dentro de la card */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg">
              <span className="text-2xl animate-spin [animation-duration:6s]">
                ⚙️
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Tailwind{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-cyan-300 to-emerald-300">
                Showcase
              </span>
            </h1>
          </div>

          {/* Subtítulo con degradé animado (truco con bg-size) */}
          <p className="mt-4 text-sm sm:text-base text-white/80">
            Centrado, animado, con{" "}
            <span className="underline decoration-dotted">glassmorphism</span>,
            blobs y transiciones.
          </p>

          {/* Botones con microinteracciones */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold
                         bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-400 hover:to-indigo-400
                         shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-400/30
                         transition-all duration-300 active:scale-95"
            >
              <span className="inline-block transition-transform group-hover:-translate-y-0.5">
                Probar
              </span>
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <button
              className="rounded-2xl px-6 py-3 font-semibold
                         bg-white/10 hover:bg-white/20 border border-white/20
                         backdrop-blur-md shadow-lg transition-all duration-300"
            >
              Ver código
            </button>
          </div>

          {/* Grid de “badges” responsivo */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              "center",
              "animate",
              "glass",
              "responsive",
              "hover",
              "blur",
              "shadow",
              "gradient",
            ].map((t) => (
              <div
                key={t}
                className="text-xs sm:text-sm rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-center
                           hover:bg-white/20 hover:border-white/20 transition"
              >
                {t}
              </div>
            ))}
          </div>

          {/* Línea decorativa con brillo */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Footer con indicador de estado */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-white/70">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
            Tailwind activo y feliz ✨
          </div>
        </div>

        {/* Flecha flotante */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
          ↓
        </div>
      </div>
    </div>
  );
};

export default TailwindShowcase;

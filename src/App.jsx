import { SUCURSALES } from './data/sucursales.js';
import { BrandHeader } from './components/BrandHeader.jsx';
import { SucursalCard } from './components/SucursalCard.jsx';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen w-full bg-[#0B0F19] text-white flex flex-col justify-between overflow-x-hidden">
      {/* La luz superior abre la escena antes que las tarjetas. */}
      <div
        aria-hidden="true"
        className="entrada-luz pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,69,165,0.42),rgba(11,34,101,0.2)_55%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="entrada-luz entrada-luz-baja pointer-events-none fixed bottom-0 inset-x-0 mx-auto h-72 w-full max-w-lg bg-[radial-gradient(circle_at_center,rgba(11,34,101,0.28),transparent_70%)]"
      />

      <main className="relative z-10 mx-auto w-full max-w-md px-4 pt-6 pb-10 flex-1 flex flex-col justify-between">
        <div>
          <BrandHeader logoSrc="/logo.PNG" />

          <section
            aria-label="Sucursales de Pinturas Carabobo"
            className="space-y-4"
          >
            {SUCURSALES.map((sucursal, index) => (
              <SucursalCard key={sucursal.id} sucursal={sucursal} index={index} />
            ))}
          </section>
        </div>

        <footer className="entrada-pie mt-8 pt-5 border-t border-slate-800/70 text-center">
          <p className="text-xs text-slate-400 leading-relaxed">
            © {currentYear} Pinturas Carabobo, C.A. Todos los derechos reservados.
          </p>
        </footer>
      </main>
    </div>
  );
}

import { useState } from 'react';
import { PaintBucket } from 'lucide-react';

const LOGO_POR_DEFECTO = '/logo.PNG';

export function BrandHeader({ logoSrc = LOGO_POR_DEFECTO }) {
  // Si el archivo no carga, se muestra el título de respaldo.
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <header className="flex flex-col items-center text-center pt-1 pb-4">
      <div className="entrada-logo relative mb-3 flex flex-col items-center">
        {!logoFailed ? (
          <>
            <h1 className="sr-only">Pinturas Carabobo, C.A.</h1>
            {/* El logo trae fondo negro: va directo sobre el azul noche, sin placa blanca. */}
            <div className="relative flex items-center justify-center rounded-2xl px-2 py-1 ring-2 ring-[#FBBF24]/70">
              <img
                src={logoSrc}
                alt="Logotipo de Pinturas Carabobo, C.A."
                width={240}
                height={120}
                loading="eager"
                decoding="async"
                onError={() => setLogoFailed(true)}
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </div>
          </>
        ) : (
          <div
            className="group relative flex flex-col items-center select-none"
            aria-label="Pinturas Carabobo, C.A."
          >
            <div className="relative mb-2.5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0045A5] via-[#0B2265] to-[#0B0F19] p-0.5 shadow-[0_8px_28px_-4px_rgba(0,69,165,0.65)] ring-1 ring-[#FBBF24]/40">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-gradient-to-b from-[#0B2265]/90 to-[#0B0F19]">
                <PaintBucket
                  className="h-7 w-7 text-[#FBBF24] drop-shadow-[0_2px_8px_rgba(251,191,36,0.4)]"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 h-1.5 w-9 rounded-full bg-gradient-to-r from-[#0045A5] via-[#FBBF24] to-[#0045A5]"
              />
            </div>

            <h1 className="font-display text-2xl sm:text-[26px] font-extrabold tracking-tight text-white leading-tight">
              PINTURAS{' '}
              <span className="text-[#FBBF24] drop-shadow-[0_2px_10px_rgba(251,191,36,0.22)]">
                CARABOBO
              </span>{' '}
              <span className="text-xs font-semibold text-slate-300 align-baseline">
                C.A.
              </span>
            </h1>
          </div>
        )}
      </div>

      <div className="entrada-texto flex flex-col items-center">
        <p className="text-sm font-medium text-[#FBBF24]/95 tracking-wide">
          ¡Ubicaciones y contacto directo!
        </p>
        <p className="mt-0.5 text-xs text-slate-300/80 max-w-[32ch] leading-relaxed">
          Selecciona tu sede más cercana en Carabobo para escribirnos por WhatsApp o abrir el GPS.
        </p>
      </div>
    </header>
  );
}

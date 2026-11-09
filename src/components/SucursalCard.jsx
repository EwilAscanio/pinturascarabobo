import { MapPin, Clock, Navigation } from 'lucide-react';
import { buildWhatsAppUrl, resolveGoogleMapsUrl } from '../data/sucursales.js';

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.461 3.484 1.336 5.008L2 22l5.164-1.352a9.932 9.932 0 0 0 4.867 1.273h.004c5.516 0 9.969-4.453 9.969-9.969 0-2.664-1.039-5.168-2.922-7.051A9.908 9.908 0 0 0 12.031 2Zm5.824 14.273c-.242.684-1.414 1.309-1.977 1.391-.508.074-1.152.105-1.859-.117-.43-.137-.98-.32-1.688-.625-2.969-1.281-4.906-4.27-5.055-4.469-.148-.199-1.207-1.605-1.207-3.063 0-1.457.762-2.172 1.031-2.469.27-.297.59-.371.789-.371.195 0 .395.004.566.012.184.008.426-.07.668.508.246.594.836 2.047.91 2.195.074.148.125.32.023.52-.098.199-.148.32-.297.496-.148.172-.312.387-.445.52-.148.148-.305.309-.133.605.172.297.766 1.266 1.645 2.047 1.133 1.008 2.086 1.32 2.383 1.469.297.148.469.125.641-.074.172-.199.738-.863.938-1.16.195-.297.395-.246.664-.148.273.098 1.727.813 2.023.961.297.148.492.223.566.348.074.121.074.715-.168 1.398Z" />
    </svg>
  );
}

export function SucursalCard({ sucursal, index = 0 }) {
  const esPrincipal = Boolean(sucursal.destacado);
  const orden = { '--orden': index };

  const whatsappHref = buildWhatsAppUrl(sucursal.whatsapp, sucursal.mensajeWhatsapp);
  const mapsHref = resolveGoogleMapsUrl(sucursal);

  return (
    <article style={orden} aria-labelledby={`heading-${sucursal.id}`} className="entrada-tarjeta">
      <div
        className={`entrada-tarjeta-cuerpo relative rounded-2xl p-5 ${
          esPrincipal
            ? 'bg-gradient-to-b from-[#0B2265]/90 via-[#0B2265]/65 to-[#0B0F19]/95 border-2 border-[#FBBF24] shadow-[0_8px_30px_-6px_rgba(251,191,36,0.28)]'
            : 'bg-[#0B2265]/30 hover:bg-[#0B2265]/45 border border-[#0045A5]/40 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]'
        }`}
      >
      <div className="mb-3">
        {esPrincipal && sucursal.etiqueta && (
          <div className="mb-2">
            <span className="inline-block rounded-md bg-[#FBBF24] px-2.5 py-0.5 text-[11px] font-extrabold tracking-wide text-[#0B0F19]">
              {sucursal.etiqueta}
            </span>
          </div>
        )}
        <h2
          id={`heading-${sucursal.id}`}
          className={`font-display text-lg font-bold tracking-tight ${
            esPrincipal ? 'text-white' : 'text-slate-100'
          }`}
        >
          {sucursal.nombre}
        </h2>
      </div>

      <div className="space-y-2 text-sm text-slate-200/90 mb-4">
        <div className="flex items-start gap-2.5">
          <MapPin
            className={`h-4 w-4 shrink-0 mt-0.5 ${
              esPrincipal ? 'text-[#FBBF24]' : 'text-[#38BDF8]'
            }`}
            aria-hidden="true"
          />
          <p className="font-medium text-slate-100 leading-relaxed">{sucursal.direccion}</p>
        </div>

        <div className="flex items-center justify-between gap-2 pt-0.5">
          <div className="flex items-center gap-2">
            <Clock
              className={`h-4 w-4 shrink-0 ${
                esPrincipal ? 'text-[#FBBF24]' : 'text-[#38BDF8]'
              }`}
              aria-hidden="true"
            />
            <span className="text-xs text-slate-300 font-medium tabular-nums whitespace-nowrap">
              {sucursal.horario}
            </span>
          </div>
          <span className="text-xs text-[#FBBF24] font-semibold tabular-nums whitespace-nowrap">
            {sucursal.whatsapp}
          </span>
        </div>
      </div>

      <div style={orden} className="entrada-botones grid grid-cols-2 gap-2.5 pt-1">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Contactar por WhatsApp a ${sucursal.nombre}`}
          className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-950/50 hover:bg-emerald-500 hover:-translate-y-0.5 transition-[background-color,transform] duration-200 ease-out active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 whitespace-nowrap"
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Cómo llegar a ${sucursal.nombre} en Google Maps`}
          className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-800 hover:border-slate-700 hover:-translate-y-0.5 transition-[background-color,border-color,transform] duration-200 ease-out active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBBF24] whitespace-nowrap"
        >
          <Navigation className="h-4 w-4 shrink-0 text-[#FBBF24]" aria-hidden="true" />
          <span>Cómo llegar</span>
        </a>
      </div>
      </div>
    </article>
  );
}

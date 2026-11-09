import React, { useState } from 'react';
import { buildGoogleMapsUrl, buildWhatsAppUrl } from '../data/branches';
import {
  PinIcon,
  ClockIcon,
  PhoneIcon,
  WhatsAppIcon,
  NavigationArrowIcon,
} from './BrandIcons';

export const BranchCard = ({ branch, index = 0 }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [strokeError, setStrokeError] = useState(false);

  const handleCopyPhone = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(branch.phoneDisplay);
      }
    } catch {
      // Fallback handled silently via state feedback
    }
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const strokeSrc =
    branch.cornerStroke === 'blue-lg'
      ? '/assets/brand/stroke-blue-lg.png'
      : branch.cornerStroke === 'blue-sm'
        ? '/assets/brand/stroke-blue-sm.png'
        : '/assets/brand/stroke-yellow.png';

  return (
    <article
      data-testid={`branch-card-${branch.id}`}
      style={{ '--orden': index }}
      className={branch.isFeatured ? 'tarjeta-sede tarjeta-sede-destacada' : 'tarjeta-sede'}
    >
      <div
        className={`tarjeta-sede-cuerpo relative overflow-hidden rounded-[22px] ${
          branch.isFeatured
            ? 'bg-gradient-to-b from-[#0a234b]/95 via-[#071936]/98 to-[#051329]/98 border-[2px] border-[#f5c400] shadow-[0_0_26px_rgba(245,196,0,0.34),inset_0_1px_12px_rgba(245,196,0,0.12)] px-5 pt-4 pb-5 sm:px-6 sm:pt-4 sm:pb-5'
            : 'bg-gradient-to-b from-[#0a2248]/95 via-[#071835]/95 to-[#051228]/98 border border-[#254d85]/90 shadow-[0_10px_28px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(125,180,255,0.2)] px-5 pt-4 pb-5 sm:px-6 sm:pt-4 sm:pb-5'
        }`}
      >
      {/* Top-right 3D paint brush stroke decoration matching the reference design */}
      <div className="pointer-events-none select-none absolute top-0 right-0 z-0">
        {!strokeError ? (
          <img
            src={strokeSrc}
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setStrokeError(true)}
            className={
              branch.cornerStroke === 'blue-lg'
                ? 'w-[145px] sm:w-[172px] h-auto object-contain opacity-95'
                : 'w-[125px] sm:w-[146px] h-auto object-contain opacity-95'
            }
          />
        ) : (
          <div
            className={`w-28 h-20 rounded-bl-full opacity-40 blur-md ${
              branch.cornerStroke === 'yellow' ? 'bg-[#f5c400]' : 'bg-[#0066ff]'
            }`}
          />
        )}
      </div>

      <div className="relative z-10">
        {/* Optional "Sede Central" top badge */}
        {branch.badge && (
          <div className="mb-1.5">
            <span className="inline-block rounded-full bg-gradient-to-b from-[#ffdf38] to-[#f2bc00] px-3.5 py-0.5 text-[13.5px] font-extrabold tracking-normal text-[#041229] shadow-[0_2px_8px_rgba(245,196,0,0.35)] whitespace-nowrap">
              {branch.badge}
            </span>
          </div>
        )}

        {/* Branch Heading */}
        <h2 className="text-[18px] sm:text-[22px] font-extrabold tracking-tight text-white leading-snug pr-2 sm:pr-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          {branch.name}
        </h2>

        {/* Details List: Address, Schedule, Phone */}
        <div className="mt-2.5 space-y-1.5">
          {/* Address Row */}
          <div className="flex items-start gap-2.5">
            <PinIcon className="w-[19px] h-[19px] shrink-0 mt-0.5" />
            <p className="text-[14.5px] sm:text-[15.5px] font-medium leading-[1.32] text-[#eef4ff]">
              {branch.address}
            </p>
          </div>

          {/* Schedule Row */}
          <div className="flex items-center gap-2.5">
            <ClockIcon className="w-[18px] h-[18px] shrink-0" />
            <p className="text-[14px] sm:text-[15px] font-normal text-[#cedcf2]">
              {branch.schedule}
            </p>
          </div>

          {/* Phone Row */}
          <div className="flex items-center gap-2.5 pt-0.5">
            <PhoneIcon className="w-[18px] h-[18px] shrink-0" />
            <button
              type="button"
              onClick={handleCopyPhone}
              aria-label={`Copiar teléfono ${branch.phoneDisplay} de ${branch.name}`}
              className="group inline-flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c400] rounded"
            >
              <span className="text-[15.5px] sm:text-[16.5px] font-extrabold tracking-wide text-[#f5c400] group-hover:text-[#ffe047] transition-colors tabular-nums">
                {branch.phoneDisplay}
              </span>
              {copiedPhone && (
                <span
                  role="status"
                  className="text-[11.5px] font-bold text-[#25d366] transition-opacity whitespace-nowrap"
                >
                  · ¡Copiado!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Action Buttons Row: WhatsApp & Cómo llegar */}
        <div className="tarjeta-sede-acciones mt-3.5 grid grid-cols-2 gap-3 sm:gap-4">
          <a
            href={buildWhatsAppUrl(branch.phoneRaw, branch.whatsappGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${branch.name}`}
            className="flex items-center justify-center gap-2.5 h-[44px] sm:h-[46px] px-4 rounded-[12px] bg-gradient-to-b from-[#25d366] via-[#1ab853] to-[#119c41] hover:from-[#2be06f] hover:to-[#14b04a] hover:-translate-y-0.5 active:scale-[0.98] border border-[#4be884]/60 shadow-[0_4px_14px_rgba(25,184,83,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] text-white font-bold text-[15.5px] sm:text-[16.5px] transition-[transform,background-color,box-shadow] duration-200 cursor-pointer whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c400]"
          >
            <WhatsAppIcon className="w-[23px] h-[23px] shrink-0" />
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>

          <a
            href={buildGoogleMapsUrl(branch)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Cómo llegar a ${branch.name}`}
            className="flex items-center justify-center gap-2 h-[44px] sm:h-[46px] px-4 rounded-[12px] bg-[#0a1b36]/90 hover:bg-[#102952] hover:-translate-y-0.5 hover:border-[#f5c400]/70 active:scale-[0.98] border border-[#4a6588]/85 shadow-[0_4px_12px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] text-white font-bold text-[15px] sm:text-[16px] transition-[transform,background-color,border-color] duration-200 cursor-pointer whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c400]"
          >
            <NavigationArrowIcon className="w-[20px] h-[20px] shrink-0" />
            <span className="whitespace-nowrap">Cómo llegar</span>
          </a>
        </div>
      </div>
      </div>
    </article>
  );
};

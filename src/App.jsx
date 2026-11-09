/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BRANCH_LOCATIONS } from './data/branches';
import { BranchCard } from './components/BranchCard';

export default function App() {
  const [logoImgError, setLogoImgError] = useState(false);
  const [topLeftError, setTopLeftError] = useState(false);
  const [topRightError, setTopRightError] = useState(false);
  const [bottomArtError, setBottomArtError] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#030e22] text-white flex flex-col items-center justify-start relative overflow-x-hidden">
      {/* Ambient radial lighting matching the deep navy studio backdrop */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 24%, rgba(16, 56, 118, 0.55) 0%, rgba(6, 23, 52, 0.85) 55%, rgba(3, 14, 34, 1) 100%)',
        }}
      />

      {/* Main Micropage Stage matching the 9:16 poster composition */}
      <div className="relative z-10 w-full max-w-[760px] min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#041430] via-[#061a3b] to-[#04122a] shadow-[0_0_90px_rgba(0,0,0,0.85)] border-x border-[#122b52]/50 overflow-hidden">
        {/* Top-left 3D Yellow Paint Splash */}
        <div className="pointer-events-none select-none absolute top-0 left-0 z-10 w-[135px] sm:w-[220px] md:w-[250px]">
          {!topLeftError && (
            <img
              src="/assets/brand/top-left-splash.png"
              alt=""
              referrerPolicy="no-referrer"
              onError={() => setTopLeftError(true)}
              className="w-full h-auto object-contain object-left-top"
            />
          )}
        </div>

        {/* Top-right 3D Paint Roller */}
        <div className="pointer-events-none select-none absolute top-0 right-0 z-10 w-[140px] sm:w-[225px] md:w-[255px]">
          {!topRightError && (
            <img
              src="/assets/brand/top-right-roller.png"
              alt=""
              referrerPolicy="no-referrer"
              onError={() => setTopRightError(true)}
              className="w-full h-auto object-contain object-right-top"
            />
          )}
        </div>

        {/* Main Content Column */}
        <main className="relative z-20 w-full max-w-[560px] mx-auto px-4 sm:px-6 pt-3 sm:pt-4 pb-6">
          {/* Header Brand Logo & Hero Headline */}
          <header className="flex flex-col items-center text-center">
            {/* PINTURAS Carabobo Logo Badge */}
            <div className="relative mb-2.5 sm:mb-3">
              {!logoImgError ? (
                <img
                  src="/assets/brand/logo-carabobo.png"
                  alt="Pinturas Carabobo"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoImgError(true)}
                  className="w-[215px] sm:w-[250px] h-auto rounded-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.5)] select-none"
                />
              ) : (
                <div className="px-6 py-3 rounded-[18px] bg-[#04132c] border-2 border-[#f5c400] shadow-lg flex flex-col items-center">
                  <span className="bg-[#0044cc] px-3 py-0.5 text-white font-black tracking-wider text-xl">
                    PINTURAS
                  </span>
                  <span className="text-[#4da6ff] font-extrabold italic text-2xl -mt-1">
                    Carabobo
                  </span>
                </div>
              )}
            </div>

            {/* Main Headline */}
            <h1
              className="text-[23px] sm:text-[31px] font-extrabold tracking-tight text-[#f5c400] leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]"
              style={{ textWrap: 'balance' }}
            >
              ¡Ubicaciones y contacto directo!
            </h1>

            {/* Subtitle */}
            <p className="mt-1.5 text-[14.5px] sm:text-[17px] font-medium text-[#eef4ff] leading-[1.35] max-w-[430px]">
              Selecciona tu sede más cercana en Carabobo para escribirnos por
              WhatsApp o abrir el GPS.
            </p>

            {/* Centered Golden-Yellow Divider Line */}
            <div
              aria-hidden="true"
              className="mt-3 w-[76px] h-[3.5px] rounded-full bg-[#f5c400] shadow-[0_0_10px_rgba(245,196,0,0.55)]"
            />
          </header>

          {/* 4 Branch Location Cards */}
          <section
            aria-label="Sedes de Pinturas Carabobo"
            className="mt-4 sm:mt-5 flex flex-col gap-3.5 sm:gap-4"
          >
            {BRANCH_LOCATIONS.map((branch, index) => (
              <BranchCard key={branch.id} branch={branch} index={index} />
            ))}
          </section>
        </main>

        {/* Bottom Footer with Golden Divider, Copyright & 3D Paint Splashes + Paint Can */}
        <footer className="relative w-full pt-2 pb-12 sm:pb-14 mt-auto overflow-hidden">
          {/* Thin golden-yellow fading horizontal line */}
          <div className="relative z-20 max-w-[490px] mx-auto px-6">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#f5c400]/70 to-transparent" />
            <p className="mt-3 text-center text-[12px] sm:text-[13.5px] font-medium text-[#dbe7fa] tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              © 2026 Pinturas Carabobo, C.A. Todos los derechos reservados.
            </p>
          </div>

          {/* Bottom 3D Paint Waves and Dripping Paint Can Artwork */}
          <div className="pointer-events-none select-none absolute bottom-0 left-0 right-0 z-10 w-full">
            {!bottomArtError && (
              <img
                src="/assets/brand/bottom-footer-art.png"
                alt=""
                referrerPolicy="no-referrer"
                onError={() => setBottomArtError(true)}
                className="w-full h-auto object-cover object-bottom"
              />
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export interface HeroSlide {
  src: string;
  title: string;
  subtitle: string;
}

interface Props {
  slides: HeroSlide[];
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export default function HeroSlider({
  slides,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-[#0a111f]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1100}
        loop
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(s) => setActive(s.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img
                src={slide.src}
                alt=""
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a111f]/85 via-[#0a111f]/40 to-[#0a111f]/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay content (animated, decoupled from Swiper DOM) */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className={`max-w-2xl flex flex-col ${
                active === 1
                  ? "mr-auto items-start text-left"
                  : active === 2
                    ? "ml-auto items-end text-right"
                    : "mx-auto items-center text-center"
              }`}
            >
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-secondary">
                DP22 · Desarrolladora
              </span>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-white md:text-8xl">
                {slides[active]?.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                {slides[active]?.subtitle}
              </p>

              <div
                className={`pointer-events-auto mt-8 flex flex-wrap gap-3 ${
                  active === 1
                    ? "justify-start"
                    : active === 2
                      ? "justify-end"
                      : "justify-center"
                }`}
              >
                <a
                  href={primaryHref}
                  className="rounded-full bg-secondary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1c1606] transition-transform hover:-translate-y-0.5"
                >
                  {primaryLabel}
                </a>
                <a
                  href={secondaryHref}
                  className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  {secondaryLabel}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.4;
          width: 7px;
          height: 7px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #d4ae2c;
          width: 22px;
          border-radius: 4px;
        }
        .swiper-pagination {
          bottom: 1.75rem !important;
          text-align: left;
          padding-left: 1.25rem;
        }
        @media (min-width: 768px) {
          .swiper-pagination { padding-left: max(2rem, calc((100vw - 80rem) / 2 + 2rem)); }
        }
      `}</style>
    </section>
  );
}

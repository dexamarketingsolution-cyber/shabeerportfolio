"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { markSiteReady } from "./ui/useSiteReady";

/** Short branded page-load moment: the monogram is drawn inside a gradient ring, then lifts away. */
export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("ms-loader-seen") === "1";
      sessionStorage.setItem("ms-loader-seen", "1");
    } catch {
      /* storage unavailable — show the loader as normal */
    }
    const t = window.setTimeout(
      () => {
        setVisible(false);
        markSiteReady();
      },
      reduce || seen ? 0 : 1400
    );
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <noscript>
        <style>{"#site-loader{display:none!important}"}</style>
      </noscript>
      <AnimatePresence>
        {visible && (
          <motion.div
            id="site-loader"
            key="loader"
            role="status"
            aria-label="Loading portfolio"
            className="fixed inset-0 z-[90] grid place-items-center bg-ink"
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
          >
            <motion.div
              className="relative grid h-28 w-28 place-items-center"
              exit={{ scale: 1.15, y: -12, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
            >
              <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
                <defs>
                  <linearGradient id="loader-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#22D3EE" />
                    <stop offset="0.5" stopColor="#5B5BF7" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="url(#loader-grad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                />
              </svg>
              <motion.span
                className="font-display text-4xl text-white"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                MS
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

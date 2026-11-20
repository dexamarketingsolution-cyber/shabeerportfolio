"use client";

import { useEffect, useState } from "react";

export const READY_EVENT = "ms:ready";

/** Marks the page as ready (called once the loader finishes). */
export function markSiteReady() {
  document.documentElement.dataset.ready = "1";
  window.dispatchEvent(new Event(READY_EVENT));
}

/** True once the page-loading animation has finished, so the hero intro plays in view. */
export function useSiteReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.documentElement.dataset.ready === "1") {
      setReady(true);
      return;
    }
    const onReady = () => setReady(true);
    window.addEventListener(READY_EVENT, onReady);
    // Safety net: never hold the hero back for long
    const t = window.setTimeout(onReady, 2500);
    return () => {
      window.removeEventListener(READY_EVENT, onReady);
      window.clearTimeout(t);
    };
  }, []);

  return ready;
}

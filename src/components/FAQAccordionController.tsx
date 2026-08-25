'use client';

import { useEffect } from 'react';

function initializeFAQs() {
  const faqItems = Array.from(document.querySelectorAll<HTMLDetailsElement>('details'));
  if (faqItems.length === 0) return;

  if (!faqItems.some((item) => item.open)) {
    faqItems[0].open = true;
  }
}

export default function FAQAccordionController() {
  useEffect(() => {
    initializeFAQs();

    const handleSummaryClick = (event: MouseEvent) => {
      const summary = event.target instanceof Element ? event.target.closest('summary') : null;
      const openedItem = summary?.parentElement;
      if (!(openedItem instanceof HTMLDetailsElement)) return;

      window.setTimeout(() => {
        if (!openedItem.open) return;

        document.querySelectorAll<HTMLDetailsElement>('details[open]').forEach((item) => {
          if (item !== openedItem) item.open = false;
        });
      }, 0);
    };

    const observer = new MutationObserver(initializeFAQs);
    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener('click', handleSummaryClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleSummaryClick, true);
    };
  }, []);

  return null;
}

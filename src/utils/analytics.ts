// Google Analytics tracking utility

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-XQY244RK6V", {
      page_path: path,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "button_click", {
      button_name: buttonName,
      button_location: location || "unknown",
      event_category: "engagement",
    });
  }
};

// Track form input interactions
export const trackInputFocus = (inputName: string, inputType: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "input_focus", {
      input_name: inputName,
      input_type: inputType,
      event_category: "engagement",
    });
  }
};

export const trackInputTyping = (inputName: string, inputType: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "input_typing", {
      input_name: inputName,
      input_type: inputType,
      event_category: "engagement",
    });
  }
};

// Track form submissions
export const trackFormSubmit = (formName: string, success: boolean) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(
      "event",
      success ? "form_submit_success" : "form_submit_error",
      {
        form_name: formName,
        event_category: "conversion",
      }
    );
  }
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "scroll", {
      scroll_depth: depth,
      event_category: "engagement",
    });
  }
};

// Track carousel interactions
export const trackCarouselSlide = (
  slideNumber: number,
  totalSlides: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "carousel_slide", {
      slide_number: slideNumber,
      total_slides: totalSlides,
      event_category: "engagement",
    });
  }
};

// Initialize scroll tracking
export const initScrollTracking = () => {
  if (typeof window === "undefined") return;

  const scrollThresholds = [25, 50, 75, 90, 100];
  const trackedThresholds = new Set<number>();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = Math.round(
      (scrollTop / (documentHeight - windowHeight)) * 100
    );

    scrollThresholds.forEach((threshold) => {
      if (scrollPercentage >= threshold && !trackedThresholds.has(threshold)) {
        trackedThresholds.add(threshold);
        trackScrollDepth(threshold);
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  // Cleanup function (optional, for if component unmounts)
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

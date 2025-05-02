import { useState, useEffect, useMemo } from "react";

export type Breakpoint =
  | "smallMobile"
  | "mobile"
  | "tablet"
  | "desktop"
  | "largeDesktop";

interface BreakpointOptions {
  smallMobile?: number;
  mobile?: number;
  tablet?: number;
  desktop?: number;
  largeDesktop?: number;
  defaultBreakpoint?: Breakpoint;
  disableSSR?: boolean;
}

interface BreakpointState {
  currentBreakpoint: Breakpoint;
  isSmallMobile: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  width: number;
}

const useScreenBreakpoint = ({
  smallMobile = 320,
  mobile = 480,
  tablet = 768,
  desktop = 1024,
  largeDesktop = 1440,
  defaultBreakpoint = "desktop",
  disableSSR = false,
}: BreakpointOptions = {}): BreakpointState => {
  const breakpoints = useMemo(
    () => ({
      smallMobile,
      mobile,
      tablet,
      desktop,
      largeDesktop,
    }),
    [smallMobile, mobile, tablet, desktop, largeDesktop]
  );

  const getBreakpointState = (width: number = 0): BreakpointState => {
    if (typeof window === "undefined" && !disableSSR) {
      return {
        currentBreakpoint: defaultBreakpoint,
        isSmallMobile: defaultBreakpoint === "smallMobile",
        isMobile: defaultBreakpoint === "mobile",
        isTablet: defaultBreakpoint === "tablet",
        isDesktop: defaultBreakpoint === "desktop",
        isLargeDesktop: defaultBreakpoint === "largeDesktop",
        width: 0,
      };
    }

    if (width <= breakpoints.smallMobile) {
      return {
        currentBreakpoint: "smallMobile",
        isSmallMobile: true,
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        isLargeDesktop: false,
        width,
      };
    } else if (width > breakpoints.smallMobile && width <= breakpoints.mobile) {
      return {
        currentBreakpoint: "mobile",
        isSmallMobile: false,
        isMobile: true,
        isTablet: false,
        isDesktop: false,
        isLargeDesktop: false,
        width,
      };
    } else if (width > breakpoints.mobile && width <= breakpoints.tablet) {
      return {
        currentBreakpoint: "tablet",
        isSmallMobile: false,
        isMobile: false,
        isTablet: true,
        isDesktop: false,
        isLargeDesktop: false,
        width,
      };
    } else if (width > breakpoints.tablet && width <= breakpoints.desktop) {
      return {
        currentBreakpoint: "desktop",
        isSmallMobile: false,
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        isLargeDesktop: false,
        width,
      };
    } else if (width > breakpoints.desktop) {
      return {
        currentBreakpoint: "largeDesktop",
        isSmallMobile: false,
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        isLargeDesktop: true,
        width,
      };
    } else {
      // Fallback case (should never reach here with proper conditions)
      return {
        currentBreakpoint: defaultBreakpoint,
        isSmallMobile: defaultBreakpoint === "smallMobile",
        isMobile: defaultBreakpoint === "mobile",
        isTablet: defaultBreakpoint === "tablet",
        isDesktop: defaultBreakpoint === "desktop",
        isLargeDesktop: defaultBreakpoint === "largeDesktop",
        width,
      };
    }
  };

  // Initialize state with current window width or default for SSR
  const [breakpointState, setBreakpointState] = useState<BreakpointState>(
    () => {
      return getBreakpointState(
        typeof window !== "undefined" ? window.innerWidth : 0
      );
    }
  );

  // Update breakpoint on window resize
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Debounce function to limit resize event handling
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const width = window.innerWidth;
        setBreakpointState(getBreakpointState(width));
      }, 150);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [breakpoints]);

  return breakpointState;
};

export default useScreenBreakpoint;

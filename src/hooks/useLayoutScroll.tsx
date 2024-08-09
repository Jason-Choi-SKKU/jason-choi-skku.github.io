"use client";

import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";

export const useLayoutScroll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const sectionIdx = sectionRef.current.findIndex(ref => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return (rect.top + rect.bottom) / 2 > 56;
      });
      if (sectionIdx !== -1) {
        setCurrentSection(sectionIdx);
      }
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const headerRect = headerRef.current?.getBoundingClientRect();
      if (headerRect && headerRect.bottom > 0) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }, 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionHandler = (idx: number) => {
    if (idx == 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: sectionRef.current[idx].offsetTop - 56 - 10,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setIsDesktop(
      window.innerWidth >
        Number.parseFloat(getComputedStyle(document.querySelector("body")!).fontSize) * 48,
    );
    window.addEventListener("resize", () => {
      setIsDesktop(
        window.innerWidth >
          Number.parseFloat(getComputedStyle(document.querySelector("body")!).fontSize) * 48,
      );
    });
  }, []);

  return {
    sectionRef,
    headerRef,
    currentSection,
    isOpen,
    isDesktop,
    sectionHandler,
  };
};

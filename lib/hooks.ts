import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { activeSection, setActiveSection, timeOfLastClicked } =
    useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClicked]);
  return {
    ref,
    setActiveSection,
    activeSection,
    timeOfLastClicked,
  };
}

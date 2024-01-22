"use client";
import { links } from "@/lib/data";
import { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

interface ActiveSectionContextType {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClicked: number;
  setTimeOfLastClicked: React.Dispatch<React.SetStateAction<number>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClicked, setTimeOfLastClicked] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClicked,
        setTimeOfLastClicked,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context == null) {
    throw new Error(
      "useActiveSectionContext must be with in ActiveSectionContextProvider"
    );
  }
  return context;
};
export { useActiveSectionContext };
export default ActiveSectionContextProvider;

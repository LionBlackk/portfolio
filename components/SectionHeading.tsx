import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="capitalize font-medium text-3xl mb-8 text-center">
      {children}
    </h2>
  );
};

export default SectionHeading;

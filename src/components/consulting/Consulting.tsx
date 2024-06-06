"use client";

import React, { useEffect, useState } from "react";
import Back from "../ui/back/Back";
import Underline from "../ui/underline/Underline";
import Image from "next/image";
import RegulatoryStrategy from "./RegulatoryStrategy";
import ClinicalTrial from "./ClinicalTrial";
import { useSearchParams } from "next/navigation";

const Consulting = () => {
  const searchParams = useSearchParams();
  const property1 = searchParams.get("tab");
  const property = Number(property1);

  const [activeSection, setActiveSection] = useState<number>(property || 0);

  useEffect(() => {
    setActiveSection(property);
  }, [property1]);

  //   console.log("property1", property1);
  //   console.log("property", property);
  //   console.log("activeSection", activeSection);

  return (
    <div>
      <div className="container mx-auto py-6">
        <div className="flex items-center flex-wrap text-bgPrimary font-bold">
          <div
            className={`p-4 cursor-pointer ${
              activeSection === 0
                ? "bg-brandPrimaryLs2 text-white rounded-full"
                : ""
            }`}
            onClick={() => setActiveSection(0)}
          >
            Regulatory Strategy & Development
          </div>
          <div
            className={`p-4 cursor-pointer ${
              activeSection === 1
                ? "bg-brandPrimaryLs2 text-white rounded-full"
                : ""
            }`}
            onClick={() => setActiveSection(1)}
          >
            Clinical Trial Regulatory Services
          </div>
        </div>

        {activeSection === 0 && <RegulatoryStrategy />}
        {activeSection === 1 && <ClinicalTrial />}
      </div>
    </div>
  );
};

export default Consulting;

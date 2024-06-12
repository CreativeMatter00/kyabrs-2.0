"use client";

import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import { useState } from "react";
import Overview from "./Overview";
import EarlyPhase from "./EarlyPhase";
import PhaseTwoAndThree from "./PhaseTwoAndThree";

const ClinicalService = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  return (
    <div className=" px-4 text-bgPrimary">
      <div className="container mx-auto">
        <div className="mb-9">
          <Breadcrumb
            link1="/solutions"
            title1="Solutions"
            title2="Clinical Development & Research Services"
          />
        </div>

        <div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
          <Image
            src={"/assets/images/solutions/clinical-service/hero.jpg"}
            height={400}
            width={1280}
            alt="Clinical Services"
            className="rounded-lg w-full"
          />
        </div>

        <div className="text-4xl pb-4">
          Clinical Development & Research Services
        </div>
      </div>

      <div className="py-6 border-t border-textTertiary">
        <div className="container mx-auto">
          <div className="flex items-center flex-wrap text-bgPrimary font-bold">
            <div
              className={`p-4 cursor-pointer ${
                activeSection === 0
                  ? "bg-brandPrimaryLs2 text-white rounded-full"
                  : ""
              }`}
              onClick={() => setActiveSection(0)}
            >
              Overview
            </div>
            <div
              className={`p-4 cursor-pointer ${
                activeSection === 1
                  ? "bg-brandPrimaryLs2 text-white rounded-full"
                  : ""
              }`}
              onClick={() => setActiveSection(1)}
            >
              Early Phase Clinical Trials
            </div>
            <div
              className={`p-4 cursor-pointer ${
                activeSection === 2
                  ? "bg-brandPrimaryLs2 text-white rounded-full"
                  : ""
              }`}
              onClick={() => setActiveSection(2)}
            >
              Phase II & Phase III Clinical Trial
            </div>
          </div>
        </div>
      </div>

      <div className="pt-9">
        {activeSection === 0 && <Overview />}
        {activeSection === 1 && <EarlyPhase />}
        {activeSection === 2 && <PhaseTwoAndThree />}
      </div>
    </div>
  );
};

export default ClinicalService;

"use client";

import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import { useState } from "react";
import BioanalyticalLaboratory from "./BioanalyticalLaboratory";
import ClinicalLaboratory from "./ClinicalLaboratory";
import Radiology from "./Radiology";

const ClinicalService = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  return (
    <div className=" px-4 text-bgPrimary">
      <div className="container mx-auto">
        <div className="mb-9">
          <Breadcrumb
            link1="/solutions"
            title1="Solutions"
            title2="Laboratory Services"
          />
        </div>

        <div className="h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
          <Image
            src={"/assets/images/solutions/clinical-service/hero.jpg"}
            height={300}
            width={1024}
            alt="Laboratory Services"
            className="rounded-lg w-full"
          />
        </div>

        <div className="text-4xl pb-4">Laboratory Services</div>
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
              Bioanalytical Laboratory
            </div>
            <div
              className={`p-4 cursor-pointer ${
                activeSection === 1
                  ? "bg-brandPrimaryLs2 text-white rounded-full"
                  : ""
              }`}
              onClick={() => setActiveSection(1)}
            >
              Clinical Laboratory
            </div>
            <div
              className={`p-4 cursor-pointer ${
                activeSection === 2
                  ? "bg-brandPrimaryLs2 text-white rounded-full"
                  : ""
              }`}
              onClick={() => setActiveSection(2)}
            >
              Radiology, Imaging & Core Lab
            </div>
          </div>
        </div>
      </div>

      <div className="pt-9">
        {activeSection === 0 && <BioanalyticalLaboratory />}
        {activeSection === 1 && <ClinicalLaboratory />}
        {activeSection === 2 && <Radiology />}
      </div>
    </div>
  );
};

export default ClinicalService;

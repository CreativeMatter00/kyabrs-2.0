import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { NavigationMenuLink } from "../../navigation-menu";

const services = [
  {
    href: "/solutions/clinical-development-service",
    title: "Clinical Development & Research Services",
  },

  {
    href: "/solutions/feasibility-study",
    title: "Feasibility study",
  },

  {
    href: "/solutions/clinical-data-management",
    title: "Clinical Data Management",
  },

  {
    href: "/solutions/quality-assurance",
    title: "Quality Assurance",
  },

  {
    href: "/solutions/clinical-trial-management",
    title: "Clinical Trial Management",
  },

  {
    href: "/solutions/laboratory-services",
    title: "Laboratory Services",
  },

  {
    href: "/solutions/clinical-monitoring",
    title: "Clinical Monitoring",
  },

  {
    href: "/solutions/biostatics-services",
    title: "Biostatics Services",
  },
];

const Solution = () => {
  return (
    <div className="p-4 bg-white flex divide-x-2 w-full h-[calc(100vh-20vh)]">
      <div
        className={`basis-1/3 flex flex-col gap-4 p-4 h-[calc(100vh-25vh)] overflow-auto  ${styles.customScrollbar}`}
      >
        <p className="text-[#414A50] text-2xl">Solutions</p>
        <Image
          className="inline-block h-44 w-64  content-end"
          src="/assets/images/navbar/Solution.png"
          alt="logo"
          width={260}
          height={174}
        />
        <p className="text-sm">
          Discover our comprehensive clinical and non-clinical research
          solutions at Khwaja Yunus Ali Medical College & Hospital Bio Research
          Services (KYAMCH-BRS). With state-of-the-art facilities, we conduct
          Phase I–III clinical trials and bioequivalence studies, ensuring
          quality and compliance under international standards.
        </p>
        <Link href="/solutions">
          <NavigationMenuLink className="text-[#0096FF] flex items-center gap-2 cursor-pointer group disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
            Know more about solutions
            <BsArrowRight
              fontSize={16}
              className=" ml-0 duration-300 group-hover:ml-2"
            />
          </NavigationMenuLink>
        </Link>
      </div>
      <div
        className={`basis-1/3 p-4 flex flex-col  h-[calc(100vh-25vh)] overflow-auto ${styles.customScrollbar}`}
      >
        <div className="divide-y-2 divide-[#EBEBEB] mt-6">
          {services.map((service, index) => (
            <div key={index} className="divide-y-2 divide-[#EBEBEB]">
              <Link href={service.href}>
                <NavigationMenuLink className="flex justify-between items-center hover:bg-[#FFB8B1] py-2 px-4 my-2 rounded-lg cursor-pointer duration-300 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  <p className="text-[#414A50] text-xs font-medium">
                    {service.title}
                  </p>
                  <MdOutlineKeyboardArrowRight color="#414A50" fontSize={20} />
                </NavigationMenuLink>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`basis-1/3 h-[calc(100vh-25vh)] overflow-auto  ${styles.customScrollbar}`}
      ></div>
    </div>
  );
};

export default Solution;

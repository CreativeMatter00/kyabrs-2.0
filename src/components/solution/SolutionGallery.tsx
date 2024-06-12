import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Solution {
  href: string;
  imageSrc: string;
  imageAlt: string;
  details: string;
  title: string;
}

const solutions: Solution[] = [
  {
    href: "/solutions/clinical-development-service",
    imageSrc: "/assets/images/solutions/clinical-service/overview.jpg",
    imageAlt: "Clinical Development & Research Services",
    details:
      "We feel differently about your project. Our team is ready for you who keep solving, optimizing, developing and caring your project.",
    title: "Clinical Development & Research Services",
  },

  {
    href: "/solutions/feasibility-study",
    imageSrc: "/assets/images/solutions/feasibility.jpg",
    imageAlt: "Feasibility study",
    details:
      "KYAMCH-BRS conducts thorough feasibility studies to assess the viability of clinical trials. With meticulous analysis, we ensure optimal trial design and execution.",
    title: "Feasibility study",
  },

  {
    href: "/solutions/clinical-data-management",
    imageSrc: "/assets/images/solutions/clinical data.jpg",
    imageAlt: "Clinical Data Management",
    details:
      "Our expert team manages clinical data with precision and efficiency. From collection to analysis, we ensure data integrity and compliance with regulatory standards.",
    title: "Clinical Data Management",
  },

  {
    href: "/solutions/quality-assurance",
    imageSrc: "/assets/images/solutions/quality.jpg",
    imageAlt: "Quality Assurance",
    details:
      "At KYAMCH-BRS, quality assurance is paramount. We maintain the highest standards of quality throughout the research process, ensuring compliance and reliability.",
    title: "Quality Assurance",
  },

  {
    href: "/solutions/clinical-trial-management",
    imageSrc: "/assets/images/solutions/clinic-trial.jpg",
    imageAlt: "Clinical Trial Management",
    details:
      "KYAMCH-BRS provides end-to-end clinical trial management services. From protocol development to regulatory submission, we oversee every aspect of the trial process.",
    title: "Clinical Trial Management",
  },

  {
    href: "/solutions/laboratory-services",
    imageSrc: "/assets/images/solutions/bio.jpg",
    imageAlt: "Laboratory Services",
    details:
      "KYAMCH-BRS operates a fully equipped clinical laboratory, providing a wide range of diagnostic and testing services. Our experienced team ensures accurate and timely results for research studies.",
    title: "Laboratory Services",
  },

  {
    href: "/solutions/clinical-monitoring",
    imageSrc: "/assets/images/solutions/clinical-monitoring/overview.jpg",
    imageAlt: "Clinical Monitoring",
    details:
      "KYAMCH-BRS conducts thorough clinical monitoring to ensure the integrity and reliability of research data. Our experienced monitors oversee every stage of the trial, ensuring compliance and quality.",
    title: "Clinical Monitoring",
  },

  {
    href: "/solutions/biostatics-services",
    imageSrc: "/assets/images/solutions/biostatics-services.jpg",
    imageAlt: "Biostatics Services",
    details:
      "Our biostatistics services provide expert analysis and interpretation of research data. With advanced statistical methods, we ensure accurate and reliable results for clinical research studies.",
    title: "Biostatics Services",
  },
];

const SolutionGallery: FC = () => {
  return (
    <div className="container p-4 flex flex-col pt-8">
      <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-6 gap-y-10">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center overflow-hidden group hover:cursor-pointer h-full rounded-md"
          >
            <Image
              src={solution.imageSrc}
              width={700}
              height={800}
              alt={solution.imageAlt}
              className="h-[400px] w-full object-cover group-hover:transition-all duration-500"
            />
            <div className=" flex group-hover:transition-all duration-300  absolute inset-0 lg:bg-[#FF6A5E] bg-black  rounded-md max-lg:bg-opacity-70 lg:top-[400px] group-hover:top-0 text-white flex-col px-4 py-6 ">
              <p className="text-xl font-bold">{solution.title}</p>
              <p className="text-base font-normal my-6">{solution.details}</p>

              <Link
                href={solution.href}
                className="text-sm font-bold hover:underline w-fit"
              >
                {" "}
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionGallery;

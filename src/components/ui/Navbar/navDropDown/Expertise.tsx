import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./navDropDown.css";

const services = [
  "Autoimmune Diseases",
  "Cardiovascular",
  "Endocrine & Metabolic",
  "Gastroenterology",
  "Hematology & Oncology",
  "Infectious Diseases & Vaccines",
  "NASH & Liver Diseases",
  "Neurology & Psychiatry",
  "Nephrology",
  "Ophthalmology",
  "Pediatrics",
  "Rare Diseases",
  "Cellular & Gene Therapy",
  "Radiation Therapy",
];

const Expertise = () => {
  return (
    <div className="p-4 bg-white flex divide-x-2 w-full h-[calc(100vh-250px)]">
      <div className="basis-1/3 flex flex-col gap-4 p-4">
        <p className="text-[#414A50] text-2xl">Expertise</p>
        <Image
          className="inline-block h-44 w-64  content-end"
          src="/assets/images/navbar/Expertise.png"
          alt="logo"
          width={260}
          height={174}
        />
        <p className="text-sm">
          Discover our comprehensive clinical and non-clinical research
          solutions at Khwaja Yunus Ali-Bio Research Services (KYA-BRS). With
          state-of-the-art facilities, we conduct Phase I–III clinical trials
          and bioequivalence studies, ensuring quality and compliance under
          international standards.
        </p>
        <div className="text-[#0096FF] flex items-center gap-2 cursor-pointer group">
          Know more about expertise
          <BsArrowRight
            fontSize={16}
            className=" ml-0 duration-300 group-hover:ml-2"
          />
        </div>
      </div>
      <div className="basis-1/3 p-4 flex flex-col  h-[calc(100vh-300px)] overflow-auto custom-scrollbar">
        <div className="divide-y-2 divide-[#EBEBEB] mt-6">
          {services.map((service, index) => (
            <div key={index} className="">
              <div className="flex justify-between items-center hover:bg-[#FFB8B1] py-2 px-4 my-2 rounded-lg cursor-pointer duration-300">
                <p className="text-[#414A50] text-xs font-medium">{service}</p>
                <MdOutlineKeyboardArrowRight color="#414A50" fontSize={20} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="basis-1/3"></div>
    </div>
  );
};

export default Expertise;

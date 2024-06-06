import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
// const services = [
//   "Healthy Volunteers",
//   "Patient Volunteers",
//   "Registration Form",
//   "Patient Stories",
// ];

const services = [
  {
    href: "/participate/healthy-volunteers",
    title: "Healthy Volunteers",
  },

  {
    href: "/participate/patient-volunteers",
    title: "Patient Volunteers",
  },

  {
    href: "/participate/registration-form",
    title: "Registration Form",
  },

  // {
  //   href: "/participate/patient-stories",
  //   title: "Patient Stories",
  // },
];

const Participate = () => {
  return (
    <div className="p-4 bg-white flex divide-x-2 w-full h-[calc(100vh-250px)]">
      <div className="basis-1/3 flex flex-col gap-4 p-4">
        <p className="text-[#414A50] text-2xl">Participate</p>
        <Image
          className="inline-block h-44 w-64  content-end"
          src="/assets/images/navbar/Participate.png"
          alt="logo"
          width={260}
          height={174}
        />
        <p className="text-sm">
          Interested in contributing to groundbreaking research? Explore how you
          can participate in clinical trials at Khwaja Yunus Ali-Bio Research
          Services (KYA-BRS). Learn about eligibility criteria, the benefits of
          participation, and how to apply for upcoming studies.
        </p>
        <Link href="/participate">
          <div className="text-[#0096FF] flex items-center gap-2 cursor-pointer group">
            Know more about participate
            <BsArrowRight
              fontSize={16}
              className=" ml-0 duration-300 group-hover:ml-2"
            />
          </div>
        </Link>
      </div>
      <div
        className={`basis-1/3 p-4 flex flex-col  h-[calc(100vh-300px)] overflow-auto  ${styles.customScrollbar}`}
      >
        <div className="divide-y-2 divide-[#EBEBEB] mt-6">
          {services.map((service, index) => (
            <Link key={index} className="" href={service.href}>
              <div className="flex justify-between items-center hover:bg-[#FFB8B1] py-2 px-4 my-2 rounded-lg cursor-pointer duration-300">
                <p className="text-[#414A50] text-xs font-medium">
                  {service.title}
                </p>
                <MdOutlineKeyboardArrowRight color="#414A50" fontSize={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="basis-1/3"></div>
    </div>
  );
};

export default Participate;

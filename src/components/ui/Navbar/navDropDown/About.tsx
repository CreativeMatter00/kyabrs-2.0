/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className="p-4 bg-white flex divide-x-2 w-full h-[calc(100vh-250px)]">
      <div className="basis-1/3 flex flex-col gap-4 p-4">
        <p className="text-[#414A50] text-2xl">About</p>
        <Image
          className="inline-block h-44 w-64  content-end"
          src="/assets/images/navbar/About.png"
          alt="logo"
          width={260}
          height={174}
        />
        <p className="text-sm">
          Khwaja Yunus Ali-Bio Research Services (KYA-BRS) is Bangladesh's
          leading contract research company, specializing in clinical and
          non-clinical research services. We conduct screening and clinical
          trials at our state-of-the-art facility, adhering to international
          regulatory standards.
        </p>
        <Link href="/about">
          <div className="text-[#0096FF] flex items-center gap-2 cursor-pointer group">
            Know more about us
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
          <div>
            <Link href={{ pathname: "/about", query: { tab: 0 } }}>
              <div className="flex justify-between items-center hover:bg-[#FFB8B1]   py-2 px-4 my-2 rounded-lg cursor-pointer duration-300">
                <p className=" text-[#414A50] text-xs font-medium">
                  Who we are
                </p>
                <MdOutlineKeyboardArrowRight color="#414A50" fontSize={20} />
              </div>
            </Link>
          </div>

          <div>
            <Link href={{ pathname: "/about", query: { tab: 1 } }}>
              <div className="flex justify-between items-center hover:bg-[#FFB8B1]   py-2 px-4 my-2 rounded-lg cursor-pointer duration-300">
                <p className=" text-[#414A50] text-xs font-medium">
                  Management Team
                </p>
                <MdOutlineKeyboardArrowRight color="#414A50" fontSize={20} />
              </div>
            </Link>
          </div>
          <div>
            <Link href={{ pathname: "/about", query: { tab: 2 } }}>
              <div className="flex justify-between items-center hover:bg-[#FFB8B1]   py-2 px-4 my-2 rounded-lg cursor-pointer duration-300">
                <p className=" text-[#414A50] text-xs font-medium">
                  Mission & Values
                </p>
                <MdOutlineKeyboardArrowRight color="#414A50" fontSize={20} />
              </div>
            </Link>
          </div>
          <div>
            <Link href={{ pathname: "/about", query: { tab: 3 } }}>
              <div className="flex justify-between items-center hover:bg-[#FFB8B1]   py-2 px-4 my-2 rounded-lg cursor-pointer duration-300">
                <p className=" text-[#414A50] text-xs font-medium">
                  Accreditations & Inspections
                </p>
                <MdOutlineKeyboardArrowRight color="#414A50" fontSize={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="basis-1/3"></div>
    </div>
  );
};

export default About;

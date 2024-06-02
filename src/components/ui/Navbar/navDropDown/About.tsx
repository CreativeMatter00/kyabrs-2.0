/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div className="p-4 bg-white flex divide-x-2 w-full">
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
        <div className="text-[#0096FF] flex items-center gap-2">
          Know more about us <BsArrowRight fontSize={16} />
        </div>
      </div>
      <div className="basis-1/3">2</div>
      <div className="basis-1/3">3</div>
    </div>
  );
};

export default About;

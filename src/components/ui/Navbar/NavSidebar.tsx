import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavSidebar = () => {
  const pathName = usePathname().toString();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" bg-[#414A50] flex flex-col  border-t w-full h-full">
        {/* <div className=" bg-[#FFFFFF] flex flex-col  border-t w-full h-full"> */}
        <div className=" h-full overflow-auto uppercase ">
          <div className="flex flex-col gap-3 text-base font-medium justify-center items-center">
            <div className="flex flex-col divide-y w-full divide-[#5A5A5A]">
              <Link href={`/ `}>
                <div
                  className={`cursor-pointer px-2 py-3  hover:bg-[#FFFFFF]  hover:text-[#002D16] text-base font-bold text-center ${
                    pathName === "/"
                      ? "text-[#002D16] bg-[#FFFFFF]"
                      : "text-bgPrimary"
                  }`}
                >
                  Home
                </div>
                {/* <div
                  className={`cursor-pointer px-2 py-3  hover:bg-[#FFFFFF]  hover:text-[#002D16] text-base font-bold text-center ${
                    !pathName.includes("about")
                      ? "text-[#002D16] bg-[#FFFFFF]"
                      : "text-primary"
                  }`}
                >
                  Home
                </div> */}
              </Link>
              <Link href={`/about `}>
                <div
                  className={`cursor-pointer px-2 py-3  hover:bg-[#FFFFFF]  hover:text-[#002D16] text-base font-bold text-center ${
                    pathName.includes("about")
                      ? "text-[#002D16] bg-[#FFFFFF]"
                      : "text-bgPrimary"
                  }`}
                >
                  About
                </div>
              </Link>
              <Link href={`/solutions `}>
                <div
                  className={`cursor-pointer px-2 py-3  hover:bg-[#FFFFFF]  hover:text-[#002D16] text-base font-bold text-center ${
                    pathName.includes("solutions")
                      ? "text-[#002D16] bg-[#FFFFFF]"
                      : "text-bgPrimary"
                  }`}
                >
                  Solutions
                </div>
              </Link>
              <Link href={`/expertise `}>
                <div
                  className={`cursor-pointer px-2 py-3  hover:bg-[#FFFFFF]  hover:text-[#002D16] text-base font-bold text-center ${
                    pathName.includes("expertise")
                      ? "text-[#002D16] bg-[#FFFFFF]"
                      : "text-bgPrimary"
                  }`}
                >
                  Expertise
                </div>
              </Link>

              <Link href={`/consulting `}>
                <div
                  className={`cursor-pointer px-2 py-3  hover:bg-[#FFFFFF]  hover:text-[#002D16] text-base font-bold text-center ${
                    pathName.includes("consulting")
                      ? "text-[#002D16] bg-[#FFFFFF]"
                      : "text-bgPrimary"
                  }`}
                >
                  Consulting
                </div>
              </Link>

              <Link href={`/contact-us `}>
                <div className="p-4 flex justify-center items-center">
                  <button className="flex text-white rounded-lg bg-[#FF1501] hover:bg-[#ff16019d] px-2 py-0.5 text-lg justify-center items-center">
                    <Image
                      className="inline-block mr-2"
                      src="/assets/icons/call1.png"
                      alt=""
                      width={18}
                      height={18}
                    />
                    Contact Us
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSidebar;

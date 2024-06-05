"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavSidebar from "./NavSidebar";
import { BiSearch } from "react-icons/bi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../navigation-menu";
import About from "./navDropDown/About";
import Solution from "./navDropDown/Solution";
import Expertise from "./navDropDown/Expertise";
import Participate from "./navDropDown/Participate";
import Consulting from "./navDropDown/Consulting";

const NavTest = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState<Boolean>(true);
  const [isHovered, setIsHovered] = useState<Boolean>(false);
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeVisible = scrollTop === 0;
      setIsNavbarVisible(shouldBeVisible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathName = usePathname().toString();

  useEffect(() => {
    setMobileNav(false);
  }, [pathName]);

  const handleMobileSidebar = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="flex flex-col z-[100000] mb-1 ">
      <div className="fixed bg-gradient-to-b from-[#5B6367] opacity-75 inset-0 z-10 h-28 top-0 "></div>

      <nav
        className={`top-0 fixed w-full  z-[100000]  max-lg:hidden 
        
        ${
          pathName === "/" || pathName === "/test-mahfuz"
            ? "bg-[rgba(65, 74, 80, 0.9)]"
            : "bg-[#414A50]"
        }

      `}
      >
        <div className="w-full  flex justify-center items-center  ">
          <div className="container px-4 pb-2 pt-2 flex justify-center items-center w-full ">
            <NavigationMenu className="relative flex items-center justify-center w-full  ">
              <div className=" w-full 2xl:w-[1520px] xl:w-[1260px] lg:w-[1010px] md:w-[760px]">
                {/* {pathName !== "/" && ( */}
                <div
                  className={`px-4 pt-4 duration-500 transition-all w-full  ${
                    mobileNav ? "opacity-100 bg-white" : "bg-transparent "
                  }  ${
                    pathName === "/" || pathName === "/test-mahfuz"
                      ? "border-b"
                      : "border-none"
                  } `}
                >
                  <div className="container mx-auto  relative ">
                    <div className="flex items-center justify-between text-[#F5F5F5]  ">
                      <div className="pb-2">
                        <Link href="/">
                          <Image
                            className="inline-block h-20 w-44  content-end"
                            src="/assets/logo/bio-logo.png"
                            alt="logo"
                            width={172}
                            height={80}
                          />
                        </Link>
                      </div>

                      <div className={`flex flex-col max-lg:hidden  `}>
                        <div
                          className={`${styles.toggleDiv} ${
                            isNavbarVisible ? styles.visible : styles.hidden
                          }`}
                        >
                          <div className="flex items-center justify-end font-bold text-sm gap-6  py-2">
                            <p
                              className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} cursor-pointer w-fit`}
                            >
                              Employment
                            </p>
                            <p
                              className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} cursor-pointer w-fit`}
                            >
                              Story of Volunteers
                            </p>
                            <BiSearch
                              fontSize={20}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>

                        <div className={`px-2 pt-2 `}>
                          <div className="flex items-center justify-end font-bold text-base gap-4  py-2">
                            <NavigationMenuList>
                              <NavigationMenuItem className="">
                                <Link href="/about">
                                  <NavigationMenuTrigger className="font-bold text-base bg-transparent">
                                    About
                                  </NavigationMenuTrigger>
                                </Link>

                                <NavigationMenuContent className="border-none 2xl:w-[1520px]  xl:w-[1260px] lg:w-[1010px]">
                                  <About />
                                </NavigationMenuContent>
                              </NavigationMenuItem>

                              <NavigationMenuItem className="">
                                <Link href="/solutions">
                                  <NavigationMenuTrigger className="font-bold text-base bg-transparent">
                                    Solution
                                  </NavigationMenuTrigger>
                                </Link>
                                <NavigationMenuContent className="bg-white 2xl:w-[1520px]   xl:w-[1260px] lg:w-[1010px]">
                                  <Solution />
                                </NavigationMenuContent>
                              </NavigationMenuItem>

                              <NavigationMenuItem>
                                <Link href="/expertise">
                                  <NavigationMenuTrigger className="font-bold text-base bg-transparent">
                                    Expertise
                                  </NavigationMenuTrigger>
                                </Link>
                                <NavigationMenuContent className="2xl:w-[1520px]   xl:w-[1260px] lg:w-[1010px]">
                                  <Expertise />
                                </NavigationMenuContent>
                              </NavigationMenuItem>

                              <NavigationMenuItem>
                                <Link href="/participate">
                                  <NavigationMenuTrigger className="font-bold text-base bg-transparent">
                                    Participate
                                  </NavigationMenuTrigger>
                                </Link>
                                <NavigationMenuContent className="2xl:w-[1520px]   xl:w-[1260px] lg:w-[1010px]">
                                  <Participate />
                                </NavigationMenuContent>
                              </NavigationMenuItem>

                              <NavigationMenuItem>
                                <Link href="/consulting">
                                  <NavigationMenuTrigger className="font-bold text-base bg-transparent">
                                    Consulting
                                  </NavigationMenuTrigger>
                                </Link>
                                <NavigationMenuContent className="2xl:w-[1520px]   xl:w-[1260px] lg:w-[1010px]">
                                  <Consulting />
                                </NavigationMenuContent>
                              </NavigationMenuItem>
                            </NavigationMenuList>

                            <button className="text-sm font-medium py-2.5 px-10 rounded-full bg-[#FF3726] cursor-pointer hover:bg-[#FF1501]">
                              Contact Us
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* )} */}

                {/* {pathName === "/" && (
                  <div>
                    <div
                      className={`${styles.toggleOther} ${
                        isNavbarVisible ? styles.visibleOther : styles.hidden
                      } max-lg:hidden`}
                    >
                      <div className="bg-[#E92429] flex justify-center ">
                        <div className="container">
                          <div className="flex justify-end p-2 gap-8 ">
                            <div className="text-white cursor-pointer  text-base hover:scale-110 flex justify-center items-center transition-all">
                              <Image
                                className="inline-block mr-1"
                                src="/assets/icons/youtube.png"
                                alt=""
                                width={18}
                                height={18}
                              />
                              Youtube
                            </div>

                            <div className="text-white  cursor-pointer   hover:scale-110 flex justify-center items-center transition-all">
                              <Image
                                className="inline-block mr-2"
                                src="/assets/icons/linkedin.png"
                                alt=""
                                width={18}
                                height={18}
                              />
                              Linkedin
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[white] flex justify-center">
                      <div className="container p-2 ">
                        <div className="flex justify-between items-center">
                          <div className="pb-2">
                            <Link href="/">
                              <Image
                                className="inline-block mr-1"
                                src="/assets/logo/logo.png"
                                alt="logo"
                                width={170}
                                height={70}
                              />
                            </Link>
                          </div>

                          <div className="flex items-center justify-center max-lg:hidden">
                            <div className="flex justify-end text-xl font-semibold gap-2 text-[#252525]">
                              <Link href="/about">
                                <div
                                  className={`mx-3 cursor-pointer ${
                                    styles.linkUnderlineNav
                                  } ${styles.linkUnderlineBlackNav} ${
                                    pathName.includes("about")
                                      ? "text-primary font-bold"
                                      : ""
                                  }`}
                                >
                                  About
                                </div>
                              </Link>

                              <Link href="/solutions">
                                <div
                                  className={`mx-3 cursor-pointer ${
                                    styles.linkUnderlineNav
                                  } ${styles.linkUnderlineBlackNav} ${
                                    pathName.includes("solutions")
                                      ? "text-primary font-bold"
                                      : ""
                                  }`}
                                >
                                  Solutions
                                </div>
                              </Link>

                              <Link href="/expertise">
                                <div
                                  className={`mx-3 cursor-pointer ${
                                    styles.linkUnderlineNav
                                  } ${styles.linkUnderlineBlackNav} ${
                                    pathName.includes("expertise")
                                      ? "text-primary font-bold"
                                      : ""
                                  }`}
                                >
                                  Expertise
                                </div>
                              </Link>

                              <Link href="/consulting">
                                <div
                                  className={`mx-3 cursor-pointer ${
                                    styles.linkUnderlineNav
                                  } ${styles.linkUnderlineBlackNav} ${
                                    pathName.includes("consulting")
                                      ? "text-primary font-bold"
                                      : ""
                                  }`}
                                >
                                  Consulting
                                </div>
                              </Link>

                              <Link href="/contact-us">
                                <button className="flex text-white rounded-lg bg-[#019490] hover:bg-[#0f6562] px-2 py-0.5 text-lg justify-center items-center ml-8">
                                  <Image
                                    className="inline-block mr-2"
                                    src="/assets/icons/call1.png"
                                    alt=""
                                    width={18}
                                    height={18}
                                  />
                                  Contact Us
                                </button>
                              </Link>
                            </div>
                          </div>

                          <div className="lg:hidden cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="44"
                              height="44"
                              viewBox="0 0 44 44"
                              fill="none"
                              className={`${mobileNav ? "hidden" : "block"}`}
                              onClick={handleMobileSidebar}
                            >
                              <path
                                d="M15 30L38 30"
                                stroke="black"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                              <path
                                d="M11 22L38 22"
                                stroke="black"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                              <path
                                d="M11 22L38 22"
                                stroke="black"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                              <path
                                d="M7 14H38"
                                stroke="black"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="44"
                              height="44"
                              viewBox="0 0 44 44"
                              fill="none"
                              className={`${mobileNav ? "block" : "hidden"} `}
                              onClick={handleMobileSidebar}
                            >
                              <path
                                d="M23.0459 22H22.0459"
                                stroke="black"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                              <path
                                d="M13 12.4541L32.0919 31.546"
                                stroke="black"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                              <path
                                d="M13 31.5459L32.0919 12.454"
                                stroke="black"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                              <path
                                d="M22.0459 22H23.0459"
                                stroke="black"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      <nav className="top-0 fixed w-full  z-[100000] bg-[rgba(65, 74, 80, 0.9)] flex justify-center items-center lg:hidden ">
        <div
          className={`relative w-full flex justify-center items-center duration-500 ${
            mobileNav ? "opacity-100 bg-white" : "bg-transparent"
          }`}
        >
          <div className="flex justify-between  w-full items-center  container p-2">
            <Link href="/">
              <Image
                className="inline-block h-20 w-44  content-end"
                src="/assets/logo/bio-logo.png"
                alt="logo"
                width={172}
                height={80}
              />
            </Link>

            <div className="lg:hidden cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                className={`${mobileNav ? "hidden" : "block"}`}
                onClick={handleMobileSidebar}
              >
                <path
                  d="M15 30L38 30"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M11 22L38 22"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M11 22L38 22"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M7 14H38"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                className={`${mobileNav ? "block" : "hidden"} `}
                onClick={handleMobileSidebar}
              >
                <path
                  d="M23.0459 22H22.0459"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M13 12.4541L32.0919 31.546"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M13 31.5459L32.0919 12.454"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M22.0459 22H23.0459"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div
              className={`absolute lg:hidden z-[99999] duration-500 w-full  ${
                mobileNav
                  ? "left-0 top-24"
                  : "max-md:left-[780px] max-lg:left-[1050px] top-24"
              }`}
            >
              <NavSidebar />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavTest;

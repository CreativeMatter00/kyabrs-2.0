"use client";

import React, { useEffect, useState } from "react";
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
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../navigation-menu";
import { cn } from "@/utils/cn";
import About from "./navDropDown/About";

const Navbar = () => {
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
    <div className="">
      {/* <div className="flex flex-col z-[100000] "> */}
      {/* <div className="fixed bg-gradient-to-b from-[#5B6367] opacity-75 inset-0 z-10 h-28 top-0"></div> */}

      <nav
        className={`top-0 fixed w-full  z-[100000] bg-[rgba(65, 74, 80, 0.9)] border-b ${styles.blurNav}`}
      >
        <div className="w-full  flex justify-center items-center">
          <div className="container px-4  py-5 flex justify-center items-center">
            <NavigationMenu className="relative flex items-center justify-center ">
              <div className=" w-full 2xl:w-[1520px]">
                <div className="flex justify-between w-full ">
                  <Link href="/">
                    <Image
                      className="inline-block h-20 w-44  content-end"
                      src="/assets/logo/logo.png"
                      alt="logo"
                      width={172}
                      height={80}
                    />
                  </Link>
                  <div className="text-[#F5F5F5]">
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
                      <BiSearch fontSize={20} className="cursor-pointer" />
                    </div>

                    <div className="flex items-center justify-end font-bold text-base gap-4  py-2">
                      <NavigationMenuList>
                        <NavigationMenuItem className="">
                          <Link href="/about">
                            <NavigationMenuTrigger className="font-bold text-base bg-transparent">
                              About
                            </NavigationMenuTrigger>
                          </Link>

                          <NavigationMenuContent className="border-none 2xl:w-[1520px]">
                            <About />
                          </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="">
                          <Link href="/solutions">
                            <NavigationMenuTrigger className="font-bold text-base bg-transparent">
                              Solutions
                            </NavigationMenuTrigger>
                          </Link>
                          <NavigationMenuContent className="bg-white 2xl:w-[1520px]">
                            ok
                          </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                          <Link href="/expertise">
                            <NavigationMenuTrigger className="font-bold text-base bg-transparent">
                              Expertise
                            </NavigationMenuTrigger>
                          </Link>
                          <NavigationMenuContent className="2xl:w-[1520px]">
                            ok
                          </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                          <Link href="/participate">
                            <NavigationMenuTrigger className="font-bold text-base bg-transparent">
                              Participate
                            </NavigationMenuTrigger>
                          </Link>
                          <NavigationMenuContent className="2xl:w-[1520px]">
                            ok
                          </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                          <Link href="/consulting">
                            <NavigationMenuTrigger className="font-bold text-base bg-transparent">
                              Consulting
                            </NavigationMenuTrigger>
                          </Link>
                          <NavigationMenuContent className="2xl:w-[1520px]">
                            ok
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
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

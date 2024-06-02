"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavSidebar from "./NavSidebar";

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
    <div className="flex flex-col z-[100000] mb-1">
      <div className="fixed bg-gradient-to-b from-[#5B6367] opacity-75 inset-0 z-10 h-28 top-0"></div>

      <nav className="top-0 fixed w-full  z-[100000]">
        <div className="relative">
          {/* {pathName === "/" && (
						<div
							className={`px-4 pt-4 duration-500 transition-all ${
								mobileNav ? "opacity-100 bg-white " : "bg-transparent"
							} `}
						>
							<div className="container mx-auto border-b  relative">
								<div className="flex items-center justify-between">
									<div className="pb-2">
										<Link href="/">
											<Image
												className="inline-block mr-1"
												src="/assets/logo/logo.png"
												alt="logo"
												width={178}
												height={78}
											/>
										</Link>
									</div>

									<div className={`flex flex-col max-lg:hidden  `}>
										<div
											className={`${styles.toggleDiv} ${
												isNavbarVisible ? styles.visible : styles.hidden
											}`}
										>
											<div className="flex  justify-end gap-12 text-white pr-4">
												<div className="cursor-pointer transition-all hover:scale-110 flex justify-center items-center">
													<Image
														className="inline-block mr-1"
														src="/assets/youtube.png"
														alt=""
														width={16}
														height={16}
													/>
													Youtube
												</div>

												<div className="  cursor-pointer transition-all hover:scale-110 flex justify-center items-center">
													<Image
														className="inline-block mr-2"
														src="/assets/linkedin.png"
														alt=""
														width={16}
														height={16}
													/>
													Linkedin
												</div>
											</div>
										</div>

										<div className={`px-2 pt-2 ${styles.dropdownContainer} `}>
											<div className="flex justify-end text-xl font-semibold gap-4">
												<Link href="/about">
													<div className="text-white px-3 cursor-pointer">
														About
													</div>
												</Link>

												<Link href="/solutions">
													<div className="text-white px-3 cursor-pointer">
														Solutions
													</div>
												</Link>

												<Link href="/expertise">
													<div className="text-white px-3 cursor-pointer">
														Expertise
													</div>
												</Link>

												<Link href="/consulting">
													<div className="text-white px-3 cursor-pointer">
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
								</div>

								<div
									className={`${
										isNavbarVisible ? "top-20" : "top-12"
									} absolute container mx-auto ${styles.toggleDiv1}  ${
										isHovered ? `${styles.visible1}` : `${styles.hidden1}`
									}`}
								>
									<div
										className={`${styles.visible1} bg-white rounded-2xl p-4 text-cyan-800 text-lg`}
										onMouseEnter={() => setIsHovered(true)}
										onMouseLeave={() => setIsHovered(false)}
									>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Molestias eos voluptatum quasi id cum ipsam commodi iusto
										neque omnis, possimus enim facilis fugit sapiente asperiores
										hic reiciendis Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Numquam, dolores. Ullam veritatis dicta
										veniam, iusto minima reprehenderit, culpa magnam sit ipsa
										fugiat minus libero maiores, ipsam vel delectus eos illum.
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Numquam, dolores. Ullam veritatis dicta veniam, iusto minima
										reprehenderit, culpa magnam sit ipsa fugiat minus libero
										maiores, ipsam vel delectus eos illum. Lorem ipsum dolor
										sit, amet consectetur adipisicing elit. Numquam, dolores.
										Ullam veritatis dicta veniam, iusto minima reprehenderit,
										culpa magnam sit ipsa fugiat minus libero maiores, ipsam vel
										delectus eos illum. Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Numquam, dolores. Ullam veritatis dicta
										veniam, iusto minima reprehenderit, culpa magnam sit ipsa
										fugiat minus libero maiores, ipsam vel delectus eos illum.
									</div>
								</div>
							</div>
						</div>
					)} */}

          {/* {pathName !== "/" && ( */}
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
                    {/* <div className="text-white  cursor-pointer  hover:scale-110 flex justify-center items-center transition-all">
                        <Image
                          className="inline-block mr-2"
                          src="/assets/icons/facebook.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                        Facebook
                      </div> */}
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
                      {/* <Link href="/about">
                          <div
                            className={`px-3 cursor-pointer ${
                              styles.linkUnderline
                            } ${styles.linkUnderlineBlack} ${
                              pathName.includes("about")
                                ? "text-primary font-bold"
                                : ""
                            }`}
                          >
                            About
                          </div>
                        </Link> */}

                      {/* <Link
                          href="/solutions"
                          className={` ${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
                        >
                          <div
                            className={`mx-3 cursor-pointer    ${
                              pathName.includes("solutions")
                                ? "text-primary font-bold"
                                : ""
                            }`}
                          >
                            Solutions
                          </div>
                        </Link> */}

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
          {/* )} */}

          <div
            className={`absolute lg:hidden z-[99999] duration-500 w-full ${
              mobileNav ? "left-0" : "max-md:left-[780px] max-lg:left-[1050px]"
            }`}
          >
            <NavSidebar />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavTest;

"use client";

import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathName = usePathname().toString();
  return (
    <div>
      {pathName !== "/" && (
        <footer
          className={`bg-gray-100 shadow-2xl flex justify-center items-center mt-20 ${styles.footerShadow}`}
        >
          <div className="container">
            <div className="flex w-full gap-4 max-lg:flex-col">
              <div className="basis-1/2 bg-[#E92429] -mt-8 rounded-t-lg">
                <div className="py-4 px-8 mt-8 flex flex-col gap-6 text-white mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    KYAMCH <br />
                    BIO-RESEARCH <br /> SERVICES
                  </h2>

                  <div className="mb-4 text-justify">
                    KYAMCH Bio Research Service stands as a state-of-the-art
                    facility dedicated to propelling scientific knowledge and
                    fostering innovation within the realm of biology. Our
                    cohesive team of adept researchers, scientists, and
                    technicians collaborates seamlessly across a diverse
                    spectrum of projects, spanning from fundamental biological
                    inquiries to impactful applied studies with tangible
                    real-world implications.
                  </div>
                </div>
              </div>

              <div className="basis-1/2 p-4 px-8">
                <div className="flex gap-8 max-md:flex-col ">
                  <div className="lg:w-4/12 md:w-6/12 max-md:w-10/12">
                    <h3 className="text-lg font-semibold text-textPrimary mb-4">
                      Quick Links
                    </h3>
                    <ul className="space-y-2 text-xl text-textSecondary">
                      <li>
                        <Link
                          className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} hover:text-textPrimary cursor-pointer w-fit`}
                          href="/contact-us"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} hover:text-textPrimary cursor-pointer w-fit`}
                          href="/faq"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} hover:text-textPrimary cursor-pointer w-fit`}
                          href="/privacy-policy"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} hover:text-textPrimary cursor-pointer w-fit`}
                          href="/terms-conditions"
                        >
                          Terms and Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:w-7/12 md:w-6/12 max-md:w-10/12 ">
                    <h3 className="text-lg font-semibold mb-4 text-textPrimary">
                      Contact Us
                    </h3>
                    <div className="space-y-2 text-xl text-textSecondary">
                      <p className="inline-flex ">
                        <LocateIcon className="mr-2" />
                        <Link
                          href="https://maps.app.goo.gl/uSVaWfnjg83r8BXK7"
                          target="_blank"
                          className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} hover:text-textPrimary cursor-pointer w-fit`}
                        >
                          Enayetpur, Sirajganj, <br /> Bangladesh
                        </Link>
                      </p>
                      <p className="flex items-center">
                        <MailIcon className="mr-3" />
                        <Link
                          className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} hover:text-textPrimary cursor-pointer w-fit`}
                          href="mailto:info@kyabrs.org"
                        >
                          info@kyabrs.org
                        </Link>
                      </p>
                      <p className="flex items-center">
                        <PhoneIcon className="mr-3" />
                        <Link
                          className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} hover:text-textPrimary cursor-pointer w-fit`}
                          href="tel: +8801733070041"
                        >
                          +880 1733-070041
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:hidden">
                  <h3 className="text-lg font-semibold text-textPrimary my-8">
                    Social Media
                  </h3>
                  <div className="flex flex-col gap-4 text-xl text-textSecondary items-start">
                    <div className=" justify-center items-center inline-flex">
                      <Image
                        className="inline-block mr-1"
                        src="/assets/youtube.png"
                        alt=""
                        width={16}
                        height={16}
                      />
                      Youtube
                    </div>

                    {/* <div className="flex justify-center items-center">
                      <Image
                        className="inline-block mr-2"
                        src="/assets/facebook.png"
                        alt=""
                        width={16}
                        height={16}
                      />
                      Facebook
                    </div> */}

                    <div className="flex justify-center items-center">
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

<<<<<<< HEAD
                <div className="text-center mt-12 text-base text-textSecondary">
                  © {currentYear}&nbsp;
                  <Link
                    href="https://www.creativematter.agency/"
                    target="_blank"
                    className=" hover:underline cursor-pointer"
                  >
                    Creative Matter
                  </Link>
                  . All rights reserved. <br />
                  Trade marks are owned by or licensed to the Khwaja Yunus Ali
                  Medical College & Hospital Bioresearch Services.
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
=======
								<div className="text-center mt-12 text-base text-textSecondary">
									© {currentYear}&nbsp;
									{/* <Link
										href="https://www.creativematter.agency/"
										target="_blank"
										className=" hover:underline cursor-pointer"
									>
										Creative Matter
									</Link> */}
									All rights reserved. <br />
									Trade marks are owned by or licensed to the Khwaja Yunus Ali
									Medical College & Hospital Bio-Research Services.
								</div>
							</div>
						</div>
					</div>
				</footer>
			)}
		</div>
	);
>>>>>>> cec5f7e98b411454023d1266d943a12b9aa6a2d1
};

export default Footer;

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  LinkedInIcon,
  LocateIcon,
  MailIcon,
  PhoneIcon,
  YoutubeIcon,
} from "../../Icon";
import styles from "@/styles/Home.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-[#F5F5F5] border-t border-[#F5F5F5]">
      <div className="bg-[#414A50] p-8 flex justify-center items-center w-full">
        <div className="bg-[#414A50] lg:p-10 flex justify-between w-[1024px] max-lg:flex-col max-lg:gap-8">
          {/* <div className="bg-[#414A50] p-10 grid grid-cols-12 w-[1024px] "> */}
          <div className=" col-span-4">
            <Link href="/">
              <Image
                className="inline-block h-[118px] w-64 mb-8"
                src="/assets/logo/bio-logo.png"
                alt="logo"
                width={300}
                height={125}
              />
            </Link>
            <div className="flex  items-center gap-4">
              <p className="font-bold text-sm">Follow us</p>
              <YoutubeIcon /> <LinkedInIcon />
            </div>
          </div>

          <div className=" col-span-2">
            <p className="text-sm font-bold  mb-4">Navigate</p>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                  href="/solutions"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                  href="/expertise"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                  href="/participate"
                >
                  Participate
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                  href="/consulting"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div className=" col-span-2">
            <p className="text-sm font-bold  mb-4">Quick Links</p>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                  href="/faq"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                  href="/terms-conditions"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className=" col-span-3">
            <p className="text-sm font-bold  mb-4">Find us</p>
            <div className="space-y-2 text-base ">
              <p className="inline-flex ">
                <LocateIcon className="mr-2" />
                <Link
                  href="https://maps.app.goo.gl/uSVaWfnjg83r8BXK7"
                  target="_blank"
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                >
                  Enayetpur, Sirajganj, <br /> Bangladesh
                </Link>
              </p>
              <p className="flex items-center">
                <MailIcon className="mr-3" />
                <Link
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                  href="mailto:info@kyabrs.org"
                >
                  info@kyabrs.org
                </Link>
              </p>
              <p className="flex items-center">
                <PhoneIcon className="mr-3" />
                <Link
                  className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}  cursor-pointer w-fit`}
                  href="tel: +8801733070041"
                >
                  +880 1733-070041
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#313639] p-10">
        <div className="text-center  text-base ">
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
          Bioresearch Services.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

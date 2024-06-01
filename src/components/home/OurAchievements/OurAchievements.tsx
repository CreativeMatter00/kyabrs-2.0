/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const OurAchievements = () => {
  const currentYear = new Date().getFullYear();
  // const pathName = usePathname().toString();
  return (
    <div>
      <div
        className="h-screen"
        style={{
          background:
            "linear-gradient(135deg, #414A50 70%, rgba(79, 89, 97, 0.4) 30%)",
        }}
      >
        <div className=" mx-auto px-4 py-8 bg-black bg-opacity-0 text-white h-full flex justify-center items-center flex-col">
          <div className="container flex flex-col justify-center items-center max-w-[1024px]">
            <p className="text-5xl mb-4">Our Achievements</p>
            <p className="text-lg text-center">
              At KYA-BRS, we celebrate our commitment to medical research
              through groundbreaking trials and state-of-the-art lab
              accreditations, showcasing our dedication to healthcare
              excellence.
            </p>
          </div>
          <div className="mt-8 bg-[#4F5961] rounded-lg p-6 flex gap-4 max-w-[882px]">
            <Image
              src="/assets/images/home/RUM1062 2.png"
              height={310}
              width={306}
              alt="achievements"
              className="rounded-lg h-[310px] w-[306px]"
            />
            <div className="flex justify-between flex-col  pt-4 px-4">
              <p className="text-4xl">Groundbreaking Clinical Trial</p>
              <div>
                <p className="mb-4">
                  KYA-BRS successfully completed a Phase III clinical trial
                  leading to the approval of a new cancer therapy. This
                  breakthrough offers hope to thousands of patients.
                </p>
                <button className="border border-[#F5F5F5] px-6 py-2.5 text-sm font-medium rounded-full hover:text-[#FF6A5E] hover:border-[#FF6A5E]">
                  Learn more
                </button>
              </div>
              <div className="gap-2 text-[#F5F5F5] text-sm flex">
                <p className="font-bold mr-2">Tags:</p>
                <p className="hover:underline cursor-pointer">
                  Clinical Trials
                </p>
                <p className="hover:underline cursor-pointer">
                  Cancer Research
                </p>
                <p className="hover:underline cursor-pointer">New Therapies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#313639] text-[#F5F5F5] flex justify-center items-center p-12 border-y border-[#F5F5F5]">
        <div className="container flex justify-center items-center flex-col gap-8 max-w-[1024px]">
          <p className="text-5xl font-bold">Who We Are</p>
          <p className="text-4xl font-normal text-center">
            KYA-BRS: Bangladesh's Pioneering Clinical Research Institution
          </p>
          <p className="">
            As the first contract research organization in Bangladesh, KYA-BRS
            specializes in comprehensive Phase I to III clinical trials and
            bioequivalence studies. Our team of dedicated professionals
            collaborates with leading biopharmaceutical companies and clinical
            sites, ensuring the highest standards of regulatory and therapeutic
            expertise. With over 40,000 square feet of advanced research
            facilities, we are committed to making clinical trials accessible
            and patient-centered, advancing healthcare and treatment options for
            people everywhere.
          </p>
        </div>
      </div>
      <footer className="text-[#F5F5F5]">
        <div className="bg-[#414A50] p-8 flex justify-center items-center w-full">
          <div className="bg-[#414A50] p-10 flex justify-between w-[1024px] ">
            {/* <div className="bg-[#414A50] p-10 grid grid-cols-12 w-[1024px] "> */}
            <div className=" col-span-4">
              <Link href="/">
                <Image
                  className="inline-block h-[118px] w-64 mb-8"
                  src="/assets/logo/logo.png"
                  alt="logo"
                  width={255}
                  height={118}
                />
              </Link>
              <div className="flex justify-center items-center gap-4">
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
    </div>
  );
};

export default OurAchievements;

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
function YoutubeIcon(props: any) {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1097 2.10504e-05C28.0975 0.0151083 36.1943 8.12701 36.1792 18.1148C36.1641 28.1075 28.0522 36.2044 18.0695 36.1893C8.08173 36.1742 -0.0100488 28.0623 9.36663e-06 18.0745C0.0150966 8.08175 8.12196 -0.0150662 18.1097 2.10504e-05Z"
        fill="#ED2224"
      />
      <path
        d="M18.0892 11.567C20.1672 11.5214 22.2368 11.6168 24.3065 11.7661C26.1191 11.8947 27.0274 12.7532 27.1726 14.5367C27.3592 16.8677 27.4878 19.2029 27.185 21.538C26.932 23.4915 26.1896 24.263 24.207 24.4123C20.1298 24.7192 16.0485 24.7192 11.9672 24.4123C9.98466 24.263 9.24223 23.4957 8.98922 21.538C8.68644 19.1987 8.81502 16.8677 9.00166 14.5367C9.14683 12.7532 10.0552 11.8947 11.8677 11.7661C13.9374 11.6168 16.0112 11.5214 18.0892 11.567Z"
        fill="white"
      />
      <path
        d="M16.1979 15.3124C17.857 16.2746 19.3252 17.1291 20.9801 18.0913C19.4331 18.9914 18.0104 19.8333 16.567 20.6463C16.2269 20.8371 16.1979 20.5301 16.1979 20.2896C16.1937 18.7093 16.1979 17.1373 16.1979 15.3124Z"
        fill="#EE2626"
      />
    </svg>
  );
}

function LinkedInIcon(props: any) {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.3978 18.8331C36.3978 18.9493 36.3978 19.0702 36.3978 19.1863C36.356 19.2328 36.356 19.2793 36.3978 19.3258C36.3978 19.4419 36.3978 19.5628 36.3978 19.679C36.3141 20.1483 36.3234 20.6317 36.2816 21.1057C36.1608 22.458 35.7425 23.7314 35.236 24.9722C34.5575 26.6359 33.6745 28.1881 32.5219 29.5777C30.9837 31.4366 29.1945 32.9841 27.066 34.146C25.5045 34.9964 23.8594 35.6052 22.1213 35.9816C21.4335 36.1303 20.7318 36.1164 20.0347 36.1722C19.9557 36.1768 19.8674 36.1443 19.7977 36.2094C19.635 36.2094 19.4677 36.2094 19.3051 36.2094C19.1889 36.1396 19.0634 36.1908 18.9426 36.1722C18.8032 36.1908 18.6591 36.135 18.5243 36.2094C18.2873 36.2094 18.0549 36.2094 17.8179 36.2094C17.6785 36.1536 17.5344 36.1536 17.395 36.2094C17.1812 36.2094 16.9721 36.2094 16.7583 36.2094C16.289 36.1257 15.8103 36.1303 15.3363 36.0932C14.1884 36.0002 13.1009 35.6563 12.0274 35.2613C9.93148 34.4899 8.02145 33.3838 6.34843 31.906C4.68934 30.4374 3.29516 28.7505 2.24488 26.7847C1.36654 25.1395 0.743805 23.4154 0.385964 21.589C0.288371 21.0824 0.260484 20.5666 0.237247 20.0554C0.158243 18.3452 0.130355 16.635 0.348777 14.9341C0.539316 13.4795 1.01799 12.0992 1.60355 10.7562C2.33317 9.08314 3.3091 7.55883 4.50345 6.18788C5.91158 4.57063 7.54743 3.22291 9.42958 2.17727C11.1305 1.23388 12.9336 0.569314 14.8437 0.202178C15.3967 0.0952907 15.9544 0.0767078 16.5074 0.0488241C18.0875 -0.0348271 19.6675 -0.011589 21.243 0.123182C22.0516 0.192892 22.837 0.420606 23.6131 0.657617C26.1087 1.41048 28.3394 2.64665 30.2866 4.36614C31.9643 5.84398 33.3678 7.55883 34.4134 9.55251C35.2127 11.0722 35.8122 12.6616 36.1608 14.3392C36.3048 15.041 36.3048 15.7613 36.3513 16.477C36.3559 16.5327 36.342 16.5932 36.3885 16.6443C36.3885 16.714 36.3885 16.7837 36.3885 16.858C36.3374 16.9278 36.3374 16.9975 36.3885 17.0718C36.3885 17.188 36.3885 17.3088 36.3885 17.425C36.3327 17.5644 36.3327 17.7085 36.3885 17.8479C36.3885 18.0385 36.3885 18.2244 36.3885 18.4149C36.342 18.5497 36.342 18.6937 36.3978 18.8331Z"
        fill="#4973B8"
      />
      <path
        d="M36.3978 17.8433C36.3048 17.7039 36.3002 17.5598 36.3978 17.4204C36.3978 17.5645 36.3978 17.7039 36.3978 17.8433Z"
        fill="#587BBD"
      />
      <path
        d="M36.3978 18.8332C36.3002 18.6938 36.3048 18.5497 36.3978 18.4103C36.3978 18.5497 36.3978 18.6938 36.3978 18.8332Z"
        fill="#587BBD"
      />
      <path
        d="M17.3949 36.2095C17.5343 36.1026 17.6784 36.1212 17.8178 36.2095C17.6784 36.2095 17.539 36.2095 17.3949 36.2095Z"
        fill="#6C87C4"
      />
      <path
        d="M18.5289 36.2094C18.6591 36.1118 18.8124 36.1444 18.9611 36.1444C19.0076 36.1722 19.003 36.1908 18.9565 36.2094C18.8078 36.2094 18.6683 36.2094 18.5289 36.2094Z"
        fill="#597BBD"
      />
      <path
        d="M18.9519 36.2094C18.9519 36.1861 18.9566 36.1675 18.9566 36.1443C19.0727 36.1536 19.2029 36.1071 19.3051 36.2094C19.1843 36.2094 19.0681 36.2094 18.9519 36.2094Z"
        fill="#788FC8"
      />
      <path
        d="M36.3977 17.0673C36.3187 16.9976 36.2955 16.9279 36.3977 16.8535C36.3977 16.9279 36.3977 16.9976 36.3977 17.0673Z"
        fill="#A4B2DB"
      />
      <path
        d="M36.3977 19.3305C36.3187 19.284 36.3326 19.2375 36.3977 19.191C36.3977 19.2329 36.3977 19.2793 36.3977 19.3305Z"
        fill="#A0AED9"
      />
      <path
        d="M19.2257 15.8404C19.7416 15.3896 20.2342 15.0596 20.8151 14.8877C23.0504 14.2231 25.151 15.7428 25.2068 18.1082C25.2486 19.9067 25.2161 21.7099 25.2207 23.5084C25.2207 23.6943 25.1835 23.7826 24.9698 23.7826C24.1937 23.7733 23.4176 23.764 22.6415 23.7826C22.3487 23.7919 22.3859 23.6199 22.3859 23.4433C22.3859 21.9004 22.3859 20.3622 22.3859 18.8193C22.3859 18.573 22.3812 18.3267 22.3069 18.085C22.0884 17.3647 21.3728 16.9092 20.6106 17.0022C19.8206 17.0998 19.2397 17.7039 19.235 18.494C19.2211 20.1159 19.2164 21.7424 19.2397 23.3643C19.2443 23.7175 19.1374 23.7919 18.8075 23.7826C17.9849 23.7593 17.1623 23.7686 16.3398 23.7779C16.1306 23.7826 16.0563 23.7315 16.0563 23.5037C16.0656 20.6689 16.0656 17.834 16.0563 14.9992C16.0563 14.7761 16.1306 14.725 16.3398 14.725C17.2088 14.7343 18.0825 14.739 18.9515 14.725C19.1978 14.7204 19.249 14.818 19.235 15.0364C19.2164 15.2734 19.2257 15.5104 19.2257 15.8404Z"
        fill="#F4F4F4"
      />
      <path
        d="M11.6461 19.2561C11.6461 17.8666 11.6508 16.4771 11.6415 15.0922C11.6415 14.8273 11.6926 14.7204 11.9854 14.7297C12.715 14.7529 13.4446 14.7436 14.1743 14.7343C14.3927 14.7297 14.4856 14.7808 14.4856 15.0225C14.4763 17.848 14.4763 20.6689 14.4856 23.4945C14.4856 23.7361 14.3973 23.7872 14.1743 23.7826C13.4353 23.7733 12.6918 23.7686 11.9482 23.7826C11.6926 23.7872 11.6368 23.6943 11.6368 23.4573C11.6508 22.0584 11.6461 20.6596 11.6461 19.2561Z"
        fill="#F4F4F4"
      />
      <path
        d="M13.1147 10.2172C14.0209 10.2172 14.797 10.9979 14.8063 11.9041C14.8109 12.8103 14.0348 13.6004 13.1333 13.605C12.2224 13.6143 11.4091 12.8057 11.4184 11.8995C11.4231 11.0072 12.2177 10.2172 13.1147 10.2172Z"
        fill="#F4F4F4"
      />
    </svg>
  );
}

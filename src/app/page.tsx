"use client";

import React, { useEffect, useState } from "react";
import SectionFinal from "@/components/home/SectionFinal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegistrationForm from "@/components/home/RegistrationForm";
import Image from "next/image";
import { BrsIcon } from "@/components/ui/Icon";

export default function Home() {
  const [activeSection, setActiveSection] = useState<number>(0);

  useEffect(() => {
    function changeImage() {
      const scroll = window.scrollY + window.innerHeight / 12;
      const sections = document.getElementsByClassName("section");

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        section.classList.remove("active");

        if (
          section.offsetTop <= scroll &&
          section.offsetTop + section.offsetHeight > scroll
        ) {
          setActiveSection(i);
          section.classList.add("active");
        }
      }
    }

    window.addEventListener("scroll", changeImage);
    changeImage();

    return () => {
      window.removeEventListener("scroll", changeImage);
    };
  }, []);

  return (
    <div className="scroll-smooth text-center relative">
      <Dialog>
        <DialogTrigger asChild>
          <button className="fixed bottom-10 right-10 z-20 text-[#414A50] hover:text-[#F5F5F5] border-2 border-[#313639]  hover:border-[#F5F5F5] bg-[#F5F5F5] hover:bg-[#313639] text-xs font-bold px-6 py-4 rounded-full">
            Registration
          </button>
        </DialogTrigger>
        <DialogContent className="bg-brandSecondary text-bgPrimary">
          <DialogHeader>
            <DialogTitle>Registration Form</DialogTitle>
            <DialogDescription>
              <RegistrationForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <button className="fixed bottom-32 right-14 z-20 bg-danger px-6 py-4 rounded-full group hover:bg-bgPrimary">
            <BrsIcon />
          </button>
        </DialogTrigger>
        <DialogContent className="bg-brandSecondary text-bgPrimary">
          <DialogHeader>
            <DialogDescription>
              <Image
                src={"/assets/gif/volunteer gif.gif"}
                height={1200}
                width={1200}
                alt="bd"
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <SectionFinal
        activeSection={activeSection}
        img="url(/assets/images/home/slide-8.png)"
        direction="justify-start"
        text="specialized in providing support to the pharmaceutical, biotechnology, and medical device industries"
      >
        <p className="text-5xl text-[#F5F5F5] font-normal leading-[3.5rem] ">
          Specialized in providing <br />
          support to the <br />
          <span className="text-[#FF6A5E] font-bold">Pharmaceutical</span>,
          <br />
          <span className="text-[#FF6A5E] font-bold">Biotechnology&nbsp;</span>
          and
          <span className="text-[#FF6A5E] font-bold">
            &nbsp;Medical
            <br /> Device Industries
          </span>
        </p>
      </SectionFinal>

      <SectionFinal
        activeSection={activeSection}
        img="url(/assets/images/home/slide-2.png)"
        direction="justify-end"
        text="KYAMCH-BRS plays a crucial role in the drug development process by assisting in various aspects of clinical trials and research studies"
      >
        <p className="leading-[3.5rem] text-4xl text-[#F5F5F5] font-normal content-center">
          KYAMCH-BRS plays a crucial role is the <br />
          <span className="text-[#FF6A5E] text-5xl">
            drug development process&nbsp;
          </span>
          by <br /> assisting in various aspects of
          <span className="text-[#FF6A5E] text-5xl">
            &nbsp;clinical <br /> trials&nbsp;
          </span>
          and
          <span className="text-[#FF6A5E] text-5xl">
            &nbsp; research studies
          </span>
        </p>
      </SectionFinal>

      <SectionFinal
        activeSection={activeSection}
        img="url(/assets/images/home/slide-6.png)"
        direction="justify-start"
        text="We offer services ranging from clinical trial management, data management, regulatory affairs, pharmacovigilance, biostatistics, and medical writing"
      >
        <p className="leading-[3.5rem] text-5xl text-[#F5F5F5] font-normal ">
          We offer services ranging <br />{" "}
          <span className="text-[#FF6A5E]  font-bold">
            from Clinical Trial <br /> Management{" "}
          </span>{" "}
          ,{" "}
          <span className="text-[#FF6A5E]  font-bold">
            Data <br />
            Management{" "}
          </span>
          ,
          <span className="text-[#FF6A5E]  font-bold">
            {" "}
            Regulatory <br /> Affairs{" "}
          </span>
          ,
          <span className="text-[#FF6A5E]  font-bold"> Pharmacovigilance </span>
          , <br />{" "}
          <span className="text-[#FF6A5E]  font-bold">
            Biostatistics{" "}
          </span> and{" "}
          <span className="text-[#FF6A5E]  font-bold">
            Medical <br /> Writing
          </span>
        </p>
      </SectionFinal>

      <SectionFinal
        activeSection={activeSection}
        img="url(/assets/images/home/slide-4.png)"
        direction="justify-start"
        text="Aims to tailor medical treatments to individual patients based on their unique genetic makeup, environmental exposures, and lifestyle factors."
      >
        <p className="leading-[3.5rem] text-5xl text-[#F5F5F5] font-normal">
          Aims to tailor medical <br /> treatments to individual <br /> patients
          based on their <br />{" "}
          <span className="font-bold">
            {" "}
            Unique Genetic Makeup, <br /> Environmental Exposures <br /> and
            Lifestyle Factors{" "}
          </span>
        </p>
      </SectionFinal>
    </div>
  );
}

// "use client";

// import React, { useEffect, useState } from "react";
// import Section from "@/components/home/Section";
// import HomeFooter from "@/components/ui/footer/homeFooter/HomeFooter";

// export default function Home() {
//   const [activeSection, setActiveSection] = useState<number>(0);

//   useEffect(() => {
//     function changeImage() {
//       const scroll = window.scrollY + window.innerHeight / 12;
//       const sections = document.getElementsByClassName("section");

//       for (let i = 0; i < sections.length; i++) {
//         const section = sections[i] as HTMLElement;
//         section.classList.remove("active");

//         if (
//           section.offsetTop <= scroll &&
//           section.offsetTop + section.offsetHeight > scroll
//         ) {
//           setActiveSection(i);
//           section.classList.add("active");
//         }
//       }
//     }

//     window.addEventListener("scroll", changeImage);
//     changeImage();

//     return () => {
//       window.removeEventListener("scroll", changeImage);
//     };
//   }, []);

//   const scrollToNextSection = () => {
//     const sections = document.getElementsByClassName("section");
//     if (activeSection < sections.length - 1) {
//       const nextSection = sections[activeSection + 1] as HTMLElement;
//       const scrollOptions: ScrollToOptions = {
//         top: nextSection.offsetTop,
//         behavior: "smooth",
//         // easing: "ease-in-out",
//       };
//       nextSection.style.scrollBehavior = "smooth";
//       window.scrollTo(scrollOptions);
//       setActiveSection(activeSection + 1);
//     }
//   };

//   // console.log("activeSection", activeSection);

//   return (
//     <div>
//       <div>
//         <div className="scroll-smooth text-center">
//           <Section
//             activeSection={activeSection}
//             img="url(/assets/images/home/bg-1.jpg)"
//             direction="justify-start"
//             text="specialized in providing support to the pharmaceutical, biotechnology, and medical device industries"
//           />
//           <Section
//             activeSection={activeSection}
//             img="url(/assets/images/home/bg-2.jpg)"
//             direction="justify-end"
//             text="KYAMCH-BRS plays a crucial role in the drug development process by assisting in various aspects of clinical trials and research studies"
//           />
//           <Section
//             activeSection={activeSection}
//             img="url(/assets/images/home/bg-5.jpg)"
//             direction="justify-start"
//             text="We offer services ranging from clinical trial management, data management, regulatory affairs, pharmacovigilance, biostatistics, and medical writing"
//           />
//           <Section
//             activeSection={activeSection}
//             img="url(/assets/images/home/bg-4.jpeg)"
//             direction="justify-end"
//             text="Aims to tailor medical treatments to individual patients based on their unique genetic makeup, environmental exposures, and lifestyle factors."
//           />
//           {/* <HomeFooter /> */}
//         </div>

//         {/* {activeSection === 3 ? (
//           (<button
//             className="next-section-button bg-primary p-4 rounded-full text-2xl text-white animate-bounce"
//             onClick={scrollToNextSection}
//           >
//             <FaArrowDown />
//           </button>):(<div></div>)
//         )} */}
//         {/* {activeSection === 3 ? (
//           <div></div>
//         ) : (
//           <button
//             className="next-section-button bg-primary p-4 rounded-full text-2xl text-white animate-bounce"
//             onClick={scrollToNextSection}
//           >
//             <FaArrowDown />
//           </button>
//         )} */}
//       </div>
//     </div>
//   );
// }

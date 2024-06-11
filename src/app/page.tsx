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
        <p className="text-5xl text-[#F5F5F5] font-normal leading-[3.5rem] break-words max-md:text-3xl">
          Specialized in providing <br className="max-lg:hidden" />
          support to the <br className="max-lg:hidden" />
          <span className="text-[#FF6A5E] font-bold">Pharmaceutical</span>,
          <br className="max-lg:hidden" />
          <span className="text-[#FF6A5E] font-bold">Biotechnology&nbsp;</span>
          and
          <span className="text-[#FF6A5E] font-bold">
            &nbsp;Medical
            <br className="max-lg:hidden" /> Device Industries
          </span>
        </p>
      </SectionFinal>

      <SectionFinal
        activeSection={activeSection}
        img="url(/assets/images/home/slide-2.png)"
        direction="justify-end"
        text="KYAMCH-BRS plays a crucial role in the drug development process by assisting in various aspects of clinical trials and research studies"
      >
        <p className="leading-[3.5rem] text-4xl text-[#F5F5F5] font-normal content-center break-words max-md:text-3xl">
          KYAMCH-BRS plays a crucial role is the{" "}
          <br className="max-lg:hidden" />
          <span className="text-[#FF6A5E] text-5xl max-md:text-4xl">
            drug development process&nbsp;
          </span>
          by <br className="max-lg:hidden" /> assisting in various aspects of
          <span className="text-[#FF6A5E] text-5xl max-md:text-4xl">
            &nbsp;clinical <br className="max-lg:hidden" /> trials&nbsp;
          </span>
          and
          <span className="text-[#FF6A5E] text-5xl max-md:text-4xl">
            &nbsp;research studies
          </span>
        </p>
      </SectionFinal>

      <SectionFinal
        activeSection={activeSection}
        img="url(/assets/images/home/slide-6.png)"
        direction="justify-start"
        text="We offer services ranging from clinical trial management, data management, regulatory affairs, pharmacovigilance, biostatistics, and medical writing"
      >
        <p className="leading-[3.5rem] text-5xl text-[#F5F5F5] font-normal max-md:text-3xl">
          We offer services ranging <br className="max-lg:hidden" />{" "}
          <span className="text-[#FF6A5E]  font-bold break-words ">
            from Clinical Trial <br className="max-lg:hidden" /> Management{" "}
          </span>{" "}
          ,{" "}
          <span className="text-[#FF6A5E]  font-bold">
            Data <br className="max-lg:hidden" />
            Management{" "}
          </span>
          ,
          <span className="text-[#FF6A5E]  font-bold">
            {" "}
            Regulatory <br className="max-lg:hidden" /> Affairs{" "}
          </span>
          ,
          <span className="text-[#FF6A5E]  font-bold"> Pharmacovigilance </span>
          , <br className="max-lg:hidden" />{" "}
          <span className="text-[#FF6A5E]  font-bold">Biostatistics </span> and{" "}
          <span className="text-[#FF6A5E]  font-bold">
            Medical <br className="max-lg:hidden" /> Writing
          </span>
        </p>
      </SectionFinal>

      <SectionFinal
        activeSection={activeSection}
        img="url(/assets/images/home/slide-4.png)"
        direction="justify-start"
        text="Aims to tailor medical treatments to individual patients based on their unique genetic makeup, environmental exposures, and lifestyle factors."
      >
        <p className="leading-[3.5rem] text-5xl text-[#F5F5F5] font-normal break-words max-md:text-3xl">
          Aims to tailor medical <br className="max-lg:hidden" /> treatments to
          individual <br className="max-lg:hidden" /> patients based on their{" "}
          <br className="max-lg:hidden" />{" "}
          <span className="font-bold">
            {" "}
            Unique Genetic Makeup, <br className="max-lg:hidden" />{" "}
            Environmental Exposures <br className="max-lg:hidden" /> and
            Lifestyle Factors{" "}
          </span>
        </p>
      </SectionFinal>
    </div>
  );
}

// "use client";

// import React, { useEffect, useState } from "react";
// import SectionFinal from "@/components/home/SectionFinal";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import RegistrationForm from "@/components/home/RegistrationForm";
// import Image from "next/image";
// import { BrsIcon } from "@/components/ui/Icon";

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

//   return (
//     <div className="scroll-smooth text-center relative">
//       <Dialog>
//         <DialogTrigger asChild>
//           <button className="fixed bottom-10 right-10 z-20 text-[#414A50] hover:text-[#F5F5F5] border-2 border-[#313639]  hover:border-[#F5F5F5] bg-[#F5F5F5] hover:bg-[#313639] text-xs font-bold px-6 py-4 rounded-full">
//             Registration
//           </button>
//         </DialogTrigger>
//         <DialogContent className="bg-brandSecondary text-bgPrimary">
//           <DialogHeader>
//             <DialogTitle>Registration Form</DialogTitle>
//             <DialogDescription>
//               <RegistrationForm />
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>

//       <Dialog>
//         <DialogTrigger asChild>
//           <button className="fixed bottom-32 right-14 z-20 bg-danger px-6 py-4 rounded-full group hover:bg-bgPrimary">
//             <BrsIcon />
//           </button>
//         </DialogTrigger>
//         <DialogContent className="bg-brandSecondary text-bgPrimary">
//           <DialogHeader>
//             <DialogDescription>
//               <Image
//                 src={"/assets/gif/volunteer gif.gif"}
//                 height={1200}
//                 width={1200}
//                 alt="bd"
//               />
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>

//       <SectionFinal
//         activeSection={activeSection}
//         img="url(/assets/images/home/slide-8.png)"
//         direction="justify-start"
//         text="specialized in providing support to the pharmaceutical, biotechnology, and medical device industries"
//       >
//         <p className="text-5xl text-[#F5F5F5] font-normal leading-[3.5rem] break-words max-md:text-3xl">
//           Specialized in providing <br className="max-lg:hidden" />
//           support to the <br className="max-lg:hidden" />
//           <span className="text-[#FF6A5E] font-bold">Pharmaceutical</span>,
//           <br className="max-lg:hidden" />
//           <span className="text-[#FF6A5E] font-bold">Biotechnology&nbsp;</span>
//           and
//           <span className="text-[#FF6A5E] font-bold">
//             &nbsp;Medical
//             <br className="max-lg:hidden" /> Device Industries
//           </span>
//         </p>
//       </SectionFinal>

//       <SectionFinal
//         activeSection={activeSection}
//         img="url(/assets/images/home/slide-2.png)"
//         direction="justify-end"
//         text="KYAMCH-BRS plays a crucial role in the drug development process by assisting in various aspects of clinical trials and research studies"
//       >
//         <p className="leading-[3.5rem] text-4xl text-[#F5F5F5] font-normal content-center break-words max-md:text-3xl">
//           KYAMCH-BRS plays a crucial role is the{" "}
//           <br className="max-lg:hidden" />
//           <span className="text-[#FF6A5E] text-5xl max-md:text-4xl">
//             drug development process&nbsp;
//           </span>
//           by <br className="max-lg:hidden" /> assisting in various aspects of
//           <span className="text-[#FF6A5E] text-5xl max-md:text-4xl">
//             &nbsp;clinical <br className="max-lg:hidden" /> trials&nbsp;
//           </span>
//           and
//           <span className="text-[#FF6A5E] text-5xl max-md:text-4xl">
//             &nbsp;research studies
//           </span>
//         </p>
//       </SectionFinal>

//       <SectionFinal
//         activeSection={activeSection}
//         img="url(/assets/images/home/slide-6.png)"
//         direction="justify-start"
//         text="We offer services ranging from clinical trial management, data management, regulatory affairs, pharmacovigilance, biostatistics, and medical writing"
//       >
//         <p className="leading-[3.5rem] text-5xl text-[#F5F5F5] font-normal max-md:text-3xl">
//           We offer services ranging <br className="max-lg:hidden" />{" "}
//           <span className="text-[#FF6A5E]  font-bold break-words ">
//             from Clinical Trial <br className="max-lg:hidden" /> Management{" "}
//           </span>{" "}
//           ,{" "}
//           <span className="text-[#FF6A5E]  font-bold">
//             Data <br className="max-lg:hidden" />
//             Management{" "}
//           </span>
//           ,
//           <span className="text-[#FF6A5E]  font-bold">
//             {" "}
//             Regulatory <br className="max-lg:hidden" /> Affairs{" "}
//           </span>
//           ,
//           <span className="text-[#FF6A5E]  font-bold"> Pharmacovigilance </span>
//           , <br className="max-lg:hidden" />{" "}
//           <span className="text-[#FF6A5E]  font-bold">Biostatistics </span> and{" "}
//           <span className="text-[#FF6A5E]  font-bold">
//             Medical <br className="max-lg:hidden" /> Writing
//           </span>
//         </p>
//       </SectionFinal>

//       <SectionFinal
//         activeSection={activeSection}
//         img="url(/assets/images/home/slide-4.png)"
//         direction="justify-start"
//         text="Aims to tailor medical treatments to individual patients based on their unique genetic makeup, environmental exposures, and lifestyle factors."
//       >
//         <p className="leading-[3.5rem] text-5xl text-[#F5F5F5] font-normal break-words max-md:text-3xl">
//           Aims to tailor medical <br className="max-lg:hidden" /> treatments to
//           individual <br className="max-lg:hidden" /> patients based on their{" "}
//           <br className="max-lg:hidden" />{" "}
//           <span className="font-bold">
//             {" "}
//             Unique Genetic Makeup, <br className="max-lg:hidden" />{" "}
//             Environmental Exposures <br className="max-lg:hidden" /> and
//             Lifestyle Factors{" "}
//           </span>
//         </p>
//       </SectionFinal>
//     </div>
//   );
// }

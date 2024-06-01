"use client";

import React, { useEffect, useState } from "react";
import Section from "@/components/home/Section";
import HomeFooter from "@/components/ui/footer/HomeFooter";

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

	const scrollToNextSection = () => {
		const sections = document.getElementsByClassName("section");
		if (activeSection < sections.length - 1) {
			const nextSection = sections[activeSection + 1] as HTMLElement;
			const scrollOptions: ScrollToOptions = {
				top: nextSection.offsetTop,
				behavior: "smooth",
				// easing: "ease-in-out",
			};
			nextSection.style.scrollBehavior = "smooth";
			window.scrollTo(scrollOptions);
			setActiveSection(activeSection + 1);
		}
	};

	// console.log("activeSection", activeSection);

	return (
		<div>
			<div>
				<div className="scroll-smooth text-center">
					<Section
						activeSection={activeSection}
						img="url(/assets/images/home/bg-1.jpg)"
						direction="justify-start"
						text="specialized in providing support to the pharmaceutical, biotechnology, and medical device industries"
					/>
					<Section
						activeSection={activeSection}
						img="url(/assets/images/home/bg-2.jpg)"
						direction="justify-end"
						text="KYA-BRS plays a crucial role in the drug development process by assisting in various aspects of clinical trials and research studies"
					/>
					<Section
						activeSection={activeSection}
						img="url(/assets/images/home/bg-5.jpg)"
						direction="justify-start"
						text="We offer services ranging from clinical trial management, data management, regulatory affairs, pharmacovigilance, biostatistics, and medical writing"
					/>
					<Section
						activeSection={activeSection}
						img="url(/assets/images/home/bg-4.jpeg)"
						direction="justify-end"
						text="Aims to tailor medical treatments to individual patients based on their unique genetic makeup, environmental exposures, and lifestyle factors."
					/>
					<HomeFooter />
				</div>

				{/* {activeSection === 3 ? (
          (<button
            className="next-section-button bg-primary p-4 rounded-full text-2xl text-white animate-bounce"
            onClick={scrollToNextSection}
          >
            <FaArrowDown />
          </button>):(<div></div>)
        )} */}
				{/* {activeSection === 3 ? (
          <div></div>
        ) : (
          <button
            className="next-section-button bg-primary p-4 rounded-full text-2xl text-white animate-bounce"
            onClick={scrollToNextSection}
          >
            <FaArrowDown />
          </button>
        )} */}
			</div>
		</div>
	);
}

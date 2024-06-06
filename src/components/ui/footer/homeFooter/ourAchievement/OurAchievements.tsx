import Image from "next/image";
import { useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const achievementsData = [
	{
		title: "Groundbreaking Clinical Trial",
		description:
			"KYA-BRS successfully completed a Phase III clinical trial leading to the approval of a new cancer therapy. This breakthrough offers hope to thousands of patients.",
		imageSrc: "/assets/images/home/RUM1062 2.png",
		tags: ["Clinical Trials", "Cancer Research", "New Therapies"],
	},
	{
		title: "State-of-the-Art Bioanalytical Lab",
		description:
			"Our bioanalytical laboratory achieved international accreditation for its cutting-edge research and quality standards, enhancing our research capabilities.",
		imageSrc: "/assets/images/home/RUM1062 2.png",
		tags: ["Bioanalytical Lab", "Accreditation", "Research Excellence"],
	},
	{
		title: "Community Engagement Award",
		description:
			"KYA-BRS received a prestigious award for outstanding community outreach and education efforts, highlighting our commitment to public health awareness.",
		imageSrc: "/assets/images/home/RUM1062 2.png",
		tags: ["Community Engagement", "Public Health", "Education"],
	},
	{
		title: "First Hospital-Affiliated Bio-Research Institution",
		description:
			"We are proud to be the first hospital-affiliated bio-research institution in Bangladesh, enabling seamless integration of clinical practice and research.",
		imageSrc: "/assets/images/home/bg-4.jpeg",
		tags: ["Hospital-Affiliated", "Bio-Research", "Innovation"],
	},
];

const OurAchievements = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		if (currentIndex < achievementsData.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrevious = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<div
			className="h-screen"
			style={{
				background:
					"linear-gradient(135deg, #414A50 70%, rgba(79, 89, 97, 0.4) 30%)",
			}}
		>
			<div className="mx-auto px-4 py-8 bg-black bg-opacity-0 text-white h-full flex justify-center items-center flex-col">
				<div className="container flex flex-col justify-center items-center max-w-[1024px]">
					<p className="text-5xl mb-4">Our Achievements</p>
					<p className="text-lg text-center">
						At KYA-BRS, we celebrate our commitment to medical research through
						groundbreaking trials and state-of-the-art lab accreditations,
						showcasing our dedication to healthcare excellence.
					</p>

					<div className="container mx-auto">
						<Carousel className="w-full">
							<CarouselContent>
								{achievementsData.map((achievement, index) => (
									<CarouselItem
										key={index}
										className="mt-8 bg-[#4F5961] rounded-lg p-6 flex gap-4 w-auto text-center"
									>
										<Image
											src={achievement.imageSrc}
											height={310}
											width={306}
											alt="achievements"
											className="rounded-lg h-[310px] w-[306px] hidden md:block"
										/>
										<div className="flex justify-between flex-col pt-4 px-4">
											<p className="text-2xl md:text-4xl">
												{achievement.title}
											</p>
											<div>
												<p className="mb-4 text-sm md:text-base">
													{achievement.description}
												</p>
												{/* <button className="border border-[#F5F5F5] px-6 py-2.5 text-sm font-medium rounded-full hover:text-[#FF6A5E] hover:border-[#FF6A5E]">
													Learn more
												</button> */}
											</div>
											{/* <div className="gap-2 text-[#F5F5F5] text-sm flex">
												<p className="font-bold mr-2">Tags:</p>
												{achievement.tags.map((tag, tagIndex) => (
													<p
														key={tagIndex}
														className="hover:underline cursor-pointer text-sm md:text-base"
													>
														{tag}
													</p>
												))}
											</div> */}
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="left-0" />
							<CarouselNext className="right-0" />
						</Carousel>
					</div>
				</div>
				{/* #313639
        #4F5961 */}
				{/* bg-[#FF6A5E] hover:bg-[#FF4E3F] */}
				<div className="flex justify-between gap-4">
					{/* <button className="">
						<svg
							width="11"
							height="18"
							viewBox="0 0 11 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 1L2 9L10 17"
								stroke="#F5F5F5"
								stroke-width="2.66667"
							/>
						</svg>
					</button> */}

					{/* <button>
						<svg
							width="11"
							height="18"
							viewBox="0 0 11 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M1 1L9 9L1 17" stroke="#F5F5F5" stroke-width="2.66667" />
						</svg>
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default OurAchievements;

// export default OurAchievements;

// import Image from "next/image";

// const OurAchievements = () => {
//   return (
//     <div
//       className="h-screen"
//       style={{
//         background:
//           "linear-gradient(135deg, #414A50 70%, rgba(79, 89, 97, 0.4) 30%)",
//       }}
//     >
//       <div className=" mx-auto px-4 py-8 bg-black bg-opacity-0 text-white h-full flex justify-center items-center flex-col">
//         <div className="container flex flex-col justify-center items-center max-w-[1024px]">
//           <p className="text-5xl mb-4">Our Achievements</p>
//           <p className="text-lg text-center">
//             At KYA-BRS, we celebrate our commitment to medical research through
//             groundbreaking trials and state-of-the-art lab accreditations,
//             showcasing our dedication to healthcare excellence.
//           </p>
//         </div>
//         <div className="mt-8 bg-[#4F5961] rounded-lg p-6 flex gap-4 max-w-[882px]">
//           <Image
//             src="/assets/images/home/RUM1062 2.png"
//             height={310}
//             width={306}
//             alt="achievements"
//             className="rounded-lg h-[310px] w-[306px]"
//           />
//           <div className="flex justify-between flex-col  pt-4 px-4">
//             <p className="text-4xl">Groundbreaking Clinical Trial</p>
//             <div>
//               <p className="mb-4">
//                 KYA-BRS successfully completed a Phase III clinical trial
//                 leading to the approval of a new cancer therapy. This
//                 breakthrough offers hope to thousands of patients.
//               </p>
//               <button className="border border-[#F5F5F5] px-6 py-2.5 text-sm font-medium rounded-full hover:text-[#FF6A5E] hover:border-[#FF6A5E]">
//                 Learn more
//               </button>
//             </div>
//             <div className="gap-2 text-[#F5F5F5] text-sm flex">
//               <p className="font-bold mr-2">Tags:</p>
//               <p className="hover:underline cursor-pointer">Clinical Trials</p>
//               <p className="hover:underline cursor-pointer">Cancer Research</p>
//               <p className="hover:underline cursor-pointer">New Therapies</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurAchievements;

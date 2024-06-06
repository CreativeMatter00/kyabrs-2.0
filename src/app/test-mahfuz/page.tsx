"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

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

const page = () => {
	return (
		<div className="container mx-auto">
			<Carousel className="w-full">
				<CarouselContent>
					{achievementsData.map((achievement, index) => (
						<CarouselItem
							key={index}
							className="mt-8 bg-[#4F5961] rounded-lg p-6 flex gap-4 w-auto"
						>
							<Image
								src={achievement.imageSrc}
								height={310}
								width={306}
								alt="achievements"
								className="rounded-lg h-[310px] w-[306px]"
							/>
							<div className="flex justify-between flex-col pt-4 px-4">
								<p className="text-4xl">{achievement.title}</p>
								<div>
									<p className="mb-4">{achievement.description}</p>
									<button className="border border-[#F5F5F5] px-6 py-2.5 text-sm font-medium rounded-full hover:text-[#FF6A5E] hover:border-[#FF6A5E]">
										Learn more
									</button>
								</div>
								<div className="gap-2 text-[#F5F5F5] text-sm flex">
									<p className="font-bold mr-2">Tags:</p>
									{achievement.tags.map((tag, tagIndex) => (
										<p
											key={tagIndex}
											className="hover:underline cursor-pointer"
										>
											{tag}
										</p>
									))}
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-0" />
				<CarouselNext className="right-0" />
			</Carousel>
		</div>
	);
};

export default page;

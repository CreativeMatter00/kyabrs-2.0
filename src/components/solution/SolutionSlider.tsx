import Image from "next/image";
import Link from "next/link";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const Solutions = [
	{
		image:
			"/assets/images/solutions/icons/Clinical Development & Research Services.png",
		title: "Clinical Development & Research Services",
		link: "/solutions/clinical-development-service",
	},
	{
		image: "/assets/images/solutions/icons/Feasibility study.png",
		title: "Feasibility Study",
		link: "/solutions/feasibility-study",
	},
	{
		image: "/assets/images/solutions/icons/Clinical Data Management.png",
		title: "Clinical Data Management",
		link: "/solutions/Clinical Data Management",
	},
	{
		image: "/assets/images/solutions/icons/Quality Assurance.png",
		title: "Quality Assurance",
		link: "/solutions/quality-assurance",
	},
	{
		image: "/assets/images/solutions/icons/Clinical Trial Management.png",
		title: "Clinical Trial Management",
		link: "/solutions/clinical-trial-management",
	},
	{
		image: "/assets/images/solutions/icons/Laboratory Services.png",
		title: "Infectious Diseases & Vaccines",
		link: "/solutions/infectious-diseases",
	},
	{
		image: "/assets/images/solutions/icons/Clinical Monitoring.png",
		title: "Clinical Monitoring",
		link: "/solutions/clinical-monitoring",
	},
	{
		image: "/assets/images/solutions/icons/Biostatics Services.png",
		title: "Biostatics Services",
		link: "/solutions/biostatics-services",
	},
];

const SolutionSlider = () => {
	return (
		<div>
			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full"
			>
				<CarouselContent className="">
					{Solutions.map((solution, index) => {
						return (
							<CarouselItem
								key={index}
								className="bg-brandColorLs1 hover:bg-brandPrimaryLs2 rounded-lg basis-1/2 lg:basis-1/5 mx-4 p-4 group"
							>
								<Link href={solution.link}>
									<div className="flex flex-col items-center justify-center gap-4 px-4">
										<Image
											src={solution.image}
											width={80}
											height={75}
											alt={solution.title}
										/>
										<p className="text-center"> {solution.title} </p>
									</div>
								</Link>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious className="left-0" />
				<CarouselNext className="right-0" />
			</Carousel>
		</div>
	);
};

export default SolutionSlider;

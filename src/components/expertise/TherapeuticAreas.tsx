import Image from "next/image";
import Link from "next/link";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const Areas = [
	{
		image: "/assets/images/expertise/icons/Autoimmune Diseases.png",
		title: "Autoimmune Diseases",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/autoimmune-diseases",
	},
	{
		image: "/assets/images/expertise/icons/Cardiovascular.png",
		title: "Cardiovascular",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/cardiovascular",
	},
	{
		image: "/assets/images/expertise/icons/Gastroenterology.png",
		title: "Gastroenterology",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/gastroenterology",
	},
	{
		image: "/assets/images/expertise/icons/Hematology & Oncology.png",
		title: "Hematology & Oncology",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/hematology-oncology",
	},
	{
		image: "/assets/images/expertise/icons/Infectious Diseases & Vaccines.png",
		title: "Infectious Diseases & Vaccines",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/infectious-diseases",
	},
	{
		image: "/assets/images/expertise/icons/NASH & Liver Disease.png",
		title: "NASH & Liver Disease",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/nash-liver-disease",
	},
	{
		image: "/assets/images/expertise/icons/Neurology & Psychiatry.png",
		title: "Neurology & Psychiatry",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/neurology-psychiatry",
	},
	{
		image: "/assets/images/expertise/icons/Nephrology.png",
		title: "Nephrology",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/nephrology",
	},
	{
		image: "/assets/images/expertise/icons/Ophthalmology.png",
		title: "Ophthalmology",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/ophthalmology",
	},
	{
		image: "/assets/images/expertise/icons/Pediatrics.png",
		title: "Pediatrics",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/pediatrics",
	},
	{
		image: "/assets/images/expertise/icons/Rare Diseases.png",
		title: "Rare Diseases",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/rare-diseases",
	},
	{
		image: "/assets/images/expertise/icons/Cellular & Gene Therapy.png",
		title: "Cellular & Gene Therapy",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/cellular-gene-therapy",
	},
	{
		image: "/assets/images/expertise/icons/Radiation Therapy.png",
		title: "Radiation Therapy",
		desription:
			"We develop innovative treatments for autoimmune diseases like rheumatoid arthritis and lupus through clinical trials.",
		link: "/expertise/radiation-therapy",
	},
];

const TherapeuticAreas = () => {
	return (
		<div>
			<p className="font-bold mb-8"> Therapeutic Areas </p>

			<Carousel
				opts={{
					align: "start",
					// loop: true,
				}}
				orientation="vertical"
				className="w-full hidden lg:block"
			>
				<CarouselContent className="-mt-1 h-[800px]">
					{Areas.map((area, index) => {
						return (
							<CarouselItem
								key={index}
								className="h-[180px] bg-brandColorLs1 rounded-lg basis-[10%] mb-4"
							>
								<div className="flex pb-4">
									<div className="w-1/4 flex flex-col items-center justify-center gap-4 px-4">
										<Image
											src={area.image}
											width={80}
											height={75}
											alt={area.title}
										/>
										<p className="text-center"> {area.title} </p>
									</div>

									<div className="w-3/4">
										<div className="flex flex-col justify-between h-full">
											<p>
												We develop innovative treatments for autoimmune diseases
												like rheumatoid arthritis and lupus through clinical
												trials.
											</p>
											<div className="">
												<Link
													href={area.link}
													className="font-bold text-brandPrimaryLs2"
												>
													Learn More
												</Link>
											</div>
										</div>
									</div>
								</div>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full block lg:hidden"
			>
				<CarouselContent className="">
					{Areas.map((area, index) => {
						return (
							<CarouselItem
								key={index}
								className=" bg-brandColorLs1 rounded-lg basis-1/3 mx-4 p-4"
							>
								<div className="flex flex-col items-center justify-center gap-4 px-4">
									<Image
										src={area.image}
										width={80}
										height={75}
										alt={area.title}
									/>
									<p className="text-center"> {area.title} </p>
								</div>
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

export default TherapeuticAreas;

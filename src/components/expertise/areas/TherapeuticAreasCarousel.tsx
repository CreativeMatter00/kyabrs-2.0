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
		imageHover: "/assets/images/expertise/icons-hover/Autoimmune Diseases.png",
		title: "Autoimmune Diseases",
		link: "/expertise/autoimmune-diseases",
	},
	{
		image: "/assets/images/expertise/icons/Cardiovascular.png",
		imageHover: "/assets/images/expertise/icons-hover/Cardiovascular.png",
		title: "Cardiovascular",
		link: "/expertise/cardiovascular",
	},
	{
		image: "/assets/images/expertise/icons/Endocrine & Metabolic.png",
		imageHover:
			"/assets/images/expertise/icons-hover/Endocrine & Metabolic.png",
		title: "Endocrine & Metabolic",
		link: "/expertise/endocrine-metabolic",
	},
	{
		image: "/assets/images/expertise/icons/Gastroenterology.png",
		imageHover: "/assets/images/expertise/icons-hover/Gastroenterology.png",
		title: "Gastroenterology",
		link: "/expertise/gastroenterology",
	},
	{
		image: "/assets/images/expertise/icons/Hematology & Oncology.png",
		imageHover:
			"/assets/images/expertise/icons-hover/Hematology & Oncology.png",
		title: "Hematology & Oncology",
		link: "/expertise/hematology-oncology",
	},
	{
		image: "/assets/images/expertise/icons/Infectious Diseases & Vaccines.png",
		imageHover:
			"/assets/images/expertise/icons-hover/Infectious Diseases & Vaccines.png",
		title: "Infectious Diseases & Vaccines",
		link: "/expertise/infectious-diseases",
	},
	{
		image: "/assets/images/expertise/icons/NASH & Liver Disease.png",
		imageHover: "/assets/images/expertise/icons-hover/NASH & Liver Disease.png",
		title: "NASH & Liver Disease",
		link: "/expertise/nash-liver-disease",
	},
	{
		image: "/assets/images/expertise/icons/Neurology & Psychiatry.png",
		imageHover:
			"/assets/images/expertise/icons-hover/Neurology & Psychiatry.png",
		title: "Neurology & Psychiatry",
		link: "/expertise/neurology-psychiatry",
	},
	{
		image: "/assets/images/expertise/icons/Nephrology.png",
		imageHover: "/assets/images/expertise/icons-hover/Nephrology.png",
		title: "Nephrology",
		link: "/expertise/nephrology",
	},
	{
		image: "/assets/images/expertise/icons/Ophthalmology.png",
		imageHover: "/assets/images/expertise/icons-hover/Ophthalmology.png",
		title: "Ophthalmology",
		link: "/expertise/ophthalmology",
	},
	{
		image: "/assets/images/expertise/icons/Pediatrics.png",
		imageHover: "/assets/images/expertise/icons-hover/Pediatrics.png",
		title: "Pediatrics",
		link: "/expertise/pediatrics",
	},
	{
		image: "/assets/images/expertise/icons/Rare Diseases.png",
		imageHover: "/assets/images/expertise/icons-hover/Rare Diseases.png",
		title: "Rare Diseases",
		link: "/expertise/rare-diseases",
	},
	{
		image: "/assets/images/expertise/icons/Cellular & Gene Therapy.png",
		imageHover:
			"/assets/images/expertise/icons-hover/Cellular & Gene Therapy.png",
		title: "Cellular & Gene Therapy",
		link: "/expertise/cellular-gene-therapy",
	},
	{
		image: "/assets/images/expertise/icons/Radiation Therapy.png",
		imageHover: "/assets/images/expertise/icons-hover/Radiation Therapy.png",
		title: "Radiation Therapy",
		link: "/expertise/radiation-therapy",
	},
];

const TherapeuticAreasCarousel = () => {
	return (
		<div>
			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full"
			>
				<CarouselContent className="">
					{Areas.map((area, index) => {
						return (
							<CarouselItem
								key={index}
								className="bg-brandColorLs1 rounded-lg basis-1/3 lg:basis-1/5 mx-4 p-4 group"
							>
								<Link href={area.link}>
									<div className="flex flex-col items-center justify-center gap-4 px-4">
										<Image
											src={area.image}
											width={80}
											height={75}
											alt={area.title}
											className="group-hover:hidden block"
										/>
										<Image
											src={area.imageHover}
											width={80}
											height={75}
											alt={area.title}
											className="group-hover:block hidden"
										/>
										<p className={`group-hover:text-brandPrimaryLs2`}>
											{area.title}
										</p>
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

export default TherapeuticAreasCarousel;

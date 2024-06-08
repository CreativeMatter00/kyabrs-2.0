/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import TherapeuticAreasCarousel from "./TherapeuticAreasCarousel";

const Gastroenterology = () => {
	return (
		<div className="py-16 px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/expertise"
						title1="Expertise"
						title2="Gastroenterology"
					/>
				</div>

				<div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
					<Image
						src={"/assets/images/expertise/area-hero.jpg"}
						height={300}
						width={1024}
						alt="Expertise"
						className="rounded-lg w-full"
					/>
				</div>

				<p className="text-2xl mb-6"> Gastroenterology </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/expertise/gastroenterology.jpg"
					height={480}
					width={720}
					alt="Gastroenterology"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-base font-medium mb-10">
						Our team of experts able to conduct studies across a wide variety of
						gastrointestinal indications.
						<br />
						<br />
						When you partner with KYAMCH-BRS as your full-service CRO to support
						your clinical development, you benefit from seamless execution of
						your trial, made possible by our team’s expertise. The KYAMCH-BRS
						team has a deep understanding of the complex conditions that cause
						GI disorders.
					</p>
				</div>

				<TherapeuticAreasCarousel />
			</div>
		</div>
	);
};

export default Gastroenterology;

import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import TherapeuticAreasCarousel from "./TherapeuticAreasCarousel";

const Cardiovascular = () => {
	return (
		<div className="py-8 md:py-16 px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/expertise"
						title1="Expertise"
						title2="Cardiovascular"
					/>
				</div>

				<div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
					<Image
						src={"/assets/images/expertise/area-hero.jpg"}
						height={400}
						width={1280}
						alt="Expertise"
						className="rounded-lg w-full"
					/>
				</div>

				<p className="text-2xl mb-6"> Cardiovascular </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/expertise/cardiovascular.jpg"
					height={480}
					width={720}
					alt="Cardiovascular"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4">
					<p className="text-base font-medium mb-10">
						Our experienced medical leadership possesses a thorough
						understanding of the complex conditions that cause autoimmune
						diseases. Our team is prepared to support clinical research in
						autoimmune diseases, ensuring quality results, meeting deadlines,
						and maximizing efficiencies. Partner with a full-service CRO that
						excels in designing and executing clinical research across a
						spectrum of autoimmune diseases.
					</p>
				</div>

				<TherapeuticAreasCarousel />
			</div>
		</div>
	);
};

export default Cardiovascular;

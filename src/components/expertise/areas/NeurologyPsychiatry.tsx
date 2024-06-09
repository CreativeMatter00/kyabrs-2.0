import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import TherapeuticAreasCarousel from "./TherapeuticAreasCarousel";

const NeurologyPsychiatry = () => {
	return (
		<div className="py-8 md:py-16 px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/expertise"
						title1="Expertise"
						title2="Neurology & Psychiatry"
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

				<p className="text-2xl mb-6"> Neurology & Psychiatry </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/expertise/neurology.jpg"
					height={480}
					width={720}
					alt="Neurology & Psychiatry"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4">
					<p className="text-base font-medium mb-10">
						Flow your neurology and psychiatric trials efficiently with our
						accelerated recruitment and integrated imaging services.
						<br />
						Neurology/central nervous system (CNS) and psychiatric clinical
						research is a key therapeutic focus for KYAMCH-BRS. Well-established
						sponsor relationships, exceptional clinical operations, and
						committed study teams drive your success. KYAMCH-BRS has built a
						team of experienced medical, clinical, and regulatory experts who
						have been involved with the management and execution of neuroscience
						trials.
					</p>
				</div>

				<TherapeuticAreasCarousel />
			</div>
		</div>
	);
};

export default NeurologyPsychiatry;

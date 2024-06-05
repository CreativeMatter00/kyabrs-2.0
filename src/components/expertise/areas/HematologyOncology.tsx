import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import TherapeuticAreasCarousel from "./TherapeuticAreasCarousel";

const HematologyOncology = () => {
	return (
		<div className="py-16 px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/expertise"
						title1="Expertise"
						title2="Hematology & Oncology"
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

				<p className="text-2xl mb-6"> Hematology & Oncology </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/expertise/hematology.jpg"
					height={480}
					width={720}
					alt="Hematology & Oncology"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-base font-medium mb-10">
						Our experienced staff at KYABRS develop and execute studies across a
						full spectrum of solid tumor and hematologic indications and
						therapies. As a specialized Hematology and Oncology CRO, we offer a
						competitive advantage in navigating the evolving landscape of drug
						and biologic clinical development. Our unique approach to clinical
						research has earned us a reputation for effectively managing complex
						cancer patients.
						<br />
						We assist our clients in developing successful strategies for novel
						therapies, competing for high-performing global sites, expediting
						study start-up and recruitment, and navigating the global regulatory
						landscape for accelerated approvals. With our medical leadership and
						trained staff in hematology and oncology, KYABRS ensures successful
						conduct of clinical trials. We looking help our clients:
					</p>

					<ul className="marker:text-brandPrimaryLs2 text-base font-medium list-disc list-inside px-4">
						<li>
							Develop successful strategies for even the most novel therapies.
						</li>
						<li>Compete successfully for high-performing global sites.</li>
						<li>Expedite study start-up and recruitment.</li>
						<li>
							Navigate the global regulatory landscape to expedite approvals.
							<br />
							KYABRS has the medical leadership in hematology and oncology
							trained staff to successfully conduct clinical trials.
						</li>
					</ul>
				</div>

				<TherapeuticAreasCarousel />
			</div>
		</div>
	);
};

export default HematologyOncology;

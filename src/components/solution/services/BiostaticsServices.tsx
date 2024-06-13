import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import SolutionSlider from "../SolutionSlider";

const BiostaticsServices = () => {
	return (
		<div className="px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/solutions"
						title1="Solutions"
						title2="Biostatics Services"
					/>
				</div>

				<div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
					<Image
						src={"/assets/images/solutions/clinical-service/hero.jpg"}
						height={400}
						width={1280}
						alt="Solutions"
						className="rounded-lg w-full"
					/>
				</div>

				<p className="text-2xl mb-6"> Biostatics Services </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/solutions/biostatics-services.jpg"
					height={480}
					width={720}
					alt="feasibility study"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4">
					<p className="text-base font-medium mb-10">
						Our experienced team of biostatisticians provides trial design
						advice, statistical method recommendations, programming skills, and
						the reporting accuracy necessary to efficiently deliver your trial
						on time. Data analysis is conducted using industry-standard
						WINNONLIN® software.
					</p>

					<p className="font-bold text-brandPrimaryLs2 mb-4">
						Our services include:
					</p>

					<ul className="list-none pl-0">
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Comprehensive data analysis plans, including sample size
							determinations, detailed descriptions of statistical
							methodologies, program specifications, and mock examples of all
							deliverables.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Preparation and generation of randomization plans.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Preparation of customized analysis programs that are thoroughly
							tested and validated according to documented procedures.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Interpretation of study results and writing support for study
							reports and manuscripts.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Integrated efficacy and safety analysis for regulatory
							submissions.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Adaptive design consultation to help lower development costs and
							reduce timelines.
						</li>
					</ul>
					<div className="container mx-auto mt-8">
						<SolutionSlider />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BiostaticsServices;

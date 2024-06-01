import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const BiostaticsServices = () => {
	return (
		<div className="py-16 px-4">
			<div className="mb-9">
				<Back />
			</div>

			<div className="font-medium text-5xl text-textPrimary mb-20 uppercase">
				Biostatics Services
				<Underline />
			</div>

			<div className="">
				<Image
					src="/assets/images/solutions/biostatics.jpg"
					height={480}
					width={720}
					alt="Biostatics Services"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-textSecondary text-lg font-medium mb-4">
						Our experienced team of biostatisticians provides trial design
						advice, statistical method recommendations, programming skills, and
						the reporting accuracy necessary to efficiently deliver your trial
						on time. Data analysis is conducted using industry-standard
						WINNONLIN® software.
						<br />
						Our services include:
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-10">
						<li>
							Comprehensive data analysis plans, including sample size
							determinations, detailed descriptions of statistical
							methodologies, program specifications, and mock examples of all
							deliverables.
						</li>
						<li> Preparation and generation of randomization plans. </li>
						<li>
							Preparation of customized analysis programs that are thoroughly
							tested and validated according to documented procedures.
						</li>
						<li>
							Interpretation of study results and writing support for study
							reports and manuscripts.
						</li>
						<li>
							Integrated efficacy and safety analysis for regulatory
							submissions.
						</li>
						<li>
							Adaptive design consultation to help lower development costs and
							reduce timelines.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BiostaticsServices;

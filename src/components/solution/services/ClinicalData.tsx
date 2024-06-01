import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const ClinicalData = () => {
	return (
		<div className="py-16 px-4">
			<div className="mb-9">
				<Back />
			</div>

			<div className="font-medium text-5xl text-textPrimary mb-20 uppercase">
				CLINICAL DATA MANAGEMENT
				<Underline />
			</div>

			<div className="">
				<Image
					src="/assets/images/solutions/clinical data.jpg"
					height={480}
					width={720}
					alt="feasibility study"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-textSecondary text-base font-medium mb-10">
						KYABRS delivers high-quality Data Management and Biostatistics
						services. We are responsive, flexible, and knowledgeable in our
						approach, ensuring complete confidence in your data throughout the
						entire drug development process. Our Data Management team is
						dedicated to improving efficiency, reducing development costs, and
						anticipating risks to the data you have diligently collected.
						<br />
						In Data Management, we prioritize delivering quality data with
						integrity. Our team collaborates with sponsored project teams to
						create detailed plans for clinical trial data collection,
						organization, validation, and analysis, ensuring the most
						cost-effective, secure, and regulatory-compliant process.
						<br />
						With our extensive knowledge, experience, and superior therapeutic
						and regulatory expertise, we have earned the trust of sponsors. Our
						data collection, validation, and analysis processes adhere to robust
						standards, focusing on precision and efficiency while upholding the
						highest levels of data quality and integrity.
						<br />
					</p>

					<p className="font-medium text-xl text-textPrimary mb-4">
						Our expert team assists you with the following:
					</p>

					<ul className="text-textSecondary text-base font-medium list-disc list-inside">
						<li>
							Designing case report forms (CRFs) in accordance with standard
							regulations.
						</li>
						<li> Performing data entry of paper CRFs. </li>
						<li>
							Validating all project-specific components of the data management
							system.
						</li>
						<li> Reviewing clinical data for errors and trends. </li>
						<li> Reconciling serious adverse events. </li>
						<li> Generating real-time clinical trial metrics. </li>
						<li>
							Providing support for Data Monitoring Committee (DMC) activities.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ClinicalData;

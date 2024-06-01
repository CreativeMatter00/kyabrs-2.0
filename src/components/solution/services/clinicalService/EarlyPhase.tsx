import Image from "next/image";

const EarlyPhase = () => {
	return (
		<div className="container mx-auto">
			<div className="text-2xl mb-6">
				<span className="text-brandPrimaryLs3">Early Phase </span> Clinical
				Trials
			</div>

			<div className="flex flex-col-reverse md:flex-row gap-8 mb-6">
				<div className="w-full md:w-1/2">
					<p>
						Proceeding quickly through the Phase I-II trial to gain proof of
						concept is an important milestone in your strategy. At KYABRS, we
						design our early-stage clinical trials so that patients can be
						expected early. This is an important milestone of hope for patients
						with unmet needs. KYABRS has the expertise to help reduce the risk
						of study design challenges due to inappropriate scientific
						justification of dosage, confusing safety thresholds and early-stage
						delays.
						<br />
						We can bring together a team of regulatory, pharmacological and
						translational medicine specialists for drug dosage, safety
						selection, and PK / PD evaluation. We help you design a protocol
						that helps create the data you need to make decisions. And when you
						are ready to begin your Early Phase studies, our clinics provide a
						full scope of services.
					</p>
				</div>

				<div className="w-full md:w-1/2">
					<Image
						src="/assets/images/solutions/clinical-service/early-phase.jpg"
						height={320}
						width={480}
						className="w-full h-auto rounded-lg"
						alt="Early Phase Clinical Trials"
					/>
				</div>
			</div>

			<div className="mb-8">
				<p className="font-bold text-brandPrimaryLs3 mb-4">
					These Services Include
				</p>
				<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
					<li>Phase I, first-in-human</li>
					<li>Clinical PK/PD and pharmacometrics</li>
					<li>Bioanalytical and biomarkers</li>
					<li>Phase IIa, proof-of-concept</li>
					<li>Ethnobridging studies</li>
					<li>Bioequivalence and biosimilar studies</li>
				</ul>
			</div>

			<div>
				<p className="font-bold text-brandPrimaryLs3 mb-4">
					Bioequivalence Study
				</p>
				<p>
					Bioequivalence studies are very important for the development of a
					pharmaceutical preparation in the pharmaceutical industry. Their
					rationale is the monitoring of pharmacokinetic and pharmacodynamic
					parameters after the administration of tested drugs. The importance of
					bioequivalence studies is increasing also due to the large growth of
					the production and consumption of generic products. The registration
					of generic products does not demand complicated and expensive clinical
					studies contrary to the original product. The comparison of the
					original and the generic product via bioequivalence study is suggested
					as sufficient. KYABRS is capable of conducting the bioequivalence
					study of any dosage form. KYABRS Bioanalytical Laboratories provide
					method development, transfer, validation, and analysis of biological
					samples of study volunteers. Data analysis for the confirmation of
					bioequivalence is performed using industry-standard WINNONLIN®
					software.
				</p>
			</div>
		</div>
	);
};

export default EarlyPhase;

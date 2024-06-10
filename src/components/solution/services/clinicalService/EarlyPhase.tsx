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
					<div>
						<p>
							Proceeding quickly through the Phase I-II trial to gain proof of
							concept is an important milestone in your strategy. At KYAMCH-BRS,
							we design early-stage clinical trials so that patients can be
							expected early.
							<br />
							And when you are ready to begin your Early Phase studies our
							clinics provide a full scope of services.
						</p>
						<p className="font-bold text-brandPrimaryLs3 mb-4 mt-6">
							These Services Include
						</p>
						<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
							<li> Phase I, first-in-human.</li>
							<li> Phase IIa, proof-of-concept.</li>
							<li> Clinical PK/PD and pharmacometrics.</li>
							<li> Ethnos bridging studies.</li>
							<li> Bioanalytical and biomarkers.</li>
							<li> Bioequivalence and biosimilar studies.</li>
						</ul>
					</div>

					<div className="pt-4">
						<p className="font-bold text-brandPrimaryLs3 mb-4">
							Bioequivalence study
						</p>
						<p>
							Bioequivalence studies are very important for the development of
							pharmaceutical preparation in the pharmaceutical industry. Their
							rationale is the monitoring of pharmacokinetic and pharmacodynamic
							parameters after the administration of tested drugs. The
							importance of bioequivalence studies is increasing also due to the
							large growth in the production and consumption of generic
							products. <br />
							KYAMCH-BRS is capable of doing the bioequivalence study of any
							dosage form. KYAMCH-BRS Bioanalytical Laboratories provide method
							development, transfer, validation, and analysis of biological
							samples of study volunteers. <br />
							Data analysis for the confirmation of bioequivalence is performed
							using industry-standard WINNONLIN® software.
						</p>
					</div>
				</div>

				<div className="w-full md:w-1/2">
					<Image
						src="/assets/images/solutions/clinical-service/early.jpg"
						height={320}
						width={480}
						className="w-full h-auto rounded-lg"
						alt="Early Phase Clinical Trials"
					/>
				</div>
			</div>

			<div className="mb-8"></div>
		</div>
	);
};

export default EarlyPhase;

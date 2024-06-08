import Image from "next/image";

const ClinicalMonitoringDistinction = () => {
	return (
		<div className="container mx-auto text-bgPrimary">
			<Image
				src="/assets/images/solutions/clinical-monitoring/clinical-monitoring-distinction.jpg"
				height={480}
				width={720}
				alt="Clinical Monitoring Distinction"
				className="h-auto w-auto mx-auto rounded-lg mb-10"
			/>

			<div className="pt-4 px-4">
				<p className="text-base font-medium mb-10">
					KYAMCH-BRS Clinical Monitoring focuses on global consistency, support,
					guidance, training and oversight. KYAMCH-BRS CRAs are dedicated to
					ensuring site compliance, risk mitigation, and building strong site
					staff relationships. Through our dedicated Clinical Monitoring model,
					including CRA recruitment and selection, initial and ongoing training,
					study and site resourcing, line management support and quality
					oversight, and continued development, KYAMCH-BRS CRAs provide
					unparalleled monitoring performance for all phases of today’s clinical
					research trials.
				</p>
			</div>
		</div>
	);
};

export default ClinicalMonitoringDistinction;

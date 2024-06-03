import Image from "next/image";

const MonitoringStrategy = () => {
	return (
		<div className="container mx-auto text-bgPrimary">
			<Image
				src="/assets/images/solutions/clinical-monitoring/monitoring-strategy.jpg"
				height={480}
				width={720}
				alt="Monitoring Strategies"
				className="h-auto w-auto mx-auto rounded-lg mb-10"
			/>

			<div className="pt-4 px-4">
				<p className="text-base font-medium mb-10">
					KYABRS implementing effective risk mitigation at study start is a
					focus for the CRA team. Multifunctional and communicative
					relationships across Clinical Operations serve as the backbone for
					CRAs, and the monitoring emphasis is rooted in subject safety, data
					integrity, and risk assessment. KYABRS understand the study
					objectives, efficacy and safety variables, and the Lead CRA outlines
					how the CRA team should proactively identify and manage the study
					according to critical data and processes. With the oversight, support,
					and training from Clinical Trial Management, CRA teams use site
					quality indicators to emphasize patient safety and data integrity. We
					create a centralized monitoring plan review team within Clinical
					Monitoring so our approach is consistent, yet flexible enough for
					study-specific considerations and implementation. KYABRS Mitigation
					Risk through Real-time Metrics, System and Process Efficiencies.
				</p>
			</div>
		</div>
	);
};

export default MonitoringStrategy;

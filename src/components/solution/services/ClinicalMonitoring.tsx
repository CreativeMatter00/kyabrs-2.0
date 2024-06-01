import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const ClinicalMonitoring = () => {
	return (
		<div className="py-16 px-4">
			<div className="mb-9">
				<Back />
			</div>

			<div className="font-medium text-5xl text-textPrimary uppercase">
				Clinical Monitoring
				<Underline />
			</div>

			<div className="mb-20">
				<Image
					src="/assets/images/solutions/clinic-img-1.jpg"
					height={480}
					width={720}
					alt="Clinical Monitoring"
					className="h-auto w-auto mx-auto rounded-lg py-10"
				/>

				<div className="pt-4">
					<p className="text-textSecondary text-base font-medium mb-10">
						KYABRS Clinical Monitoring focuses on global consistency, support,
						guidance, training and oversight. KYABRS CRAs are dedicated to
						ensuring site compliance, risk mitigation, and building strong site
						staff relationships. Through our dedicated Clinical Monitoring
						model, including CRA recruitment and selection, initial and ongoing
						training, study and site resourcing, line management support and
						quality oversight, and continued development, KYABRS CRAs provide
						unparalleled monitoring performance for all phases of today’s
						clinical research trials.
					</p>
				</div>
			</div>

			<div className="font-medium text-5xl text-textPrimary uppercase">
				MONITORING STRATEGIES
				<Underline />
			</div>

			<div className="mb-20">
				<div className="flex flex-col gap-12 justify-center lg:flex-row py-10">
					<Image
						src="/assets/images/solutions/clinic-img-2.jpg"
						height={480}
						width={720}
						alt="MONITORING STRATEGIES"
						className="h-[480px] w-fit mx-auto rounded-lg"
					/>
					<Image
						src="/assets/images/solutions/clinic-img-4.jpg"
						height={480}
						width={720}
						alt="MONITORING STRATEGIES"
						className="h-[480px] w-fit mx-auto rounded-lg"
					/>
				</div>

				<div className="pt-4">
					<p className="text-textSecondary text-base font-medium mb-10">
						KYABRS implementing effective risk mitigation at study start is a
						focus for the CRA team. Multifunctional and communicative
						relationships across Clinical Operations serve as the backbone for
						CRAs, and the monitoring emphasis is rooted in subject safety, data
						integrity, and risk assessment. KYABRS understand the study
						objectives, efficacy and safety variables, and the Lead CRA outlines
						how the CRA team should proactively identify and manage the study
						according to critical data and processes. With the oversight,
						support, and training from Clinical Trial Management, CRA teams use
						site quality indicators to emphasize patient safety and data
						integrity. We create a centralized monitoring plan review team
						within Clinical Monitoring so our approach is consistent, yet
						flexible enough for study-specific considerations and
						implementation. KYABRS Mitigation Risk through Real-time Metrics,
						System and Process Efficiencies.
					</p>
				</div>
			</div>

			<div className="font-medium text-5xl text-textPrimary uppercase">
				CLINICAL MONITORING DISTINCTION
				<Underline />
			</div>

			<div className="mb-20">
				<Image
					src="/assets/images/solutions/clinic-img-3.jpg"
					height={480}
					width={720}
					alt="CLINICAL MONITORING DISTINCTION"
					className="h-auto w-auto mx-auto rounded-lg py-10"
				/>

				<div className="pt-4">
					<p className="text-textSecondary text-base font-medium mb-10">
						KYABRS Clinical Monitoring focuses on global consistency, support,
						guidance, training and oversight. KYABRS CRAs are dedicated to
						ensuring site compliance, risk mitigation, and building strong site
						staff relationships. Through our dedicated Clinical Monitoring
						model, including CRA recruitment and selection, initial and ongoing
						training, study and site resourcing, line management support and
						quality oversight, and continued development, KYABRS CRAs provide
						unparalleled monitoring performance for all phases of today’s
						clinical research trials.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ClinicalMonitoring;

import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const QualityAssurance = () => {
	return (
		<div className="py-16 px-4">
			<div className="mb-9">
				<Back />
			</div>

			<div className="font-medium text-5xl text-textPrimary mb-20 uppercase">
				Quality Assurance
				<Underline />
			</div>

			<div className="">
				<Image
					src="/assets/images/solutions/qa.jpg"
					height={480}
					width={720}
					alt="feasibility study"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-textSecondary text-base font-medium mb-10">
						KYABRS has an independent Quality Assurance team that provides
						valuable input to enhance internal processes and ensure compliance
						with regulatory requirements, protocol adherence, and global
						standard operating procedures. This promotes research subject safety
						and data integrity, offering insight into clinical practice at all
						phases of the study.
					</p>

					<p className="font-medium text-xl text-textPrimary mb-4">
						Our Quality Assurance team internally supports:
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside mb-10">
						<li>Internal system audits.</li>
						<li> Trial Master File (TMF) audits. </li>
						<li>Vendor qualification audits.</li>
						<li> Investigative site audits. </li>
						<li> Regulatory document audits. </li>
						<li> Database audits. </li>
						<li> Computer system validation audits. </li>
						<li> Staff training. </li>
						<li> GSOP reviews and system oversight. </li>
						<li> Hosting sponsor audits. </li>
						<li>
							Management of a Corrective and Preventive Action (CAPA) program.
						</li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						KYABRS CAN ALSO PROVIDE THE FOLLOWING AUDITING SERVICES FOR
						SPONSORS:
					</p>

					<ul className="text-textSecondary text-lg font-medium list-disc list-inside">
						<li>Trial Master File (TMF) audits.</li>
						<li> Vendor qualification audits. </li>
						<li>Investigative site audits.</li>
						<li> Database auditss. </li>
						<li> Computer system validation auditss.</li>
						<li> Site preparation for regulatory inspection. </li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default QualityAssurance;

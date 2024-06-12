import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";

const QualityAssurance = () => {
	return (
		<div className="py-8 md:py-16 px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/solutions"
						title1="Solutions"
						title2="Quality Assurance"
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

				<p className="text-2xl mb-6"> Quality Assurance </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/solutions/quality.jpg"
					height={480}
					width={720}
					alt="Quality Assurance"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4">
					<p className="text-base font-medium mb-10">
						KYAMCH-BRS has an independent Quality Assurance team provides
						valuable input into improving internal processes and ensuring
						compliance with regulatory requirements, protocol adherence, and
						global standard operating procedures, promoting research subject
						safety and data integrity. Providing insight into clinical practice
						at all phases of study
					</p>

					<p className="font-bold text-brandPrimaryLs2 mb-4">
						OUR QUALITY ASSURANCE TEAM INTERNALLY SUPPORTS:
					</p>

					<ul className="marker:text-brandPrimaryLs2 text-base list-disc list-inside mb-6">
						<li>Internal system audits.</li>
						<li> Trial Master File (TMF) audits. </li>
						<li>Vendor qualification audits.</li>
						<li> Investigative site audits. </li>
						<li> Regulatory document audits. </li>
						<li> Database audits. </li>
						<li>Computer system validation audits.</li>
						<li>Staff training.</li>
						<li>GSOP reviews and system oversight.</li>
						<li>Hosting sponsor audits.</li>
						<li>
							Management of a Corrective and Preventive Action (CAPA) program.
						</li>
					</ul>

					<p className="font-bold text-brandPrimaryLs2 mb-4">
						KYAMCH-BRS CAN ALSO PROVIDE THE FOLLOWING AUDITING SERVICES FOR
						SPONSORS:
					</p>

					<ul className="marker:text-brandPrimaryLs2 text-base list-disc list-inside">
						<li>Trial Master File (TMF) audits.</li>
						<li> Vendor qualification audits. </li>
						<li>Investigative site audits.</li>
						<li> Database audits. </li>
						<li> Computer system validation audits. </li>
						<li> Site preparation for regulatory inspection. </li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default QualityAssurance;

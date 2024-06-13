import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import SolutionSlider from "../SolutionSlider";

const QualityAssurance = () => {
	return (
		<div className=" px-4 text-bgPrimary">
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

					<ul className="list-none pl-0 text-base mb-6">
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Internal system audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Trial Master File (TMF) audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Vendor qualification audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Investigative site audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Regulatory document audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Database audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Computer system validation audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Staff training.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							GSOP reviews and system oversight.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Hosting sponsor audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Management of a Corrective and Preventive Action (CAPA) program.
						</li>
					</ul>

					<p className="font-bold text-brandPrimaryLs2 mb-4">
						KYAMCH-BRS CAN ALSO PROVIDE THE FOLLOWING AUDITING SERVICES FOR
						SPONSORS:
					</p>

					<ul className="list-none pl-0 text-base">
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Trial Master File (TMF) audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Vendor qualification audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Investigative site audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Database audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Computer system validation audits.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Site preparation for regulatory inspection.
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

export default QualityAssurance;

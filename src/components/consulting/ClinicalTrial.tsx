import Image from "next/image";

const ClinicalTrial = () => {
	return (
		<div className="pt-8 text-bgPrimary">
			<div className="flex flex-col md:flex-row px-4 gap-8">
				<div className="w-1/2 md:w-full">
					<p className="text-2xl mb-6"> Clinical Trial Regulatory Services </p>
					<p className="text-base mb-8">
						Our Clinical Trial Regulatory Services team can help facilitate a
						seamless experience no matter where in the world you operate. By
						combining centralized data management with the ability to
						simultaneously manage multiple regulatory submissions, we can guide
						you through quicker trial start-up and follow-through. <br />
						The KYAMCH-BRS Regulatory Affairs team works collaboratively with
						sponsors and clients on a country, regional, and global basis to
						help accelerate the global development of safe and effective medical
						therapeutics.
					</p>

					<p className="text-xl mb-4 text-brandPrimaryLs2">
						Our regulatory service includes:
					</p>

					<ul className="list-none pl-0">
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Medical Writing Services
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Strategic Development Services
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Document Preparation & Submission Services
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Regulatory Agency Interactions
						</li>
					</ul>
				</div>
				<div className="w-1/2 md:w-full">
					<Image
						src="/assets/images/consulting/RegulatoryAffairs-02.jpg"
						height={480}
						width={720}
						alt="Regulatory Affairs"
						className="h-auto w-auto mx-auto rounded-lg mb-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default ClinicalTrial;

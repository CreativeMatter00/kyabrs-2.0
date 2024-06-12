import Image from "next/image";

const ClinicalLaboratory = () => {
	return (
		<div className="container mx-auto">
			<div className="flex flex-col-reverse md:flex-row gap-8">
				<div className="w-full md:w-1/2">
					<p className="text-2xl mb-6"> Clinical Laboratory </p>

					<p>
						Our Clinical laboratory is equipped with the latest state-of-the-art
						technology Total Laboratory Automation System which enables Reduced
						Human Handling Error & provides reliable accurate test results
						within the fastest period.
					</p>

					<div className="py-6">
						<p className="text-brandPrimaryLs2 font-bold mb-4">
							The Quality Result Is the Utmost Priority:
						</p>
						<div className="mb-4">
							<ul className="list-none pl-0">
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Regularly perform and analyze Internal QC as per requirement
									of ISO 15189 standard.
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Participate in external Quality Assurance (QA) program (a
									monthly program with Randox International Quality Assurance
									Scheme), USA.
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Regularly calibrate all auto analyzers, reagents, and
									accessories like centrifuges and micropipettes.
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									High Quality Reagents are used & stored maintaining standard
									temperature strictly.
								</li>
							</ul>
						</div>
					</div>

					<div className="py-6">
						<p className="text-brandPrimaryLs2 font-bold mb-4">
							Our service departments:
						</p>
						<div className="mb-4">
							<ul className="list-none pl-0">
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Clinical chemistry & immunology
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Hematology & coagulation
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Clinical pathology
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Histopathology
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Cytopathology
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Immunohistochemistry
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Microbiology
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="w-full md:w-1/2">
					<Image
						src="/assets/images/solutions/laboratory-service/lab.jpg"
						height={320}
						width={480}
						className="w-full h-auto rounded-lg"
						alt="Bioanalytical Service"
					/>
				</div>
			</div>
		</div>
	);
};

export default ClinicalLaboratory;

import Image from "next/image";

const BioanalyticalLaboratory = () => {
	return (
		<div className="container mx-auto">
			<div className="flex flex-col-reverse md:flex-row gap-8">
				<div className="w-full md:w-1/2">
					<p className="text-2xl mb-6"> Overview </p>

					<p>
						KYAMCH-BRS provides a full range of laboratory services that are
						dedicated exclusively to clinical development. We are focused on
						providing accurate, high-quality results in a timely, secure, and
						cost-effective manner and compliance with good laboratory practice
						(GLP) settings. <br />
						KYAMCH-BRS Bioanalytical Laboratories provide method development,
						transfer, validation, and analysis of biological samples. We have
						extensive expertise in developing sensitive methods for LC-MS/MS
						qualifying multiple-analytes, metabolites, prodrugs, and light- and
						temperature-sensitive compounds. <br />
						Our team regularly supports fast PK, bioavailability, and early
						toxicology studies.
					</p>

					<div className="my-6">
						<p className="text-brandPrimaryLs2 font-bold mb-4">
							Instrumentation and software:
						</p>
						<div className="mb-4">
							<ul className="list-none pl-0">
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Agilent Technology HPLC 1260 infinity-II.
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Agilent Technology HPLC 1290.
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Agilent mass-selective detector (G6470A).
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Waters Otto Specialist SPE Manifold.
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Phoenix WinNonlin.
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Fully Validated (IQ/OQ/PQ of Equipment and Software) Systems.
								</li>
							</ul>
						</div>
					</div>

					<div>
						<p className="text-brandPrimaryLs2 font-bold mb-4">
							Shipping, and storing biological samples services:
						</p>
						<div className="mb-4">
							<ul className="list-none pl-0">
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Refrigerated storage (2-8ºC).
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Low-temperature storage (-26ºC and -86ºC).
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Emergency back-up electrical services.
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Video security.
								</li>
								<li className="relative pl-6 mb-2">
									<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
										•
									</span>
									Onsite archive facility.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="w-full md:w-1/2">
					<Image
						src="/assets/images/solutions/laboratory-service/bio.jpg"
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

export default BioanalyticalLaboratory;

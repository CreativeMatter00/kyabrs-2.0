import Image from "next/image";

const BioanalyticalLaboratory = () => {
	return (
		<div className="container mx-auto">
			<div className="flex flex-col-reverse md:flex-row gap-8">
				<div className="w-full md:w-1/2">
					<p className="text-2xl mb-6"> Overview </p>

					<p>
						KYABRS provides a full range of laboratory services that are
						dedicated exclusively to clinical development. We are focused on
						providing accurate, high-quality results in a timely, secure, and
						cost-effective manner. We provide analytical testing services to
						meet the research and development challenges of the pharmaceutical
						and biotechnology industry. Working in a good laboratory practice
						(GLP) compliant setting. KYABRS Bioanalytical Laboratories provide
						method development, transfer, validation, and analysis of
						preclinical and clinical biological samples. We have extensive
						expertise in developing sensitive methods for LC-MS/MS – qualifying
						multiple-analytes, metabolites, prodrugs, and light- and
						temperature-sensitive compounds. Our discovery team regularly
						supports fast PK, bioavailability, and early toxicology studies.
					</p>
				</div>

				<div className="w-full md:w-1/2">
					<Image
						src="/assets/images/solutions/laboratory-service/bioanalytical.jpg"
						height={320}
						width={480}
						className="w-full h-auto rounded-lg"
						alt="Bioanalytical Service"
					/>
				</div>
			</div>

			<div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					LABELING, SHIPPING, AND STORING BIOLOGICAL SAMPLES SERVICES
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li> Refrigerated storage (2-8ºC). </li>
						<li> Low-temperature storage (-26ºC and -86ºC). </li>
						<li> Emergency back-up electrical services. </li>
						<li>Video security.</li>
						<li>Onsite archive facility.</li>
					</ul>
				</div>
			</div>

			<div>
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					INSTRUMENTATION AND SOFTWARE
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li> Agilent Technology HPLC 1260 infinity-II. </li>
						<li> Agilent Technology HPLC 1290. </li>
						<li> Agilent mass-selective detector (G6470A). </li>
						<li> Waters Otto Specialist SPE Manifold. </li>
						<li> Phoenix WinNonlin. </li>
						<li>
							Fully Validated (IQ/OQ/PQ of Equipment and Software) Systems.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BioanalyticalLaboratory;

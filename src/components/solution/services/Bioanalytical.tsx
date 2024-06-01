import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const Bioanalytical = () => {
	return (
		<div className="py-16 px-4">
			<div className="mb-9">
				<Back />
			</div>

			<div className="font-medium text-5xl text-textPrimary mb-20 uppercase">
				BIOANALYTICAL LABORATORY
				<Underline />
			</div>

			<div className="">
				<Image
					src="/assets/images/solutions/bioanalytical.jpg"
					height={480}
					width={720}
					alt="bioanalytical laboratory"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-textSecondary text-base font-medium mb-10">
						KYABRS provides a comprehensive range of laboratory services
						exclusively dedicated to clinical development. Our focus is on
						delivering accurate, high-quality results in a timely, secure, and
						cost-effective manner.
						<br />
						We offer analytical testing services to meet the research and
						development challenges of the pharmaceutical and biotechnology
						industry, operating in a Good Laboratory Practice (GLP) compliant
						setting. KYABRS Bioanalytical Laboratories specialize in method
						development, transfer, validation, and analysis of preclinical and
						clinical biological samples. With extensive expertise in developing
						sensitive methods for LC-MS/MS – qualifying multiple analytes,
						metabolites, prodrugs, and light- and temperature-sensitive
						compounds.
						<br />
						Additionally, our discovery team provides regular support for fast
						PK, bioavailability, and early toxicology studies.
					</p>

					<p className="font-medium text-xl text-textPrimary mb-10">
						LABELING, SHIPPING, AND STORING BIOLOGICAL SAMPLES SERVICES:
					</p>

					<ul className="text-textSecondary text-base font-medium list-disc list-inside mb-10">
						<li> Refrigerated storage (2-8ºC). </li>
						<li> Low-temperature storage (-26ºC and -86ºC). </li>
						<li> Emergency back-up electrical services. </li>
						<li> Video security. </li>
						<li> Onsite archive facility. </li>
					</ul>

					<p className="font-medium text-xl text-textPrimary mb-4">
						INSTRUMENTATION AND SOFTWARE:
					</p>

					<ul className="text-textSecondary text-base font-medium list-disc list-inside">
						<li>Agilent Technology HPLC 1260 infinity-II.</li>
						<li> Vendor qualification audits. </li>
						<li>Investigative site audits.</li>
						<li> Database audits. </li>
						<li> Computer system validation audits.</li>
						<li> Site preparation for regulatory inspection. </li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Bioanalytical;

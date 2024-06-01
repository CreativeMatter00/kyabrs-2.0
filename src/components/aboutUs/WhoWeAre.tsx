import React from "react";
import Underline from "../ui/underline/Underline";

function WhoWeAre() {
	return (
		<div className="mb-16">
			<div className="px-4">
				<p className="text-4xl font-semibold">
					Trusted
					<br /> Bio-Research Partner
				</p>
				<Underline />
			</div>

			<div className="text-textSecondary text-base font-medium pt-4 px-4">
				<p>
					The first pioneering contract research company in Bangladesh offering
					clinical and non-clinical research services is Khwaja Yunus Ali Bio
					Research Services (KYA-BRS). Additionally, it is the only
					hospital-affiliated bio-research institution in the nation, allowing
					it to conduct both screening and clinical trials.
					<br />
					<br />
					Our area of expertise is clinical trials. Our over 40,000 square feet
					clinical trial facility includes a well-designed screening space and a
					highly developed bioanalytical laboratory. Phase I–III clinical trials
					as well as bioequivalence studies can be conducted by KYABRS. KYABRS
					conducts a number of clinical trials under the watchful eye of
					international regulatory bodies. A team of committed specialists
					oversees the operation. Regulations currently in effect are followed
					in all operations.
				</p>
			</div>
		</div>
	);
}

export default WhoWeAre;

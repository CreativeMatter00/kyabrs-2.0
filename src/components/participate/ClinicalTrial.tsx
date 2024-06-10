import Image from "next/image";
import React from "react";

const ClinicalTrial = () => {
	return (
		<div className="bg-brandColorLs1">
			<div className="container mx-auto py-10 px-6">
				<div className="flex flex-col md:flex-row items-center gap-4">
					<div className="w-full md:w-1/2">
						<p className="font-bold text-brandPrimaryLs2 mb-4">
							What is a Clinical Trial?
						</p>

						<p>
							The journey of a new treatment before it can be prescribed to
							patients is extensive. It starts with pre-clinical trials in the
							laboratory, where scientists rigorously evaluate the potential new
							drug. If these studies yield promising results, the
							investigational medicine advances to clinical trials, where its
							effects are studied in people. At KYAMCH-BRS, volunteers, also
							known as participants, may receive the specific study
							treatment(s), a placebo, or no study treatment at all, and will
							complete various assessments and study clinic visits. These trials
							follow a carefully designed research protocol, which has been
							reviewed and approved by local regulatory authorities and
							typically by an Ethics Committee of independent medical
							professionals and specialists to ensure participant safety.
						</p>
					</div>

					<div className="w-full md:w-1/2">
						<Image
							src="/assets/images/participate/clinical-trial.jpg"
							width={480}
							height={320}
							className="w-full h-auto rounded-lg"
							alt="clinical trial"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClinicalTrial;

import React from "react";
import TherapeuticAreas from "./TherapeuticAreas";

const Expertise = () => {
	return (
		<div className="text-bgPrimary py-8">
			<div className="flex gap-8 px-4">
				<div className="w-1/2">
					<div className="mb-6">
						<div className="pb-6">
							<p className="text-2xl">Overview</p>
						</div>
						<p>
							KYABRS is a therapeutically-focused, scientifically-driven CRO
							with highly accomplished and industry-renowned medical leadership.
							In response to the challenges of clinical research, we engage a
							team of medical experts, especially for increasingly complex
							research. To provide early and ongoing insight and guidance,
							KYABRS embeds therapeutic leadership throughout the trial.
						</p>
					</div>
					<div className="mb-6">
						<div className="pb-6">
							<p className="text-2xl">
								<span className="text-brandPrimaryLs3"> Medical </span>{" "}
								Department
							</p>
						</div>
						<p>
							Our medical team provides leadership across numerous therapeutic
							areas and specialties, including hematology and oncology,
							infectious diseases, metabolic and endocrine, cardiovascular,
							neurology and psychiatry, nephrology, liver disease,
							ophthalmology, radiation therapy, autoimmune diseases, as well as
							advanced therapies, pediatrics, and rare diseases/orphan
							indications. Our therapeutically-specialized physicians serve as
							much more than consultants; they are deeply involved in your
							trials.
						</p>
					</div>
					<div className="mb-6">
						<div className="pb-6">
							<p className="text-2xl">
								Our{" "}
								<span className="text-brandPrimaryLs3"> Medical Experts </span>
							</p>
						</div>
						<p>
							We provide strategic direction for both small and large
							organizations. For small biotech, our specialized physicians offer
							medical guidance to determine the strategic direction for the
							success of your compound. For larger organizations, our physicians
							collaborate with your team to develop the best strategic plan. We
							also train study teams to fully understand the protocol and study
							considerations, interact with investigators to build
							relationships, provide medical monitoring services, and work
							collaboratively with regulatory affairs, including meeting with
							regulatory agencies.
						</p>
					</div>
				</div>

				<div className="w-1/2">
					<TherapeuticAreas />
				</div>
			</div>
			{/* <SolutionGallery /> */}
		</div>
	);
};

export default Expertise;

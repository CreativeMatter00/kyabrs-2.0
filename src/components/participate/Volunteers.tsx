/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const Volunteers = () => {
	return (
		<div className="bg-brandSecondary">
			<div className="container mx-auto p-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
					<div className="bg-brandColorLs1 flex flex-col justify-between rounded-lg p-6">
						<div>
							<p className="text-2xl mb-4"> Healthy Volunteers </p>
							<p className="mb-10">
								Healthy volunteers are crucial in Phase I trials, as they help
								lay the groundwork for new treatments. By participating, they
								contribute to the initial evaluation of a treatment's safety and
								dosage, which is essential for its development. Their
								involvement is vital for advancing medical research and bringing
								new therapies to patients.
							</p>
						</div>

						<Link
							href={"/participate/healthy-volunteers"}
							className="text-brandPrimaryLs2"
						>
							Learn More
						</Link>
					</div>

					<div className="bg-brandColorLs1 flex flex-col justify-between rounded-lg p-6">
						<div>
							<p className="text-2xl mb-4"> Patient Volunteers </p>
							<p className="mb-10">
								If you have a medical condition, you can explore the clinical
								trial process and the potential benefits of participating. By
								joining a clinical trial, you may gain access to new treatments
								and contribute to advancing medical research. Your involvement
								can help improve future therapies and provide valuable insights
								into managing your condition.
							</p>
						</div>

						<Link
							href={"/participate/patient-volunteers"}
							className="text-brandPrimaryLs2"
						>
							Learn More
						</Link>
					</div>
				</div>

				<div className="bg-brandColorLs1 rounded-lg p-6 text-center">
					<p className="text-2xl mb-4">Registration Form</p>

					<p className="mb-6">
						To participate in our clinical trials, please complete the
						registration form. Your information will help us match you with
						appropriate studies and ensure your safety and eligibility. Thank
						you for contributing to the advancement of medical research.
					</p>

					<div className="mt-12">
						<Link
							href={"/participate/registration-form"}
							className="text-bgPrimary py-4 px-10 rounded-full bg-brandPrimaryLs2"
						>
							Register Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Volunteers;

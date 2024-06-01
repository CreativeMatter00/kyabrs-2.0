import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const ClinicalTrial = () => {
	return (
		<div>
			<div className="py-16 px-4">
				<div className="mb-9">
					<Back />
				</div>

				<div className="font-medium text-5xl text-textPrimary mb-20 uppercase">
					Clinical Trial Management
					<Underline />
				</div>

				<div className="">
					<Image
						src="/assets/images/solutions/trial.jpg"
						height={480}
						width={720}
						alt="feasibility study"
						className="h-auto w-auto mx-auto rounded-lg mb-10"
					/>

					<div className="pt-4 px-4">
						<p className="text-textSecondary text-base font-medium mb-10">
							KYABRS brings extensive experience, a broad reach, and highly
							disciplined execution to trial management. Utilizing our unique
							partnership philosophy and team structure, we offer effective
							end-to-end collaboration, training, and resource planning for
							clinical trial management worldwide. Our dedicated teams are
							designed to seamlessly integrate with yours, providing
							unparalleled support at every stage of the drug development
							process.
						</p>

						<p className="font-medium text-xl text-textPrimary mb-4">
							KYABRS OFFERS:
						</p>

						<div className="text-textSecondary text-base font-medium">
							<div>
								<span className="text-textPrimary font-bold">
									Experienced Execution:{" "}
								</span>
								Skilled and experienced team members work closely with top
								therapeutic and regulatory experts in the industry, provide fast
								start-up time, high quality and ensures the most efficient
								delivery at every stage.
							</div>

							<div>
								<span className="text-textPrimary font-bold">
									Essential Partnerships:{" "}
								</span>
								Comprehensive communication is utilized throughout all phases of
								the clinical trial to build and maintain successful partnerships
								with Sponsors and Sites.
							</div>

							<div>
								<span className="text-textPrimary font-bold">Dedication: </span>
								Dedicated for development scientific discovery to reach at end
								users.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClinicalTrial;

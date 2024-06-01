import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const FeasibilityStudy = () => {
	return (
		<div className="py-16 px-4">
			<div className="mb-9">
				<Back />
			</div>

			<div className="font-medium text-5xl text-textPrimary mb-20 uppercase">
				Feasibility Study
				<Underline />
			</div>

			<div className="mb-20">
				<Image
					src="/assets/images/solutions/feasibility.png"
					height={480}
					width={720}
					alt="feasibility study"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<p className="text-textSecondary text-base font-medium pt-4 px-4">
					KYABRS helps sponsors to identify sites with the highest potential for
					hiring the right patients with our large, global investigator or site
					database in our focused therapeutic area. When we conduct study
					start-ups, the total start-up time is usually less than half of the
					industry average.
				</p>
			</div>
		</div>
	);
};

export default FeasibilityStudy;

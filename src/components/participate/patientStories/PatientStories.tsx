import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";

const PatientStories = () => {
	return (
		<div className="text-bgPrimary">
			<div className="text-bgPrimary border-b border-textTertiary">
				<div className="container mx-auto mb-10 px-4">
					<div className="py-10 pb-4">
						<Breadcrumb
							title1="Participate"
							link1="/participate"
							title2="Patient Stories"
						/>
					</div>
					<div className="relative max-h-[300px] flex items-end justify-center overflow-hidden rounded-lg">
						<Image
							src="/assets/images/participate/patient-story.jpg"
							alt="Patient Volunteers"
							width={1024}
							height={300}
							className="w-full h-auto rounded-lg mb-6"
						/>
					</div>

					<p className="text-4xl"> Patient Stories </p>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-10"></div>
		</div>
	);
};

export default PatientStories;

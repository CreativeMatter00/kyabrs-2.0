import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const PatientStories = () => {
	return (
		<div className="bg-brandColorDs1">
			<div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
				<div className="w-full md:w-2/5">
					<Image
						src="/assets/images/participate/patient.jpg"
						width="390"
						height="260"
						alt="patient"
						className="w-full h-auto rounded-lg"
					/>
				</div>

				<div className="w-full md:w-3/5">
					<p className="text-2xl mb-4">
						Patient <span className="text-brandPrimaryLs3"> Stories </span>
					</p>

					<p className="mb-6">
						Discover inspiring stories from patients who have participated in
						our clinical trials. Learn how their involvement has contributed to
						medical advancements and impacted their lives.
					</p>

					<Link
						href={"#"}
						className="flex items-center font-medium gap-4 text-brandPrimaryLs2"
					>
						See Our Patient Stories <FaArrowRightLong />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PatientStories;

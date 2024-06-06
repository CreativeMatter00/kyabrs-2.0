import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";

const PatientVolunteers = () => {
	return (
		<div className="text-bgPrimary pb-10 border-b border-bgPrimary">
			<div className="container mx-auto mb-10 px-4">
				<div className="py-10 pb-4">
					<Breadcrumb
						title1="Participate"
						link1="/participate"
						title2="Patient Volunteers"
					/>
				</div>
				<div className="relative max-h-[300px] flex items-center justify-center overflow-hidden rounded-lg">
					<Image
						src="/assets/images/participate/patient.jpg"
						alt="Patient Volunteers"
						width={1024}
						height={300}
						className="w-full h-auto rounded-lg"
					/>
					<div className="absolute top-0 left-0 right-0 bottom-0 bg-brandColorDs1 bg-opacity-60"></div>
					<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-5xl font-bold text-center">
						Patient Volunteers
					</h1>
				</div>
			</div>

			<div className="text-center container mx-auto">
				<p className="text-2xl mb-4">The Trial Experience</p>

				<p>
					Medications available today are the result of many years of clinical
					trials. Clinical trials, sometimes referred to as clinical studies,
					allow patients access to the latest therapies under development. These
					trials are a crucial step in bringing treatments to the patients who
					need them most, and by participating, you may be helping future
					patients.
				</p>
			</div>
		</div>
	);
};

export default PatientVolunteers;

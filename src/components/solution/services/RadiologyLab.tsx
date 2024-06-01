import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const RadiologyLab = () => {
	return (
		<div className="py-16 px-4">
			<div className="mb-9">
				<Back />
			</div>

			<div className="font-medium text-5xl text-textPrimary mb-20 uppercase">
				RADIOLOGY, IMAGING AND CORE LAB
				<Underline />
			</div>

			<div className="">
				<Image
					src="/assets/images/solutions/radiology.jpg"
					height={480}
					width={720}
					alt="RADIOLOGY, IMAGING AND CORE LAB"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-textSecondary text-base font-medium mb-10">
						Our Department of Radiology & Imaging combines state-of-the-art
						technology with world-class clinical expertise to deliver the best
						results. The Department of Radiology and Imaging has all the updated
						modalities necessary for diagnosis including cardiac and oncologic
						imaging, serving the purpose of screening, detection, obtaining
						diagnosis, guiding therapy, response assessment and follow up of
						post treatment patients. All modalities are connected by PACS
						(picture archiving and communication system), radiology reporting is
						done through radiology information system (RIS) and is integrated to
						Health Management System (HMS).
					</p>

					<p className="font-medium text-xl text-textPrimary mb-4">
						MACHINES FACILITIES ARE:
					</p>

					<ul className="text-textSecondary text-base font-medium list-disc list-inside">
						<li>Digital 500mA X-ray Machine.</li>
						<li> Portable X-ray machine. </li>
						<li>Dental (OPG) X-ray machine.</li>
						<li> 850mA X-ray Machine with Fluoroscopy. </li>
						<li> Mammography (Breast X-Rays). </li>
						<li>
							{" "}
							Ultrasonography- VolusonS10, LogiqS8, Mindray DC-70 Exp. Mindray
							DC-70 Exp X-Insight ultrasound machines are available in
							department. The services are – 2D,3D & 4D ultrasonography, TVS,
							TRUS, Color Doppler, Elastography, portable ultrasonography, USG
							guided procedures such as drainage, FNAC, Biopsy.{" "}
						</li>
						<li>
							{" "}
							128 Slice Philips Ingenuity Core CT Scan machine.( Routine brain
							and body CT scan, multi-phasic contrast enhanced CT scan, high
							resolution CT, cardiac and peripheral CT angiogram, CT guided
							procedures such as drainage, FNAC, Biopsy){" "}
						</li>
						<li>
							{" "}
							1.5 Tesla Philips MRI machine (Advanced MR imaging of brain, neck,
							spine and body, MRS, MR mammography, MR angiogram, MR perfusion,
							Whole body MRI).{" "}
						</li>
						<li> DEXA scan. </li>
						<li>
							{" "}
							Interventional Radiology (Fluoroscopy, Ultrasound and CT guided
							procedures).{" "}
						</li>
						<li> FPicture Archiving and Communication System (PACS). </li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default RadiologyLab;

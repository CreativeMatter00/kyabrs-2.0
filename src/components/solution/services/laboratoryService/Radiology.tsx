import Image from "next/image";

const Radiology = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <p className="text-2xl mb-6"> RADIOLOGY, IMAGING AND CORE LAB </p>

          <p>
            Our Department of Radiology & Imaging combines state-of-the-art
            technology with world-class clinical expertise to deliver the best
            results. The Department of Radiology and Imaging has all the updated
            modalities necessary for diagnosis including cardiac and oncologic
            imaging, serving the purpose of screening, detection, obtaining
            diagnosis, guiding therapy, response assessment, and follow-up of
            post-treatment patients. <br />
            All modalities are connected by PACS (Picture Archiving and
            Communication System), and radiology reporting is done through the
            Radiology Information System (RIS) and is integrated into the Health
            Management System (HMS).
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/solutions/radio.png"
            height={320}
            width={480}
            className="w-full h-auto rounded-lg"
            alt="Bioanalytical Service"
          />
        </div>
      </div>

      {/* <div className="my-6">
				<p className="text-brandPrimaryLs2 font-bold mb-4">
					MACHINES FACILITIES ARE:
				</p>
				<div className="mb-4">
					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li> Digital 500mA X-ray Machine. </li>
						<li> Portable X-ray machine. </li>
						<li> Dental (OPG) X-ray machine. </li>
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
						<li> FPicture Archiving and Communication System (PACS).</li>
					</ul>
				</div>
			</div> */}
    </div>
  );
};

export default Radiology;

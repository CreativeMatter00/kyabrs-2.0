import Image from "next/image";

const ClinicalTrial = () => {
	return (
		<div className="py-8 text-bgPrimary">
			<div className="flex flex-col md:flex-row px-4 gap-8">
				<div>
					<p className="text-2xl mb-6"> Clinical Trial Regulatory Services </p>
					<p className="text-base mb-8">
						Our Clinical Trial Regulatory Services team can help facilitate a
						seamless experience no matter where in the world you operate. By
						combining centralized data management with the ability to
						simultaneously manage multiple regulatory submissions, we can guide
						you through quicker trial start-up and follow-through. The KYABRS
						Regulatory Affairs team works collaboratively with sponsors and
						clients on a country, regional and global basis to help accelerate
						the global development of safe and effective medical therapeutics.
						Our team has extensive experience covering pre-marketing and
						post-marketing regulatory strategies for a wide range of medical
						therapeutics, including drugs, biologics and medical devices
						worldwide.
					</p>

					<p className="text-xl mb-4 text-brandPrimaryLs2">
						Our Service Includes:
					</p>

					<ul className="marker:text-brandPrimaryLs2 text-base  list-disc list-inside">
						<li> Medical Writing Services </li>
						<li> Document Preparation & Submission Services </li>
						<li> Strategic Development Services </li>
						<li> Regulatory Agency Interactions </li>
					</ul>
				</div>
				<Image
					src="/assets/images/consulting/RegulatoryAffairs-02.jpg"
					height={480}
					width={720}
					alt="Regulatory Affairs"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>
			</div>
		</div>
	);
};

export default ClinicalTrial;

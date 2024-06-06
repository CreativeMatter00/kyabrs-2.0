import Image from "next/image";

const RegulatoryStrategy = () => {
	return (
		<div className="py-8 text-bgPrimary">
			<div className="flex flex-col md:flex-row px-4 gap-8">
				<div>
					<p className="text-2xl mb-6"> Regulatory Strategy & Development </p>
					<p className="text-base mb-8">
						In clinical development, we are dedicated to ensuring that every
						moment is approached correctly. Our Regulatory Consulting Services
						team consists of experienced advisors with decades of experience in
						assisting teams to understand new and existing guidelines worldwide.
						In fact, many of them are former ICH, FDA, EMA, and NMPA regulators.
					</p>

					<p className="text-xl mb-4 text-brandPrimaryLs2">
						Our Service Includes:
					</p>

					<ul className="marker:text-brandPrimaryLs2 text-base  list-disc list-inside">
						<li> Regulatory Strategy </li>
						<li> Health Authority Meetings </li>
						<li> Quality system inspection </li>
						<li> Submission support </li>
						<li> Mergers and Acquisitions </li>
					</ul>
				</div>
				<Image
					src="/assets/images/consulting/ReglatoryAffairs-01.jpg"
					height={480}
					width={720}
					alt="Regulatory Affairs"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>
			</div>
		</div>
	);
};

export default RegulatoryStrategy;

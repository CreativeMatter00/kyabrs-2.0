import React from "react";
import Back from "../ui/back/Back";
import Underline from "../ui/underline/Underline";
import Image from "next/image";

const Consulting = () => {
	return (
		<div className="py-16 px-4">
			{/* <div className="mb-9">
				<Back />
			</div> */}

			<div className="font-medium text-5xl text-textPrimary mb-20 uppercase">
				REGULATORY STRATEGY & DEVELOPMENT PLANNING
				<Underline />
			</div>

			<div className="mb-20">
				<Image
					src="/assets/images/consulting/ReglatoryAffairs-01.jpg"
					height={480}
					width={720}
					alt="Regulatory Affairs"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
					In clinical development, we are dedicated to ensuring that every
					moment is approached correctly. Our Regulatory Consulting Services
					team consists of experienced advisors with decades of experience in
					assisting teams to understand new and existing guidelines worldwide.
					In fact, many of them are former ICH, FDA, EMA, and NMPA regulators.
				</p>

				<p className="font-medium text-xl text-textPrimary mb-4 px-4">
					OUR SERVICES INCLUDE:
				</p>

				<ul className="text-textSecondary text-base font-medium list-disc list-inside px-4">
					<li> Regulatory Strategy </li>
					<li> Health Authority Meetings </li>
					<li> Quality system inspection </li>
					<li> Submission support </li>
					<li> Mergers and Acquisitions </li>
				</ul>
			</div>

			<div className="font-medium text-5xl text-textPrimary mb-20 uppercase">
				CLINICAL TRIAL REGULATORY SERVICES
				<Underline />
			</div>

			<div className="mb-20">
				<Image
					src="/assets/images/consulting/RegulatoryAffairs-02.jpg"
					height={480}
					width={720}
					alt="Regulatory Affairs"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
					Our Clinical Trial Regulatory Services team can help facilitate a
					seamless experience no matter where in the world you operate. By
					combining centralized data management with the ability to
					simultaneously manage multiple regulatory submissions, we can guide
					you through quicker trial start-up and follow-through.
					<br />
					The KYABRS Regulatory Affairs team works collaboratively with sponsors
					and clients on a country, regional and global basis to help accelerate
					the global development of safe and effective medical therapeutics.
					<br />
					Our team has extensive experience covering pre-marketing and
					post-marketing regulatory strategies for a wide range of medical
					therapeutics, including drugs, biologics and medical devices
					worldwide.
				</p>

				<p className="font-medium text-xl text-textPrimary mb-4 px-4">
					OUR REGULATORY SERVICE INCLUDES:
				</p>

				<ul className="text-textSecondary text-base font-medium list-disc list-inside px-4">
					<li> Medical Writing Services </li>
					<li> Strategic Development Services </li>
					<li> Document Preparation & Submission Services </li>
					<li> Regulatory Agency Interactions </li>
				</ul>
			</div>
		</div>
	);
};

export default Consulting;

"use client";

import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import { usePathname } from "next/navigation";

/* eslint-disable react/no-unescaped-entities */
const EmploymentId = () => {
	const pathName = usePathname().toString();

	// Extract the last part of the pathName
	const lastSegment: any = pathName.split("/").pop();

	// Decode the URI component to handle encoded characters like %20
	const decodedSegment: string = decodeURIComponent(lastSegment);

	const jobTypes = ["In-house", "Full-time"];
	const benefits = [
		{
			title: "Innovative Environment :",
			description:
				"cutting-edge research and development in the clinical research field.",
		},
		{
			title: "Professional Growth :",
			description:
				"We provide continuous learning and development opportunities to help you advance in your career.",
		},
		{
			title: "Collaborative Culture :",
			description:
				"Work with a team of dedicated professionals who are committed to making a difference.",
		},
		{
			title: "Impactful Work :",
			description:
				"Contribute to meaningful research that impacts healthcare and patient lives.",
		},
	];
	const qualifications = [
		"Bachelor's degree in life sciences, nursing, pharmacy, or a related field (Master's degree preferred).",
		"Certification in Clinical Research (e.g. ACRP, SOCRA) is a plus.",
	];
	const skills = [
		"Minimum of 2 years of experience as a Clinical Research Associate or in a related clinical research role.",
		"Strong knowledge of clinical trial processes, regulations, and GCP guidelines.",
		"Excellent organizational and time management skills with the ability to manage multiple tasks and priorities.",
		"Strong communication and interpersonal skills, with the ability to work effectively in a team environment.",
		"Proficiency in Microsoft Office Suite and clinical trial management software.",
		"Attention to detail and a high level of accuracy in documentation and data management.",
		"Ability to travel as required for site visits and monitoring activities.",
	];

	return (
		<div className="">
			<div className="border-b border-[#5A5A5A] flex justify-center items-center">
				<div className="container pb-4 px-2 text-bgPrimary">
					<Breadcrumb title1="Employment" link1="/employment" title2="(CRA)" />
					<p className="text-4xl ">
						<span className="text-[#FFB8B1]">Job Title :&nbsp;</span>
						{decodedSegment}
						{decodedSegment === "" && "Clinical Research Associate (CRA)"}
					</p>
				</div>
			</div>
			<div className=" flex-col gap-6 flex justify-center items-center">
				<div className="container px-4 py-8">
					<div>
						<p className="font-bold text-[#FF6A5E] mb-4">Job Type</p>
						<ul className="list-disc list-inside marker:text-[#FF6A5E] flex gap-4">
							{jobTypes.map((type, index) => (
								<li key={index} className="text-bgPrimary list-none">
									{type}
								</li>
							))}
						</ul>
					</div>
					<div className="mt-6">
						<p className="font-bold text-[#FF6A5E] mb-4">About the Job</p>
						<p className="text-bgPrimary">
							use of Khwaja Yunus Ali Medical College & Hospital - Bio-Research
							(KYAMCH-BRS) is seeking a dedicated and detail-oriented Clinical
							Research Associate (CRA) to join our dynamic team. As a CRA at
							KYA-BRS, you will play a crucial role in the planning, execution,
							and monitoring of clinical trials, ensuring they are conducted in
							compliance with international regulatory standards and ethical
							guidelines.
						</p>
					</div>
				</div>

				<div className="bg-[#4F5961] w-full flex justify-center items-center">
					<div className="container px-4 py-8">
						<p className="font-bold text-[#FF6A5E] mb-4">Why Work With Us</p>

						<ul className="list-none grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
							{benefits.map((benefit, index) => (
								<li key={index} className="text-bgPrimary flex items-start">
									<span className="marker flex-shrink-0 text-[#FF6A5E] mr-2 font-extrabold">
										•
									</span>
									<div>
										<span className="font-bold">{benefit.title}&nbsp;</span>
										{benefit.description}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="container px-4 pt-8">
					<div>
						<p className="font-bold text-[#FF6A5E] mb-4">
							Educational Qualifications
						</p>

						<ul className="list-none grid lg:grid-cols-1 grid-cols-1 gap-x-8 gap-y-4">
							{qualifications.map((qualification, index) => (
								<li key={index} className="text-bgPrimary flex items-start">
									<span className="marker flex-shrink-0 text-[#FF6A5E] mr-2 font-extrabold">
										•
									</span>
									<span>{qualification}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="my-6">
						<p className="font-bold text-[#FF6A5E] mb-4">
							Required Skills and Experience
						</p>

						<ul className="list-none grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
							{skills.map((skill, index) => (
								<li key={index} className="text-bgPrimary flex items-start">
									<span className="marker flex-shrink-0 text-[#FF6A5E] mr-2 font-extrabold">
										•
									</span>
									<span>{skill}</span>
								</li>
							))}
						</ul>
					</div>

					<p className="text-bgPrimary">
						If you are passionate about clinical research and meet the
						qualifications and experience listed above, we would love to hear
						from you. To apply, please send your resume and cover letter to{" "}
						<span className="text-[#FFB8B1] cursor-pointer">
							info@kyabrs.org
						</span>{" "}
						with "Clinical Research Associate Application" in the subject line.
					</p>
				</div>
			</div>
		</div>
	);
};

export default EmploymentId;

// /* eslint-disable react/no-unescaped-entities */
// const EmploymentId = () => {
//   return (
//     <div className="">
//       <div className="mt-2  flex-col gap-6 flex justify-center items-center">
//         <div className="container  px-4 py-8">
//           <div>
//             <p className="font-bold text-[#FF6A5E] mb-4">Job Type</p>
//             <ul className="list-disc list-inside marker:text-[#FF6A5E] flex gap-4">
//               <li className="text-bgPrimary list-none">In-house</li>
//               <li className="text-bgPrimary ">Full-time</li>
//             </ul>
//           </div>
//           <div className="mt-6">
//             <p className="font-bold text-[#FF6A5E] mb-4">About the Job</p>
//             <p className="text-bgPrimary">
//               Khwaja Yunus Ali-Bio Research Services (KYA-BRS) is seeking a
//               dedicated and detail-oriented Clinical Research Associate (CRA) to
//               join our dynamic team. As a CRA at KYA-BRS, you will play a
//               crucial role in the planning, execution, and monitoring of
//               clinical trials, ensuring they are conducted in compliance with
//               international regulatory standards and ethical guidelines.
//             </p>
//           </div>
//         </div>

//         <div className="bg-[#4F5961] w-full flex justify-center items-center">
//           <div className="container  px-4 py-8">
//             <p className="font-bold text-[#FF6A5E] mb-4">Why Work With Us</p>
//             <ul className="list-disc list-inside marker:text-[#FF6A5E] grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
//               <li className="text-bgPrimary">
//                 <span className="font-bold">
//                   Innovative Environment :&nbsp;
//                 </span>
//                 cutting-edge research and development in the clinical research
//                 field.
//               </li>
//               <li className="text-bgPrimary ">
//                 <span className="font-bold">Professional Growth :&nbsp;</span>
//                 We provide continuous learning and development opportunities to
//                 help you advance in your career.
//               </li>
//               <li className="text-bgPrimary ">
//                 <span className="font-bold">Collaborative Culture :&nbsp;</span>
//                 Work with a team of dedicated professionals who are committed to
//                 making a difference.
//               </li>
//               <li className="text-bgPrimary ">
//                 <span className="font-bold">Impactful Work :&nbsp;</span>
//                 Contribute to meaningful research that impacts healthcare and
//                 patient lives.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="container px-4 py-8">
//           <div>
//             <p className="font-bold text-[#FF6A5E] mb-4">
//               Educational Qualifications
//             </p>
//             <ul className="list-disc list-inside marker:text-[#FF6A5E] grid lg:grid-cols-1 grid-cols-1 gap-x-8 gap-y-4">
//               <li className="text-bgPrimary">
//                 Bachelor's degree in life sciences, nursing, pharmacy, or a
//                 related field (Master's degree preferred).
//               </li>
//               <li className="text-bgPrimary ">
//                 Certification in Clinical Research (e.g., ACRP, SOCRA) is a
//                 plus.
//               </li>
//             </ul>
//           </div>

//           <div className="my-6">
//             <p className="font-bold text-[#FF6A5E] mb-4">
//               Required Skills and Experience
//             </p>
//             <ul className="list-disc list-inside marker:text-[#FF6A5E] grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
//               <li className="text-bgPrimary">
//                 Minimum of 2 years of experience as a Clinical Research
//                 Associate or in a related clinical research role.
//               </li>
//               <li className="text-bgPrimary ">
//                 Strong knowledge of clinical trial processes, regulations, and
//                 GCP guidelines.
//               </li>
//               <li className="text-bgPrimary ">
//                 Excellent organizational and time management skills with the
//                 ability to manage multiple tasks and priorities.
//               </li>
//               <li className="text-bgPrimary ">
//                 Strong communication and interpersonal skills, with the ability
//                 to work effectively in a team environment.
//               </li>
//               <li className="text-bgPrimary ">
//                 Proficiency in Microsoft Office Suite and clinical trial
//                 management software.
//               </li>
//               <li className="text-bgPrimary ">
//                 Attention to detail and a high level of accuracy in
//                 documentation and data management.
//               </li>
//               <li className="text-bgPrimary ">
//                 Ability to travel as required for site visits and monitoring
//                 activities.
//               </li>
//             </ul>
//           </div>

//           <p className="text-bgPrimary">
//             If you are passionate about clinical research and meet the
//             qualifications and experience listed above, we would love to hear
//             from you. To apply, please send your resume and cover letter to
//             <span className="text-[#FFB8B1] cursor-pointer">
//               info@kyabrs.org
//             </span>{" "}
//             with "Clinical Research Associate . Application" in the subject
//             line.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmploymentId;

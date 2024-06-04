"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function ManagementTeam() {
	return (
		<div className="text-bgPrimary px-4">
			<div className="pb-4">
				<p className="text-2xl">
					Our <span className="text-brandPrimaryLs3"> Management </span>
				</p>
			</div>

			<div className="mb-10">
				<div className="p-6 flex flex-col md:flex-row gap-8 bg-brandColorLs1 rounded-lg">
					<Image
						src="/assets/images/about/1.png"
						height={300}
						width={300}
						className="h-auto w-auto max-h-[300px] mx-auto rounded-lg"
						alt="chairman"
					/>

					<div className="flex flex-col justify-between h-auto">
						<div>
							<p className="text-xl font-bold text-bgPrimary">
								DR. MM AMJAD HUSSAIN
							</p>
							<p className="text-brandPrimaryLs4"> Founder Chairman </p>
						</div>

						<div>
							<p className="font-bold text-bgPrimary"> Bio </p>
							<p className="text-bgPrimary">
								Dr. M. M. Amjad Hussain was born on October 1st 1925 in the
								village of Enayetpur, District of Sirajganj. He had obtained his
								MBBS from Calcutta Medical College, India in 1948. He was the
								Founding Managing Director and Chairman of Drug International
								Limited, Khwaja Yunus Ali Medical College & Hospital and many
								other industries, companies, and organizations.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-10">
				<div className="p-6 flex flex-col md:flex-row gap-8 bg-brandColorLs1 rounded-lg">
					<Image
						src="/assets/images/about/2.png"
						height={300}
						width={300}
						className="h-auto w-auto max-h-[300px] mx-auto rounded-lg"
						alt="md"
					/>

					<div className="flex flex-col justify-between h-auto">
						<div>
							<p className="text-xl font-bold text-bgPrimary">
								M.A. HAIDER HUSSAIN
							</p>
							<p className="text-brandPrimaryLs4"> Managing Director </p>
						</div>

						<div>
							<p className="font-bold text-bgPrimary"> Bio </p>
							<p className="text-bgPrimary">
								The present Managing Director, the younger son of Dr. M. M.
								Amjad Hussain, was elected Chairman of Khwaja Yunus Ali Medical
								College & Hospital and Khwaja Yunus Ali Medical College. He also
								oversees other industries such as Drug International Limited,
								KYA Bio Research Services, ATI Software Limited, ATI Ceramics,
								Taj Printers, Harnest Label Industries, and Amzad Tea.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-10">
				<div className="p-6 flex flex-col md:flex-row gap-8 bg-brandColorLs1 rounded-lg">
					<Image
						src="/assets/images/about/3-new.jpg"
						height={300}
						width={300}
						className="h-auto w-auto max-h-[300px] mx-auto rounded-lg"
						alt="head of operations"
					/>

					<div className="flex flex-col justify-between h-auto">
						<div>
							<p className="text-xl font-bold text-bgPrimary">
								DR. AMINA KASHFIA
							</p>
							<p className="text-brandPrimaryLs4"> Head Of Operations </p>
						</div>

						<div>
							<p className="font-bold text-bgPrimary"> Bio </p>
							<p className="text-bgPrimary">
								Being the Head of Operations of this organization, I think I own
								the best team so far. They are assets that I have fashioned
								through the previous years. Each and everybody of them is
								capable of representing the CRO according to Global standards. I
								work to ensure all research projects scientific validity and
								compliance with global regulations.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ManagementTeam;

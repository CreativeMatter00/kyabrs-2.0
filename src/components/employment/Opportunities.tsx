import Image from "next/image";
import React from "react";

const Opportunities = () => {
	return (
		<div>
			<p className="font-bold text-[#FF6A5E] mb-4">Volunteer Opportunities</p>
			<div className="flex gap-8 max-lg:flex-col">
				<div className="text-bgPrimary max-lg:order-2">
					<p className="mb-4">
						We welcome volunteers who are passionate about contributing to
						clinical research. Volunteering at KYAMCH-BRS is a rewarding way to
						support groundbreaking research and gain valuable experience.
					</p>

					<ul className="list-none flex flex-col gap-4">
						<li className="text-bgPrimary flex items-start">
							<span className="marker flex-shrink-0 text-[#FF6A5E] mr-2 font-extrabold">
								•
							</span>
							<div>
								<span className="font-bold">Who Can Volunteer?&nbsp;</span>
								We welcome volunteers from diverse backgrounds, including
								students, professionals, and retirees who are interested in
								clinical research.
							</div>
						</li>
						<li className="text-bgPrimary flex items-start">
							<span className="marker flex-shrink-0 text-[#FF6A5E] mr-2 font-extrabold">
								•
							</span>
							<div>
								<span className="font-bold">Volunteer Roles :&nbsp;</span>
								Assist in clinical trials, support data management, participate
								in community outreach, and more.
							</div>
						</li>
						<li className="text-bgPrimary flex items-start">
							<span className="marker flex-shrink-0 text-[#FF6A5E] mr-2 font-extrabold">
								•
							</span>
							<div>
								<span className="font-bold">Collaborative Culture :&nbsp;</span>
								Work with a team of dedicated professionals who are committed to
								making a difference.
							</div>
						</li>
						<li className="text-bgPrimary flex items-start">
							<span className="marker flex-shrink-0 text-[#FF6A5E] mr-2 font-extrabold">
								•
							</span>
							<div>
								<span className="font-bold">
									Benefits of Volunteering :&nbsp;
								</span>
								Gain valuable experience, contribute to important research, and
								make a difference in the healthcare community.
							</div>
						</li>
					</ul>
				</div>
				<Image
					src="/assets/images/employment/employment.jpg"
					height={262}
					width={400}
					alt="opportunities"
					className="h-64 w-[400px] mx-auto rounded-lg max-lg:order-1"
				/>
			</div>

			<p className="text-bgPrimary mt-8">
				To learn more about volunteering opportunities or to apply as a
				volunteer, please send your resume and a brief statement of interest to{" "}
				<span className="text-[#FFB8B1] cursor-pointer">info@kyabrs.org</span>.
			</p>
		</div>
	);
};

export default Opportunities;

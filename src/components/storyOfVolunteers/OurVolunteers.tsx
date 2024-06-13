import Image from "next/image";
import React from "react";

const OurVolunteers = () => {
	return (
		<div className="container mx-auto p-6 text-bgPrimary">
			<p className="text-brandPrimaryLs2 font-bold mb-4"> Our Volunteer </p>

			<div className="flex flex-col md:flex-row gap-4">
				<div className="w-full md:w-[50%]">
					Our volunteers are the heart and soul of Khwaja Yunus Ali Medical
					College & Hospital - Bio-Research Services (KYAMCH-BRS). Coming from
					diverse backgrounds, including students, professionals, and retirees,
					they bring unique skills, experiences, and perspectives to our
					community. United by a commitment to advancing scientific knowledge
					and improving patient outcomes, they work alongside our staff,
					contributing their time and expertise to support various research
					projects.
					<br />
					<br />
					Volunteers at KYAMCH-BRS are involved in a wide range of activities,
					from assisting in clinical trials and engaging with study participants
					to helping with data collection and analysis. They also play a key
					role in community outreach, educating the public about the importance
					of clinical research and encouraging participation in studies. Through
					training sessions and workshops, our volunteers continuously enhance
					their skills and stay updated on the latest developments in clinical
					research.
					<br />
					<br />
					The impact of our volunteers extends beyond our research facilities,
					helping to accelerate the development of new treatments and therapies
					that improve patient lives globally. We are incredibly proud of our
					volunteers and grateful for their dedication and hard work. Their
					passion and commitment inspire us every day, highlighting the power of
					community and collaboration in achieving our goals. If you are
					interested in joining our team, we welcome you to explore the various
					volunteer opportunities available and become part of our mission to
					advance clinical research and improve patient care.
				</div>
				<div className="w-full md:w-[50%] flex flex-col gap-8">
					<Image
						src="/assets/images/storyOfVolunteers/1.jpg"
						width={480}
						height={320}
						className="rounded-lg w-full h-auto"
						alt="Our Volunteers"
					/>
					<Image
						src="/assets/images/storyOfVolunteers/2.jpg"
						width={480}
						height={320}
						className="rounded-lg w-full h-auto"
						alt="Our Volunteers"
					/>
				</div>
			</div>
		</div>
	);
};

export default OurVolunteers;

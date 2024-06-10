import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

const PhaseTwoAndThree = () => {
	return (
		<div className="container mx-auto">
			<div className="text-2xl mb-6">
				<span className="text-brandPrimaryLs3">Phase II & Phase III </span>
				Clinical Trials
			</div>

			<div className="flex flex-col-reverse md:flex-row gap-8 mb-6">
				<div className="w-full md:w-1/2">
					<p>
						Our in-house medical, regulatory, and operational experts work
						collaboratively to support your Phase IIb-III clinical trials as
						many moving parts go into Phase II and III clinical trials. <br />
						Our teams help eliminate delays by leading the way from recruitment
						strategies, medical writing, and clinical logistics, all the way
						through the regulatory process.
					</p>
					<p className="font-bold text-brandPrimaryLs3 mb-4 mt-6">
						Our Comprehensive Services For Accelerating Clinical Research
					</p>

					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li>
							Our expert physicians team provide strategic direction for study
							design, train operations staff, provide medical monitoring, work
							with primary investigators.
						</li>
						<li>
							Dedicated global regulatory submissions teams experienced in key
							therapeutic and specialty area trial application processes and
							site start-up.
						</li>
						<li>Experienced in Data Safety Monitoring Committee management.</li>
						<li>
							Detailed site selection processes, ongoing tracking and site
							communication to maintain trial timelines.
						</li>
						<li>
							Strategic regulatory leadership guides trial design and execution
							recommendations and meet with regulatory agencies.
						</li>
						<li>
							Proprietary, integrated clinical study management technology
							platform facilitates efficient execution of global trials.
						</li>
						<li>Provides ongoing statistical support.</li>
						<li>Extensive and rigorous in-house training program.</li>
					</ul>
				</div>

				<div className="w-full md:w-1/2">
					<Image
						src="/assets/images/solutions/clinical-service/phase-ii.jpg"
						height={320}
						width={480}
						className="w-full h-auto rounded-lg"
						alt="Early Phase Clinical Trials"
					/>
				</div>
			</div>

			<div className="mb-8"></div>
		</div>
	);
};

export default PhaseTwoAndThree;

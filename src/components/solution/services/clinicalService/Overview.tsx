import Image from "next/image";

const Overview = () => {
	return (
		<div className="container mx-auto">
			<div className="flex flex-col-reverse md:flex-row gap-8">
				<div className="w-full md:w-1/2">
					<p className="text-2xl mb-6"> Overview </p>

					<p>
						We feel differently about your project. At KYAMCH-BRS, we are
						dedicated to your project and committed to solving, optimizing,
						developing, and nurturing it. Our team is ready to help you overcome
						all obstacles, no matter how long it takes. We are with you every
						step of the way, resolving complex problems involved in transforming
						scientific discoveries into desired treatments for patients. As your
						trusted clinical research organization (CRO), we are here to support
						you.
					</p>
					<br />
					<br />
					<p className="font-bold text-brandPrimaryLs2 mb-2">
						{" "}
						Our comprehensive services for accelerating clinical research:{" "}
					</p>
					<ul className="marker:text-brandPrimaryLs2 text-base list-disc list-inside">
						<li>
							{" "}
							Our expert physicians team provides strategic direction for study
							design, trains operations staff, provides medical monitoring, and
							works with primary investigators.{" "}
						</li>
						<li>
							{" "}
							Strategic regulatory leadership guides trial design and execution
							recommendations and meets with regulatory agencies.{" "}
						</li>
						<li>
							{" "}
							Our global regulatory submissions teams are experienced in key
							therapeutic and specialty area trial application processes and
							site start-up.{" "}
						</li>
						<li> Experienced in Data Safety Monitoring Board management. </li>
						<li> Provides ongoing statistical support. </li>
						<li>
							{" "}
							Detailed site selection processes, ongoing tracking, and site
							communication to maintain trial timelines.{" "}
						</li>
						<li> Extensive and rigorous in-house training program. </li>
					</ul>
				</div>

				<div className="w-full md:w-1/2">
					<Image
						src="/assets/images/solutions/clinical-service/overview.jpg"
						height={320}
						width={480}
						className="w-full h-auto rounded-lg"
						alt="overview"
					/>
				</div>
			</div>
		</div>
	);
};

export default Overview;

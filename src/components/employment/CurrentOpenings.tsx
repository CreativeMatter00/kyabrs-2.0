import Link from "next/link";

const jobOpenings = [
	{
		title: "Clinical Research Associate (CRA)",
		description:
			"Responsible for monitoring clinical trials and ensuring compliance with regulatory requirements.",
		link: "/employment",
	},
	{
		title: "Data Manager",
		description:
			"Manage and analyze clinical trial data, ensuring accuracy and integrity.",
		link: "/employment",
	},
	{
		title: "Laboratory Technician",
		description:
			"Perform laboratory tests and procedures in our bioanalytical and clinical labs.",
		link: "/employment",
	},
	{
		title: "Regulatory Affairs Specialist",
		description:
			"Oversee regulatory submissions and ensure compliance with international standards.",
		link: "/employment",
	},
];

const CurrentOpenings = () => {
	return (
		<div>
			<p className="font-bold text-[#FF6A5E] mb-4">Current Openings</p>
			<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-x-4 gap-y-6">
				{jobOpenings.map((job, index) => (
					<div
						key={index}
						className="bg-[#4F5961] hover:bg-brandPrimaryLs2 rounded-md p-8 text-bgPrimary flex justify-between flex-col group"
					>
						<div>
							{" "}
							<p className="text-lg font-bold mb-2">{job.title}</p>
							<p className="text-sm mb-8">{job.description}</p>
						</div>

						<Link
							href={`employment/${job.title}`}
							className="text-[#FF6A5E] text-sm font-bold hover:underline duration-300 group-hover:text-bgPrimary"
						>
							View Job Details
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default CurrentOpenings;

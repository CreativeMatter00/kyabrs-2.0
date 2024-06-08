const WorkWithUs = () => {
	return (
		<div>
			<p className="font-bold text-[#FF6A5E] mb-4">Why Work With Us</p>
			<ul className="list-disc list-inside marker:text-[#FF6A5E] grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
				<li className="text-bgPrimary">
					<span className="font-bold">Innovative Environment :&nbsp;</span>
					cutting-edge research and development in the clinical research field.
				</li>
				<li className="text-bgPrimary ">
					<span className="font-bold">Professional Growth :&nbsp;</span>
					We provide continuous learning and development opportunities to help
					you advance in your career.
				</li>
				<li className="text-bgPrimary ">
					<span className="font-bold">Collaborative Culture :&nbsp;</span>
					Work with a team of dedicated professionals who are committed to
					making a difference.
				</li>
				<li className="text-bgPrimary ">
					<span className="font-bold">Impactful Work :&nbsp;</span>
					Contribute to meaningful research that impacts healthcare and patient
					lives.
				</li>
			</ul>
		</div>
	);
};

export default WorkWithUs;

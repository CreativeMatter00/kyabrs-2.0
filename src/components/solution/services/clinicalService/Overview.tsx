import Image from "next/image";

const Overview = () => {
	return (
		<div className="container mx-auto">
			<div className="flex flex-col-reverse md:flex-row gap-8">
				<div className="w-full md:w-1/2">
					<p className="text-2xl mb-6"> Overview </p>

					<p>
						We feel differently about your project. Our team is ready for you
						who keep solving, optimizing, developing and caring your project. We
						are with you to overcome all obstacles as long it takes. KABRS
						committed to be with you in resolving all complex problems involved
						in transforming a scientific discovery in the hands of patients as
						desired treatment. We are your trusted clinical research
						organization (CRO).
					</p>
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

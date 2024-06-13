/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

function OurValues() {
	return (
		<div className="text-bgPrimary pt-4 px-4">
			<div className="pb-4">
				<p className="text-2xl">
					Our <span className="text-brandPrimaryLs3"> Values </span>
				</p>
			</div>

			<div className="pt-6 text-bgPrimary">
				<p className="mb-6">
					Our core values define our identity and serve as the cornerstone of
					our patient-centered care and research excellence.
				</p>

				<div className="flex flex-col md:flex-row items-center gap-8 mb-4">
					<div className="w-full md:w-1/2">
						<p className="text-brandPrimaryLs2 font-bold mb-4"> Mission </p>
						<p className="mb-6">
							At KYAMCH-BRS, our mission is to advance the frontiers of clinical
							research in Bangladesh by ensuring the highest standards of
							scientific integrity and ethical conduct. We aim to provide
							innovative solutions and comprehensive services that enhance the
							quality of healthcare and bring new, effective treatments to
							patients.
						</p>

						<p className="text-brandPrimaryLs2 font-bold mb-4"> Vision </p>
						<p className="mb-6">
							Our vision is to be a leading clinical research organization in
							Bangladesh, recognized for our commitment to excellence,
							innovation, and ethical practices. We strive to foster a
							collaborative environment that supports scientific discovery and
							translates research into real-world health benefits.
						</p>
					</div>

					<div className="w-full md:w-1/2">
						<Image
							src="/assets/images/about/value.jpg"
							height={1920}
							width={1080}
							alt="our values"
							className="w-full h-auto rounded-lg"
						/>
					</div>
				</div>

				<p className="text-brandPrimaryLs2 font-bold mb-4"> Commitments </p>
				<div className="mb-0">
					<p className="mb-4">
						We are dedicated to serve the needs of our customers with:
					</p>

					<ul className="list-none pl-0 text-justify max-w-[960px]">
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							<span className="font-bold text-brandPrimaryLs2">
								Scientific Excellence:{" "}
							</span>
							We are dedicated to maintaining the highest standards of
							scientific rigor and accuracy in all our research activities.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							<span className="font-bold text-brandPrimaryLs2">
								Ethical Conduct:{" "}
							</span>
							Our work is guided by a strong ethical framework, ensuring the
							rights, safety, and well-being of all study participants.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							<span className="font-bold text-brandPrimaryLs2">
								Innovation:{" "}
							</span>
							We continually seek innovative approaches and technologies to
							improve the efficiency and effectiveness of clinical research.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							<span className="font-bold text-brandPrimaryLs2">
								Collaboration:{" "}
							</span>
							We foster partnerships with academic institutions, healthcare
							providers, and industry leaders to enhance the scope and impact of
							our research.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							<span className="font-bold text-brandPrimaryLs2">
								Patient-Centered Focus:{" "}
							</span>
							Our ultimate goal is to improve patient outcomes by bringing safe
							and effective treatments to market.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							<span className="font-bold text-brandPrimaryLs2">
								Quality Assurance:{" "}
							</span>
							We implement robust quality control measures to ensure the
							reliability and validity of our research findings.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							<span className="font-bold text-brandPrimaryLs2">
								Transparency:{" "}
							</span>
							We are committed to open communication and transparency in all our
							operations and reporting.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							<span className="font-bold text-brandPrimaryLs2">
								Sustainability:{" "}
							</span>
							We prioritize sustainable practices that contribute to the
							long-term health and well-being of the communities we serve.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default OurValues;

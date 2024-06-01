/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

function OurValues() {
	return (
		<div className="text-bgPrimary px-4">
			<div className="pb-4">
				<p className="text-2xl">
					Our <span className="text-brandPrimaryLs3"> Values </span>
				</p>
			</div>

			<div className="py-6 text-bgPrimary">
				<p className="mb-6">
					Our core values define our identity and serve as the cornerstone of
					our patient-centered care and research excellence.
				</p>

				<div className="flex flex-col md:flex-row items-center gap-8 mb-4">
					<div className="w-full md:w-1/2">
						<p className="text-brandPrimaryLs2 font-bold mb-4"> Mission </p>
						<p className="mb-6">
							Our commitment is a journey, a relentless pursuit of excellence,
							where we harmonize with the forefront of techniques and
							procedures. We safeguard the scientific integrity of every project
							and stand resolute in our compliance with global regulations.
						</p>

						<p className="text-brandPrimaryLs2 font-bold mb-4"> Vision </p>
						<p className="mb-6">
							Forge the path to industry excellence, crafting benchmarks that
							illuminate the way. We champion reliability, unwavering quality,
							and aspire to crown Bangladesh as the global epicenter of
							dependable, cost-effective clinical trials.
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
				<div className="mb-6">
					<p className="mb-4">
						We are dedicated to fulfilling our customers' needs through. We are
						dedicated to serve the needs of our customers with:
					</p>

					<ul className="marker:text-brandPrimaryLs2 list-inside list-disc">
						<li>A resolute commitment to reliability and quality</li>
						<li>Extensive global regulatory experience and expertise</li>
						<li>A team of talented and motivated staff</li>
						<li>
							A personalized approach, firmly grounded in our adherence to
							global regulations
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default OurValues;

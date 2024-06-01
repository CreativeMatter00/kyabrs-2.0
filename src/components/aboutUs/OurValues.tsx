/* eslint-disable react/no-unescaped-entities */
import Underline from "../ui/underline/Underline";

function OurValues() {
	return (
		<div className="px-4">
			<div>
				<p className="text-4xl font-semibold">
					Our
					<br /> Values
				</p>
				<Underline />
			</div>

			<div className="py-8">
				<p className="text-textSecondary text-base font-medium mb-8">
					Our core values define our identity and serve as the cornerstone of
					our patient-centered care and research excellence.
				</p>

				<div className="mb-8">
					<p className="text-primary text-2xl font-semibold mb-4">Mission</p>
					<p className="text-textSecondary text-base font-medium">
						Our commitment is a journey, a relentless pursuit of excellence,
						where we harmonize with the forefront of techniques and procedures.
						We safeguard the scientific integrity of every project and stand
						resolute in our compliance with global regulations.
					</p>
				</div>
				<div className="mb-8">
					<p className="text-primary text-2xl font-semibold mb-4">Vision</p>
					<p className="text-textSecondary text-base font-medium">
						Forge the path to industry excellence, crafting benchmarks that
						illuminate the way. We champion reliability, unwavering quality, and
						aspire to crown Bangladesh as the global epicenter of dependable,
						cost-effective clinical trials.
					</p>
				</div>
				<div className="mb-8">
					<p className="text-primary text-2xl font-semibold mb-4">
						Commitments
					</p>
					<p className="text-textSecondary text-base font-bold">
						We are dedicated to fulfilling our customers' needs through. We are
						dedicated to serve the needs of our customers with:
					</p>
					<ol
						type="1"
						className="text-textSecondary text-base font-medium pl-4"
					>
						<li> 1. A resolute commitment to reliability and quality,</li>
						<li> 2. A team of talented and motivated staff,</li>
						<li>
							3. Extensive global regulatory experience and expertise, and
						</li>
						<li>
							4. A personalized approach, firmly grounded in our adherence to
							global regulations.
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}

export default OurValues;

import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";

const ClinicalTrial = () => {
	return (
		<div className="py-16 px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/solutions"
						title1="Solutions"
						title2="Clinical Trial Management"
					/>
				</div>

				<div className="h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
					<Image
						src={"/assets/images/solutions/clinical-service/hero.jpg"}
						height={300}
						width={1024}
						alt="Solutions"
						className="rounded-lg w-full"
					/>
				</div>

				<p className="text-2xl mb-6"> Clinical Trial Management </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/solutions/clinical-trial.jpg"
					height={480}
					width={720}
					alt="Clinical Trial"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-base font-medium mb-10">
						KYABRS has Experience, Wide Reach and Highly Disciplined Execution
						of trial management. KYABRS utilizes our unique partnership
						philosophy and team structure to provide effective, end-to-end
						collaboration, training, and resource planning around the world in
						clinical trial management. Our dedicated teams are designed to serve
						as an extension of your team and to provide unparalleled support at
						every stage of the drug development process.
					</p>

					<p className="font-bold text-brandPrimaryLs2 mb-4">KYABRS OFFERS:</p>

					<p>
						<span className="font-bold text-brandPrimaryLs2">
							{" "}
							Experienced Execution:{" "}
						</span>{" "}
						Skilled and experienced team members work closely with top
						therapeutic and regulatory experts in the industry, provide fast
						start-up time, high quality and ensures the most efficient delivery
						at every stage.
					</p>
					<p>
						<span className="font-bold text-brandPrimaryLs2">
							{" "}
							Essential Partnerships:{" "}
						</span>{" "}
						Comprehensive communication is utilized throughout all phases of the
						clinical trial to build and maintain successful partnerships with
						Sponsors and Sites
					</p>
					<p>
						<span className="font-bold text-brandPrimaryLs2">
							{" "}
							Dedication:{" "}
						</span>{" "}
						Dedicated for development scientific discovery to reach at end
						users.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ClinicalTrial;

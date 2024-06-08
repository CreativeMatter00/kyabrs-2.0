import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";

const FeasibilityStudy = () => {
	return (
		<div className="py-16 px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/solutions"
						title1="Solutions"
						title2="Feasibility Study"
					/>
				</div>

				<div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
					<Image
						src={"/assets/images/solutions/clinical-service/hero.jpg"}
						height={300}
						width={1024}
						alt="Solutions"
						className="rounded-lg w-full"
					/>
				</div>

				<p className="text-2xl mb-6"> Feasibility Study </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/solutions/feasibility.jpg"
					height={480}
					width={720}
					alt="feasibility study"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-base font-medium mb-10">
						KYAMCH-BRS helps sponsors to identify sites with the highest
						potential for hiring the right patients with our large, global
						investigator or site database in our focused therapeutic area. When
						we conduct study start-ups, the total start-up time is usually less
						than half of the industry average.
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeasibilityStudy;

import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";

const NashLiverDisease = () => {
	return (
		<div className="py-16 px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/expertise"
						title1="Expertise"
						title2="NASH & Liver Disease"
					/>
				</div>

				<div className="h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
					<Image
						src={"/assets/images/expertise/area-hero.jpg"}
						height={300}
						width={1024}
						alt="Expertise"
						className="rounded-lg w-full"
					/>
				</div>

				<p className="text-2xl mb-6"> NASH & Liver Disease </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/expertise/liver.jpg"
					height={480}
					width={720}
					alt="NASH & Liver Disease"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-base font-medium mb-10">
						KYABRS has capability to deal NAFLD/NASH trials with endpoints
						including labs, imaging and biopsy.
						<br />
						Accelerate your study with KYABRS’s noted medical and regulatory
						experts, highly experienced clinical trial management teams, central
						labs, and imaging core labs.
					</p>
				</div>
			</div>
		</div>
	);
};

export default NashLiverDisease;

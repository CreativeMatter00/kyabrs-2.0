import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";

import Image from "next/image";

const EndocrineMetabolic = () => {
	return (
		<div className="py-16 px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/expertise"
						title1="Expertise"
						title2="Endocrine & Metabolic"
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

				<p className="text-2xl mb-6"> Endocrine & Metabolic </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/expertise/endocrine.jpg"
					height={480}
					width={720}
					alt="Endocrine & Metabolic"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="pt-4 px-4">
					<p className="text-base font-medium mb-10">
						KYABRS can help navigate the complexities and regulatory scrutiny of
						endocrine and metabolic development programs.
					</p>
				</div>
			</div>
		</div>
	);
};

export default EndocrineMetabolic;

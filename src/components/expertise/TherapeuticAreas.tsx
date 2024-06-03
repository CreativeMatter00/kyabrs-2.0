import Image from "next/image";
import Link from "next/link";

const Areas = [
	{
		image: "/assets/images/expertise/icons/Autoimmune Diseases.png",
		title: "Autoimmune Diseases",
		link: "",
	},
];

const TherapeuticAreas = () => {
	return (
		<div>
			<p className="font-bold mb-8"> Therapeutic Areas </p>

			<div className="border-2 border-bgPrimary w-full rounded-md overflow-hidden">
				<div className="h-[180px] bg-brandColorLs1 rounded-lg ">
					<div className="flex py-4">
						<div className="w-1/4 flex flex-col items-center justify-center gap-4 px-4">
							<Image
								src="/assets/images/expertise/icons/Autoimmune Diseases.png"
								width={80}
								height={75}
								alt="Autoimmune Diseases"
							/>
							<p className="text-center"> Autoimmune Diseases </p>
						</div>

						<div className="w-3/4 py-4">
							<div className="flex flex-col justify-between h-full ">
								We develop innovative treatments for autoimmune diseases like
								rheumatoid arthritis and lupus through clinical trials.
							</div>
							<div>
								<Link href={"#"} className="font-bold text-brandPrimaryLs2">
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TherapeuticAreas;

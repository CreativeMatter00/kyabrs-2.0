import Underline from "../ui/underline/Underline";
import Image from "next/image";

const AccreditationsInspections = () => {
	return (
		<div className="px-4">
			<div>
				<p className="text-4xl font-semibold">
					Accreditations &
					<br /> Inspections
				</p>
				<Underline />
			</div>

			<div className="py-8">
				<div className="min-h-[230px]">
					<Image
						src="/assets/images/about/inspection.jpg"
						height={480}
						width={720}
						alt="Accreditations & Inspections"
						className="h-auto w-auto mx-auto rounded-lg mb-10"
					/>
				</div>

				<p className="text-textSecondary text-base font-medium mb-8">
					Our CRO has earned its stripes, undergoing inspection and approval by
					the Directorate General of Drug Administration (DGDA) of Bangladesh.
					Our CRO also proudly bears the seal of approval from the Directorate
					General of Health Service (DGHS) of Bangladesh, a testament to our
					commitment to excellence.
				</p>
			</div>
		</div>
	);
};

export default AccreditationsInspections;

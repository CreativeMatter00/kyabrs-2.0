import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicClinicalService = dynamic(
	() =>
		import("@/components/solution/services/clinicalService/ClinicalService"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicClinicalService />
		</div>
	);
};

export default page;

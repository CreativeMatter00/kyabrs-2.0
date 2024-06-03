import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicClinicalData = dynamic(
	() => import("@/components/solution/services/ClinicalData"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicClinicalData />
		</div>
	);
};

export default page;

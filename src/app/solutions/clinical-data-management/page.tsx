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
		<div className="mt-28 container mx-auto">
			<DynamicClinicalData />
		</div>
	);
};

export default page;

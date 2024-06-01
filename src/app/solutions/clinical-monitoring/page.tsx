import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicClinicalMonitoring = dynamic(
	() => import("@/components/solution/services/ClinicalMonitoring"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicClinicalMonitoring />
		</div>
	);
};

export default page;

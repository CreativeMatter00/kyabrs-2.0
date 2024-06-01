import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicClinicalTrial = dynamic(
	() => import("@/components/solution/services/ClinicalTrial"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicClinicalTrial />
		</div>
	);
};

export default page;

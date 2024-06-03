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
		<div className="pt-20 bg-brandSecondary">
			<DynamicClinicalTrial />
		</div>
	);
};

export default page;

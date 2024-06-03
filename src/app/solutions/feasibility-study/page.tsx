import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicFeasibilityStudy = dynamic(
	() => import("@/components/solution/services/FeasibilityStudy"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicFeasibilityStudy />
		</div>
	);
};

export default page;

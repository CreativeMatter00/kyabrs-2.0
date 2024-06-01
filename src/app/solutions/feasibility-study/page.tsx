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
		<div className="mt-28 container mx-auto">
			<DynamicFeasibilityStudy />
		</div>
	);
};

export default page;

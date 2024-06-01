import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicRadiologyLab = dynamic(
	() => import("@/components/solution/services/RadiologyLab"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicRadiologyLab />
		</div>
	);
};

export default page;

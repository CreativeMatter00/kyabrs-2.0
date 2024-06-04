import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicNashLiverDisease = dynamic(
	() => import("@/components/expertise/areas/NashLiverDisease"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicNashLiverDisease />
		</div>
	);
};

export default page;

import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicRareDiseases = dynamic(
	() => import("@/components/expertise/areas/RareDiseases"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicRareDiseases />
		</div>
	);
};

export default page;

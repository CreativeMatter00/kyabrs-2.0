import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicCardiovascular = dynamic(
	() => import("@/components/expertise/areas/Cardiovascular"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicCardiovascular />
		</div>
	);
};

export default page;

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
		<div className="mt-28 container mx-auto">
			<DynamicCardiovascular />
		</div>
	);
};

export default page;

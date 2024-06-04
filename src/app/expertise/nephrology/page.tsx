import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicNephrology = dynamic(
	() => import("@/components/expertise/areas/Nephrology"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicNephrology />
		</div>
	);
};

export default page;

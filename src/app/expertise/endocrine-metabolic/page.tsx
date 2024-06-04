import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicEndocrineMetabolic = dynamic(
	() => import("@/components/expertise/areas/EndocrineMetabolic"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicEndocrineMetabolic />
		</div>
	);
};

export default page;

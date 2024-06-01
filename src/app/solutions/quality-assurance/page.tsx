import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicQualityAssurance = dynamic(
	() => import("@/components/solution/services/QualityAssurance"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicQualityAssurance />
		</div>
	);
};

export default page;

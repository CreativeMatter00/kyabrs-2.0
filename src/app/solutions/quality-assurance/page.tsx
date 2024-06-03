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
		<div className="pt-20 bg-brandSecondary">
			<DynamicQualityAssurance />
		</div>
	);
};

export default page;

import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicEmployment = dynamic(
	() => import("@/components/employment/Employment"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-24 lg:pt-32 bg-brandSecondary">
			<DynamicEmployment />
		</div>
	);
};

export default page;

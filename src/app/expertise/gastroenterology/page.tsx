import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicGastroenterology = dynamic(
	() => import("@/components/expertise/areas/Gastroenterology"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="pt-20 bg-brandSecondary">
			<DynamicGastroenterology />
		</div>
	);
};

export default page;

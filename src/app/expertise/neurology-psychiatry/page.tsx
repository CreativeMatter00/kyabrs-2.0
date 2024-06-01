import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicNeurologyPsychiatry = dynamic(
	() => import("@/components/expertise/areas/NeurologyPsychiatry"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicNeurologyPsychiatry />
		</div>
	);
};

export default page;

import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicBioanalytical = dynamic(
	() => import("@/components/solution/services/Bioanalytical"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicBioanalytical />
		</div>
	);
};

export default page;

import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicRadiationTherapy = dynamic(
	() => import("@/components/expertise/areas/RadiationTherapy"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicRadiationTherapy />
		</div>
	);
};

export default page;

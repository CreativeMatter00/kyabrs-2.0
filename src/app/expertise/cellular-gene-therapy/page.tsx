import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicCellularGeneTherapy = dynamic(
	() => import("@/components/expertise/areas/CellularGeneTherapy"),
	{
		loading: () => <Loader />,
	}
);

const page = () => {
	return (
		<div className="mt-28 container mx-auto">
			<DynamicCellularGeneTherapy />
		</div>
	);
};

export default page;

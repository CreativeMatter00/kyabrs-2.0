"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const Back = () => {
	const router = useRouter();

	const handleBack = () => {
		router.back();
	};

	return (
		<button
			className="bg-transparent border-none flex items-center gap-2 "
			onClick={handleBack}
		>
			<FaArrowLeft /> Back
		</button>
	);
};

export default Back;

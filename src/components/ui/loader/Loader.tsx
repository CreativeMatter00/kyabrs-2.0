import Image from "next/image";

function Loader() {
	return (
		<div className="flex items-center justify-center h-screen w-screen">
			<Image
				src="/assets/images/loader/loader-brs.png"
				height={300}
				width={224}
				alt="loader"
				className="animate-ping"
			/>
		</div>
	);
}

export default Loader;

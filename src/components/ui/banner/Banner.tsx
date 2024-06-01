import Image from "next/image";

function Banner({ name }: { name: string }) {
	return (
		<div className="relative container mx-auto w-full mb-12 overflow-hidden">
			<div className="banner-image-wrapper w-full h-[222px] lg:w-auto lg:h-auto">
				<Image
					src={"/assets/images/about/banner.png"}
					height={222}
					width={1280}
					alt="banner"
					className="object-fill w-auto max-w-none h-full"
				/>
			</div>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
			<div className="absolute bottom-0 left-8 transform -translate-y-1/2 z-20 text-white text-5xl font-bold">
				{name}
			</div>
		</div>
	);
}

export default Banner;

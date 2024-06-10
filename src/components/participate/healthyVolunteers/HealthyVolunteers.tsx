import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import React from "react";

const HealthyVolunteers = () => {
	return (
		<div className="text-bgPrimary pb-10 border-b border-bgPrimary">
			<div className="container mx-auto mb-10 px-4">
				<div className="py-4 md:py-8 pb-4">
					<Breadcrumb
						title1="Participate"
						link1="/participate"
						title2="Healthy Volunteers"
					/>
				</div>
				<div className="relative max-h-[140px] md:max-h-[300px] flex items-center justify-center overflow-hidden rounded-lg">
					<Image
						src="/assets/images/participate/healthy-hero.jpg"
						alt="Descriptive alt text"
						width={1024}
						height={300}
						className="w-full h-auto rounded-lg"
					/>
					<div className="absolute top-0 left-0 right-0 bottom-0 bg-brandColorDs1 bg-opacity-60"></div>
					<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-5xl font-bold text-center">
						Healthy Volunteers
					</h1>
				</div>
			</div>

			<div className="text-center container px-4 mx-auto">
				<p className="text-2xl mb-4">
					The potential to{" "}
					<span className="text-brandPrimaryLs3"> change lives </span>
				</p>

				<p>
					At the heart of every drug therapy breakthrough are volunteers who’ve
					taken part in Phase I clinical trials. These trials are a crucial step
					in bringing treatments to the patients who need them most, and by
					participating, you may play a part in that.
				</p>
			</div>
		</div>
	);
};

export default HealthyVolunteers;

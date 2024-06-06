import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div className="text-bgPrimary pb-10 border-b border-bgPrimary">
			<div className="container mx-auto mb-10 px-4">
				<div className="py-10 pb-4">
					<Breadcrumb
						title1="Participate"
						link1="/participate"
						title2="Registration Form"
					/>
				</div>
				<div className="relative max-h-[300px] flex items-center justify-center overflow-hidden rounded-lg">
					<Image
						src="/assets/images/participate/registration.jpg"
						alt="Descriptive alt text"
						width={1024}
						height={300}
						className="w-full h-auto rounded-lg"
					/>
					<div className="absolute top-0 left-0 right-0 bottom-0 bg-brandColorDs1 bg-opacity-60"></div>
					<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-5xl font-bold text-center">
						Registration Form
					</h1>
				</div>
			</div>

			<div className="text-center container mx-auto">
				<p className="text-2xl mb-4">
					Join{" "}
					<span className="text-brandPrimaryLs3"> Our Clinical Trials </span>
				</p>

				<p>
					Complete the form to participate in our clinical trials. Your
					information helps us match you with suitable studies and ensure your
					safety. Thank you for advancing medical research.
				</p>
			</div>
		</div>
	);
};

export default Hero;

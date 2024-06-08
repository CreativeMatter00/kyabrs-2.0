/* eslint-disable react/no-unescaped-entities */
import React from "react";

const WhoWeAre = () => {
	return (
		<div className="bg-[#313639] text-[#F5F5F5] flex justify-center items-center lg:p-12 p-4  border-y border-[#F5F5F5]">
			<div className="container flex justify-center items-center flex-col gap-8 max-w-[1024px]">
				<p className="text-5xl font-bold">Who We Are</p>
				<p className="text-4xl font-normal text-center">
					KYAMCH-BRS: Bangladesh's Pioneering Clinical Research Institution
				</p>
				<p className="">
					As the first contract research organization in Bangladesh, KYAMCH-BRS
					specializes in comprehensive Phase I to III clinical trials and
					bioequivalence studies. Our team of dedicated professionals
					collaborates with leading biopharmaceutical companies and clinical
					sites, ensuring the highest standards of regulatory and therapeutic
					expertise. With over 40,000 square feet of advanced research
					facilities, we are committed to making clinical trials accessible and
					patient-centered, advancing healthcare and treatment options for
					people everywhere.
				</p>
			</div>
		</div>
	);
};

export default WhoWeAre;

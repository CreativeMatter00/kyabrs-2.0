"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Underline from "../ui/underline/Underline";
import Image from "next/image";
import {
	CardBody,
	CardContainer,
	CardItem,
} from "@/components/ui/card/3d-card";

function ManagementTeam() {
	return (
		<div>
			<div className="px-4">
				<p className="text-4xl font-semibold">
					Our
					<br /> Management
				</p>
				<Underline />
			</div>

			<div className="px-4">
				<CardContainer className="">
					<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-primaryShade/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-auto h-auto rounded-xl p-6 border">
						<CardItem
							translateZ="100"
							className="flex flex-col lg:flex-row items-center gap-8"
						>
							<Image
								src="/assets/images/about/founder.jpg"
								height="400"
								width="400"
								alt="Founder"
								className="rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px] shadow-xl transition-opacity opacity-0 duration-500"
								onLoadingComplete={(image) =>
									image.classList.remove("opacity-0")
								}
							/>
							<div className="">
								<p className="uppercase font-bold text-3xl text-textPrimary">
									Dr. MM Amjad Hussain
								</p>
								<p className="capitalize font-bold text-3xl text-textSecondary">
									Founder Chairman
								</p>
							</div>
						</CardItem>
						<div className="flex flex-col gap-4 items-center py-8">
							<CardItem translateZ={80} className="">
								<div>
									<p className="font-semibold text-xl"> Bio </p>
									<p className="text-textSecondary text-base font-medium pt-4">
										Dr. M. M. Amjad Hussain was born on October 1st 1925 in the
										village of Enayetpur, District of Sirajganj. He had obtained
										his MBBS from Calcutta Medical College, India in 1948. He
										was the Founding Managing Director and Chairman of Drug
										International Limited, Khwaja Yunus Ali Medical College &
										Hospital and many other industries, companies, and
										organizations.
									</p>
								</div>
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>

				<div className="px-4">
					<CardContainer className="">
						<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-primaryShade/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-auto h-auto rounded-xl p-6 border">
							<CardItem
								translateZ="100"
								className="flex flex-col lg:flex-row items-center gap-8"
							>
								<Image
									src="/assets/images/about/chairman2.jpg"
									height="400"
									width="400"
									alt="Chairman"
									className="rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px] shadow-xl transition-opacity opacity-0 duration-500"
									onLoadingComplete={(image) =>
										image.classList.remove("opacity-0")
									}
								/>
								<div className="">
									<p className="uppercase font-bold text-3xl text-textPrimary">
										M.A. HAIDER HUSSAIN
									</p>
									<p className="capitalize font-bold text-3xl text-textSecondary">
										Managing Director
									</p>
								</div>
							</CardItem>
							<div className="flex flex-col gap-4 items-center py-8">
								<CardItem translateZ={80} className="">
									<div>
										<p className="font-semibold text-xl"> Bio </p>
										<p className="text-textSecondary text-base font-medium pt-4">
											The present Managing Director, the younger son of Dr. M.
											M. Amjad Hussain, was elected Chairman of Khwaja Yunus Ali
											Medical College & Hospital and Khwaja Yunus Ali Medical
											College. He also oversees other industries such as Drug
											International Limited, KYA Bio Research Services, ATI
											Software Limited, ATI Ceramics, Taj Printers, Harnest
											Label Industries, and Amzad Tea.
										</p>
									</div>
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				</div>

				<div className="px-4">
					<CardContainer className="">
						<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-primaryShade/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-auto h-auto rounded-xl p-6 border">
							<CardItem
								translateZ="100"
								className="flex flex-col lg:flex-row items-center gap-8"
							>
								<Image
									src="/assets/images/about/dr kashfia.png"
									height="400"
									width="400"
									alt="Hear of Operations"
									className="rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px] shadow-xl transition-opacity opacity-0 duration-500"
									onLoadingComplete={(image) =>
										image.classList.remove("opacity-0")
									}
								/>
								<div className="">
									<p className="uppercase font-bold text-3xl text-textPrimary">
										DR. AMINA KASHFIA
									</p>
									<p className="capitalize font-bold text-3xl text-textSecondary">
										Head of Operations
									</p>
								</div>
							</CardItem>
							<div className="flex flex-col gap-4 items-center py-8">
								<CardItem translateZ={80} className="">
									<div>
										<p className="font-semibold text-xl"> Bio </p>
										<p className="text-textSecondary text-base font-medium pt-4">
											Being the Head of Operations of this organization, I think
											I own the best team so far. They are assets that I have
											fashioned through the previous years. Each and everybody
											of them is capable of representing the CRO according to
											Global standards. I work to ensure all research projects
											scientific validity and compliance with global
											regulations.
										</p>
									</div>
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				</div>
			</div>
		</div>
	);
}

export default ManagementTeam;

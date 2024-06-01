import Image from "next/image";
import Link from "next/link";

const SolutionGallery = () => {
	return (
		<div>
			<div className="container p-4 flex flex-col gap-4">
				<div className="flex gap-4 max-lg:flex-col">
					<div className="basis-4/12  max-lg:order-2 group">
						<Link href="/solutions/clinical-development-service">
							<div className="relative flex items-center justify-center overflow-hidden group hover:cursor-pointer h-full rounded-md max-lg:h-80">
								<Image
									src={`/assets/images/solutions-home/Mask group.png`}
									width={510}
									height={560}
									alt="Clinical Development & Research Services"
									className="h-full w-auto object-cover group-hover:scale-105 group-hover:transition-all duration-100"
								/>
								<div className="overlay flex group-hover:transition-all group-hover:duration-300 items-center justify-center absolute inset-0 bg-black bg-opacity-0  group-hover:bg-opacity-40 rounded-md max-lg:bg-opacity-40">
									<p className="uppercase text-4xl lg:translate-y-44 lg:group-hover:translate-y-0 duration-300 lg:opacity-0 opacity-100 group-hover:opacity-100 text-center text-[#F1F1F1] font-bold p-4">
										Clinical Development & Research Services
									</p>
								</div>
							</div>
						</Link>
					</div>

					<div className="basis-8/12 max-lg:order-1">
						<div className="h-64 xl:h-60 2xl:h-56 max-lg:h-full p-2 text-[#5C5C5C] font-medium text-justify">
							Our approach to your project extends beyond mere cognition; it
							includes a profound emotional dedication. Confronted with the
							complex challenges of translating scientific breakthroughs into
							innovative therapeutic solutions and ensuring patient access,
							engaging a Clinical Research Organization (CRO) partner deeply
							invested in every aspect becomes imperative. A united team
							dedicated to resolving issues, refining processes, optimizing
							outcomes, and demonstrating unwavering commitment equal to your
							own. Despite time and obstacles, our steadfast support endures.
						</div>

						<Link href="/solutions/feasibility-study">
							<div className="relative flex items-center justify-center overflow-hidden group hover:cursor-pointer rounded-md max-lg:h-80">
								<Image
									src={`/assets/images/solutions-home/Mask group-5.jpg`}
									width={1000}
									height={255}
									alt="Feasibility study"
									className="h-full w-auto object-cover group-hover:scale-105 group-hover:transition-all duration-100"
								/>
								<div className="overlay flex group-hover:transition-all group-hover:duration-300 items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-md max-lg:bg-opacity-40">
									<p className="uppercase text-4xl lg:translate-y-44 lg:group-hover:translate-y-0 duration-300 lg:opacity-0 opacity-100 group-hover:opacity-100 text-center text-[#F1F1F1] font-bold p-4">
										Feasibility study
									</p>
								</div>
							</div>
						</Link>
					</div>
				</div>

				<Link href="/solutions/clinical-data-management">
					<div className="relative flex items-center justify-center overflow-hidden group hover:cursor-pointer rounded-md max-h-96 max-lg:h-80">
						<Image
							src={`/assets/images/solutions-home/Mask group-7.png`}
							width={1700}
							height={510}
							alt="CLINICAL DATA MANAGEMENT"
							className="h-full w-full object-cover group-hover:scale-105 group-hover:transition-all duration-100"
						/>
						<div className="overlay flex group-hover:transition-all group-hover:duration-300 items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-md max-lg:bg-opacity-40">
							<p className="uppercase text-4xl lg:translate-y-44 lg:group-hover:translate-y-0 duration-300 lg:opacity-0 opacity-100 group-hover:opacity-100 text-center text-[#F1F1F1] font-bold p-4">
								CLINICAL DATA MANAGEMENT
							</p>
						</div>
					</div>
				</Link>

				<div className="flex w-full gap-4 max-lg:flex-col">
					<div className="basis-4/12 group">
						<Link href="/solutions/quality-assurance">
							<div className="relative flex items-center justify-center overflow-hidden group hover:cursor-pointer h-full rounded-md max-h-96 max-lg:h-80">
								<Image
									src={`/assets/images/solutions-home/Mask group-3.png`}
									width={510}
									height={450}
									alt="Quality assurance"
									className="h-full w-full object-cover group-hover:scale-105 group-hover:transition-all duration-100"
								/>
								<div className="overlay flex group-hover:transition-all group-hover:duration-300 items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-md max-lg:bg-opacity-40">
									<p className="uppercase text-4xl lg:translate-y-44 lg:group-hover:translate-y-0 duration-300 lg:opacity-0 opacity-100 group-hover:opacity-100 text-center text-[#F1F1F1] font-bold p-4">
										Quality assurance
									</p>
								</div>
							</div>
						</Link>
					</div>

					<div className="basis-5/12 group">
						<Link href="/solutions/clinical-trial-management">
							<div className="relative flex items-center justify-center overflow-hidden group hover:cursor-pointer h-full rounded-md max-h-96 max-lg:h-80">
								<Image
									src={`/assets/images/solutions-home/Mask group-4.png`}
									width={510}
									height={450}
									alt="Clinical Trial Management"
									className="h-full w-full object-cover group-hover:scale-105 group-hover:transition-all duration-100"
								/>
								<div className="overlay flex group-hover:transition-all group-hover:duration-300 items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-md max-lg:bg-opacity-40">
									<p className="uppercase text-4xl lg:translate-y-44 lg:group-hover:translate-y-0 duration-300 lg:opacity-0 opacity-100 group-hover:opacity-100 text-center text-[#F1F1F1] font-bold p-4">
										Clinical Trial Management
									</p>
								</div>
							</div>
						</Link>
					</div>

					<div className="basis-4/12 group">
						<Link href="/solutions/bioanalytical-laboratory">
							<div className="relative flex items-center justify-center overflow-hidden group hover:cursor-pointer h-full rounded-md max-h-96 max-lg:h-80">
								<Image
									src={`/assets/images/solutions-home/bioanalytical.jpg`}
									width={510}
									height={450}
									alt="BIOANALYTICAL LABORATORY"
									className="h-full w-full object-cover group-hover:scale-105 group-hover:transition-all duration-100"
								/>
								<div className="overlay flex group-hover:transition-all group-hover:duration-300 items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-md max-lg:bg-opacity-40">
									<p className="uppercase text-4xl lg:translate-y-44 lg:group-hover:translate-y-0 duration-300 lg:opacity-0 opacity-100 group-hover:opacity-100 text-center text-[#F1F1F1] font-bold p-4">
										BIOANALYTICAL LABORATORY
									</p>
								</div>
							</div>
						</Link>
					</div>
				</div>

				<div className="flex gap-4 max-lg:flex-col">
					<div className="basis-4/12 group">
						<Link href="/solutions/clinical-laboratory">
							<div className="relative flex items-center justify-center overflow-hidden group hover:cursor-pointer h-full rounded-md max-h-96 max-lg:h-80">
								<Image
									src={`/assets/images/solutions-home/Mask group-1.png`}
									width={510}
									height={450}
									alt="CLINICAL LABORATORY"
									className="h-full w-full object-cover group-hover:scale-105 group-hover:transition-all duration-100"
								/>
								<div className="overlay flex group-hover:transition-all group-hover:duration-300 items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-md max-lg:bg-opacity-40">
									<p className="uppercase text-4xl lg:translate-y-44 lg:group-hover:translate-y-0 duration-300 lg:opacity-0 opacity-100 group-hover:opacity-100 text-center text-[#F1F1F1] font-bold p-4">
										CLINICAL LABORATORY
									</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="basis-8/12 group">
						<Link href="/solutions/radiology-imaging-corelab">
							<div className="relative flex items-center justify-center overflow-hidden group hover:cursor-pointer h-full rounded-md max-h-96 max-lg:h-80">
								<Image
									src={`/assets/images/solutions-home/radiology.jpg`}
									width={1130}
									height={450}
									alt="RADIOLOGY, IMAGING AND CORE LAB"
									className="h-full w-full object-cover group-hover:scale-105 group-hover:transition-all duration-100"
								/>
								<div className="overlay flex group-hover:transition-all group-hover:duration-300 items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-md max-lg:bg-opacity-40">
									<p className="uppercase text-4xl lg:translate-y-44 lg:group-hover:translate-y-0 duration-300 lg:opacity-0 opacity-100 group-hover:opacity-100 text-center text-[#F1F1F1] font-bold p-4">
										RADIOLOGY, IMAGING AND CORE LAB
									</p>
								</div>
							</div>
						</Link>
					</div>
				</div>

				<div className="flex gap-4 max-lg:flex-col">
					<div className="basis-8/12 ">
						<Link href="/solutions/clinical-monitoring">
							<div className="relative flex items-center justify-center overflow-hidden group hover:cursor-pointer h-full rounded-md max-h-96 max-lg:h-80">
								<Image
									src={`/assets/images/solutions-home/Mask group-6.png`}
									width={1130}
									height={450}
									alt="Clinical Monitoring"
									className="h-full w-full object-cover group-hover:scale-105 group-hover:transition-all duration-100"
								/>
								<div className="overlay flex group-hover:transition-all group-hover:duration-300 items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-md max-lg:bg-opacity-40">
									<p className="uppercase text-4xl lg:translate-y-44 lg:group-hover:translate-y-0 duration-300 lg:opacity-0 opacity-100 group-hover:opacity-100 text-center text-[#F1F1F1] font-bold p-4">
										Clinical Monitoring
									</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="basis-4/12">
						<Link href="/solutions/biostatics-services">
							{/* <div
                className="relative flex h-96 w-full rounded-lg  group cursor-pointer duration-500 bg-cover bg-center overflow-hidden justify-center items-center p-2"
                style={{
                  backgroundImage: `url("images/Solutions/Mask group-2.png")`,
                }}
              >
                <div className="absolute bg-black opacity-0 group-hover:opacity-50 duration-100 inset-0 z-0"></div>
                <p className="uppercase text-4xl lg:translate-y-44 lg:group-hover:translate-y-0 duration-300 text-white lg:opacity-0 opacity-100 group-hover:opacity-100 text-center font-bold">
                  Biostatics Services
                </p>
              </div> */}

							<div className="relative flex items-center justify-center overflow-hidden group hover:cursor-pointer h-full rounded-md max-h-96 max-lg:h-80">
								<Image
									src={`/assets/images/solutions-home/Mask group-2.png`}
									width={510}
									height={450}
									alt="Biostatics Services"
									className="h-full w-full object-cover group-hover:scale-105 group-hover:transition-all duration-100"
								/>
								<div className="overlay flex group-hover:transition-all group-hover:duration-300 items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-md max-lg:bg-opacity-40">
									<p className="uppercase text-4xl lg:translate-y-44 lg:group-hover:translate-y-0 duration-300 lg:opacity-0 opacity-100 group-hover:opacity-100 text-center text-[#F1F1F1] font-bold p-4">
										Biostatics Services
									</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SolutionGallery;

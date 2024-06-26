import Link from "next/link";
import CurrentOpenings from "./CurrentOpenings";
import Opportunities from "./Opportunities";
import WorkWithUs from "./WorkWithUs";
import Image from "next/image";
import ContactUs from "./ContactUs";

const Employment = () => {
	return (
		<div>
			<div className="px-4 text-bgPrimary border-b border-textTertiary ">
				<div className="container mx-auto">
					<div className="mb-9">
						<div className="pt-10 pb-4 ">
							<div className="flex items-center gap-2">
								<Link href="/" className="text-bgPrimary">
									Home
								</Link>
								/<p className="text-brandPrimaryLs3">Employment</p>
							</div>
						</div>
					</div>

					<div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
						<Image
							src={"/assets/images/employment/hero.jpg"}
							height={300}
							width={1024}
							alt="Hero"
							className="rounded-lg w-full"
						/>
					</div>

					<div className="text-4xl pb-4">Employment</div>
				</div>
			</div>
			<div className="flex justify-center items-center ">
				<div className="container px-8 pt-8 flex flex-col gap-8">
					<div>
						<p className="font-bold text-[#FF6A5E] mb-4">Join Our Team</p>
						<p className="text-bgPrimary">
							At Khwaja Yunus Ali - Bio-Research Services (KYAMCH-BRS), we are
							always looking for passionate and talented individuals to join our
							team. If you are dedicated to excellence in clinical research and
							want to be part of a pioneering organization, we invite you to
							explore our career opportunities.
						</p>
					</div>
					<WorkWithUs />
					<CurrentOpenings />
					<div>
						<p className="font-bold text-[#FF6A5E] mb-4">How to Apply</p>
						<p className="text-bgPrimary">
							To apply for any of our current openings, please send your resume
							and cover letter to{" "}
							<span className="text-[#FFB8B1] cursor-pointer">
								info@kyabrs.org
							</span>{" "}
							with the job title in the subject line. We look forward to hearing
							from you!
						</p>
					</div>{" "}
					<div>
						<p className="font-bold text-[#FF6A5E] mb-4">Internship Program</p>
						<p className="text-bgPrimary">
							Our internship program provides students and recent graduates with
							hands-on experience in the clinical research field. If you are
							interested in an internship, please email your resume and a brief
							statement of interest to{" "}
							<span className="text-[#FFB8B1] cursor-pointer">
								info@kyabrs.org
							</span>
							.
						</p>
					</div>
					<Opportunities />
					<ContactUs />
				</div>
			</div>
		</div>
	);
};

export default Employment;

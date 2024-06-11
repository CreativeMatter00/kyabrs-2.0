import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import {
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from "../../navigation-menu";

const services = [
	{
		href: "/expertise/autoimmune-diseases",
		title: "Autoimmune Diseases",
	},

	{
		href: "/expertise/cardiovascular",
		title: "Cardiovascular",
	},

	{
		href: "/expertise/endocrine-metabolic",
		title: "Endocrine & Metabolic",
	},

	{
		href: "/expertise/gastroenterology",
		title: "Gastroenterology",
	},

	{
		href: "/expertise/hematology-oncology",
		title: "Hematology & Oncology",
	},

	{
		href: "/expertise/infectious-diseases",
		title: "Infectious Diseases & Vaccines",
	},

	{
		href: "/expertise/nash-liver-disease",
		title: "NASH & Liver Diseases",
	},

	{
		href: "/expertise/neurology-psychiatry",
		title: "Neurology & Psychiatry",
	},

	{
		href: "/expertise/nephrology",
		title: "Nephrology",
	},

	{
		href: "/expertise/ophthalmology",
		title: "Ophthalmology",
	},

	{
		href: "/expertise/pediatrics",
		title: "Pediatrics",
	},

	{
		href: "/expertise/rare-diseases",
		title: "Rare Diseases",
	},

	{
		href: "/expertise/cellular-gene-therapy",
		title: "Cellular & Gene Therapy",
	},

	{
		href: "/expertise/radiation-therapy",
		title: "Radiation Therapy",
	},
];

const Expertise = () => {
	return (
		<div className="p-4 bg-white flex divide-x-2 w-full h-[calc(100vh-250px)]">
			<div className="basis-1/3 flex flex-col gap-4 p-4">
				<p className="text-[#414A50] text-2xl">Expertise</p>
				<Image
					className="inline-block h-44 w-64  content-end"
					src="/assets/images/navbar/Expertise.png"
					alt="logo"
					width={260}
					height={174}
				/>
				<p className="text-sm">
					Discover our comprehensive clinical and non-clinical research
					solutions at Khwaja Yunus Ali Medical College & Hospital Bio Research
					Services (KYAMCH-BRS). With state-of-the-art facilities, we conduct
					Phase I–III clinical trials and bioequivalence studies, ensuring
					quality and compliance under international standards.
				</p>
				<Link href="/expertise">
					<NavigationMenuLink className="text-[#0096FF] flex items-center gap-2 cursor-pointer group disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
						Know more about expertise
						<BsArrowRight
							fontSize={16}
							className=" ml-0 duration-300 group-hover:ml-2"
						/>
					</NavigationMenuLink>
				</Link>
			</div>
			<div
				className={`basis-1/3 p-4 flex flex-col  h-[calc(100vh-300px)] overflow-auto  ${styles.customScrollbar}`}
			>
				<div className="divide-y-2 divide-[#EBEBEB] mt-6">
					{services.map((service, index) => (
						<div key={index} className="divide-y-2 divide-[#EBEBEB]">
						<Link  href={service.href} className="">
							<NavigationMenuLink className="flex justify-between items-center hover:bg-[#FFB8B1] py-2 px-4 my-2 rounded-lg cursor-pointer duration-300 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
								<p className="text-[#414A50] text-xs font-medium">
									{service.title}
								</p>
								<MdOutlineKeyboardArrowRight color="#414A50" fontSize={20} />
							</NavigationMenuLink>
							{/* </div> */}
						</Link></div>
					))}
				</div>
			</div>

			<div className="basis-1/3"></div>
		</div>
	);
};

export default Expertise;

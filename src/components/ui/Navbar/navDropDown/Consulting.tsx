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
		title: "Regulatory Strategy and Development",
		tab: 0,
	},

	{
		href: "/expertise/cardiovascular",
		title: "Clinical Trial Regulatory Services",
		tab: 1,
	},
];
// const services = [
//   "Regulatory Strategy and Development",
//   "Clinical Trial Regulatory Services",
// ];

const Consulting = () => {
	return (
		<div className="p-4 bg-white flex divide-x-2 w-full h-[calc(100vh-250px)]">
			<div className="basis-1/3 flex flex-col gap-4 p-4">
				<p className="text-[#414A50] text-2xl">Consulting</p>
				<Image
					className="inline-block h-44 w-64  content-end"
					src="/assets/images/navbar/Consulting.png"
					alt="logo"
					width={260}
					height={174}
				/>
				<p className="text-sm">
					Get expert regulatory consulting services at Khwaja Yunus Ali Medical
					College & Hospital Bio Research Services (KYAMCH-BRS). Our experienced
					team ensures your research meets international standards and
					regulatory requirements.
				</p>

				<Link href="/consulting">
					<NavigationMenuLink className="text-[#0096FF] flex items-center gap-2 cursor-pointer group disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
						Know more about consulting
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
						<Link
							key={index}
							href={{ pathname: "/consulting", query: { tab: service.tab } }}
						>
							<NavigationMenuLink
								className="flex justify-between items-center hover:bg-[#FFB8B1] py-2 px-4 my-2 rounded-lg cursor-pointer duration-300
     disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50
                  "
							>
								<p className="text-[#414A50] text-xs font-medium">
									{service.title}
								</p>
								<MdOutlineKeyboardArrowRight color="#414A50" fontSize={20} />
							</NavigationMenuLink>
						</Link>
					))}
				</div>
			</div>

			<div className="basis-1/3"></div>
		</div>
	);
};

export default Consulting;

import Link from "next/link";

type IBreadcrumb = {
	link1: string;
	title1: string;
	title2: string;
};

const Breadcrumb = (props: IBreadcrumb) => {
	return (
		<div className="pt-10 pb-4 ">
			<div className="flex items-center gap-2">
				<Link href="/" className="text-bgPrimary">
					Home
				</Link>
				/
				<Link href={props.link1} className="text-bgPrimary">
					{props.title1}
				</Link>
				/<p className="text-brandPrimaryLs3">{props.title2}</p>
			</div>
		</div>
	);
};

export default Breadcrumb;

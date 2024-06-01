import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";

const ContactUs = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="bg-[#f6f6f6] flex flex-col gap-8 p-8">
				<div className="grid grid-cols-2 gap-8">
					<div className="flex flex-col items-center justify-start gap-4">
						<div className="w-20 h-20 rounded-full flex items-center justify-center border-2 text-2xl">
							<IoLocationOutline />
						</div>

						<p className="text-xl font-medium uppercase text-textPrimary">
							Address:
						</p>
						<p className="text-lg text-center text-textSecondary">
							Enayetpur,Sirajganj <br /> Bangladesh
						</p>
					</div>

					<div className="flex flex-col items-center justify-start gap-4">
						<div className="w-20 h-20 rounded-full flex items-center justify-center border-2 text-2xl">
							<MdOutlineEmail />
						</div>

						<p className="text-xl font-medium uppercase text-textPrimary">
							Email:
						</p>
						<Link
							className="text-lg text-center text-textSecondary hover:text-textPrimary hover:underline "
							href="mailto: info@kyabrs.org"
						>
							info@kyabrs.org
						</Link>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center gap-4">
					<div className="w-20 h-20 rounded-full flex items-center justify-center border-2 text-2xl">
						<LuPhone />
					</div>

					<p className="text-xl font-medium uppercase text-textPrimary">
						Call us:
					</p>
					<Link
						className="text-lg text-center text-textSecondary hover:text-textPrimary hover:underline "
						href="tel: +8801733070041"
					>
						+880 1733-070041
					</Link>
				</div>
			</div>

			<div className="min-h-[450px]">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14553.720884644978!2d89.7027804!3d24.2267272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fde0a604c0a259%3A0xc3f1901ce95b20ad!2sKhwaja%20Yunus%20Ali%20Medical%20College%20%26%20Hospital!5e0!3m2!1sen!2sbd!4v1711511768719!5m2!1sen!2sbd"
					width="100%"
					height="100%"
					allowFullScreen={true}
					loading="lazy"
					style={{ border: 0 }}
				></iframe>
			</div>
		</div>
	);
};

export default ContactUs;

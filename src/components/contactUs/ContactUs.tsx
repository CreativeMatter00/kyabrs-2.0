import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";

const ContactUs = () => {
	return (
		<div>
			<div className="text-bgPrimary border-b border-textTertiary">
				<div className="container overflow-hidden px-4 mx-auto pt-10 pb-4 ">
					<div className="flex items-center gap-2">
						<Link href="/" className="text-bgPrimary">
							Home
						</Link>
						/<p className="text-brandPrimaryLs3">Contact Us</p>
					</div>
					<p className="my-4 text-4xl"> Contact Us </p>
				</div>
			</div>

			<div className="py-6 text-bgPrimary">
				<div className="container overflow-hidden px-4 mx-auto">
					<div className="flex flex-col lg:flex-row gap-4">
						<div className="w-full lg:w-[20%]">
							<div className="flex flex-row lg:flex-col gap-8 flex-wrap">
								<div className="flex flex-col gap-8 h-full">
									<Link
										href={
											"https://www.google.com/maps/place/Khwaja+Yunus+Ali+Medical+College+%26+Hospital/@24.2267272,89.7027804,15z/data=!4m2!3m1!1s0x0:0xc3f1901ce95b20ad?sa=X&ved=1t:2428&ictx=111"
										}
										target="_blank"
									>
										<div className="bg-brandColorDs1 hover:bg-brandPrimaryLs2 transition-all duration-300 group rounded-md p-6 flex flex-col items-center gap-4">
											<IoLocationOutline className="text-brandPrimary group-hover:text-white text-3xl" />
											<p className="text-lg text-center ">
												Enayetpur,Sirajganj <br /> Bangladesh
											</p>
										</div>
									</Link>
								</div>
								<div className="flex flex-col gap-8 h-full">
									<Link href={"mailto:info@kyabrs.org"}>
										<div className="bg-brandColorDs1 hover:bg-brandPrimaryLs2 transition-all duration-300 group rounded-md p-6 flex flex-col items-center gap-4">
											<MdOutlineEmail className="text-brandPrimary group-hover:text-white text-3xl" />
											<p className="text-lg text-center">info@kyabrs.org</p>
										</div>
									</Link>
								</div>
								<div className="flex flex-col gap-8 h-full">
									<Link href={"tel:+8801733070041"}>
										<div className="bg-brandColorDs1 hover:bg-brandPrimaryLs2 transition-all duration-300 group rounded-md p-6 flex flex-col items-center gap-4">
											<LuPhone className="text-brandPrimary group-hover:text-white text-3xl" />
											<p className="text-lg text-center">+880 1733-070041</p>
										</div>
									</Link>
								</div>
							</div>
						</div>

						<div className="w-full lg:w-[80%] h-[400px] lg:h-auto">
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
				</div>
			</div>

			{/* <div className="grid grid-cols-1 md:grid-cols-2">
				<div className="flex flex-col gap-8 p-8">
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
			</div> */}
		</div>
	);
};

export default ContactUs;

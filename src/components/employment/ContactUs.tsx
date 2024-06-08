import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
	return (
		<div className="text-bgPrimary">
			<p className="font-bold text-[#FF6A5E] mb-4">Contact Us</p>

			<div className="flex items-center gap-8">
				<p className="">
					For any inquiries regarding careers or volunteer opportunities at
					KYA-BRS, please contact our HR department{" "}
				</p>

				<div className="flex flex-col gap-8 h-full">
					<div className="bg-brandColorDs1 rounded-md p-6 flex flex-col items-center gap-4">
						<MdOutlineEmail className="text-brandPrimary text-3xl" />
						<p className="text-lg text-center ">info@kyabrs.org</p>
					</div>
				</div>
				<div className="flex flex-col gap-8 h-full">
					<div className="bg-brandColorDs1 rounded-md p-6 flex flex-col items-center gap-4">
						<LuPhone className="text-brandPrimary text-3xl" />
						<p className="text-lg text-center ">+880 1733-070041</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;

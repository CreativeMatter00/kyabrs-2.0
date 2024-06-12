"use client";

import { RiEditBoxLine } from "react-icons/ri";
import { CiCalendarDate, CiMobile3 } from "react-icons/ci";
import { MdOutlineSmokeFree } from "react-icons/md";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { LiaWeightSolid } from "react-icons/lia";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";

const RegistrationForm = () => {
	const handleReload = () => {
		window.location.reload();
	};

	const [date, setDate] = useState<Date>();

	return (
		<div className="py-10 border-b border-bgPrimary text-bgPrimary">
			<div className="container mx-auto px-4">
				<p className="text-2xl mb-4">Registration Form</p>

				<p className="mb-6">
					Complete the form below to participate in our clinical trials. Your
					information helps us match you with suitable studies and ensure your
					safety. Thank you for advancing medical research.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6  mb-6">
					<div>
						<div className="flex items-center gap-1 mb-4">
							<RiEditBoxLine />
							<p> First Name </p>
						</div>

						<input
							type="text"
							className="bg-brandColorLs1 py-2 px-4 rounded-full text-bgPrimary w-full"
							placeholder="Enter your first name"
						/>
					</div>

					<div>
						<div>
							<div className="flex items-center gap-1 mb-4">
								<RiEditBoxLine />
								<p> Last Name </p>
							</div>

							<input
								type="text"
								className="bg-brandColorLs1 py-2 px-4 rounded-full text-bgPrimary w-full"
								placeholder="Enter your last name"
							/>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6  mb-6">
					<div>
						<div className="flex items-center gap-1 mb-4">
							<CiCalendarDate />
							<p> Date of Birth </p>
						</div>

						{/* <input
							type="text"
							className="bg-brandColorLs1 py-2 px-4 rounded-full text-bgPrimary w-full"
							placeholder="Date of Birth"
						/> */}

						<Popover>
							<PopoverTrigger asChild>
								<Button
									className={cn(
										" justify-start text-left font-normal bg-brandColorLs1 py-2 px-4 rounded-full text-bgPrimary w-full",
										!date && "text-muted-foreground"
									)}
								>
									{date ? format(date, "PPP") : <span>Pick a date</span>}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0 bg-brandSecondary text-bgPrimary">
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</div>

					<div>
						<div>
							<div className="flex items-center gap-1 mb-4">
								<CiMobile3 />
								<p> Phone </p>
							</div>

							<input
								type="number"
								className="bg-brandColorLs1 py-2 px-4 rounded-full text-bgPrimary w-full"
								placeholder="+880 XXX XXXXXXX"
							/>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6  mb-6">
					<div>
						<div className="flex items-center gap-1 mb-4">
							<MdOutlineSmokeFree />
							<p> Smoking Habit </p>
						</div>

						<div className="bg-brandColorLs1 py-3 rounded-full">
							<RadioGroup defaultValue="option-one">
								<div className="flex items-center justify-around">
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="option-one" id="option-one" />
										<Label htmlFor="option-one">Smoker</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="option-two" id="option-two" />
										<Label htmlFor="option-two">Non smoker</Label>
									</div>
								</div>
							</RadioGroup>
						</div>
					</div>

					<div>
						<div className="flex items-center gap-1 mb-4">
							<BsGenderFemale /> <BsGenderMale />
							<p> Sex </p>
						</div>

						<div className="bg-brandColorLs1 py-3 rounded-full">
							<RadioGroup defaultValue="option-one">
								<div className="flex items-center justify-around">
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="option-one" id="option-one" />
										<Label htmlFor="option-one">Male</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="option-two" id="option-two" />
										<Label htmlFor="option-two">Female</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="option-three" id="option-three" />
										<Label htmlFor="option-three">Other</Label>
									</div>
								</div>
							</RadioGroup>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6  mb-6">
					<div>
						<div>
							<div className="flex items-center gap-1 mb-4">
								<LiaWeightSolid />
								<p> Weight (in kg) </p>
							</div>

							<input
								type="number"
								className="bg-brandColorLs1 py-2 px-4 rounded-full text-bgPrimary w-full"
								placeholder="Enter your body weight"
							/>
						</div>
					</div>

					<div>
						<div className="h-[41px]"> </div>
						{/* <div className="grid grid-cols-2 gap-2"> */}
						<button
							onClick={handleReload}
							className="text-bgPrimary py-[7px] font-medium bg-brandPrimaryLs2 rounded-full w-full"
						>
							Submit
						</button>
						{/* <button className="bg-transparent border-2 border-bgPrimary py-2 font-medium rounded-full w-full">
								Clear All
							</button> */}
						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegistrationForm;

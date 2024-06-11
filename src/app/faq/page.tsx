import Underline from "@/components/ui/underline/Underline";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion/accordion";

const page = () => {
	return (
		<div className="bg-brandSecondary text-bgPrimary">
			<div className="container mx-auto mt-24 lg:mt-28 py-12 px-4">
				<div className="font-medium text-5xl text-bgPrimary mb-20">
					Frequently Asked Questions about KYAMCH-BRS
				</div>

				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-xl text-start">
							What is KYAMCH-BRS?
						</AccordionTrigger>
						<AccordionContent className="text-base">
							KYAMCH-BRS is a research company in Bangladesh that offers
							clinical and non-clinical research services.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger className="text-xl text-start">
							How much area does KYAMCH-BRS occupy?
						</AccordionTrigger>
						<AccordionContent className="text-base">
							KYAMCH-BRS is situated over 40,000 square feet area.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger className="text-xl text-start">
							What is the process for submitting research proposals or grant
							applications?
						</AccordionTrigger>
						<AccordionContent className="text-base">
							Researchers interested in submitting proposals or grant
							applications should review our guidelines and procedures, which
							are available on our website. Proposals are typically evaluated
							based on scientific merit, feasibility, and alignment with our
							research priorities.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger className="text-xl text-start">
							What areas of research does KYAMCH-BRS focus on?
						</AccordionTrigger>
						<AccordionContent className="text-base">
							We focuses on a wide range of research areas, including cell
							biology, genetics, different type of diseases and radiation
							therapy.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5">
						<AccordionTrigger className="text-xl text-start">
							What is the mission of KYAMCH-BRS?
						</AccordionTrigger>
						<AccordionContent className="text-base">
							The mission of KYAMCH-BRS is to advance scientific knowledge and
							innovation in the field of biology through research, education,
							and collaboration.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default page;

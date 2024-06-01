import Underline from "@/components/ui/underline/Underline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";

const page = () => {
  return (
    <div className="container mx-auto mt-24 lg:mt-32 py-12 px-4">
      <div className="font-medium text-5xl text-textPrimary mb-20">
        Frequently Asked Questions about KYABRS
        <Underline />
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl text-start">
            What is KYABRS?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            KYABRS is a research company in Bangladesh that offers clinical and
            non-clinical research services.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl text-start">
            How much area does KYABRS occupy?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            KYABRS is situated over 40,000 square feet area.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl text-start">
            What is the process for submitting research proposals or grant
            applications?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Researchers interested in submitting proposals or grant applications
            should review our guidelines and procedures, which are available on
            our website. Proposals are typically evaluated based on scientific
            merit, feasibility, and alignment with our research priorities.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl text-start">
            What areas of research does KYABRS focus on?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            We focuses on a wide range of research areas, including cell
            biology, genetics, different type of diseases and radiation therapy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl text-start">
            What is the mission of KYABRS?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            The mission of KYABRS is to advance scientific knowledge and
            innovation in the field of biology through research, education, and
            collaboration.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default page;

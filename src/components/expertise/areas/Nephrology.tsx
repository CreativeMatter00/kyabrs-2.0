import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import TherapeuticAreasCarousel from "./TherapeuticAreasCarousel";

const Nephrology = () => {
  return (
    <div className=" px-4 text-bgPrimary">
      <div className="container mx-auto">
        <div className="mb-9">
          <Breadcrumb
            link1="/expertise"
            title1="Expertise"
            title2="Nephrology"
          />
        </div>

        <div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
          <Image
            src={"/assets/images/expertise/area-hero.jpg"}
            height={300}
            width={1024}
            alt="Expertise"
            className="rounded-lg w-full"
          />
        </div>

        <p className="text-2xl mb-6"> Nephrology </p>
      </div>

      <div className="container mx-auto text-bgPrimary">
        <Image
          src="/assets/images/expertise/nephrology.jpg"
          height={480}
          width={720}
          alt="Nephrology"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <div className="pt-4">
          <p className="text-base font-medium mb-10">
            KYAMCH-BRS leverages its expertise to design and implement
            nephrology trials, supported by dedicated renal specialists with
            extensive experience. Our team ensures meticulous planning and
            execution to meet your research objectives effectively.
          </p>
        </div>

        <TherapeuticAreasCarousel />
      </div>
    </div>
  );
};

export default Nephrology;

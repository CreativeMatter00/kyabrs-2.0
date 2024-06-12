import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import TherapeuticAreasCarousel from "./TherapeuticAreasCarousel";

const RadiationTherapy = () => {
  return (
    <div className="px-4 text-bgPrimary">
      <div className="container mx-auto">
        <div className="mb-9">
          <Breadcrumb
            link1="/expertise"
            title1="Expertise"
            title2="Radiation Therapy"
          />
        </div>

        <div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
          <Image
            src={"/assets/images/expertise/area-hero.jpg"}
            height={400}
            width={1280}
            alt="Expertise"
            className="rounded-lg w-full"
          />
        </div>

        <p className="text-2xl mb-6"> Radiation Therapy </p>
      </div>

      <div className="container mx-auto text-bgPrimary">
        <Image
          src="/assets/images/expertise/neurology.jpg"
          height={480}
          width={720}
          alt="Radiation Therapy"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <div className="pt-4">
          <p className="text-base font-medium mb-10">
            Our seasoned Radiation Group excels in customizing radiation
            protocols to meet the diverse demands of clinical trials, ensuring
            adaptability at every stage. With meticulous attention to detail,
            our team guarantees precision and efficacy in every radiation
            application, delivering optimal outcomes for your trial.
          </p>
        </div>

        <TherapeuticAreasCarousel />
      </div>
    </div>
  );
};

export default RadiationTherapy;

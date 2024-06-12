import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import TherapeuticAreasCarousel from "./TherapeuticAreasCarousel";
import image from "../../../../public/assets/images/expertise/vaccine.jpg";

const InfectiousDisease = () => {
  return (
    <div className="px-4 text-bgPrimary">
      <div className="container mx-auto">
        <div className="mb-9">
          <Breadcrumb
            link1="/expertise"
            title1="Expertise"
            title2="Infectious disease & Vaccinces"
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

        <p className="text-2xl mb-6"> Infectious disease & Vaccinces </p>
      </div>

      <div className="container mx-auto text-bgPrimary">
        <Image
          src="/assets/images/expertise/vaccine.jpg"
          height={480}
          width={720}
          alt="Infectious disease & Vaccinces"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <div className="pt-4">
          <p className="text-base font-medium mb-10">
            Our experienced team specializes in designing and conducting global
            clinical trials for antivirals, antibacterials, antifungals, and
            vaccines. With a wealth of expertise, we ensure thorough planning
            and precise execution to advance research in infectious disease
            treatments. Trust us to deliver comprehensive solutions tailored to
            your specific needs.
          </p>
        </div>

        <TherapeuticAreasCarousel />
      </div>
    </div>
  );
};

export default InfectiousDisease;

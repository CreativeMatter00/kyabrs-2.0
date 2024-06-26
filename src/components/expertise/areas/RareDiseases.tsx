import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import TherapeuticAreasCarousel from "./TherapeuticAreasCarousel";

const RareDiseases = () => {
  return (
    <div className=" px-4 text-bgPrimary">
      <div className="container mx-auto">
        <div className="mb-9">
          <Breadcrumb
            link1="/expertise"
            title1="Expertise"
            title2="Rare Diseases"
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

        <p className="text-2xl mb-6"> Rare Diseases </p>
      </div>

      <div className="container mx-auto text-bgPrimary">
        <Image
          src="/assets/images/expertise/rare.jpg"
          height={480}
          width={720}
          alt="Rare Diseases"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <div className="pt-4">
          <p className="text-base font-medium mb-10">
            Our CRO is committed to conducting rare disease clinical trials,
            recognizing the unique challenges they present. Rare disease
            clinical trials require a full-service CRO with innovative
            strategies to effectively manage these often-complex programs.
          </p>
        </div>

        <TherapeuticAreasCarousel />
      </div>
    </div>
  );
};

export default RareDiseases;

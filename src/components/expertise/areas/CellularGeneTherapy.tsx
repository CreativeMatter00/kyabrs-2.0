import Back from "@/components/ui/back/Back";
import Underline from "@/components/ui/underline/Underline";
import Image from "next/image";

const CellularGeneTherapy = () => {
  return (
    <div className="py-16 px-4">
      <div className="mb-9">
        <Back />
      </div>

      <div className="font-medium text-5xl text-textPrimary mb-20 uppercase break-words max-md:text-4xl">
        Cellular & Gene Therapy
        <Underline />
      </div>

      <div className="mb-20">
        <Image
          src="/assets/images/expertise/cell.jpg"
          height={480}
          width={720}
          alt="Cellular & Gene Therapy"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <p className="text-textSecondary text-base font-medium pt-4 pb-8 px-4">
          Our proactive approach ensures continuous innovation, keeping pace
          with the dynamic landscape of development. With a wealth of experience
          and unwavering dedication, we consistently deliver cutting-edge
          solutions, driving progress in the industry.
        </p>
      </div>
    </div>
  );
};

export default CellularGeneTherapy;

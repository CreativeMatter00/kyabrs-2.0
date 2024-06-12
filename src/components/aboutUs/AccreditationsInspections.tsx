import Underline from "../ui/underline/Underline";
import Image from "next/image";

const AccreditationsInspections = () => {
  return (
    <div className="text-bgPrimary px-4">
      <div className="pb-4">
        <p className="text-2xl">
          Accreditations &
          <span className="text-brandPrimaryLs3"> Inspections </span>
        </p>
      </div>

      <div className="pt-8">
        <div className="flex flex-col md:flex-row gap-8 mb-4">
          <div className="w-full md:w-1/3 flex flex-row md:flex-col justify-center gap-8 md:justify-between h-auto">
            <div className="flex items-center justify-center rounded-lg bg-brandColorLs1 p-4">
              <Image
                src="/assets/images/about/health.png"
                height={1000}
                width={1000}
                className="w-[150px] h-auto"
                alt="accreditions and inspection"
              />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-brandColorLs1 p-4">
              <Image
                src="/assets/images/about/medicine.png"
                height={1000}
                width={1000}
                className="w-[150px] h-auto"
                alt="accreditions and inspection"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 h-auto md:h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
            <Image
              src="/assets/images/about/inspection.jpg"
              height={1920}
              width={1080}
              className="w-full h-auto"
              alt="accreditions and inspection"
            />
          </div>
        </div>

        <p className="text-bgPrimary text-base">
          Our CRO has earned its stripes, undergoing inspection and approval by
          the Directorate General of Drug Administration (DGDA) of Bangladesh.
          Our CRO also proudly bears the seal of approval from the Directorate
          General of Health Service (DGHS) of Bangladesh, a testament to our
          commitment to excellence.
        </p>
      </div>
    </div>
  );
};

export default AccreditationsInspections;

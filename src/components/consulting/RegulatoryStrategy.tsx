import Image from "next/image";

const RegulatoryStrategy = () => {
  return (
    <div className="pt-8 text-bgPrimary">
      <div className="flex flex-col md:flex-row px-4 gap-8">
        <div className="w-full md:w-1/2">
          <p className="text-2xl mb-6"> Regulatory Strategy & Development </p>
          <p className="text-base mb-8">
            In clinical development, we are dedicated to getting every moment in
            the right way. And we have qualified people for it. Our Regulatory
            Consulting Services team has decades of experience helping teams
            understand new and existing guidelines throughout the process. Many
            of them have backgrounds in ICH, FDA, EMA, and NPRA .
          </p>

          <p className="text-xl mb-4 text-brandPrimaryLs2">
            Our services include:
          </p>

          <ul className="marker:text-brandPrimaryLs2 text-base  list-disc list-inside">
            <li> Regulatory Strategy </li>
            <li> Health Authority Meetings </li>
            <li> Quality system inspection </li>
            <li> Submission support </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/consulting/ReglatoryAffairs-01.jpg"
            height={480}
            width={720}
            alt="Regulatory Affairs"
            className="h-auto w-full mx-auto rounded-lg mb-10"
          />
        </div>
      </div>
    </div>
  );
};

export default RegulatoryStrategy;

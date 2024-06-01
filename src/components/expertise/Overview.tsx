import Image from "next/image";
import Underline from "../ui/underline/Underline";
import Link from "next/link";

const Overview = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="w-full md:w-3/5">
          <div className="mb-10">
            <p className="font-medium text-4xl text-textPrimary"> Overview </p>
            <Underline />
            <p className="text-textSecondary text-lg font-medium mt-10 mb-4">
              KYABRS is a therapeutically-focused, scientifically-driven CRO
              with highly accomplished and industry-renowned medical leadership.
              In response to the challenges of clinical research, we engage a
              team of medical experts, especially for increasingly complex
              research. To provide early and ongoing insight and guidance,
              KYABRS embeds therapeutic leadership throughout the trial.
            </p>
          </div>
          <div className="mb-10">
            <p className="font-medium text-4xl text-textPrimary">
              Medical Department
            </p>
            <Underline />
            <p className="text-textSecondary text-lg font-medium mt-10 mb-4">
              Our medical team provides leadership across numerous therapeutic
              areas and specialties, including hematology and oncology,
              infectious diseases, metabolic and endocrine, cardiovascular,
              neurology and psychiatry, nephrology, liver disease,
              ophthalmology, radiation therapy, autoimmune diseases, as well as
              advanced therapies, pediatrics, and rare diseases/orphan
              indications. Our therapeutically-specialized physicians serve as
              much more than consultants; they are deeply involved in your
              trials.
            </p>
          </div>
          <div className="mb-10">
            <p className="font-medium text-4xl text-textPrimary">
              Our Medical Experts
            </p>
            <Underline />
            <p className="text-textSecondary text-lg font-medium mt-10 mb-4">
              We provide strategic direction for both small and large
              organizations. For small biotech, our specialized physicians offer
              medical guidance to determine the strategic direction for the
              success of your compound. For larger organizations, our physicians
              collaborate with your team to develop the best strategic plan. We
              also train study teams to fully understand the protocol and study
              considerations, interact with investigators to build
              relationships, provide medical monitoring services, and work
              collaboratively with regulatory affairs, including meeting with
              regulatory agencies.
            </p>
          </div>
        </div>

        <div className="w-full md:w-2/5">
          <Image
            src="/assets/images/expertise/1.png"
            height={470}
            width={700}
            alt="expertise"
            className="w-full h-auto mx-auto rounded-lg mb-10"
          />
        </div>
      </div>

      <div>
        <p className="font-medium text-4xl text-textPrimary">
          Therapeutic Areas
        </p>
        <Underline />
        <div className="py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          <Link href="/expertise/autoimmune-diseases">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/autoimmune.png"}
                height={80}
                width={75}
                alt="Autoimmune Diseases"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Autoimmune Diseases
              </p>
            </div>
          </Link>

          <Link href="/expertise/cardiovascular">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/cardiovascular.png"}
                height={80}
                width={75}
                alt="Cardiovascular"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Cardiovascular
              </p>
            </div>
          </Link>

          <Link href="/expertise/endocrine-metabolic">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/endocrine.png"}
                height={80}
                width={75}
                alt="Endocrine & Metabolic"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Endocrine & Metabolic
              </p>
            </div>
          </Link>

          <Link href="/expertise/gastroenterology">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/gastroenterology.png"}
                height={80}
                width={75}
                alt="Gastroenterology"
              />
              <p className="text-lg font-medium text-textPrimary text-center break-words">
                Gastroenterology
              </p>
            </div>
          </Link>

          <Link href="/expertise/hematology-oncology">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/hematology.png"}
                height={80}
                width={75}
                alt="Hematology & Oncology"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Hematology & Oncology
              </p>
            </div>
          </Link>

          <Link href="/expertise/infectious-diseases">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/vaccines.png"}
                height={80}
                width={75}
                alt="Infectious Diseases & Vaccines"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Infectious Diseases & Vaccines
              </p>
            </div>
          </Link>

          <Link href="/expertise/nash-liver-disease">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/nash.png"}
                height={80}
                width={75}
                alt="NASH & Liver Disease"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                NASH & Liver Disease
              </p>
            </div>
          </Link>

          <Link href="/expertise/neurology-psychiatry">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/neurology.png"}
                height={80}
                width={75}
                alt="Neurology & Psychiatry"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Neurology & Psychiatry
              </p>
            </div>
          </Link>

          <Link href="/expertise/nephrology">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/nephrology.png"}
                height={80}
                width={75}
                alt="Nephrology"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Nephrology
              </p>
            </div>
          </Link>

          <Link href="/expertise/ophthalmology">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/ophthalmology.png"}
                height={80}
                width={75}
                alt="Ophthalmology"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Ophthalmology
              </p>
            </div>
          </Link>

          <Link href="/expertise/pediatrics">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/pediatrics.png"}
                height={80}
                width={75}
                alt="Pediatrics"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Pediatrics
              </p>
            </div>
          </Link>

          <Link href="/expertise/rare-diseases">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/rare.png"}
                height={80}
                width={75}
                alt="Rare Diseases"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Rare Diseases
              </p>
            </div>
          </Link>

          <Link href="/expertise/cellular-gene-therapy">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/gene.png"}
                height={80}
                width={75}
                alt="Cellular & Gene Therapy"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Cellular & Gene Therapy
              </p>
            </div>
          </Link>

          <Link href="/expertise/radiation-therapy">
            <div className="py-9 px-4 flex flex-col items-center gap-4 min-h-[250px] h-full bg-[#F1F1F1] border border-[#5C5C5C] rounded-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:bg-white hover:cursor-pointer">
              <Image
                src={"/assets/images/expertise/icons/radiation.png"}
                height={80}
                width={75}
                alt="Radiation Therapy"
              />
              <p className="text-lg font-medium text-textPrimary text-center">
                Radiation Therapy
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;

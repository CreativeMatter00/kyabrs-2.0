/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const PatientPersonalStories = () => {
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="container text-bgPrimary p-4  flex flex-col">
        <div
          className="relative h-[300px] bg-cover bg-center rounded-lg mb-6"
          style={{
            backgroundImage:
              "url('/assets/images/participate/PatientStoryBlank.png')",
          }}
        >
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          <div className="relative    h-full px-6 container p-4 flex items-center justify-center">
            <div className="text-bgPrimary max-w-[1024px]  w-full pl-8">
              <p className="text-4xl mb-8">
                KYAMCH-BRS <br /> BIO-RESEARCH <br /> SERVICES
              </p>
              <p className="text-[#FF6A5E]">Patient Story</p>
            </div>
          </div>
        </div>

        <p className="text-4xl">
          Sarah Johnson: Finding Hope and Healing Through Clinical Trials
        </p>
        <div className="mt-8">
          <Image
            src="/assets/images/participate/p-story.png"
            height={262}
            width={400}
            alt="patient story 1"
            className="h-64 w-[400px] float-right rounded-lg md:ml-6 mb-6"
          />
          <p>
            Sarah Johnson’s life took an unexpected turn when she was diagnosed
            with a rare autoimmune disease. Conventional treatments offered
            little relief, prompting her to explore alternative options. Through
            a clinical trial at Khwaja Yunus Ali-Bio Research Services
            (KYA-BRS), Sarah found hope and a new lease on life. This is her
            journey of resilience, growth, and the transformative impact of
            clinical research.
          </p>

          <p className="my-6 text-2xl">Discovering a New Path</p>

          <p>
            Sarah Johnson’s world turned upside down when she was diagnosed with
            a rare autoimmune disease. With conventional treatments offering
            limited relief, she and her family began exploring alternative
            options. It was during this search that they learned about a
            clinical trial at Khwaja Yunus Ali-Bio Research Services (KYA-BRS)
            offering a promising new therapy. Determined to find a better
            solution, Sarah decided to take a leap of faith and participate in
            the trial.
          </p>
        </div>

        <div className="flex justify-center items-center my-8 gap-8 max-lg:flex-col">
          <Image
            src="/assets/images/participate/story/5.jpg"
            height={315}
            width={472}
            alt="patient story 2"
            className="h-80 w-auto rounded-lg"
          />
          <Image
            src="/assets/images/participate/story/3.jpg"
            height={350}
            width={472}
            alt="patient story 2"
            className="h-80 w-auto rounded-lg"
          />
        </div>

        <div>
          <p className="mb-4 text-2xl">Embracing the Unknown</p>
          <p>
            Joining the clinical trial was both exciting and daunting for Sarah.
            The rigorous screening process and frequent visits to the clinic
            required a significant commitment. However, Sarah found comfort in
            the professionalism and compassion of the KYA-BRS team. The staff
            provided thorough explanations of the procedures, ensuring that
            Sarah felt informed and supported every step of the way. This
            reassurance helped Sarah embrace the unknown and stay committed to
            the process.
          </p>
        </div>

        <div className="mt-8">
          <Image
            src="/assets/images/participate/sara1.png"
            height={500}
            width={350}
            alt="patient story 1"
            className="h-[460px] w-80 max-md:w-full float-left rounded-lg md:mr-6 mb-6"
          />
          <p className="text-2xl">Experiencing the Impact</p>
          <p>
            As the trial progressed, Sarah began to notice positive changes. The
            new therapy started to alleviate some of her symptoms, improving her
            quality of life. Regular assessments and close monitoring ensured
            that any side effects were promptly addressed. Sarah's dedication to
            the trial not only benefited her own health but also provided
            valuable data that contributed to the research. The improvement in
            her condition was a testament to the potential of the new treatment,
            bringing hope to Sarah and her family.
          </p>

          <p className="my-6 text-2xl">A Journey of Growth</p>

          <p>
            Participating in the clinical trial was more than just a medical
            decision for Sarah; it was a journey of personal growth. She learned
            to navigate the challenges of her illness with resilience and
            optimism. The support from fellow participants and the KYA-BRS team
            created a sense of community that uplifted her spirits. Sarah's
            journey also inspired others facing similar battles, showing them
            the importance of perseverance and the potential benefits of
            clinical trials.
          </p>
        </div>

        <div>
          <p className="mb-4 text-2xl">Looking Forward</p>

          <p>
            Today, Sarah continues to advocate for clinical research and the
            importance of volunteer participation. Her experience at KYA-BRS has
            not only improved her health but also given her a renewed purpose.
            Sarah's journey is a powerful reminder of the impact that clinical
            trials can have on individuals and the broader medical community. By
            sharing her story, Sarah hopes to encourage more people to consider
            participating in clinical research, paving the way for future
            medical breakthroughs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientPersonalStories;

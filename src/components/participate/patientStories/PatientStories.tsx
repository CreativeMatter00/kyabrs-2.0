import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const cards = [
  {
    id: 1,
    title: "Sarah's Journey",
    description:
      "Sarah Johnson faced a challenging diagnosis but found hope through research.",
    imageUrl: "/assets/images/participate/story/1.jpg",
    hoverEffect: "hover-effect-1",
  },
  {
    id: 2,
    title: "Emma's Story",
    description:
      "Emma Williams bravely joined a clinical trial, seeing improved outcomes.",
    imageUrl: "/assets/images/participate/story/2.jpg",
    hoverEffect: "hover-effect-2",
  },
  {
    id: 3,
    title: "Grace's Path",
    description:
      "Grace loves participation in a clinical trial, bringing hope and progress.",
    imageUrl: "/assets/images/participate/story/3.jpg",
    hoverEffect: "hover-effect-1",
  },
  {
    id: 4,
    title: "Emily's Fight",
    description:
      "Emily Brown joined a clinical trial after her initial treatments were unsuccessful, finding new hope.",
    imageUrl: "/assets/images/participate/story/4.jpg",
    hoverEffect: "hover-effect-2",
  },
  {
    id: 5,
    title: "Mark's Experience",
    description:
      "Mark Thompson participated in a research study that greatly improved his quality of life.",
    imageUrl: "/assets/images/participate/story/5.jpg",
    hoverEffect: "hover-effect-1",
  },
  {
    id: 6,
    title: "Olivia's Hope",
    description:
      "Olivia Green discovered renewed hope through a clinical trial, transforming her outlook on the future.",
    imageUrl: "/assets/images/participate/story/6.jpg",
    hoverEffect: "hover-effect-2",
  },
];

const PatientStories = () => {
  return (
    <div className="text-bgPrimary">
      <div className="text-bgPrimary border-b border-textTertiary">
        <div className="container mx-auto mb-10 px-4">
          <div className="pb-4">
            <Breadcrumb
              title1="Participate"
              link1="/participate"
              title2="Patient Stories"
            />
          </div>
          <div className="relative max-h-[300px] flex items-end justify-center overflow-hidden rounded-lg">
            <Image
              src="/assets/images/participate/patient-story.jpg"
              alt="Patient Volunteers"
              width={1024}
              height={300}
              className="w-full h-auto rounded-lg mb-6"
            />
          </div>

          <p className="text-4xl"> Patient Stories </p>
        </div>
      </div>

      <div className="container mx-auto px-8 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`bg-[#4F5961] hover:bg-[#FF6A5E] p-2  rounded-lg overflow-hidden group cursor-pointer ${styles.patientCard}`}
          >
            <Image
              src={card.imageUrl}
              alt={card.title}
              height={200}
              width={300}
              className="h-[200px] w-full object-cover group-hover:transition-all duration-500 rounded-md"
            />

            <p className="text-[#43B276] group-hover:text-[#F5F5F5] text-sm my-4 pl-2 ">
              Patient Story
            </p>

            <div className="mt-4 text-[#F5F5F5] p-2 mb-4">
              <h3 className="text-2xl mt-2 mb-4">{card.title}</h3>
              <p className="">{card.description}</p>
            </div>
            <Link href={`/participate/patient-stories/${card.title}`}>
              <div className="text-[#FF6A5E] group-hover:text-[#F5F5F5] flex items-center gap-2 cursor-pointer group my-8 pl-2">
                Read more
                <BsArrowRight
                  fontSize={16}
                  className=" ml-0 duration-300 group-hover:ml-2"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientStories;

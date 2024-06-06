"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const cards = [
  {
    id: 1,
    title: "Sarah's Journey",
    description:
      "Sarah Johnson faced a challenging diagnosis but found hope through research.",
    imageUrl:
      "/assets/images/solutions/card/Clinical Development & Research Services 1.png",
    hoverEffect: "hover-effect-1",
  },
  {
    id: 2,
    title: "Emma's Story",
    description:
      "Emma Williams bravely joined a clinical trial, seeing improved outcomes.",
    imageUrl: "/assets/images/solutions/card/Feasibility Study.png",
    hoverEffect: "hover-effect-2",
  },
  {
    id: 3,
    title: "Grace's Path",
    description:
      "Grace loves participation in a clinical trial, bringing hope and progress.",
    imageUrl: "/assets/images/solutions/card/Clinical Data Management.png",
    hoverEffect: "hover-effect-1",
  },
  {
    id: 4,
    title: "Emily's Fight",
    description:
      "Emily Brown joined a clinical trial after her initial treatments were unsuccessful, finding new hope.",
    imageUrl: "/assets/images/solutions/card/Quality Assurance.png",
    hoverEffect: "hover-effect-2",
  },
  {
    id: 5,
    title: "Mark's Experience",
    description:
      "Mark Thompson participated in a research study that greatly improved his quality of life.",
    imageUrl: "/assets/images/solutions/card/Clinical Trial Management.png",
    hoverEffect: "hover-effect-1",
  },
  {
    id: 6,
    title: "Olivia's Hope",
    description:
      "Olivia Green discovered renewed hope through a clinical trial, transforming her outlook on the future.",
    imageUrl: "/assets/images/solutions/card/Clinical Laboratory.png",
    hoverEffect: "hover-effect-2",
  },
];

const Page = () => {
  return (
    <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-44">
      {cards.map((card) => (
        <div
          key={card.id}
          className={` bg-[#4F5961] hover:bg-[#FF6A5E] p-2  rounded-lg overflow-hidden group cursor-pointer`}
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
          {/* <Link href="/about"> */}
          {/* <div className="text-[#FF6A5E] group-hover:text-[#F5F5F5] flex items-center gap-2 cursor-pointer group my-8">
            Read more
            <BsArrowRight
              fontSize={16}
              className=" ml-0 duration-300 group-hover:ml-2"
            />
          </div> */}
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Page;

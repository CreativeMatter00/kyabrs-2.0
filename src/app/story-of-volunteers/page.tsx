import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const DynamicStoryOfVolunteers = dynamic(
  () => import("@/components/storyOfVolunteers/StoryOfVolunteers"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return (
    <div className="pt-20 bg-brandSecondary">
      <DynamicStoryOfVolunteers />
    </div>
  );
};

export default page;

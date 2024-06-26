import AliceCarousel from "react-alice-carousel";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import { Skeleton } from "@nextui-org/react";

type HomeProductSectionSkeletonProps = {
  section: string;
  data: Number[];
};

const HomeProductSectionSkeleton = (props: HomeProductSectionSkeletonProps) => {
  const responsive = {
    0: {
      items: 1.3,
      itemsFit: "contain",
    },
    420: {
      items: 1.6,
      itemsFit: "contain",
    },
    550: {
      items: 1.9,
      itemsFit: "contain",
    },
    700: {
      items: 2.5,
      itemsFit: "contain",
    },
    850: {
      items: 2.9,
      itemsFit: "contain",
    },
    1024: {
      items: 3.5,
      itemsFit: "contain",
    },
    1060: {
      items: 3.9,
      itemsFit: "contain",
    },
    1170: {
      items: 4.5,
      itemsFit: "contain",
    },
    1300: {
      items: 5,
      itemsFit: "contain",
    },
  };
  const items = props.data.map((item) => {
    return <div className="">{<Skeleton className="w-[15rem] h-[20rem]" />}</div>;
  });

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 bg-white my-[3rem]">
      <div className="flex justify-between">
        <h2 className="text-2xl font-extrabold text-gray-900 py-5">{props.section}</h2>
        <Link
          to="/Shop"
          className="flex flex-row justify-start items-center text-[1rem] font-medium py-[1rem] gap-[0.5rem] hover:gap-[1rem] transition-all"
        >
          <p>Shop Now</p>
          <FaArrowRight className="" />
        </Link>
      </div>
      <div className="relative border p-5">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          items={items}
          responsive={responsive}
          animationType="fadeout"
          animationDuration={2000}
        />
      </div>
    </div>
  );
};

export default HomeProductSectionSkeleton;

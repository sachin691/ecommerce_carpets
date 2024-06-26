// Dependencies
import { useDispatch, useSelector } from "react-redux";

// Local Files
import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import Slider from "../../globalSubComponents/Carasoul/Slider";
import Services from "./SubComponents/Services";
import Explore from "./SubComponents/Explore";
import EmailContact from "./SubComponents/EmailContact";
import HomeProductSection from "./SubComponents/HomeProductSection";
import AttractiveSection from "./SubComponents/AttractiveSection";
import HomeCard from "./SubComponents/HomeCard";
import ImageRow from "./SubComponents/ImageRow";
import { useLayoutEffect, useState } from "react";
import { RootState } from "../../Redux/store";
import axios from "axios";
import HomeProductSectionSkeleton from "./SubComponents/HomeProductSectionSkeleton";
import HomeProductSectionNotFound from "./SubComponents/HomeProductSectionNotFound";
import { homeImage, discountImage, saleImage, offerImage } from "./data/data";
import Exclusive from "../Exclusive/Exclusive";
import Everyday from "../Everyday/Everyday";
import ProductGrid from "../ProductGrid/ProductGrid";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [receivedAntiqueData, setReceivedAntiqueData] = useState(-1);
  const [receivedCarpetsData, setReceivedCarpetsData] = useState(-1);
  const [antiquesData, setAntiquesData] = useState([]);
  const [carpetsData, setCarpetsData] = useState([]);

  const getAntiqueData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/items/getItems?start=0&end=10&category=antique&filter=popular`);

      if (!response.data.success) {
        setReceivedAntiqueData(0);
      } else {
        setAntiquesData(response.data.payload.result);
        if (response.data.payload.result.length > 0) {
          setReceivedAntiqueData(1);
        } else {
          setReceivedAntiqueData(0);
        }
      }
    } catch (error) {
      console.log(error);
      setReceivedAntiqueData(0);
    }
  };

  const getCarpetData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/items/getItems?start=0&end=10&category=carpet&filter=popular`);

      if (!response.data.success) {
        console.log(response.data);
        setReceivedCarpetsData(0);
      } else {
        setCarpetsData(response.data.payload.result);
        if (response.data.payload.result.length > 0) {
          setReceivedCarpetsData(1);
        } else {
          setReceivedCarpetsData(0);
        }
      }
    } catch (error) {
      console.log(error);
      setReceivedCarpetsData(0);
    }
  };

  useLayoutEffect(() => {
    getAntiqueData();
    getCarpetData();
  }, [apiUrl]);

  return (
    <div>
      <Slider homeImage={homeImage} className="mt-[1rem] mx-[3rem]" height="400px" />

      <div className="p-[2rem] flex justify-center md:my-[2rem]">
        <h1 className="text-2xl md:text-3xl font-['Rye'] text-[#F31260] font-bold text-center">
          <span className="text-default-800 ">FEATURED </span>
          OFFERS
        </h1>
      </div>
      <Slider homeImage={saleImage} className="md:mt-[1rem] mx-[3rem]" height="300px" />

      <div className="p-[2rem] flex justify-center md:my-[2rem]">
        <h1 className="text-2xl md:text-3xl font-['Rye'] text-[#F31260] font-bold text-center">
          <span className="text-default-800 ">ONLINE </span>
          EXCLUSIVES
        </h1>
      </div>
      <Exclusive />

      {receivedAntiqueData === 1 ? (
        <HomeProductSection data={antiquesData} section={"Popular Antiques"} />
      ) : receivedAntiqueData === -1 ? (
        <HomeProductSectionSkeleton data={[1, 2, 3, 4, 5]} section={"Popular Antiques"} />
      ) : (
        <HomeProductSectionNotFound section={"Popular Antiques"} />
      )}

      <HomeCard />

      <div className="p-[2rem] flex justify-center md:my-[2rem]">
        <h1 className="text-2xl md:text-3xl font-['Rye'] text-[#F31260] font-bold text-center">
          <span className="text-default-800 ">TOP RATED </span>
          CATEGORIES
        </h1>
      </div>
      <ProductGrid />

      <div className="p-[2rem] flex justify-center mt-[2rem] mb-[-1rem]">
        <h1 className="text-3xl  font-['Rye'] text-[#F31260] font-bold text-center">
          <span className="text-default-800 ">EXCLUSIVE </span>
          ITEMS
        </h1>
      </div>
      <AttractiveSection />
      <Services />

      {receivedCarpetsData === 1 ? (
        <HomeProductSection data={carpetsData} section={"Carpets On Demand"} />
      ) : receivedCarpetsData === -1 ? (
        <HomeProductSectionSkeleton data={[1, 2, 3, 4, 5]} section={"Carpets On Demand"} />
      ) : (
        <HomeProductSectionNotFound section={"Carpets On Demand"} />
      )}

      <div className="p-[2rem] flex justify-center my-[2rem]">
        <h1 className="text-3xl  font-['Rye'] text-[#F31260] font-bold text-center">
          <span className="text-default-800 ">AMAZING </span>
          DEALS
        </h1>
      </div>
      <Slider homeImage={discountImage} className="mt-[1rem] mx-[3rem]" height="400px" />

      <div className="p-[2rem] flex justify-center mt-[2rem] mb-[4rem] lg:mb-[2rem]">
        <h1 className="text-2xl md:text-3xl font-['Rye'] text-[#F31260] font-bold text-center">
          <span className="text-default-800 ">YOUR EVERYDAY </span>
          FAVOURITES
        </h1>
      </div>
      <Everyday />

      <Explore />

      <div className="p-[2rem] flex justify-center my-[2rem]">
        <h1 className="text-3xl  font-['Rye'] text-[#F31260] font-bold text-center">
          <span className="text-default-800 ">FEATURED </span>
          OFFERS
        </h1>
      </div>
      <Slider homeImage={offerImage} className="mt-[1rem] mx-[3rem]" height="300px" />

      <EmailContact />
      <ImageRow />
    </div>
  );
};

export default Home;

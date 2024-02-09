// Dependencies
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Intro from "../../globalSubComponents/Intro";
import { scrollTop } from "../../utils/controllers";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);

  return (
    <div>
      <Intro
        normalHead=" Contact "
        redHead="Us "
        caption="At Kreative Machinez, we are dedicated to ensuring your online journey is not just smooth but exceptionally successful. Whether you seek assistance with your website, social media presence, or any digital marketing need, our team is here to provide personalized and professional support"
      />
    </div>
  );
};

export default Contact;

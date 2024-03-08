// Dependencies
import { useDispatch } from "react-redux";
import { Accordion, AccordionItem } from "@nextui-org/react";

// Local Files

import { scrollTop } from "../../utils/controllers";
import Intro from "../../globalSubComponents/Intro";
import { updateTab } from "../../Redux/Slices/curTabSlice";

const definations = [
  `Account means a unique account created for You to access our Service or parts of our Service`,
  `Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control"
    means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of
    directors or other managing authority`,
  `Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to  HMS Freedom LLC, Unit-544, McCabe Street, Port Charlotte, Florida, USA..`,
  `Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing
    the details of Your browsing history on that website among its many uses.`,
  `Country refers to: Uttarakhand, India`,
  `Device means any device that can access the Service such as a computer, a cellphone or a digital tablet`,
  `Personal Data is any information that relates to an identified or identifiable individual.`,
  `Service refers to the Website.`,
  `Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to
    third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on
    behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the
    Service is used.`,
  `Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service
    infrastructure itself (for example, the duration of a page visit).`,
  `Website refers to Kreative Machinez, accessible from https://www.hmsfreedom.com/`,
  `You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual
    is accessing or using the Service, as applicable.
    `,
];

const personalData = [
  " First name and last name",
  " Phone number",
  " Address, State, Province, ZIP/Postal code, City",
  " Usage Data",
];

const useData = [
  "To provide and maintain our Service, including to monitor the usage of our Service",
  "To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user",
  "For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service",
  "To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation",
  "To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.",
];

const shareData = [
  "With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You",
  "For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company",
  "With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us",
  "With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.",
  "With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside",
  "With Your consent: We may disclose Your personal information for any other purpose with Your consent.",
];

const legalRequirements = [
  "Comply with a legal obligation",
  "Protect and defend the rights or property of the Company",
  "Prevent or investigate possible wrongdoing in connection with the Service",
  "Protect the personal safety of Users of the Service or the public",
  "Protect against legal liability",
];

const Privacy = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Privacy"));
  scrollTop();

  return (
    <>
      <div>
        <Intro
          normalHead=" Privacy"
          redHead="Policy "
          caption="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. "
        />
      </div>
      <div className=" text-lg bg-[#e9ecef] rounded-md md:p-[6rem] md:py-[5rem] px-[1rem] py-[5rem] ">
        <h1 className=" font-['DM_Serif_Display'] text-[1.8rem] font-semibold text-default-800">
          Interpretation and Definitions
        </h1>
        <h1 className="font-['DM_Serif_Display'] text-[1.3rem] font-semibold text-default-800 mt-4">Interpretation</h1>
        <p className="text-justify text-default-800 text-[0.95rem] sm:text-md  font-['poppins']">
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The
          following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>
        <h1 className="font-['DM_Serif_Display'] text-[1.3rem] font-semibold text-default-800 mt-4 ">Definitions</h1>
        <Accordion>
          <AccordionItem
            className="text-justify text-default-800 text-[1.2rem] sm:text-md  font-['poppins']"
            aria-label="For the purposes of this Privacy Policy:"
            title="For the purposes of this Privacy Policy:"
            subtitle={<span>Press to expand</span>}
          >
            {definations.map((item, index) => (
              <li key={index} className="text-justify text-default-800 text-[0.95rem] sm:text-md">
                {item}
              </li>
            ))}
          </AccordionItem>
        </Accordion>
        <h1 className=" font-['DM_Serif_Display'] text-[1.8rem] font-semibold text-default-800">
          Collecting and Using Your Personal Data
        </h1>
        <h1 className="font-['DM_Serif_Display'] text-[1.3rem] font-semibold text-default-800 mt-4">
          Types of Data Collected{" "}
        </h1>
        <Accordion className="mt-[1rem]  ">
          <AccordionItem
            className="text-justify text-default-800 text-[1.2rem] sm:text-md font-['poppins']"
            title="Personal Data"
            subtitle={<span>Press to expand</span>}
          >
            <p className=" text-justify text-default-800 text-[0.95rem] sm:text-md">
              While using Our Service, We may ask You to provide Us with certain personally identifiable information
              that can be used to contact or identify You. Personally identifiable information may include, but is not
              limited to:
            </p>
            {personalData.map((item, index) => (
              <li className="text-justify text-default-800 text-[0.95rem] sm:text-md " key={index}>
                {item}
              </li>
            ))}
          </AccordionItem>
          <AccordionItem
            className="text-justify text-default-800 text-[1.2rem] sm:text-md font-['poppins']"
            title="Usage Data"
            subtitle={<span>Press to expand</span>}
          >
            <p className=" text-justify text-default-800 text-[0.95rem] sm:text-md">
              Usage Data is collected automatically when using the Service
            </p>
            <p className=" text-justify text-default-800 text-[0.95rem] sm:text-md">
              Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address),
              browser type, browser version, the pages of our Service that You visit, the time and date of Your visit,
              the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
            <p className=" text-justify text-default-800 text-[0.95rem] sm:text-md">
              When You access the Service by or through a mobile device, We may collect certain information
              automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique
              ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet
              browser You use, unique device identifiers and other diagnostic data
            </p>
            <p className=" text-justify text-default-800 text-[0.95rem] sm:text-md">
              We may also collect information that Your browser sends whenever You visit our Service or when You access
              the Service by or through a mobile device.
            </p>
          </AccordionItem>
          <AccordionItem
            className="text-justify text-default-800 text-[1.2rem] sm:text-md font-['poppins']"
            title="Tracking Technologies and Cookies "
            subtitle={<span>Press to expand</span>}
          >
            <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
              information. Tracking technologies used are beacons, tags, and scripts to collect and track information
              and to improve and analyze Our Service. The technologies We use may include:
            </p>
            <h1 className="text-justify text-default-800 text-[0.95rem] sm:text-md">Cookies or Browser Cookies</h1>
            <p className=" text-justify text-default-800 text-[0.95rem] sm:text-md">
              A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to
              indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use
              some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies,
              our Service may use Cookies
            </p>
            <h1 className="text-justify text-default-800 text-[0.95rem] sm:text-md">Web Beacons</h1>
            <p className=" text-justify text-default-800 text-[0.95rem] sm:text-md">
              Certain sections of our Service and our emails may contain small electronic files known as web beacons
              (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example,
              to count users who have visited those pages or opened an email and for other related website statistics
              (for example, recording the popularity of a certain section and verifying system and server integrity)
            </p>
            <p className=" text-justify text-default-800 text-[0.95rem] sm:text-md">
              Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or
              mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web
              browser. You can learn more about cookies on TermsFeed website article.
              <br />
              We use both Session and Persistent Cookies for the purposes set out below:
            </p>
            <li className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              Necessary / Essential Cookies
              <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">Type: Session Cookies</p>
            </li>
            <li className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              Administered by: Us
              <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
                Purpose: These Cookies are essential to provide You with services available through the Website and to
                enable You to use some of its features. They help to authenticate users and prevent fraudulent use of
                user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services
              </p>
            </li>
            <li className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              Cookies Policy / Notice Acceptance Cookies
              <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">Type: Persistent Cookies</p>
              <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">Administered by: Us</p>
              <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
                Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
              </p>
            </li>
            <li className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              Functionality Cookies
              <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">Type: Persistent Cookies</p>
              <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">Administered by: Us</p>
              <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
                Purpose: These Cookies allow us to remember choices You make when You use the Website, such as
                remembering your login details or language preference. The purpose of these Cookies is to provide You
                with a more personal experience and to avoid You having to re-enter your preferences every time You use
                the Website
              </p>
            </li>
            <p className=" text-justify text-default-800 text-[0.95rem] sm:text-md">
              For more information about the cookies we use and your choices regarding cookies, please visit our Cookies
              Policy or the Cookies section of our Privacy Policy.
            </p>
          </AccordionItem>
        </Accordion>
        <h1 className="font-['DM_Serif_Display'] text-[1.3rem] font-semibold text-default-800">
          Use of Your Personal Data
        </h1>
        <Accordion className="mt-[1rem]  ">
          <AccordionItem
            className="text-justify text-default-800 text-[1.2rem] sm:text-md font-['poppins']"
            title="The Company may use Personal Data for the following purposes:"
            subtitle={<span>Press to expand</span>}
          >
            {useData.map((item, index) => (
              <li key={index} className="text-justify text-default-800 text-[0.95rem] sm:text-md ">
                {item}
              </li>
            ))}
          </AccordionItem>
          <AccordionItem
            className="text-justify text-default-800 text-[1.2rem] sm:text-md font-['poppins']"
            title="We may share Your personal information in the following situations:"
            subtitle={<span>Press to expand</span>}
          >
            {shareData.map((item, index) => (
              <li key={index} className="text-justify text-default-800 text-[0.95rem] sm:text-md">
                {item}
              </li>
            ))}
          </AccordionItem>
          <AccordionItem
            className="text-justify text-default-800 text-[1.2rem] sm:text-md font-['poppins']"
            title=" Retention of Your Personal Data"
            subtitle={<span>Press to expand</span>}
          >
            <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in
              this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our
              legal obligations (for example, if we are required to retain your data to comply with applicable laws),
              resolve disputes, and enforce our legal agreements and policies. <br />
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained
              for a shorter period of time, except when this data is used to strengthen the security or to improve the
              functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
            </p>
          </AccordionItem>
          <AccordionItem
            className="text-justify text-default-800 text-[1.2rem] sm:text-md font-['poppins']"
            title="Transfer of Your Personal Data"
            subtitle={<span>Press to expand</span>}
          >
            <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              Your information, including Personal Data, is processed at the Company's operating offices and in any
              other places where the parties involved in the processing are located. It means that this information may
              be transferred to — and maintained on — computers located outside of Your state, province, country or
              other governmental jurisdiction where the data protection laws may differ than those from Your
              jurisdiction <br />
              Your consent to this Privacy Policy followed by Your submission of such information represents Your
              agreement to that transfer <br />
              The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in
              accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an
              organization or a country unless there are adequate controls in place including the security of Your data
              and other personal information
            </p>
          </AccordionItem>
          <AccordionItem
            className="text-justify text-default-800 text-[1.2rem] sm:text-md font-['poppins']"
            title="Delete Your Personal Data"
            subtitle={<span>Press to expand</span>}
          >
            <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              You have the right to delete or request that We assist in deleting the Personal Data that We have
              collected about You.
              <br />
              Our Service may give You the ability to delete certain information about You from within the Service.
              <br />
              You may update, amend, or delete Your information at any time by signing in to Your Account, if you have
              one, and visiting the account settings section that allows you to manage Your personal information. You
              may also contact Us to request access to, correct, or delete any personal information that You have
              provided to Us. <br />
              Please note, however, that We may need to retain certain information when we have a legal obligation or
              lawful basis to do so.
            </p>
          </AccordionItem>
          <AccordionItem
            className="text-justify text-default-800 text-[1.2rem] sm:text-md font-['poppins']"
            title="Disclosure of Your Personal Data"
            subtitle={<span>Press to expand</span>}
          >
            <h1 className="text-justify text-default-800 text-[0.95rem] sm:text-md">Business Transactions </h1>
            <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred.
              We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy
              Policy
            </p>
            <h1 className="text-justify text-default-800 text-[0.95rem] sm:text-md">Law enforcement </h1>
            <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do
              so by law or in response to valid requests by public authorities (e.g. a court or a government agency)
            </p>
            <h1 className="text-justify text-default-800 text-[0.95rem] sm:text-md">Other legal requirements</h1>
            <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
            </p>
            {legalRequirements.map((item, index) => (
              <li className=" text-justify text-default-800 text-[0.95rem] sm:text-md" key={index}>
                {item}
              </li>
            ))}
          </AccordionItem>
          <AccordionItem
            className="text-justify text-default-800 text-[1.2rem] sm:text-md font-['poppins']"
            title="Security of Your Personal Data"
            subtitle={<span>Press to expand</span>}
          >
            <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
              The security of Your Personal Data is important to Us, but remember that no method of transmission over
              the Internet, or method of electronic storage is 100% secure. While We strive to use commercially
              acceptable means to protect Your Personal Data, We cannot guarantee its absolute security
            </p>
          </AccordionItem>
        </Accordion>
        <h1 className="font-['DM_Serif_Display'] text-[1.3rem] font-semibold text-default-800">Children's Privacy</h1>
        <p className="text-justify text-default-800 text-[0.95rem] sm:text-md ">
          Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
          information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child
          has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data
          from anyone under the age of 13 without verification of parental consent, We take steps to remove that
          information from Our servers. <br />
          If We need to rely on consent as a legal basis for processing Your information and Your country requires
          consent from a parent, We may require Your parent's consent before We collect and use that information.
        </p>
        <h1 className="font-['DM_Serif_Display'] text-[1.3rem] font-semibold text-default-800 mt-4">
          Links to Other Websites
        </h1>
        <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
          Our Service may contain links to other websites that are not operated by Us. If You click on a third party
          link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of
          every site You visit.
          <br />
          We have no control over and assume no responsibility for the content, privacy policies or practices of any
          third party sites or services.
        </p>
        <h1 className="font-['DM_Serif_Display'] text-[1.3rem] font-semibold text-default-800 mt-4">
          Changes to this Privacy Policy
        </h1>
        <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
          We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new
          Privacy Policy on this page.
          <br />
          We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming
          effective and update the "Last updated" date at the top of this Privacy Policy. <br />
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
          effective when they are posted on this page
        </p>
        <h1 className="font-['DM_Serif_Display'] text-[1.3rem] font-semibold text-default-800 mt-4">Contact Us</h1>
        <p className="text-justify text-default-800 text-[0.95rem] sm:text-md">
          If you have any questions about this Privacy Policy, You can contact us:
        </p>
        <li className=" mx-[1rem] text-sm ">
          By visiting this page on our website: https://www.hmsfreedom.com/Contact
        </li>
      </div>
    </>
  );
};

export default Privacy;

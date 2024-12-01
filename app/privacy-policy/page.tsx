import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PAGES from "@/src/constants/pages";
import { getMetaDataByPage } from "@/src/api/seo";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const meta = await getMetaDataByPage(PAGES.home);

  return {
    title: meta?.data?.title,
    description: meta?.data?.meta_description,
    keywords: meta?.data?.meta_keywords,
  };
};

function blogs() {
  return (
    <>
      <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">
                            <div className="row">
                                <div className="col-12 col-lg-12 col-md-12 my-auto">
                                    <div className="descCont text-center my-3">
                                        <span className="text-sub text-gold">
                                            <i className="bi bi-dash-lg"></i> PRIVACY POLICY
                                        </span>
                                       
                                    </div>
                                    <div className="accordion aboutAccordion">
                                    <p className={`fs-14 text-secondary`}>
            At Treysta, privacy of visitors of our website
            is top priority. This Privacy Policy document gives a detailed view
            in to what types of information is collected from our visitors and
            how we use the same. This Privacy Policy only applies to our online
            activities, with respect to information visitors share with us
            and/or data collected by Treysta. It does not extend to any data
            collected offline or through channels other than the above mentioned
            website.
          </p>
          <h5 className={``}>Consent</h5>
          <p className={`fs-14 text-secondary`}>
            {" "}
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
          <h5 className={``}>
            What is the information we collect?
          </h5>
          <p className={`fs-14 text-secondary`}>
            We collect and record the personal information you share with us
            when you register. The reason we ask for this personal information
            is made clear at the time you share the same. This information
            includes your name, company name, address, email id, mobile number
            and other such information.<br></br>
            <br></br>
            If you contact us directly, we may also receive additional
            information such as content of your message, attachments you may
            send us and any other information you choose to provide at your
            will.
          </p>

          <h5 className={``}>How do we use your information?</h5>
          <p className={`fs-14 text-secondary`}>
            There are multiple ways through which we use the information
            collected via Treysta. They include:
          </p>
          <ul>
            <li>
              <p className={`fs-14 text-secondary`}>
                Operate and maintain our website
              </p>
            </li>
            <li>
              <p className={`fs-14 text-secondary`}>
                Understand and analyze how you use our website
              </p>
            </li>
            <li>
              <p className={`fs-14 text-secondary`}>
                Improve and personalise our customer approach
              </p>
            </li>
            <li>
              <p className={`fs-14 text-secondary`}>
                Innovate and develop new products, services and features
              </p>
            </li>
            <li>
              <p className={`fs-14 text-secondary`}>
                Ensure customer safety and prevent fraud
              </p>
            </li>
            <li>
              <p className={`fs-14 text-secondary`}>
                Communicate with you, either directly or through one of our
                partners
              </p>
            </li>
            <li>
              <p className={`fs-14 text-secondary`}>
                Enable good customer service
              </p>
            </li>
            <li>
              <p className={`fs-14 text-secondary`}>
                Undertake marketing and promotional initiatives
              </p>
            </li>
          </ul>

          <h5 className={``}>Web Cookies</h5>
          <p className={`fs-14 text-secondary`}>
            Treysta uses cookies and web beacons on its website. These cookies
            collect and store information that is used to optimize visitor
            experience. This includes visitors’ likes and preferences, pages
            they visited, time they spent, browser they used and/or other
            information. This helps Treysta customize and personalize its web
            page content to provide a better experience.<br></br>
            <br></br>
            You can find more information on cookies here.
          </p>

          <h5 className={``}>Log Files</h5>
          <p className={`fs-14 text-secondary`}>
            Log files is a standard procedure used by all hosting companies.
            These files log visitors when they visit Treysta. It collects
            information including include Internet Protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), referring/exit pages,
            time spent on the website, number of clicks, date and time stamp,
            among other things. This information is sued to conduct analytics,
            chart out trends, track user movement on the website and father
            demographic information.<br></br>
            <br></br>
            It is important to note here that these are not linked to any
            information that is personally identifiable.
          </p>

          <h5 className={``}>Advertising Partners</h5>
          <p className={`fs-14 text-secondary`}>
            Some of the advertisers on our site may use cookies and web beacons.
            Every advertising partner has their own privacy policy and terms on
            how they use the user data they collect. Third-party ad servers and
            ad networks also use technologies such as cookies, web beacons or
            JavaScript in their advertisements and links that appear on
            Treysta. These advertisements and link are directly sent to users’
            browsers and they automatically receive your IP addresses and other
            such information. It is important to note that My Treysta has no
            access to this information or control over the cookies used by third
            party advertisers.<br></br>
            <br></br>
            Technologies such as cookies, web beacons, etc.are used by
            advertisers to measure the effectiveness of the advertising
            campaigns, as well as customise the ad content as per relevancy to
            the user.<br></br>
            <br></br>
            Treysta’s Privacy Policy does not apply to other third party
            advertisers or websites.<br></br>
            <br></br>
            If you wish to know more about their information practices, we
            advise you to check out their respective privacy policies.It will
            give you details on how they use your information, as well as how
            you can opt out of sharing your information with them.<br></br>
            <br></br>
            You can choose to disable cookies through your own individual
            browser.You can learn about cookie management specific to your web
            browsers on their respective website.
          </p>

          <h5 className={``}>Protecting Children’s Information</h5>
          <p className={`fs-14 text-secondary`}>
            As younger and younger children today have access to the internet,
            protecting their information is extremely important to us. We advise
            parents and guardians to monitor and guide children activities on
            the internet, and teach them to not disclose any personal or other
            valuable information online. We encourage you to educate them on the
            repercussions of sharing information online on websites or with
            strangers.<br></br>
            <br></br>
            Treysta does not knowingly collect any personal information from
            minors.If you believe that you child has shared this type of
            information on our website, we encourage you to contact us
            immediately and we will do our best efforts to promptly remove such
            information from our records.
          </p>

          <h5 className={``}>
            General Data Protection Regulation (GDPR) Rights
          </h5>
          <p className={`fs-14 text-secondary`}>
            {" "}
            Every internet user has rights and control over their personal data.
            We would like to make sure you are fully aware of all of your data
            protection rights.<br></br>
            <br></br>
            Every user is entitled to the following:
          </p>
          <ul>
            <li>
              <p className={`fs-14 text-secondary`}>
                The right to access – You have the right to access your personal
                data stored with us. You can request copies of your personal
                data. We will share the same with you and may charge you a small
                fee for this service.
              </p>
            </li>
            <li>
              {" "}
              <p className={`fs-14 text-secondary`}>
                The right to rectification – If you believe that your
                information shared with us is wrong or inaccurate, you have the
                right to request that we correct the same. You also have the
                right to request that we complete the information you believe is
                incomplete.
              </p>
            </li>
            <li>
              <p className={`fs-14 text-secondary`}>
                The right to erase – You also have the right to request that we
                erase your personal data, under certain conditions.
              </p>
            </li>
            <li>
              <p className={`fs-14 text-secondary`}>
                {" "}
                The right to restrict processing – If you do not want us to
                process or analyze your data, you have the right to request that
                we restrict the processing of your personal data, under certain
                conditions.
              </p>
            </li>
            <li>
              <p className={`fs-14 text-secondary`}>
                The right to data portability – You have the right to request
                that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions.
              </p>
            </li>
          </ul>

          <p className={`fs-14 text-secondary`}>
            Any of the above request you make will be adhered by us.Treysta may
            take up to one month to respond to you.If you would wish to exercise
            any of these rights, please contact us.<br></br>
            <br></br>
            If you need more information about our Privacy Policy, feel free to
            write to us at info@Treysta.<br></br>
            <br></br>
            This Privacy Policy was created with the help of a free privacy
            policy generator.
          </p>
        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
                
            </section>
    </>
  );
}
export default blogs;

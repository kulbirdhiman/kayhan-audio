import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
const CustSev = () => {
  return (
    <>
      <section className="w-[80%] mx-auto p-3">
        <h1 className="text-3xl text-center font-serif underline decoration-red-500">
          Privacy Policy
        </h1>
        {/* main */}
        <div className="flex mt-8">
          <div className="xl:w-1/2 ">
            <h3 className="font-bold mt-4">Introduction</h3>
            <p className="text-xs">
              This document sets out the privacy policy of the Trustee for Green
              Locals Australia Trust t/as Kayhan Audio (ABN: 51 799 255 761)
              (our, we, us). We take our privacy obligations earnestly and we’ve
              created this privacy policy to explain what and how we collect,
              use, share and store personal information on our website:
              www.kayhanaudio.com.au
            </p>
            <p className="text-xs mt-2">
              This Privacy Policy applies to products and services offered by
              the Kayhan Audio website. When using our services, you agree and
              consent to the collection, use and disclosure of your information
              in connection with providing you with our services.
            </p>

            <h3 className="font-bold mt-4">Information we collect</h3>
            <p className="text-sm font-semibold">
              The information we collect consists of:
            </p>
            <li className="text-xs">Name.</li>
            <li className="text-xs">Mailing or street address.</li>
            <li className="text-xs">Email address.</li>
            <li className="text-xs">Social media information.</li>
            <li className="text-xs">
              Telephone number and other contact details.
            </li>
            <li className="text-xs">Date of birth.</li>
            <li className="text-xs">
              Credit card or other payment information.
            </li>
            <li className="text-xs">
              Information about your business or personal circumstances.
            </li>
            <li className="text-xs">
              The information you give us in surveys, questionnaires, or when
              you are in our promotions.
            </li>
            <li className="text-xs">
              Your device identity, page view statistics, type, I.P. address,
              advertising data, geolocation information and standard web log
              information.
            </li>
            <li className="text-xs">Information about third parties.</li>
            <li className="text-xs">
              Other information you provide via our website/online presence, or
              otherwise required by us or provided by you.
            </li>
            <p className="text-xs my-2">
              After discovering what information we collect, let’s see how we
              collect your information in the next part.
            </p>
          </div>
          <Image
            className="hidden xl:block xl:w-1/2 h-[30rem] shadow-md shadow-black rounded-md "
            src="https://kayhanaudio.com.au/wp-content/uploads/2024/05/privacy-policy-kayhan-audio-1.jpg"
            alt="Kayhan Audio introduction"
            width={800}
            height={350}
          />
        </div>
        <section className="flex flex-wrap my-5 p-4  justify-evenly gap-1">
          <div className=" w-[17rem] xl:w-1/3 border p-3 text-center shadow-md">
            <h1 className="text-xl font-bold">
              Protection of personal information
            </h1>
            <p className="text-xs">
              Our cybersecurity team take responsibility for ensuring your
              personal information is secure and protected from misuse or
              unauthorised access. Our information technology systems are
              password-protected, and we use a range of administrative and
              technical measures to protect these systems.
            </p>
            <p className="text-xs">
              If you wonder about links on our website, the content below will
              explain it to you.
            </p>
          </div>
          <div className="md:w-[12rem] xl:w-1/4 border text-center p-3 shadow-md">
            <h1 className="text-xl font-bold">Personal information sharing</h1>
            <p className="text-xs">
              We may share your personal information with companies we work
              with, like cloud providers and contractors, both in Australia and
              overseas. When it happens, we will take reasonable steps to ensure
              that any overseas recipient deals with such personal information
              in a manner consistent with how we handle it.
            </p>
            <p className="text-xs">
              Regarding information security, let’s find out in the upcoming
              part.
            </p>
          </div>
          <div className="w-[17rem] xl:w-1/3 border p-3 text-center shadow-md">
            <h1 className="text-xl font-bold">Links</h1>
            <p className="text-xs">
              Our website contains links to other websites. Be provided for
              convenience, those links may not remain current or be maintained.
              We are not responsible for the privacy practices of those linked
              websites. Therefore, we suggest you read those websites’ privacy
              policies before using them.
            </p>
            <p className="text-xs">
              About information access and correction, find out on the part
              below.
            </p>
          </div>

          <div className=" w-[17rem] xl:w-1/3 border p-3 text-center rounded-md my-2 shadow-md">
            <h1 className="text-xl font-bold">
              Personal information access and correction
            </h1>
            <p className="text-xs">
              Our cybersecurity team take responsibility for ensuring your
              personal information is secure and protected from misuse or
              unauthorised access. Our information technology systems are
              password-protected, and we use a range of administrative and
              technical measures to protect these systems.
            </p>
            <p className="text-xs">
              If you wonder about links on our website, the content below will
              explain it to you.
            </p>
          </div>
          <div className="md:w-[12rem] xl:w-1/4 border text-center p-3 my-2 shadow-md">
            <h1 className="text-xl font-bold"> Complaints or questions</h1>
            <p className="text-xs">
              If you want to ask for further information about how we handle
              your personal information held by us, please contact us using the
              details set out below including your name and contact details. We
              will investigate your situation promptly and respond to you within
              a reasonable timeframe.
            </p>
            <li className="text-xs">Name: Privacy Officer</li>
            <li className="text-xs">Email: info@kayhanaudio.com.au</li>
            <p className="text-xs">
              Wondering privacy update? The next content will explain further
              information for you!
            </p>
          </div>
          <div className="w-[17rem] xl:w-1/3 border p-3 my-2 text-center shadow-md">
            <h1 className="text-xl font-bold"> Privacy policy update</h1>
            <p className="text-xs">
              We modify our Privacy Policy from time to time. Any changes to
              this Privacy Policy will be reflected as an updated version on our
              websites. We encourage you to review this Privacy Policy regularly
              so that you are aware of the way we handle your personal
              information.
            </p>
            <p className="text-xs">
              This Privacy Policy is current as of 10 May 2024.
            </p>
          </div>
        </section>

        <div className=" w-[95%]  shadow-md my-4 flex flex-col md:flex-row justify-aroun p-5">
          <Image
            className="hidden xl:block xl:w-1/3 h-[18rem] shadow-md shadow-black rounded-md "
            src="https://kayhanaudio.com.au/wp-content/uploads/2024/05/privacy-policy-how-we-collect-personal-information-1.jpg"
            alt="Kayhan Audio introduction"
            width={800}
            height={350}
          />
          <div className="px-3">
            <h1 className="text-xl font-bold">Scope of Warranty Coverage</h1>
            <h3 className="font-semibold text-sm">
              How we collect personal information
            </h3>
            <p className="text-xs">
              We collect personal information either directly from you, or third
              parties, including where you:
            </p>
            <li className="text-xs">Receive goods or services from us.</li>
            <li className="text-xs">Submit any of our online sign-up forms.</li>
            <li className="text-xs">
              Communicate with us via email, telephone, SMS, social media
              channels (such as LinkedIn, Facebook, or Twitter), or otherwise.
            </li>
            <li className="text-xs">Contact us through our website.</li>
            <li className="text-xs">
              Interact with our website, social media channels, services,
              content, and advertising.
            </li>
            <li className="text-xs">
              Enquire as to a potential purchase in our business or invest in
              our business.
            </li>
            <p className="text-xs py-2">
              We also collect personal information from you when you use or
              access our website or our social media pages. This is done through
              the use of web analytics tools, ‘cookies’, or other similar
              tracking technologies that allow us to track and analyse your
              website usage. Allows the creator of the cookie to identify when
              you visit different websites, ookies are small files that store
              information on your computer, mobile phone, or other device and
              enable. If you do not want the information to be stored as a
              cookie, you can disable cookies in your web browser.
            </p>
            <p className="text-xs">
              We use Google Analytics to collect and process data, including
              when you use third-party websites or apps. To find out more, see
              How Google uses data when you use our partner sites or apps.
            </p>
            <p className="text-xs">
              Let’s move on to the next part of the article to learn how we use
              your information.
            </p>
          </div>
        </div>

        <div className="w-[70%] shadow-md my-5 p-3">
          <h1 className="text-xl font-semibold">
            Use of your personal information
          </h1>
          <h3 className="text-sm">
            The reasons why we collect and use personal information are:
          </h3>
          <li className="text-xs">
            To offer goods, services, or information to potential customers
          </li>
          <li className="text-xs">
            For record record-keeping and administrative purposes.
          </li>
          <li className="text-xs">
            To provide your information to our agents, contractors, consultants,
            employees, or other third parties to provide goods or services to
            you.
          </li>
          <li className="text-xs">
            To enhance and optimize our service providing and customer
            experience.
          </li>
          <li className="text-xs">
            To enforce our agreements with third parties, settle disputes, and
            uphold our legal duties.
          </li>
          <li className="text-xs">
            To send you marketing and promotional messages and other information
            that may be of interest to you and for direct marketing (under the
            Spam Act). In this case, we send you direct marketing communications
            via email, SMS, social media, or mail. You have the right to switch
            off receiving marketing materials from us by using the opt-out
            facility provided (e.g. an unsubscribe link).
          </li>
          <li className="text-xs">
            To send you the information that you requested such as
            administrative messages, reminders, notices, updates, and security
            alerts.
          </li>
          <li className="text-xs">
            To consider an application for employment from you.
          </li>
          <p className="my-3 text-xs">
            What about information sharing? The below part will help you
            understand our sharing policy.
          </p>
        </div>
      </section>
    </>
  );
};

export default CustSev;

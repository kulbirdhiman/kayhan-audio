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
          Limited Warranty against Defects
        </h1>
        {/* main */}
        <div className="flex mt-8">
          <div className="xl:w-1/2 ">
            <h3 className="font-bold mt-4">Introduction</h3>
            <p className="text-xs">
              This document outlines the terms and conditions of the limited
              warranty against defects for goods manufactured by The Trustee for
              Green Locals Australia Trust trading as Kayhan Audio (ABN: 51 799
              255 761), referred to as “our”, “we”, or “us”. Anyone who has
              purchased our goods will be referred to as “you” or “your” in this
              warranty document.
              <br />
              We guarantee that goods we manufacture and sell directly to you
              (referred to as “Goods”) are free from defects in workmanship.
              This warranty applies to any Goods, including parts of a Good,
              except as excluded under the “Exclusions” section below.
            </p>

            <h3 className="font-bold mt-4">
              Australian Consumer Law Disclaimer
            </h3>
            <p className="text-xs">
              Our products and services are covered by non-excludable guarantees
              under Australian consumer protection laws. You have the right to
              receive a replacement or refund in the event of a major failure,
              and to be compensated for any other reasonably foreseeable losses
              or damages. If the product is not of acceptable quality and the
              issue is not considered major, you have the right to have it
              repaired or replaced.
            </p>
            <p className="text-xs my-2">
              This warranty is supplemental to your rights under the Australian
              Consumer Law. Next, we will detail the scope of warranty coverage
              provided when you purchase from Kayhan Audio.
            </p>
            <h3 className="font-bold mt-4"> Exclusions</h3>
            <p className="text-xs">
              This warranty does not cover any defects which are a result of:
            </p>
            <li className="text-xs">Improper installation of the Goods;</li>
            <li className="text-xs">Incorrect use of the Goods;</li>
            <li className="text-xs">
              Power supply issues that affect the installation or use of the
              Goods;
            </li>
            <li className="text-xs">Improper storage of the Goods;</li>
            <li className="text-xs">Modification or misuse of the Goods;</li>
            <li className="text-xs">Regular wear and tear;</li>
            <li className="text-xs">Lack of maintenance;</li>
            <li className="text-xs">
              Failure to take reasonable care in relation to the Goods
            </li>
            <p className="text-xs">
              Next, learn how to make a claim under this warranty if you
              encounter issues with our products.
            </p>
          </div>
          <Image
            className="hidden xl:block xl:w-1/2 h-[30rem] shadow-md shadow-black rounded-md "
            src="https://kayhanaudio.com.au/wp-content/uploads/2024/05/customer-service.jpg"
            alt="Kayhan Audio introduction"
            width={800}
            height={350}
          />
        </div>

        <div className="shadow-lg my-6 p-3">
          <h3 className="font-bold text-xl text-center mt-4">
            {" "}
            Making a Claim Under This Warranty
          </h3>
          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-[17rem] xl:w-1/4 p-3 my-3 shadow-md text-center">
              <h4 className="font-semibold text-sm  my-2">Initial Contact</h4>
              <p className="text-xs">
                If within the Warranty Period, you believe that a Good you
                purchased is faulty, you must immediately stop using the Good
                and contact us at info@kayhanaudio.com.au with full details of
                the fault, including images.
              </p>
            </div>
            <div className=" w-[17rem] xl:w-1/4 p-3 my-3 shadow-md text-center">
              <h4 className="font-semibold text-sm my-2">After Inspection</h4>
              <p className="text-xs">
                If we determine that the Good is faulty and covered by this
                warranty, we will provide you with a repair, replacement, or
                refund (at our discretion) of the Goods at our cost.
                <br />
                If we determine that the Good is not faulty or is faulty due to
                your fault or any exclusions listed above, we will refuse your
                warranty claim. In the next section, we discuss the scope of
                other warranties that accompany your purchase.
              </p>
            </div>
            <div className=" w-[17rem] xl:w-1/4 p-3 my-3 shadow-md text-center">
              <h4 className="font-semibold text-sm my-2">Further Inspection</h4>
              <p className="text-xs">
                For further examination, we may ask that you return the product
                to us at your expense, along with any accompanying accessories,
                manuals, documentation, or registration details. We reserve the
                right to a further inspection before deeming a Good faulty.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-[70%]  shadow-md my-4 flex flex-col md:flex-row justify-aroun p-5">
          <Image
            className="hidden xl:block xl:w-1/4 h-[14rem] shadow-md shadow-black rounded-md "
            src="https://kayhanaudio.com.au/wp-content/uploads/2024/05/limited-warranty-against-defects-1.jpg"
            alt="Kayhan Audio introduction"
            width={800}
            height={350}
          />
          <div className="px-3">
            <h1 className="text-xl font-bold">Scope of Warranty Coverage</h1>
            <h3 className="font-semibold text-sm">
              This warranty is applicable to:
            </h3>
            <ul className="list-inside">
              <li className="text-xs">
                {" "}
                1.All Goods, including any parts of a Good, with the exception
                of those specified in clause 3 as excluded; and
              </li>
              <li className="text-xs">
                2.Goods purchased from us, covering a period of 3 months from
                the date of purchase (Warranty Period).
              </li>
              <p className="text-xs mt-2">
                Please note, this warranty distinctly differs from our policy
                regarding returns due to change of mind. While we typically do
                not offer returns for change of mind, we may consider such
                returns at our discretion. For detailed information on our
                change of mind return policies, please consult our “Terms and
                Conditions” related to the sale of Goods.
              </p>
            </ul>
          </div>
        </div>
        <div className="w-[70%] shadow-lg my-4 p-2 rounded-md">
          <h1 className="text-xl font-bold font-sans ">No Other Warranties</h1>
          <p className="text-xs my-3">
            This warranty encompasses all the guarantees we provide. Beyond what
            is explicitly stated within this document and any additional written
            terms and conditions we issue, no other express or implied
            warranties or representations are provided.
          </p>
          <p className="text-xs my-3">
            This encompasses all warranties implied by law, including but not
            limited to those of merchantability and fitness for a particular
            purpose. To the fullest extent permitted by applicable law, we
            exclude all other express or implied representations and warranties
            that are not clearly detailed in our issued documents.
          </p>
        </div>

        <div className="w-[70%] shadow-lg my-4 p-2 rounded-md">
          <h1 className="text-xl font-bold font-sans "> Liability</h1>
          <p className="text-xs my-3">
            Under the provisions of this warranty, our liability is limited. We
            exclude any liability for loss or damage that may arise from
            pursuing a warranty claim under this document, except to the extent
            such exclusion is prohibited by law.
          </p>
          <p className="text-xs my-3">
            This means that any claim you pursue in relation to this warranty is
            limited to the remedies explicitly outlined in this document, and we
            are not liable for any indirect, consequential, or incidental
            damages that may arise.
          </p>
          <p className="text-xs my-3">
            Next, we will discuss the legal jurisdiction that governs this
            warranty document.
          </p>
        </div>

        <div className="w-[70%] shadow-lg my-4 p-2 rounded-md">
          <h1 className="text-xl font-bold font-sans ">Jurisdiction</h1>
          <p className="text-xs my-3">
            This warranty document and the transactions it covers are governed
            exclusively by the laws of Victoria, Australia.
          </p>
          <p className="text-xs my-3">
            This jurisdictional choice means that any legal proceedings related
            to disputes arising from this warranty must be filed and pursued in
            Victoria, and will be governed by Victoria’s laws without regard to
            its conflict of law provisions.
          </p>
        </div>
      </section>
    </>
  );
};

export default CustSev;

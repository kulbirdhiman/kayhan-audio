import React from "react";
import Image from "next/image";
const TermCondion = () => {
  return (
    <>
      <div className="bg-gray-50 py-2">
      <h1 className="text-3xl text-center font-mono ">
        {" "}
        Terms and Conditions
      </h1>
      <div className="w-[320px] bg-red-500 border rounded-lg border-red-500 mx-auto"></div>
      <section className="mx-auto w-[75%] border bg-white my-6 p-3">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-xl"> Introduction</h1>
      <div className="w-[120px]  border border-green-500 "></div>
            <h3 className="font-bold text-sm mt-4">Website Agreement:</h3>
            <p className="text-xs">
              {" "}
              By using the Kayhan Audio website, you accept and agree to be
              bound by these terms and conditions.
            </p>
            <h3 className="font-bold text-sm mt-4">
              Contractual Relationship:
            </h3>
            <p className="text-sm">
              These terms create a binding contract between you and The Trustee
              for Green Locals Australia Trust, trading as Kayhan Audio (ABN: 51
              799 255 761)
            </p>
            <h3 className="font-bold text-sm mt-4">Non-Acceptance:</h3>
            <p className="text-sm">
              {" "}
              If you do not agree to these terms, you must not use the website.
            </p>
            <h3 className="font-bold text-sm mt-4">
              Updates to website Terms and Conditions:
            </h3>
            <p className="text-sm">
              {" "}
              We may modify these terms at any time by updating this page. Your
              continued use of the website after such updates indicates your
              acceptance of the new terms.
            </p>
          </div>
          <Image
            className="hidden xl:block xl:w-1/3 h-[17rem] rounded-md "
            src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/logo.png"
            alt="Kayhan Audio introduction"
            width={500}
            height={350}
          />
        </div>
        <h1 className="font-bold text-lg mt-4"> Website Access and Use</h1>
        <p className="text-xs">
          You are authorized to use this website solely in accordance with these
          terms and applicable laws. You must also ensure that your employees,
          sub-contractors, and other agents using or accessing the website
          comply with these terms.
        </p>
        <h1 className="font-bold text-lg mt-4"> User Obligations</h1>
        <p className="text-xs">
          You are prohibited from engaging in the following activities on the
          website:
        </p>
        <li className="mt-3 text-xs">
          Copying, mirroring, translating, adapting, or modifying any part of
          the website without authorization;
        </li>
        <li className="text-xs">
          Using the website for unauthorized or fraudulent purposes;
        </li>
        <li className="text-xs">
          Interfering with, disrupting, or overloading the website operations;
        </li>
        <li className="text-xs">
          Using automated scripts or software in conjunction with the website;
        </li>
        <li className="text-xs">
          Engaging in behavior that negatively impacts our reputation or
          security;
        </li>
        <li className="text-xs">
          Attempting unauthorized access or conducting security breaches.
        </li>
        <h1 className="font-bold text-lg mt-4">
          Website Content and Information
        </h1>
        <p className="text-xs">
          <span className="font-bold">Commitment to Accuracy</span>: We strive
          to ensure that the information on our website is as current and
          precise as possible.
        </p>
        <p className="text-xs mt-3">
          <span className="font-bold">No Guarantees Provided</span>: Despite our
          efforts, you acknowledge and agree to the maximum extent permitted by
          law, that we do not guarantee:
        </p>
        <li className="text-xs mt-3">
          The website will be entirely free from errors or defects.
        </li>
        <li className="text-xs">
          The website will be continuously accessible.
        </li>
        <li className="text-xs">
          Messages sent through the website will be delivered promptly, or
          indeed at all.
        </li>
        <li className="text-xs">
          Information you receive or provide through the website will be secure
          or remain confidential.
        </li>
        <li className="text-xs">
          Any information available on the website is completely accurate or
          truthful.
        </li>
        <p className="text-xs mt-3">
          <span className="font-bold">Right to Modify Content</span>: We reserve
          the right to alter any content or functionality on the website,
          including product descriptions, pricing, and other website content, at
          any time without prior notification.
        </p>
        <h1 className="font-bold text-lg mt-4">
          {" "}
          Intellectual Property Rights
        </h1>
        <p className="text-xs">
          All materials on the website, including designs, text, graphics,
          logos, and software, are owned by or licensed to us
        </p>
        <p className="text-xs">
          You may make a temporary electronic copy of parts of the website for
          personal viewing. Any other use, including reproduction and
          distribution, requires prior written consent from us.
        </p>
        <h1 className="font-bold text-lg mt-4"> External Links</h1>
        <p className="text-xs">
          This website may include links to external websites. These are
          provided for convenience, and we do not endorse or assume
          responsibility for the content or practices of these sites.
        </p>
        {/* 1 */}
        <h1 className="font-bold text-lg mt-4"> Security Measures</h1>
        <p className="text-xs">
          We are committed to maintaining the security of our website; however,
          we cannot guarantee that our site is immune to cyber threats. We
          advise taking personal precautions when accessing the website.
        </p>
        {/* 2 */}
        <h1 className="font-bold text-lg mt-4"> Reporting Misuse</h1>
        <p className="text-xs">
          Please report any misuse of the website, errors, or accessibility
          issues to the contact information provided on our site.
        </p>
        {/* 3 */}
        <h1 className="font-bold text-lg mt-4"> Privacy Policy</h1>
        <p className="text-xs">
          Your use of this website is also governed by our Privacy Policy, which
          is incorporated into these terms by reference and available here:
          Privacy Policy.
        </p>
        {/* 4 */}
        <h1 className="font-bold text-lg mt-4"> Limitation of Liability</h1>
        <p className="text-xs">
          We disclaim all liability for any losses or damages you might incur as
          a result of using this website. You agree to indemnify us against any
          losses, damages, or claims arising from your use of our website.
        </p>
        <h1 className="font-bold text-lg mt-4"> General Legal Provisions</h1>
        <h3 className="text-xs font-bold">Governing Law and Jurisdiction</h3>
        <p className="text-xs my-2">
          This agreement is governed by the laws of Victoria, Australia. Each
          party irrevocably submits to the exclusive jurisdiction of the courts
          of Victoria, Australia, and any courts of appeal from them for any
          proceedings arising from or related to this agreement.
        </p>
        <p className="text-xs">
          Each party irrevocably waives any objections to the venue of any legal
          process on the grounds that the process has been brought in an
          inconvenient forum.
        </p>
        <h4 className="font-bold text-sm mt-2">Waiver</h4>
        <p className="text-xs">
          No party to this agreement may rely on the words or conduct of any
          other party as a waiver of any rights unless such a waiver is in
          writing and signed by the party granting it.
        </p>
        {/* 1 */}
        <h4 className="font-bold text-sm mt-2">Severance</h4>
        <p className="text-xs">
          Any term of this agreement that is wholly or partially void or
          unenforceable will be severed to the extent that it is void or
          unenforceable. The validity and enforceability of the remaining terms
          of this agreement will not be affected.
        </p>
        {/* 2 */}
        <h4 className="font-bold text-sm mt-2">Joint and Several Liability</h4>
        <p className="text-xs">
          Any obligation or liability assumed by, or a right conferred to, two
          or more persons binds or benefits them both jointly and severally.
        </p>
        {/* 3 */}
        <h4 className="font-bold text-sm mt-2">Assignment</h4>
        <p className="text-xs">
          No party may assign, novate, or otherwise transfer any of its rights
          or obligations under this agreement without the prior written consent
          of the other party.
        </p>
        {/* 4 */}
        <h4 className="font-bold text-sm mt-2">Entire Agreement</h4>
        <p className="text-xs">
          This agreement constitutes the entire agreement between the parties
          and supersedes all prior negotiations, conduct, arrangements,
          understandings, or agreements, whether express or implied, relating to
          its subject matter.
        </p>
        <h4 className="font-bold text-sm mt-2">Entire Agreement</h4>
        <p className="text-xs mt-3">
          <span className="font-bold">Singular and Plural:</span>:Unless the
          context requires otherwise, words indicating the singular number
          include the plural and vice versa.
        </p>
        {/* 1 */}
        <p className="text-xs mt-3">
          <span className="font-bold">Gender:</span>: Words indicating a gender
          include all genders.
        </p>
        {/* 2 */}
        <p className="text-xs mt-3">
          <span className="font-bold">Defined Terms</span>If a word or phrase is
          defined, any other part of speech or grammatical form of that word or
          phrase has a corresponding meaning.
        </p>
        {/* 3 */}
        <p className="text-xs mt-3">
          <span className="font-bold">Person</span>A reference to “person” or
          “you” includes individuals, estates, corporations, authorities,
          associations, consortia or joint ventures (whether incorporated or
          unincorporated), partnerships, trusts, and other entities.
        </p>
        {/* 4 */}
        <p className="text-xs mt-3">
          <span className="font-bold">Party:</span>:A reference to a party
          includes that party’s executors, administrators, successors, and
          permitted assigns, including those taking by novation; in the case of
          a trustee, it includes any substituted or additional trustees.
        </p>
        {/* 5 */}
        <p className="text-xs mt-3">
          <span className="font-bold">This Agreement:</span> Any reference to a
          party, clause, paragraph, schedule, exhibit, attachment, or annexure
          is a reference to the same within this agreement.
        </p>
        {/* 6 */}
        <p className="text-xs mt-3">
          <span className="font-bold">Document:</span>A reference to a document
          (including this agreement) is to that document as varied, novated,
          ratified, or replaced over time.
        </p>
        {/* 7 */}
        <p className="text-xs mt-3">
          <span className="font-bold">Headings:</span>Headings and words in bold
          type are for convenience only and do not affect the interpretation.
        </p>
        {/* 8 */}
        <p className="text-xs mt-3">
          <span className="font-bold">Includes: </span>: The word “includes” and
          similar words are not words of limitation.
        </p>
        {/* 9 */}
        <p className="text-xs mt-3">
          <span className="font-bold">Adverse Interpretation:</span>No provision
          of this agreement will be interpreted adversely to a party solely
          because that party was responsible for the preparation of this
          agreement or that provision.
        </p>
        {/* 10 */}
        <p className="text-xs mt-3">
          <span className="font-bold">Currency</span>A reference to $, or
          “dollar”, refers to Australian currency, unless otherwise agreed in
          writing.
        </p>
        {/* 11 */}
      </section>
      </div>
    </>
  );
};

export default TermCondion;

import { Spacer, SpacingEnum } from "components/util/Spacer";
import { PlainHeaderLayout } from "layouts/header/HeaderLayout";
import { Link } from "react-router-dom";

const lastUpdated = "August 26, 2021";
const HomeLink = () => <Link to="/">www.edgesports.tech</Link>;
const ContactEmail = () => (
  <a href="mailto:contact@edgesports.tech">contact@edgesports.tech</a>
);

const Terms = () => (
  <PlainHeaderLayout>
    <div className="container">
      <Spacer spacing={SpacingEnum.medium} />
      <div style={{ textAlign: "center" }}>
        <h1>Terms of Service</h1>
        <p>Last updated {lastUpdated}</p>
      </div>
      <div
        style={{
          height: "70vh",
          overflowY: "scroll",
          backgroundColor: "white",
          color: "black",
          padding: "0 30px",
          borderRadius: "5px",
        }}
      >
        <p>
          Welcome to <HomeLink /> ("Website"). This Website is created and run
          by Edge Sports Technology LLC (and any employees and interns)
          (together, "we", "us").
        </p>
        <p>
          Before subscribing to Edge Sports Technology, we recommend that you
          thoroughly read through these Terms of Service ("Terms") and the
          Privacy Policy ("Policy") (found <Link to="/privacy">here</Link>). The
          Terms and Policy apply to all Edge Sports Technology memberships and
          associated products, and anything posted on the Website (together,
          "Services").
        </p>
        <p>
          By subscribing to the Edge Sports Technology Nutrition Library, you
          verify that you have read these Terms, and agree to them. Your
          agreement signifies that you are at least 18 years old and eligible by
          law to enroll in these Services. You agree by using these Services
          that you have provided true information as requested on the
          registration forms. By navigating this website, you also agree to
          these Terms.
        </p>
        <p>
          You may not subscribe to the Edge Sports Technology Nutrition
          Library without agreeing to the Terms of Service. We reserve the right
          to change or modify these Terms at any time. Any and all updates made
          are effective immediately, and you will be notified of any changes via
          email or prominent notification on the website. By agreeing to the
          changes, you may continue to use our Services. If at any time you no
          longer agree to the Terms, you must immediately cancel your membership
          to the Edge Sports Technology Nutrition Library & suspend your use of
          our Services. If you violate any of the Terms of Service, we reserve
          the right to terminate your membership to the Edge Sports Technology
          Nutrition Library. We also reserve the right to refuse service to
          anyone at any time, for any reason. If you have any questions
          whatsoever about the content of these terms, please email us at 
          <ContactEmail />.
        </p>
        <p>
          By subscribing to the Edge Sports Technology Nutrition Library, you
          agree to be solely responsible for maintaining the security of your
          account. We are not responsible for any fraudulent charges made on
          your account, or stolen logins or passwords. You agree to notify us
          immediately at 
          <ContactEmail /> if any suspicious activity has occurred on your
          account.
        </p>
        <p>
          Please be aware that agreeing to these Terms by using the Services
          holds the same weight as a written and signed contract. You agree that
          you will not challenge the enforceability of these Terms based on the
          fact that they are electronic.
        </p>
        <h2>Third Party Links</h2>
        <p>
          Some notes within the Edge Sports Technology Nutrition Library will
          contain outbound links to other websites that contain relevant content
          or research articles. You acknowledge and agree that we are not
          responsible for the availability of these websites, and we do not
          endorse and are not responsible for any advertisements featured on
          these websites. You agree that we will never be held liable (directly
          or indirectly) for any losses, damages, or health concerns that may
          have been incurred from your use of materials, service, or content on
          these websites. You agree that you will use the content from these
          websites at your own risk.
        </p>
        <h2>Health Disclaimer</h2>
        <p>
          All information included in the Edge Sports Technology Nutrition
          Library is information that has been curated and is in no way claiming
          to be comprehensive or conclusive. The information provided on{" "}
          <HomeLink /> and the Edge Sports Technology Nutrition Library is meant
          for educational purposes only. It is NOT meant to be interpreted as
          medical advice for any individual. This information does not replace
          the advice of a medical professional and should not be relied on as
          medical advice or advice on diagnosis or treatment of any medical
          condition. If you have concerns about your health, you should always
          consult with a medical professional. Do not delay consultation or
          treatment from a medical professional because of something read on
          this website. Use of any information provided on this website or the
          Edge Sports Technology Nutrition Library is 100% AT YOUR OWN RISK.
        </p>
        <p>
          No information provided on 
          <HomeLink /> and/or the Edge Sports Technology Nutrition Library
          should be interpreted as medical nutrition therapy, nutrition
          counseling, diagnosis, prognosis, health care treatment, instruction,
          advice, or any other individualized medical service. The information
          is for educational purposes only.
        </p>
        <p>
          You should not use the information on this website for diagnosing or
          treating a health problem or disease or prescribing any medication or
          other treatment.
        </p>
        <h2>Service Disclaimer</h2>
        <p>
          We do our best to ensure continued service of the Website and the Edge
          Sports Technology Nutrition Library. In the event of any emergency
          repairs, natural disasters, or unforeseen technological errors that
          may interrupt our Services, you agree to under no conditions hold us
          liable for any losses, lack of availability, discontinuance,
          suspension, or termination of our Services. You agree that your access
          and use of Services is on an ‘As Is" and "As Available" condition.
        </p>
        <p>
          We also reserve the right to modify Services at any time and will not
          be held liable for any price increases, service changes, or
          discontinuation of Services. We are not responsible for any technical
          malfunctions of online systems, servers, service providers, or email
          accounts that prevent the timely delivery of our Services. We are also
          not responsible for any damages that may occur from downloading any
          content from the Edge Sports Technology Nutrition Library or Website.
          Use of these Services is at your own risk.
        </p>
        <h2>No Guarantees</h2>
        <p>
          We make no guarantees in regards to any of the recommendations or
          advice given on the Website or other Services. While the advice
          provided may have worked for us or others, there is no guarantee that
          it will also work for you, or that if you do the exact same steps you
          will see the same results. Please use and implement the advice at your
          own risk.
        </p>
        <h2>Submissions</h2>
        <p>
          If you submit any content to the Website, including comments, we do
          not own those materials, but you are granting us permission to use the
          submitted content in our business. This includes comments,
          testimonials, feedback, etc. You agree to give us the rights to copy,
          distribute, transmit, publicly display, post on social media,
          reproduce, translate, edit, and reformat your submission, and post
          your name with it, without compensation. We are not obligated to use
          the submission, but we reserve the right to at our discretion. We also
          reserve the right to delete any submissions at our discretion.
        </p>
        <h2>Indemnification</h2>
        <p>
          You agree to hold us (Edge Sports Technology LLC and all staff,
          contractors, volunteers, interns, employees, and partners) harmless
          and indemnify us from and against any third-party claim(s) arising
          from your use of our Services. This includes any liability or expenses
          arising from all claims, losses, damages, suits, judgments, litigation
          costs, and attorney fees. You also agree to relinquish any and all
          rights or benefits you may have under any other state or federal
          statute or common law principle of similar effect, to the fullest
          extent permitted by law.
        </p>
        <h2>Applicable Law</h2>
        <p>
          You agree that by using our Services, the laws of Delaware will govern
          these Terms and any dispute that may arise between you and the
          company.
        </p>
        <h2>Additional Information</h2>
        <p>
          Please also review our Privacy Policy located{" "}
          <Link to="/privacy">here</Link>.
        </p>
        <h2>Purchase & Use Information</h2>
        <p>
          The Edge Sports Technology Nutrition Library is a monthly or annual
          subscription service that provides ongoing access to a functional
          nutrition library to subscribers. When you subscribe to these
          Services, you are committing to a monthly recurring charge on your
          credit card to continue membership and receipt of Services. Charges
          are processed monthly, and we are not able to offer prorated refunds
          at this time. Once payment has been processed for the month, it is
          non-refundable. Canceled memberships means that any future scheduled
          monthly recurring payment will not be processed and will never be
          processed unless membership is resumed. You may cancel your
          subscription anytime by emailing <ContactEmail /> and requesting to
          unsubscribe. If you are dissatisfied with any portion of the Services,
          or with any of these Terms of Service, your sole and exclusive remedy
          is to discontinue using the Services.
        </p>
        <p>
          Each membership is to be used by one person only. Please do not
          falsely create accounts for any other individuals. Do not share your
          account with anyone else. If you enjoy our Services, please share the
          Edge Sports Technology Nutrition Library sign-up page, and encourage
          your friends to sign up for a membership themselves. If we find that
          you are in violation with these terms (to not share your login with
          anyone else), we will immediately terminate your membership with no
          refund. You are responsible for any fees, including internet or mobile
          fees, incurred while using these services.
        </p>
        <h2>Intellectual Property Rights</h2>
        <p>
          All content available on the Website is written in the author’s own
          words, unless otherwise indicated. All the materials available on the
          site are protected by copyright, trademark, and other intellectual
          property laws. You agree to use the site solely for personal
          noncommercial use. Unauthorized copying, reproducing, republishing,
          downloading, uploading, posting, transmitting, translating, selling,
          exploiting, distributing, or creating derivative works of the
          information without our explicit consent is not allowed and will be
          prosecuted to the fullest extent available under the law. This
          includes transmitting the information via email or other electronic
          means without consent. You are allowed to print the material for
          personal, non-commercial use, including when seeing clients in your
          private practice or when teaching, as long as proper attribution is
          given.
        </p>
        <p>
          You may hyperlink back to our site, as long as the link does not imply
          that we sponsor or endorse anything on your site without our express
          consent. However, you may NOT frame or inline link any of the content
          of the Website, or incorporate into another website or other service,
          any of our material, content, or intellectual property without prior
          written permission.
        </p>
        <h2>Disclaimers</h2>
        <p>
          The information, products, and services offered on 
          <HomeLink /> is provided on an "as-is" basis, with no express or
          implied warranties of any kind. We disclaim all warranties to the
          fullest extent allowable under the law, including any implied
          warranties of the use of the information for any particular purpose.
          We do not warrant that the site or its contents will be error-free,
          accurate, timely, or reliable, although efforts will be made to
          correct errors when found.
        </p>
        <h2>No Joint Venture or Other Business Relationship</h2>
        <p>
          Users and guests of this Website and Services do not have any form of
          partnership or employment relationship with The Edge Sports Technology
          Nutrition Library.
        </p>
        <h2>Contact Information</h2>
        <p>
          If you have any questions or concerns about these Terms, please
          contact us using the following information: <ContactEmail />.
        </p>
      </div>
    </div>
    <Spacer />
  </PlainHeaderLayout>
);

export { Terms };

import { Spacer, SpacingEnum } from "components/util/Spacer";
import { PlainHeaderLayout } from "layouts/header/HeaderLayout";
import { Link } from "react-router-dom";

const lastUpdated = "August 26, 2021";
const ContactEmail = () => (
  <a href="mailto:contact@edgesports.tech">contact@edgesports.tech</a>
);

const Privacy = () => (
  <PlainHeaderLayout>
    <div className="container">
      <Spacer spacing={SpacingEnum.medium} />
      <div style={{ textAlign: "center" }}>
        <h1>Privacy Policy</h1>
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
          This Privacy Policy ("Policy") outlines how Edge Sports Technology
          LLC collects, retains, processes, shares, transfers, and protects your
          data when you visit our application or use our services.{" "}
        </p>
        <p>
          Please read this Privacy Policy before you use the App. By using the
          App or clicking "Agree" to the Privacy Policy when presented to you,
          you agree and are bound to this Privacy Policy.
        </p>
        <p>
          This Policy is designed to help you understand what information we
          collect about you and what choices you have about these matters.
        </p>
        <p>
          If the content of the Policy is updated, the date of the update will
          be indicated at the top of this policy, and a notification will be
          given via email and/or via a notification when you next visit the app.
          Continuing to use the app after receiving this notification means you
          have read and agree to the new Policy.
        </p>
        <p>
          If you do not agree to the changes, and wish to have your information
          removed, you may do so at any time by emailing 
          <ContactEmail /> and refraining from visiting this App again. If you
          have any questions about the content of this Privacy Policy, please
          email us at 
          <ContactEmail />.
        </p>
        <h2>What we collect</h2>
        <p>
          When interacting with our App and services, we may collect two types
          of information from you: personal and non-personal information.
        </p>
        <h2>Personal Information</h2>
        <p>
          Examples of personal information that you may voluntarily provide to
          us include name, email address, or other information required during
          the sign-up process. Typically, this information will be provided to
          us when you choose to sign up or purchase a product from the App. If
          you choose to send us emails, any personal information you disclose
          will also be stored on our email server.
        </p>
        <h2>Non-Personal Information</h2>
        <p>
          Examples of non-personal information include IP address, type of
          device App was accessed on, city the App was accessed from, and the
          content you viewed or interacted with. Non-personal information is
          only analyzed in an aggregate manner and cannot be linked to any one
          individual. Non-personal information has no personal identifiers
          linked to it.
        </p>
        <h2>Why We Collect Information</h2>
        <p>
          Personal information may be used when sending you emails, when
          completing a purchase, managing access to the membership app, or in
          customer service relations. We use this information to send you
          documents, products, or services that you have selected to receive.
        </p>
        <p>
          Non-personal information helps us improve our App and continue to
          create content and offers that we believe you will enjoy.
        </p>
        <h2>How We Use Cookies</h2>
        <p>
          This App uses cookies, small files which are placed on your phones
          after you have given permission, and help us analyze our App by our
          users. This is only used to store data pertaining to login
          information. These cookies are not used for analytics and data
          acquisition purposes.
        </p>
        <p>
          A cookie in no way gives us access to your computer or any information
          about you, other than the data you choose to share with us.
        </p>
        <p>
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          settings to decline cookies if you prefer. This may prevent you from
          taking full advantage of our App.
        </p>
        <h2>Email</h2>
        <p>
          Personal information (name, email address, IP address) provided when
          signing up is stored. If you would like your email address and
          personal information to be permanently deleted from the database, just
          send an email to 
          <ContactEmail />
           with your request.
        </p>
        <h2>Login</h2>
        <p>
          If you have an account and you log in to this App, we will set a
          temporary cookie to determine if your browser accepts cookies. This
          cookie contains no personal data and is discarded when you close your
          browser.
        </p>
        <p>
          When you log in, we will also set up several cookies to save your
          login information and your screen display choices. Login cookies last
          for two days, and screen options cookies last for a year. If you
          select "Remember Me", your login will persist for two weeks. If you
          log out of your account, the login cookies will be removed.
        </p>
        <h2>Financial Information</h2>
        <p>
          If you choose to make a purchase through the App, credit card
          information is stored by Stripe or PayPal, depending on which service
          you chose to complete your payment. If at any point you wish to cancel
          a paid membership you have subscribed to, you can do so directly by
          logging into your account and cancelling your subscription. You can
          visit the Stripe and PayPal Apps to review their Privacy Policies as
          well.
        </p>
        <h2>Media</h2>
        <p>
          If you upload images to the App, you should avoid uploading images
          with embedded location data (EXIF GPS) included. Visitors to the App
          can download and extract any location data from images on the App.
        </p>
        <h2>How We Protect Your Data</h2>
        <p>
          We use reasonable technical and administrative measures to protect
          your personal information against theft, loss, and unauthorized
          access. Although we always do our best, no system is 100% secure, and
          therefore, we cannot guarantee the security of your personal
          information and cannot assume liability for improper access to it.
        </p>
        <h2>How Long We Retain Your Data</h2>
        <p>
          For users that register on our App (if any), we also store the
          personal information they provide in their user profile. All users can
          see, edit, or delete their personal information at any time (except
          they cannot change their username).
        </p>
        <p>
          App administrators can also see and edit that information. Personal
          information will be stored until one of the following:
        </p>
        <ol>
          <li>you request for your information to be deleted</li>
          <li>
            we discontinue our use of certain third-party tools that collect
            data
          </li>
          <li>
            we decide that the value of the information storage no longer
            outweighs the costs
          </li>
        </ol>
        <h2>What Rights You Have Over Your Data</h2>
        <p>
          If you have an account on this app, or have left comments, you can
          request to receive a file of the personal data we hold about you,
          including any data you have provided to us.
        </p>
        <p>
          You can also request that we erase any personal data we hold about
          you, or that we stop processing any data we have collected from you.
          This does not include any data we are obliged to keep for
          administrative, legal, or security purposes.
        </p>
        <p>
          If you notice that any information we have on file is incorrect, you
          have the right to ask for it to be corrected as soon as possible. You
          also have the right to lodge a complaint with a supervisory authority
          at any time.
        </p>
        <h2>What Data Breach Procedures</h2>
        <p>
          If a data breach ever occurs, we will notify you via email as soon as
          possible, including what information may have been compromised, how we
          corrected the breach, and how to protect yourself moving forward.
        </p>
        <h2>What Third Parties We Receive Data From</h2>
        <p>
          If you make a purchase through any of the programs we are affiliates
          for, we will receive an email notification of the sale, which may
          include personal information about you, such as your name or email
          address. We keep this information private and will not share it with
          anyone.
        </p>
        <h2>California Eraser Law</h2>
        <p>
          This App complies with the California Eraser Law. If you are a minor
          under the age of 18 and want to have any content you have posted on
          the app removed, please send a request to 
          <ContactEmail />. Please note that although the content will be
          removed from this App, it may still exist on the web if other people
          or companies (like archival Apps and search engines) have made copies
          of the information for themselves.
        </p>
        <h2>Children under the age of 13</h2>
        <p>
          This App is not designed for children under the age of 13, and anyone
          under the age of 13 may not create an account or provide any
          information on this App. We do not intentionally collect any personal
          information from children under the age of 13. If you are reading this
          and are under the age of 13, you must not use or provide any
          information on this App, including signing up for information, making
          purchases, or leaving comments.
        </p>
        <p>
          If we ever collect or receive information from children under the age
          of 13 without the consent of their parents, we will delete that
          information as soon as possible. If you believe that we have collected
          information from a child under the age of 13, please contact us at 
          <ContactEmail />.
        </p>
        <h2>Contact Information</h2>
        <p>
          If you have any further questions regarding this Policy, please
          contact <ContactEmail />.
        </p>
        <p>
          See our <Link to="/terms">Terms of Service here</Link>.
        </p>
      </div>
    </div>
    <Spacer />
  </PlainHeaderLayout>
);

export { Privacy };

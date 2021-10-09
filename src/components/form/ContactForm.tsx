import { SubmitButton } from "components/Buttons";
import { Card } from "components/Cards";
import { FormInputUnderline } from "./Form";

const ContactForm = () => (
  <Card>
    <form action="/" method="POST">
      <div className="row form-title">
        <h2>Contact</h2>
      </div>
      <div className="row form-entry">
        <input name="name" type="text" placeholder="Name" />
        <FormInputUnderline />
      </div>
      <div className="row form-entry">
        <input name="_replyto" type="email" placeholder="Email" />
        <FormInputUnderline />
      </div>
      <div className="row form-entry">
        <input name="_subject" type="text" placeholder="Subject" />
        <FormInputUnderline />
      </div>
      <div className="row form-entry">
        <textarea name="message" placeholder="Your message..."></textarea>
        <FormInputUnderline />
      </div>
      <div className="row form-entry justify-content-center">
        <SubmitButton label="Send" />
      </div>
    </form>
  </Card>
);

export { ContactForm };

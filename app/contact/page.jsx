import Form from "../../ui/form";

function Contact() {
  return (
    <div>
      <Form api={process.env.API_URL} />
    </div>
  );
}

export default Contact;

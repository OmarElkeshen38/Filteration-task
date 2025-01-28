import SectionTitle from "../common/sectionTitle/SectionTitle"
import Form from "./Form"
import Info from "./Info"

function Contact() {
  return (
    <div className="container py-4">
      <SectionTitle title="Contact Us" />
      <div className="row py-5">
        <Form />
        <Info />
      </div>
    </div>
  )
}

export default Contact

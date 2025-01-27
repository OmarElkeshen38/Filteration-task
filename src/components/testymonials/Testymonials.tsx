import SectionTitle from "../common/sectionTitle/SectionTitle"
import TestymonialItem from "./TestymonialItem";
import user from '../../assets/images/user.png';

function Testymonials() {
    return (
        <div className='container py-4'>
            <SectionTitle title="Testymonials" />
            <div className="row py-5 mt-5">
                <TestymonialItem image={user} name="Courtney Henry" testymonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
                <TestymonialItem image={user} name="Courtney Henry" testymonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
                <TestymonialItem image={user} name="Courtney Henry" testymonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
                <TestymonialItem image={user} name="Courtney Henry" testymonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
            </div>
        </div>
    )
}

export default Testymonials

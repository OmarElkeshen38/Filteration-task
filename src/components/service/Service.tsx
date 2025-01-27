import SectionTitle from '../common/sectionTitle/SectionTitle';
import ServiceItem from './ServiceItem';
// import styles from './Service.module.css';
import service2 from '../../assets/images/servImg2.png';
import service3 from '../../assets/images/servImg3.png';
import MainBtn from '../common/mainBtn/MainBtn';

function Service() {
  return (
    <div className='container py-4'>
      <SectionTitle title="services" />
      <div className="row py-5">
        <ServiceItem image={service3} title="Lorem Ipsum" desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled' />
        <ServiceItem image={service2} title="Lorem Ipsum" desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled' />
        <ServiceItem image={service3} title="Lorem Ipsum" desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled' />
      </div>
      <div className="d-flex justify-content-center mb-3">
        <MainBtn />
      </div>
    </div>
  )
}

export default Service

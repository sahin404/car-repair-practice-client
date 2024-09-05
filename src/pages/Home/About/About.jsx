import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero bg-base-200 h-1/2 py-20 mt-16 md:px-5">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
            <img className='w-3/4 rounded-xl' src={person} alt="" />
            <img src={parts} className=' w-1/2 top-1/2 right-5 border-white border-8 rounded-xl absolute' alt="" />
        </div>
        <div className='lg:w-1/2'>
          <h1 className="text-3xl font-bold text-[#FF3811]">About Us</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="mt-2">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn mt-5 bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;

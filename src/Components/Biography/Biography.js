import React from 'react'
import ProfilePicture from '../../Images/proPic.jpg'
import ProfilePicture2 from '../../Images/gunjan.jpeg'
import ProfilePicture3 from '../../Images/achint.jpeg'
import LinkedIn from '../../Images/linkedin.png'
import './styles.css'

const Biography = () => {
    return (
        <div>
            <h4 className="text-blue text-center mt-4">Not Yet Sure Of Joining ?‍</h4>
            <h5 className="text-center mt-4">Hear what Top Tier CEOs & Emerging CEO are saying about LeaderClasses Via their Video Testimonials below :-</h5>
            <h4 className="text-blue text-center mt-5">CEO Testimonials</h4>
            <div className="horizontal-card d-flex justify-content-center align-items-center row">
                <div className="d-flex justify-content-center align-items-center flex-column col">
                    <img src={ProfilePicture} className="proPic rounded-circle" alt=""/>
                    <h6 className="text-center mt-3">Ram Gopal <br/> Chief Executive Officer <br/> Barclays India</h6>
                    <img src={LinkedIn} className="rounded logo" alt=""/>
                </div>
                <div className="d-flex justify-content-center flex-column align-items-center w-75 col">
                <h4 className="text-blue text-center mt-5">Executive Biography</h4>
                    <p className="text-justify">An MBA from the University of Chicago & a CFA charter holder,
                    Ram brings over 26+ of experience gained at Citibank, Standard Chartered 
                     & Barclays across various geographies & divisions to his current responsibility 
                      of designing & executing country strategy for Barclays in India , with accountability 
                       for financial performance & market position for the Bank.Additionally, Ram is also a 
                        member of the European Business Group Banking Finance Committee representing the firms interests.</p>
                </div>
                <div className="d-flex justify-content-center align-items-center youtube-video col">
                    <iframe className="video" title="motivational video" width="560" height="315" src="https://www.youtube.com/embed/uqHOL4TwKgE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="horizontal-card mt-5 d-flex justify-content-center align-items-center row">
                <div className="d-flex justify-content-center align-items-center flex-column col">
                    <img src={ProfilePicture2} className="proPic rounded-circle" alt=""/>
                    <h6 className="text-center">Ram Gopal <br/> Chief Executive Officer <br/> Barclays India</h6>
                    <img src={LinkedIn} className="rounded logo" alt=""/>
                </div>
                <div className="d-flex justify-content-center flex-column align-items-center w-75 col">
                <h4 className="text-blue text-center mt-5">Executive Biography</h4>
                    <p className="text-justify">An Alumnus of IIT-BHU & IIMA, Gunjan brings over 28+ 
                    years at work at Gillette, Philips,Sennheiser & Bosch Siemens in Strategy, 
                    Consumer Marketing & Market Development across Europe & Asia to his current 
                    role as Chairman of the Region Asia Pacific Board of Bosch Siemens Home 
                    Appliances Asia Pacific Business.</p>
                </div>
                <div className="d-flex justify-content-center align-items-center youtube-video col">
                    <iframe className="video" title="inspirational video" width="560" height="315" src="https://www.youtube.com/embed/mcSfla42Gw4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <hr/>
            <h4 className="text-blue text-underline text-center mt-5">Emerging Leader Testimonials</h4>
            <div className="horizontal-card mt-5 d-flex justify-content-center align-items-center row">
                <div className="d-flex justify-content-center align-items-center flex-column col">
                    <img src={ProfilePicture3} className="proPic rounded-circle" alt=""/>
                    <h6 className="text-center">Ram Gopal <br/> Chief Executive Officer <br/> Barclays India</h6>
                    <img src={LinkedIn} className="rounded logo" alt=""/>
                </div>
                <div className="d-flex justify-content-center flex-column align-items-center w-75 col">
                <h4 className="text-blue text-center mt-5">Executive Biography</h4>
                    <p className="text-justify">An ISB Alumnus, Achint is an Industry Fast 
                    Tracker from the TMT sector, bringing his experience at Microsoft, 
                    McKinsey & Viacom across Product Development, Strategy, Corporate 
                    Development, Innovation & Market Development to his current role of 
                    building Myntra leveraging his Digital Strategy & Execution expertise.</p>
                </div>
                <div className="d-flex justify-content-center align-items-center youtube-video col">
                    <iframe  className="video" title="motivational inspirational video" width="100%" height="100%" src="https://www.youtube.com/embed/AsMavf_vcOw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <h4 className="text-center mt-4"> Know more about our work via our  <a href="https://#.com" className="text-decoration-none">Webinars</a> & Signup Now to Join our " LeaderClasses Programs for Your Excellence "</h4>
           <hr/>
           <h4 className="text-center text-blue mt-4">Campus Partners</h4>
           <hr/>
           <h3 className="text-center text-underline mt-5">REPRESENTING AN INSTITUTION ?</h3>
           <p className="text-size-100 text-center mt-3">LeaderClasses is at a very interesting phase of its growth & is actively looking to expand our Campus Partnerships Pan-India.‍</p>
           <p className="text-size-100 text-center mt-3">If you are an Institutional Representative of a University / College interested in building a relationship with us , we invite you to Submit your details via our <a href="http://#.com" className="text-decoration-none"> "Campus Partners Form"</a>.</p>
           <p className="text-size-100 text-center mt-3">We look forward to hearing from you soon & will advise interest/next steps within 5 Business Days of receipt of your <a href="http://#.com" className="text-decoration-none"> "Campus Partners Form"</a>.</p>
           <p className="text-size-100 text-center mt-4">Thanks for your Time & Attention ! <br/> Team - LeaderClasses.</p>
           <div className="button m-auto">
                Contact Us
           </div>
        </div>
    )
}

export default Biography

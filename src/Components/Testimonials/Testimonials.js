import React from 'react'

import './styles.css';
import Logo from '../../Images/college_names.png'
import Company from '../../Images/company.png'
import BigCompany from '../../Images/big_company.jpeg'
import Fortune500 from '../../Images/500.jpg'


const Testimonials = () => {
    return (
        <div className="Testimonials">
        <div className="two-line m-auto">
            <h1>To facilitate this Leader Classes :-</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4 flex-column">
        <h1 style={{fontFamily: 'Roboto, sans-serif'}} class="text-center m-auto">An animated element</h1>
            <h3 style={{fontFamily: 'Roboto, sans-serif'}}  className="text-center mt-3" >I. Relentlessly tracks & learns from</h3>
            <h4 className="text-blue text-center text-underline mt-4">100+ ​FULLTIME/ EXECUTIVE DEVELOPMENT PROGRAMS AT PRE-EMINENT UNIVERSITIES</h4>
            <h4 className="text-center text-underline mt-4">LIKE</h4>
            <img src={Logo} class="img-fluid" alt="none"/>
            <h4 className="text-blue text-center text-underline mt-4">ECONOMY & GLOBALIZATION ENABLERS</h4>
            <h4 className="text-center text-underline mt-4">LIKE</h4>
            <img src={Company} class="img-fluid" alt="none"/>
            <h4 className="text-blue text-center text-underline mt-4">50+ RENOWNED HIGH POTENTIAL (HI-PO) &‍ <br/> EXECUTIVE LEADERSHIP DEVELOPMENT PROGRAMS OF TOP TIER ORGANISATIONS</h4>
            <h4 className="text-center text-underline mt-4">LIKE</h4>
            <img src={BigCompany} class="img-fluid" alt="none"/>
            <h1 className="text-blue text-center mt-4">&</h1>
            <h4 className="text-blue text-center text-underline mt-4">THOUGHTS, ACTIONS, <br/> ADVICE, LIFE& INSPIRATION <br/> OF</h4>
            <h4 className="text-center text-underline mt-4">LIKE</h4>
            <img src={Fortune500} class="img-fluid mt-5" alt="none"/>
            <h4 className="text-center mt-5">OF THE FOREMOST</h4>
            
        </div>
        </div>
    )
}

export default Testimonials

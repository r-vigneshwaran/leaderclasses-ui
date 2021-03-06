import React from 'react'
import './styles.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-sm d-flex justify-content-between flex-row">
                <div className="coln m-sm-auto w-100">
                    <h3 className="text-white text-size-200">share via</h3>
                    <div className="icons d-flex justify-content-around w-25">
                    <i class="fa fa-linkedin fa-lg" style={{color:"white"}} aria-hidden="true"></i>
                    <i class="fa fa-twitter fa-lg" style={{color:"white"}} aria-hidden="true"></i>
                    <i class="fa fa-facebook fa-lg" style={{color:"white"}} aria-hidden="true"></i>
                    </div>
                </div>
                <div className="coln m-sm-auto w-100">
                    <h3 className="text-white text-size-200">Follow us</h3>
                    <div className="icons d-flex justify-content-around w-25">
                    <i class="fa fa-linkedin fa-lg" style={{color:"white"}} aria-hidden="true"></i>
                    <i class="fa fa-twitter fa-lg" style={{color:"white"}} aria-hidden="true"></i>
                    <i class="fa fa-instagram fa-lg" style={{color:"white"}} aria-hidden="true"></i>
                    </div>
                </div>
                <div className="coln  m-sm-auto">
                    <div className="contact d-flex flex-row justify-content-around w-50" >
                    <a href="https://#.com" className="text-decoration-none"><p className="text-white"> contact</p></a>
                        
                        <div className="vl"></div>
                        <a href="https://#.com" className="text-decoration-none"><p className="text-white"> terms</p></a>
                        <div className="vl"></div>
                        <a href="https://#.com" className="text-decoration-none"><p className="text-white"> policy</p></a>
                    </div>
                </div>
                </div>
                <div className="mt-0">
                    <p className="text-center text-white text-size-100 mb-0 mt-3">© 2020 LeaderClasses (Awesome Firms) & its owners. All rights reserved.</p>
                    <p className="text-center text-white text-size-100 mb-0 mt-0">All trademarks, logos & intellectual property featured belong to their respective owners. They do not endorse us in any way.</p>
                </div>
        </div>
    )
}

export default Footer

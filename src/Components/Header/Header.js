import React from 'react'
import useStyles from './styles'
import './Header.css';

const Header = ({HandleToggleClick}) => {
    const classes=useStyles();
    return (
        <div>
        <div className={classes.root}>
        <nav className="navbar navbar-expand-lg dark-light bg-dark shadow ">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-large">LeaderClasses</h1>
          <nav role="navigation" className="nav-menu d-flex justify-content-between">
            <a href="/about-us" className="nav-link-23 w-nav-link text-color-white" style={{maxWidth: '940px'}}>About</a>
            <a href="/programs" className="nav-link-23 w-nav-link text-color-white" style={{maxWidth: '940px'}}>Programs</a>
            <a href="/webinars" className="nav-link-23 w-nav-link text-color-white" style={{maxWidth:'940px'}}>Webinars</a>
            <a href="/careers" className="nav-link-23 add w-nav-link text-color-white" style={{maxWidth: '940px'}}>Careers</a>
          </nav>
            <button onClick={()=>HandleToggleClick()} className="navbar-toggler mt-2 " type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars fa-lg" style={{color:'white'}} aria-hidden="true"></i>
            </button>
        </div>
      </nav>
      <header className={classes.masthead}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="font-weight-light">LeaderClasses</h1>
              <p className="lead">Programs for your excellence</p>
              <button className="btn btn-primary">Know more & register</button>
            </div>
          </div>
        </div>
      </header>
      <nav className="customized-color">
      <center className="w-75">
      <p className="text-center text-color-white"> 
      Leader Classes harnesses the world's best Career Advancement & Leadership Development resources, helping , 
       you gain Expert Knowledge, Practical Guidance & Actionable Insights from Extraordinary Leaders & World  
        Class Institutions through Specialized, Affordable, Online & Offline Programs custom crafted to Accelerate  
         your Career & Business Success while transforming you into a better & more effective Leader</p> 
         </center>
      </nav>
      </div>
        </div>
    )
}

export default Header

import React,{useEffect} from 'react'

const SideDrawer = ({show}) => {
    
    useEffect(() => {

    },[])
    return (
        <nav className={show ? `side-drawer-open`: `side-drawer-close`}>
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Programs</a></li>
                <li><a href="/">Webinars</a></li>
                <li><a href="/">Careers</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer

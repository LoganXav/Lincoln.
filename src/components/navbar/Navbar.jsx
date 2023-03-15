import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    // we can use the pathname to know where we are in the application so we can set the logic for our navbar menu
    const {pathname} = useLocation()

    const isActive = () => {
       scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return () => {
            window.removeEventListener("scroll", isActive)            
        }      
    },[])

    //DUMMPY USER
    const currentUser = {
        id: 1,
        username: "Logan Xavier",
        isSeller: true
    }


    return ( 
        <div className={(active || pathname !== "/") ? "navbar active" : "navbar"}> 
            <div className="container">
                <div className="logo">
                    <Link className= "link" to="/">
                        <span className="text">Lincoln</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Lincoln Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {currentUser?.isSeller && <Link to= "/mygigs" className="link">Gigs</Link>}
                               {currentUser?.isSeller && <Link to= "/add" className="link">Add New Gig</Link>}
                                <Link to= "/orders" className="link">Orders</Link>
                                <Link to= "/messages" className="link">Messages</Link>
                                <Link to= "/" className="link">Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {(active || pathname!=="/") && (
            <>
                <hr />
                <div className="menu">
                    <Link to= "/" className= "link">Programming & Tech</Link>
                    <Link to= "/" className= "link">Engineering</Link>
                    <Link to= "/" className= "link">Digital Marketing</Link>
                    <Link to= "/" className= "link">Business</Link>
                    <Link to= "/" className= "link">Culture & Arts</Link>
                    <Link to= "/" className= "link">Music</Link>
                    <Link to= "/" className= "link">Lifestyle & Fashion</Link>
                    <Link to= "/" className= "link">Writing & Language</Link>
                    <Link to= "/" className= "link">Video & Animation</Link>
                </div>
            </>
            )}
        </div>
     );
}
 
export default Navbar;
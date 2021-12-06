import React, { useContext } from 'react'
import logo from '../images/ecommerce.svg'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'

export const Navbar = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        <div>
            {/* <div className='navbox'>
                <div className='leftside'>
                    <Link to="/" className='navlink'>
                    <img src={logo} alt="" />
                    </Link>
                </div>
                {!user && <div className='rightside'>
                    <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                    <span><Link to="login" className='navlink'>LOGIN</Link></span>
                </div>}
                {user && <div className='rightside'>
                    <span><Link to="/profile" className='navlink'>{user}</Link></span>
                    <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                    <span className='no-of-products'>{totalQty}</span>
                    <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
                </div>}
            </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link to="/" className='navlink'>
                                    <img src="assets/images/yct.png" width="80px" alt="Logo" />
                                    <span><h3 className="text-dark">Yabatech Corporative</h3></span>
                                </Link> 
                                {/* <!-- Logo --> */}
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="bar-icon "></span>
                                    <span className="bar-icon"></span>
                                    <span className="bar-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ml-auto">
                                       
                                        
                                          
                                        
                                        {/* {user && <div className='rightside'>
                                            <span><Link to="/profile" className='navlink text-dark' style={{marginLeft:"5px",marginRight:"5px"}}>{user}</Link></span>
                                            <span><Link to="cartproducts" className='navlink text-dark' style={{marginLeft:"5px",marginRight:"5px"}}><Icon icon={cart} /></Link></span>
                                            <span className='no-of-products text-dark' style={{marginLeft:"5px",marginRight:"5px"}}>{totalQty}</span>
                                            <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
                                            </div>
                                        } */}
                                       
                                    </ul> 
                                    
                                </div>
                                <div className>
                                    {!user &&
                                        <div className='rightside'>
                                            <span><Link to="signup" className='navlink text-dark' style={{marginLeft:"5px",marginRight:"5px"}}>SIGN UP</Link></span>
                                            <span><Link to="login" className='navlink text-dark' style={{marginLeft:"5px",marginRight:"5px"}}>LOGIN</Link></span>
                                        </div>
                                    }
                                    {user && <div className='rightside'>
                                            <span><Link to="/profile" className='navlink text-dark' style={{marginLeft:"5px",marginRight:"5px"}}>{user}</Link></span>
                                            <span><Link to="cartproducts" className='navlink text-dark' style={{marginLeft:"5px",marginRight:"5px"}}><Icon icon={cart} /></Link></span>
                                            <span className='no-of-products text-dark' style={{marginLeft:"5px",marginRight:"5px"}}>{totalQty}</span>
                                            <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
                                            </div>
                                        }
                                </div>
                            </nav> 
                            {/* <!-- navbar --> */}
                        </div>
                    </div> 
                    {/* <!-- row --> */}
                </div> 
                {/* <!-- container --> */}
        </div>
        
    )
}

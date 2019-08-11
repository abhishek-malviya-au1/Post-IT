import React from 'react';
import { store, stateMapper} from "../store/store.js";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

class NavBarComponent extends React.Component{
        render(){
                return(
                   
                        <nav className='hnavbar'>
                                <div className='hrow'>
                                    <img src='/Logo.png.ico' alt='POST IT' className='hlogo'/>
                                    <ul className="hmain-nav">
                                        <li><Link className='hnav-ani' to='/dashboard'>Create</Link></li>
                                        <li><Link className='hnav-ani' to='/dashboard/viewposts'>View</Link></li>
                                        <li><Link className='hbtn hbtn-full' to='/logout'>Logout</Link></li>
                                    </ul>
                                </div>
                        </nav>
                   
                   
        )
    }
}

let NavBar=connect(stateMapper)(NavBarComponent)

export default NavBar;
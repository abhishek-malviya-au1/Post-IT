import React from 'react';
import {Link} from'react-router-dom';


class LandingPage extends React.Component{
    render(){
        return(
            <div className='landing'>
                <header>
                    <nav className='hnavbar'>
                        <div className='hrow'>
                            <img src='./Logo.png.ico' alt='POST IT' className='hlogo'/>
                            <ul className="hmain-nav">
                                <li><Link className='hnav-ani' to='/'>Features</Link></li>
                                <li><Link className='hnav-ani' to='/'>Resources</Link></li>
                                <li><Link className='hnav-ani' to='/'>About</Link></li>
                                <li><Link className='hbtn hbtn-full' to='/login'>Login</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className='hero-text-box'>
                        <h1>Now post anything on all your apps <br/> in a single click</h1>
                        <Link className="hbtn hbtn-full" to='/signup'>Post something now</Link>
                        <Link className="hbtn hbtn-ghost"to='/'>Show me more</Link>
                    </div>
                </header>

                <section className='section-features'>
                    <div className="container">
                        <div className='row'>
                                <h2 className='mx-auto'>Create once &mdash; Post thrice</h2>
                                <p className='long-description'>
                                    Hello , we're POST IT, your new premium social media management companion. We know you're always busy,
                                    No time for creating the same post again and again. So let us take care of that , we're really good at it,
                                    we promise.
                                </p>
                        </div>
                        <div className="row">
                            <div className='col-md-4 hbox'>
                                    <i className='icon-big'><ion-icon name="megaphone"></ion-icon></i>
                                    <h3>Multiple platforms!</h3>
                                    <p>
                                    You can find multiple social media platforms here
                                    like facebook, instagram and twitter we have included these three famous
                                    social media platforms
                                    </p>
                            </div>
                            <div className='col-md-4 hbox'>
                                    <i className='icon-big'><ion-icon className='icon-big' name="clock"></ion-icon></i>
                                <h3>Anywhere Anytime!</h3>
                                <p>
                                    No need to switch between devices and accounts, we're available on all the devices.
                                    You can create your content anywhere on any device
                                </p>
                            </div>
                            <div className='col-md-4 hbox'>
                                    <i className='icon-big'><ion-icon className='icon-big' name="lock"></ion-icon></i>
                                    <h3>100% safe</h3>
                                <p>
                                    All your information and content is protected and kept safe.
                                    You can just create your content anytime and can leave it as it is it will be safe.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
            
        
    }
}

export default LandingPage;
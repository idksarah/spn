
import saengJui from '../assets/highExposure/transformedSaengjui.jpg'

import {Link} from "react-router-dom"
import { useState } from 'react';

export default function Home () {
    const [show, setShow] = useState(false);
    
    function toggleShow() {
        setShow(!show)
    }
    return (
        <>        
            <section className='bg1'>
            <h1 className='italic'>HEY</h1>
            <p>what are you looking for?</p>
            </section>
            <section className='bg2'>
            <p>sooo...</p>
            <p>uh.</p>
            </section>'
            <section className='transition'>
            <h2>ah. nvm.</h2>
            <h2 style={{paddingTop: '20em'}}>you're on my site. it's about me, over here, cowboy.</h2>
            </section>
            <section className='spn'>
            <h1>sarah park ngai</h1>
            <h2 className='cursor' onClick={toggleShow}>contact info</h2>
            <section id='contact' className={`${show ? '': ' hidden '}`}>
                <ul>
                    <li>sarahn@hackclub.com</li>
                    <li>@idksarah on <a href="https://github.com/idksarah">github</a> and <a href="https://hackclub.slack.com/team/U07CU1WD35J">the hack club slack</a></li>
                    <li>sarah park ngai on <a href="https://www.linkedin.com/in/sarah-ngai-28b2072ba/">linkedin lol</a></li>
                    <li>idkksarah on disc</li>
                    <li>dm me if you need other contact info</li>
                </ul>
            </section>
            <section className='saengJuiSection'>
                <img src={saengJui} className='saengJui' alt="saeng jui" style={{height: '40em'} }></img>
                <p>← my cat, by the way</p>
            </section>
            <h2 className='paragraph'>i’m a 16 year old korean-chinese girl. i’m not really sure where i want to go. i do robotics and am attempting usaco. i’m currently learning about computer graphics and computer vision.  i like c++</h2>
            <h2 className='paragraph'>current thoughts? or quote? or whatever? </h2>
            <p>→ if you don’t stick to what you care about, you’ll be stuck with something you don’t. either way, life demands commitment.</p>
            <h2>directory</h2>
            <ul>
                <li className='cursor'>
                    <Link to="/art">art</Link>
                </li>
                <li className='cursor'>
                    <Link to="/media">media i've consumed and would like others to, too</Link>
                </li>
                <li className='cursor'>
                    <Link to="/photography">photography (from my iphone)</Link>
                </li>
                <li className='cursor'>
                    <Link to="/writings">a collection of bad writing because one day i'd like to write something good</Link>
                </li>
            </ul>
            </section>
            <section className='footer'>
                {/* <p>made with slight distaste by yours truly</p> */}
            </section>
        </>
    );
}
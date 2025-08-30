
import saengJui from '../assets/saeng-jui.jpg'
import footer from '../assets/footer.jpg'

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
            <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>ah. nvm.</h2>
            <h2 style={{paddingTop: '20em'}}>you're on my site. it's about me, over here, cowboy.</h2>
            </section>
            <section>
            <h1>sarah park ngai</h1>
            <h2 className='cursor' onClick={toggleShow}>contact info</h2>
            <section id='contact' className={`cursor ${show ? '': ' hidden '}`}>
                <ul>
                    <li>sarahn@hackclub.com</li>
                    <li>@idksarah on github and slack</li>
                    <li>idkksarah on disc</li>
                    <li>dm me if you need other contact info</li>
                </ul>
            </section>
            <img src={saengJui} alt="saeng jui"></img>
            <h2 className='paragraph'>i’m a 16 year old korean-chinese californian girl. i’m not really sure where i want to go. i do robotics and am attempting usaco. i’m currently learning about computer graphics and computer vision.  i like c++</h2>
            <h2 className='paragraph'>current thoughts? or quote? or whatever? <br></br>
            → if you don’t stick to what you care about, you’ll be stuck with something you don’t. either way, life demands commitment.</h2>
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
                    <Link to="/writing">a collection of bad writing because one day i'd like to write something good</Link>
                </li>
            </ul>
            </section>
            <section className='footer'>

            </section>
        </>
    );
}
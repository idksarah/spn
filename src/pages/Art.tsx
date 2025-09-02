import Drawing from "../components/Drawing";
import {Link} from "react-router-dom"

import anatomy from '../assets/drawings/anatomy.jpg';
import ascend from '../assets/drawings/ascend.jpg';
import dore from '../assets/drawings/dore.jpg'
import heidi from '../assets/drawings/heidi.jpg'
import hyperionTee1 from '../assets/drawings/hyperion-tee-1.jpg'
import hyperionTee2 from '../assets/drawings/hyperion-tee-2.jpg'
import labubur from '../assets/drawings/labubur.jpg'
import leon0 from '../assets/drawings/leon-0.jpg'
import leon1 from '../assets/drawings/leon-1.jpg'
import leon2 from '../assets/drawings/leon-2.jpg'
import railway from '../assets/drawings/railway.png'
import ussr from '../assets/drawings/ussr.jpg'

import bg1 from '../assets/bg-1.png'
import bg2 from '../assets/bg-2.png'

export default function Art() {
  return (
    <>
    <h2><Link to="../">RETURN HOME</Link></h2>
      <h2>some things i've drawn recently. or semi-recently</h2>
      <section className="drawings">
        <Drawing img={bg1} caption='bg1'/>
        <Drawing img={bg2} caption='bg2'/>
        <Drawing img={hyperionTee1} caption="9614 tee design" />
        <Drawing img={hyperionTee2} caption="9614 tee design"/>
        <Drawing img={heidi} caption="heidi"/>
        <Drawing img={dore} caption='dore'/>
        <Drawing img={railway} caption='railway'/>
        <Drawing img={labubur} caption='bg1'/>
        <Drawing img={anatomy} caption='bg1'/>
        <Drawing img={leon0} caption='bg1'/>
        <Drawing img={leon1} caption='bg1'/>
        <Drawing img={leon2} caption='bg1'/>
        <Drawing img={ussr} caption='bg1'/>
        <Drawing img={ascend} caption='bg1'/>
      </section>
    </>
  );
}

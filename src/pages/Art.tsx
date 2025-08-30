import Drawing from "../components/Drawing";

import footer from '../assets/footer.jpg';
import bg1 from '../assets/bg-1.png'
import bg2 from '../assets/bg-2.png'
import hyperionTee1 from '../assets/drawings/hyperion-tee-1.jpg'
import hyperionTee2 from '../assets/drawings/hyperion-tee-2.jpg'
import heidi from '../assets/drawings/heidi.jpg'
import dore from '../assets/drawings/dore.jpg'
import railway from '../assets/drawings/railway.png'

export default function Art() {
  return (
    <>
      <h2>some things i've drawn recently. or semi-recently</h2>
      <section className="drawing-grid">
        <Drawing img={bg1} caption='bg1'/>
        <Drawing img={bg2} caption='bg2'/>
        <Drawing img={hyperionTee1} caption="9614 tee design" />
        <Drawing img={hyperionTee2} caption="9614 tee design"/>
        <Drawing img={heidi} caption="heidi"/>
        <Drawing img={dore} caption='dore'/>
        <Drawing img={railway} caption='railway'/>
      </section>
    </>
  );
}

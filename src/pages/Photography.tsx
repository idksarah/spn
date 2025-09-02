
import {Link} from "react-router-dom"
import Photo from "../components/Photo";

import bostonChinatown from '../assets/photos/boston-chinatown.jpg'
import bostonDucc from '../assets/photos/boston-ducc.jpg'
import bostonFire from '../assets/photos/boston-fire.jpg'
import bostonMonke from '../assets/photos/boston-monke.jpg'
import bostonPoker from '../assets/photos/boston-poker.jpg'

import ftc0 from '../assets/photos/ftc-0.jpg'
import ftc1 from '../assets/photos/ftc-1.jpg'

import gasStation from '../assets/photos/gas-station.jpg'

import juice0 from '../assets/photos/juice-0.jpg'
import juice1 from '../assets/photos/juice-1.jpg'
import juice2 from '../assets/photos/juice-2.jpg'
import juice3 from '../assets/photos/juice-3.jpg'
import juice4 from '../assets/photos/juice-4.jpg'

import michiana from '../assets/photos/michiana.jpg'
import missionPeak from '../assets/photos/mission-peak.jpg'
import movies from '../assets/photos/movies.jpg'
import roadtrip0 from '../assets/photos/roadtrip-0.jpg'
import saengJui from '../assets/photos/saeng-jui.jpg'
import saengJuiNewYears from '../assets/photos/saeng-jui-new-years.jpg'

import totes from '../assets/photos/totes.jpg'
import tutty0 from '../assets/photos/tutty-0.jpg'

import vt1 from '../assets/photos/vt-1.jpg'
import vt2 from '../assets/photos/vt-2.jpg'
import vt3 from '../assets/photos/vt-3.jpg'
import vt4Montreal from '../assets/photos/vt-4-f1-montreal.jpg'
import vt5MtHalo from '../assets/photos/vt-5-mt-halo.jpg'


export default function Photography () {
    return (
        <>
            <h2><Link to="../">RETURN HOME</Link></h2>
            <h2>bad photography (mainly from my iphone)</h2>
            <section className='photos'>
                <Photo img={bostonChinatown}/>
                <Photo img={bostonDucc}/>
                <Photo img={bostonFire}/>
                <Photo img={bostonMonke}/>
                <Photo img={bostonPoker}/>
                <Photo img={ftc0}/>
                <Photo img={ftc1}/>
                <Photo img={gasStation}/>
                <Photo img={juice0}/>
                <Photo img={juice1}/>
                <Photo img={juice2}/>
                <Photo img={juice3}/>
                <Photo img={juice4}/>
                <Photo img={michiana}/>
                <Photo img={missionPeak}/>
                <Photo img={movies}/>
                <Photo img={roadtrip0}/>
                <Photo img={saengJui}/>
                <Photo img={saengJuiNewYears}/>
                <Photo img={totes}/>
                <Photo img={tutty0}/>
                <Photo img={vt1}/>
                <Photo img={vt2}/>
                <Photo img={vt3}/>
                <Photo img={vt4Montreal}/>
                <Photo img={vt5MtHalo}/>
            </section>
        </>
    );
}
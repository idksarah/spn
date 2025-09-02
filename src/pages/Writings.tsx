import Writing from "../components/Writing";
import {Link} from "react-router-dom"

export default function Writings () {
    return (
        <>
            <h2><Link to="../">RETURN HOME</Link></h2>
            <section className='writings'>
                <Writing
                title='pagoda gardens'
                content='<p>in the overbearing florida humidity, nestled between the intersection of a local two-lane road and i-95, hidden behind slanted chain-link fencing and a murky lake with overgrown weeds, sits pagoda gardens.</p>
                <p>the outside heat is smothering, but stepping inside, beneath the curved green roof and past the granite lions, over the thin threshold, it is cool, the carpet is soft, and it is empty. there is old candy in a jar, and the smell of herbal medicines still linger in the stale air. there are fading mountain paintings, yellowing smog checks, and aging spices in the cupboards. </p>    
                <p>
                it is their absence that asks where they are, when they are coming back home. it is silence that answers.</p>'
                ></Writing>
            </section>
        </>
    );
}
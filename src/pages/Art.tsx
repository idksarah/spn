import Drawing from "../components/Drawing";
import footer from '../assets/footer.jpg';

export default function Art() {
  return (
    <>
      <h2>some things i've drawn recently. or semi-recently</h2>
      <section className="drawing-grid">
        <Drawing img={footer} caption="gooning" />
        <Drawing img={footer} />
        <Drawing img={footer} />
        <Drawing img={footer} />
        <Drawing img={footer} />
      </section>
    </>
  );
}

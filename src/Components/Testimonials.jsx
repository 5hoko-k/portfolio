import { testimonials } from "../Data";

function Testimonials() {
    return (
        <>
        <section id='testimonials' className="section-height">
            <h2>Testimonials</h2>
            <div className="grid">
                {testimonials.map((tMonial) => {
                    return (
                        <blockquote key={tMonial.name}>
                            <img src='' alt='' />
                            {tMonial.quote}
                            <footer>
                                <cite>{tMonial.name} {tMonial.company}</cite>
                            </footer>
                        </blockquote>
                    )
                })}
            </div>
        </section>
        </>
    )
}
export default Testimonials;
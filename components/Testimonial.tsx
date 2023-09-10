import { TestimonialSlider } from '.'

interface ITestimonialProps {}

const Testimonial: React.FunctionComponent<ITestimonialProps> = (props) => {
  return (
    <section className="section flex items-center" id="testimonial">
      <div className="container mx-auto">
        <TestimonialSlider />
      </div>
    </section>
  )
}

export default Testimonial

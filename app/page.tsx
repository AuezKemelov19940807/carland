import {
  Header,
  Hero,
  Cars,
  About,
  Why,
  Testimonial,
  Contact,
  Footer,
  BackToTopBtn,
} from '@/components'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <main className="max-w-[1928px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </main>
  )
}

export default Home

import { Brands, CarSlider } from '.'

interface ICarsProps {}
const Cars: React.FC<ICarsProps> = () => {
  return (
    <section className="h-screen flex items-center pt-32" id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  )
}

export default Cars

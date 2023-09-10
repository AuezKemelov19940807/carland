'use client'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react'

//swiper style
import 'swiper/css'

//next image
import Image from 'next/image'

//next variants
import fadeInDynaic from '@/variantsDynamic'

//framer
import { motion } from 'framer-motion'

//icons
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const cars = [
  {
    type: 'Hatchback',
    name: 'Ford Focus',
    price: 29,
    stars: 3.5,
    image: 'images/carSlider/car01.svg',
    info: [
      {
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Manual',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
  {
    type: 'Sedan',
    name: 'Toyaoto Carolla',
    price: 25,
    stars: 5,
    image: 'images/carSlider/car02.svg',
    info: [
      {
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Manual',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
  {
    type: 'SUV',
    name: 'Honda CR-V',
    price: 35,
    stars: 4.7,
    image: 'images/carSlider/car03.svg',
    info: [
      {
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Avtomatic',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
  {
    type: 'Convertible',
    name: 'Mazda MX-5',
    price: 32,
    stars: 4.9,
    image: 'images/carSlider/car01.svg',
    info: [
      {
        icon: 'icons/carSlider/gearshift.svg',
        text: 'Avtomatic',
      },
      {
        icon: 'icons/carSlider/seat.svg',
        text: '5 Seats',
      },
      {
        icon: 'icons/carSlider/gas.svg',
        text: 'Gas',
      },
      {
        icon: 'icons/carSlider/engine.svg',
        text: '1600 HP',
      },
      {
        icon: 'icons/carSlider/wheel.svg',
        text: 'Front',
      },
    ],
  },
]

interface ICarSliderProps {}

const CarSlider: React.FC<ICarSliderProps> = (props) => {
  return (
    <div className="container mx-auto">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={fadeInDynaic('up', 0.3)}
              initial="hidden"
              custom={index}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="max-w-[385px] mx-auto sm:mx-0"
            >
              <Image src={car.image} alt="car" width={385} height={284} />
              <div className="flex justify-between">
                <div>
                  <div className="text-[13px] text-secondary uppercase">
                    {car.type}
                  </div>
                  <h3 className="text-lg uppercase fon-bold">{car.name}</h3>
                  <div className="mb-10 text-accent font-semibold uppercase">
                    {car.price}/day
                  </div>
                </div>
                {/* stars */}
                <div>
                  <div className="flex h-max gap-x-2 text-accent">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3 xl:gap-x- w-max mb-10">
                {car.info.map((item, index) => (
                  <div
                    className="flex flex-col items-center text-center"
                    key={index}
                  >
                    <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-2">
                      <Image
                        src={item.icon}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                    </div>
                    <div>{item.text}</div>
                  </div>
                ))}
              </div>
              <button className="btn btn-accent btn-lg">See details</button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarSlider

'use client'
//next image
import Image from 'next/image'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react'

//swiper style
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import { Pagination } from 'swiper/modules'

//import icons
import { FaQuoteLeft } from 'react-icons/fa'

// framer motion
import { motion } from 'framer-motion'

//variants
import fadeIn from '@/variants'

//data
const testimonialData = [
  {
    message:
      'They trule exceeded my expectations and made my car rental experience a delight',
    avatar: '/images/testimonial/avatar.png',
    name: 'Jane Doe',
    job: 'Photographer & Videographer',
  },
  {
    message:
      'They trule exceeded my expectations and made my car rental experience a delight',
    avatar: '/images/testimonial/avatar.png',
    name: 'Jane Doe',
    job: 'Photographer & Videographer',
  },
]

interface ITestimonialSliderProps {}

const TestimonialSlider: React.FC<ITestimonialSliderProps> = (props) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[420px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person

          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <Image
                  src={avatar}
                  width={64}
                  height={64}
                  alt="avatar"
                  className="mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary"> {job} </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </motion.div>
  )
}

export default TestimonialSlider

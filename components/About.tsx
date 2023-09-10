'use client'

//next image
import Image from 'next/image'

import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from 'react-icons/md'

//react count up
import CountUp from 'react-countup'

//react intersection observer
import { useInView } from 'react-intersection-observer'
//motion
import { motion } from 'framer-motion'

//variants
import fadeIn from '@/variants'

interface IAboutProps {}

const About: React.FC<IAboutProps> = () => {
  const [ref, inView] = useInView({ threshold: 0.5 })

  return (
    <section className="section flex  items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* image */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              src={'/images/about/car01.png'}
              width={600}
              height={448}
              alt="car"
              className="rounded-[20px]"
            />
          </motion.div>
          {/* text & stats */}
          <div className="flex flex-1 items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Car services simplified.
              </motion.h2>
              <motion.p
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Rent, choose, and repair with ease. Our convenient locations,
                diverse car types, and relieable repair points ensure a seamless
                car experience.
              </motion.p>
              {/* stats */}
              <div className="flex items-center gap-x-4 xl:gap-x-8 mb-12">
                {/* car types */}
                <motion.div
                  variants={fadeIn('left', 0.3)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }}
                  className="flex flex-col w-[100px]"
                >
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black md-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </motion.div>
                {/* rent  outlets*/}
                <motion.div
                  variants={fadeIn('left', 0.5)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }}
                  className="flex flex-col w-[100px]"
                >
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black md-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    rental <br /> outlets
                  </div>
                </motion.div>
                {/* repair points */}
                <motion.div
                  variants={fadeIn('left', 0.7)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }}
                  className="flex flex-col w-[100px]"
                >
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black md-2">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    rapair <br /> points
                  </div>
                </motion.div>
              </div>
              {/* btn */}
              <motion.button
                variants={fadeIn('up', 0.7)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                See all cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

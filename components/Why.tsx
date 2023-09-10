'use client'
//next image
import Image from 'next/image'

// framer motion
import { motion } from 'framer-motion'

//variants
import fadeIn from '@/variants'

//icons
import { MdHandshake, MdKey, MdTrendingUp } from 'react-icons/md'
interface IWhyProps {}

const Why: React.FunctionComponent<IWhyProps> = (props) => {
  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Unmatched excellence and customer satisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="text-center max-w-[680px] mb-2 mx-auto"
        >
          Our dedication to providing exceptional services sets up apart from
          the competition. From the moment your engage with us, we strive to
          exceed your expectations in every interaction.
        </motion.p>
        {/* car image */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image
            src={'/images/why/car.svg'}
            width={1060}
            height={420}
            alt="car"
          />
        </motion.div>
        {/* grid items */}
        <div className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]">
          {/* item 1 */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col items-center text-center max-w-[160px] p-2 xl:p-0 xl:max-w-none"
          >
            <MdKey className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Rend simply and quickly </h3>
            <p className="hidden xl:flex">
              We proritiza your need we go above and beyond to ensure your
              experience with us is nothing short of outstanding
            </p>
          </motion.div>
          {/* item 2 */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col items-center text-center max-w-[160px] p-2 xl:p-0 xl:max-w-none"
          >
            <MdTrendingUp className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Modern & well maintained vihicles </h3>
            <p className="hidden xl:flex">
              We proritiza your need we go above and beyond to ensure your
              experience with us is nothing short of outstanding
            </p>
          </motion.div>
          {/* item 3 */}
          <motion.div
            variants={fadeIn('up', 0.9)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col items-center text-center max-w-[160px] p-2 xl:p-0 xl:max-w-none"
          >
            <MdHandshake className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Prompt and flexible services </h3>
            <p className="hidden xl:flex">
              We proritiza your need we go above and beyond to ensure your
              experience with us is nothing short of outstanding
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Why

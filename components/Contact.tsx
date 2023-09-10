'use client'
//next image
import Image from 'next/image'

//framer motion
import { motion } from 'framer-motion'

//variants
import fadeIn from '@/variants'

interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
  return (
    <section
      className="pt-24 xl:pt-52 pb-0 flex items-end bg-[#b2b7c2]/10 "
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* text */}
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Download our App now and hit the road with ease
              </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-5 xl:mb-10"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                incidunt repellat aliquid quidem iste est quia quis quae dicta?
                Asperiores.
              </motion.p>
              {/* btns */}
              <motion.div
                variants={fadeIn('right', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="flex gap-x-3 justify-center xl:justify-start mb-2 xl:mb-4"
              >
                <button className="btn-cta">
                  <Image
                    src="/icons/buttons/app-store.svg"
                    width={131}
                    height={34}
                    alt="App Store Icon"
                  />
                </button>
                <button className="btn-cta">
                  <Image
                    src="/icons/buttons/google-play.svg"
                    width={136}
                    height={36}
                    alt="goolgle Icon"
                  />
                </button>
              </motion.div>
            </div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 1)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-1 justify-center order-1 xl:order-none"
          >
            <Image
              src={'/images/cta/phone.svg'}
              width={320}
              height={640}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

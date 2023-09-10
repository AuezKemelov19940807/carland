'use client'

//next image
import Image from 'next/image'

// variants fadeInDynamic

import fadeInDynaic from '@/variantsDynamic'

// framer motion
import { motion } from 'framer-motion'

interface IBrandsProps {}

const brands = [
  { image: 'icons/brands/audi.svg', width: 81, height: 50 },
  { image: 'icons/brands/bmw.svg', width: 60, height: 60 },
  { image: 'icons/brands/ford.svg', width: 86, height: 32 },
  { image: 'icons/brands/mazda.svg', width: 62, height: 50 },
  { image: 'icons/brands/mercedes.svg', width: 60, height: 60 },
  { image: 'icons/brands/skoda.svg', width: 60, height: 60 },
  { image: 'icons/brands/vw.svg', width: 60, height: 60 },
]

const Brands: React.FC<IBrandsProps> = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl;flex-wrap xl:gap-x-6 xl:justify-between">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={fadeInDynaic('left', 0.3)}
              initial="hidden"
              custom={index}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Image
                src={brand.image}
                width={brand.width}
                height={brand.height}
                alt="Icon"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands

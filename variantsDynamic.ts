const fadeInDynaic = (direction: string, delay: number) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      },
      show: (i: number) => ({
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          delay: i * delay,
          duration: 1.2,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      }),
    }
  }

export default fadeInDynaic
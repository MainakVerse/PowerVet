type direction = 'up' | 'left' | 'down' | 'right'

export const fadeIn = (direction: direction, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      opacity: 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      transition: {
        type: 'tween',
        duration: 1,
        delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }
}
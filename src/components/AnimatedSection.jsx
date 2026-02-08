import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const easeCurve = [0.25, 0.1, 0.25, 1]

const directionMap = {
  up:    { y: 50, x: 0 },
  down:  { y: -50, x: 0 },
  left:  { y: 0, x: -50 },
  right: { y: 0, x: 60 },
  none:  { y: 0, x: 0 },
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.9,
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })
  const d = directionMap[direction] || directionMap.up

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: d.y, x: d.x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration, delay, ease: easeCurve }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

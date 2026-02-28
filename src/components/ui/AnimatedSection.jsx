import { motion } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 0.7,
  variants = defaultVariants,
  style,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

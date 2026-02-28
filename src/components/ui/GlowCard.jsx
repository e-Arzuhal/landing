import { motion } from 'framer-motion'

export default function GlowCard({ children, style, className }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(200,150,62,0.18), 0 4px 16px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-gray-200)',
        padding: '2rem',
        cursor: 'default',
        boxShadow: 'var(--shadow-sm)',
        transition: 'border-color 0.25s ease',
        ...style,
      }}
      onHoverStart={e => { e.target.style.borderColor = 'rgba(200,150,62,0.35)' }}
      onHoverEnd={e => { e.target.style.borderColor = 'var(--color-gray-200)' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

import { motion } from 'motion/react'

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed inset-0 bg-[#0C0E12] flex items-center justify-center z-50'
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className='w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full'
      />
    </motion.div>
  )
}

export default Loading
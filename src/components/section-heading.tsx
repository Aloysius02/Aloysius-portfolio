import {
  motion
} from "framer-motion"


export default function SectionHeader({
  title,
  children
}: {
  title: string,
  children: React.ReactNode
}) {
  return (
    <motion.div
      className="text-left mb-16"
      initial={ { opacity: 0, y: 20 }}
      whileInView={ { opacity: 1, y: 0 }}
      transition={ { duration: 0.8 }}
      viewport={ { once: true }}
      >
      <h2 className="text-left text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="w-20 h-1 bg-primary mb-6" />
      <p className="text-left max-w-2xl text-muted-foreground">
        {children}
      </p>
    </motion.div>
  )
}
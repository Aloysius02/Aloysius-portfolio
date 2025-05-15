import {
  motion
} from "framer-motion";
import {
  AnimatedSection
} from "./AnimatedSection";
import Marquee from "@/components/ui/marque";
import {
  cn
} from "@/lib/utils";

import {
  Testimonials,
} from "@/constant/testimonial"


const firstRow = Testimonials.slice(0, Testimonials.length / 2);
const secondRow = Testimonials.slice(Testimonials.length / 2);


export default function TestimonialsComp () {
  return (
    <AnimatedSection className="py-20 w-full" id="testimonials">

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={ { opacity: 0, y: 20 }}
          whileInView={ { opacity: 1, y: 0 }}
          transition={ { duration: 0.8 }}
          viewport={ { once: true }}
          >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Don't just take my word for it - here's what clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <motion.div
          initial={ { opacity: 0, y: 20 }}
          whileInView={ { opacity: 1, y: 0 }}
          transition={ { duration: 0.8 }}
          viewport={ { once: true }}
          className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]" applyMask={false}>
            {firstRow.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </Marquee>
          <Marquee reverse applyMask={false} pauseOnHover className="[--duration:30s]">
            {secondRow.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </motion.div>

      </div>
    </AnimatedSection>
  );
};



  function TestimonialCard({
    testimonial
  }: {
    testimonial: any
  }) {
    return (
      <div
        className={cn(
          "relative h-full w-64 md:w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
        >

        {/* Content */}
        <blockquote className="text-foreground/80 mb-6 text-sm">
          "{testimonial.content}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
            <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            />
        </div>
        <div>
          <p className="font-medium capitalize">
            {testimonial.name}
          </p>
        </div>
      </div>
    </div>
  )
}
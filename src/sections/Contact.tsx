import {
  motion
} from "framer-motion";
import {
  Mail,
  Phone
} from "lucide-react";
import ContactForm from "@/components/contactForm";
import SectionHeader from "@/components/section-heading.tsx";

export default function Contact() {
  const contactInfo = [{
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "chinemeremaloysius@gmail.com",
    link: "mailto:chinemeremaloysius@gmail.com",
  },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+(234) 810 843 7371",
      link: "tel:+2348108437371",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-accent/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="section-container relative z-10">

        <SectionHeader
          title="Contact Me"
          >

          Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities. Whether you need a responsive website, a full-stack web application, or want to collaborate on something innovative, let's connect and create something amazing.
          <br />
        Drop me a message, and I'll get back to you within 24 hours.
      </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={ { opacity: 0, x: -50 }}
          whileInView={ { opacity: 1, x: 0 }}
          transition={ { duration: 0.8 }}
          viewport={ { once: true }}
          >
          <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
          <ContactForm />
        </motion.div>

        <motion.div
          initial={ { opacity: 0, x: 50 }}
          whileInView={ { opacity: 1, x: 0 }}
          transition={ { duration: 0.8 }}
          viewport={ { once: true }}
          className="flex flex-col h-full"
          >
          <h3 className="text-2xl font-medium mb-6">Contact Information</h3>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="flex items-center gap-4 p-4 border border-border  rounded-lg bg-accent hover:bg-accent/70 transition-colors"
                whileHover={ { x: 5 }}
                initial={ { opacity: 0, y: 20 }}
                whileInView={ { opacity: 1, y: 0 }}
                transition={ { duration: 0.5, delay: index * 0.1 }}
                viewport={ { once: true }}
                >
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {item.title}
                  </p>
                  <p className="font-medium">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>


        </motion.div>
      </div>
    </div>
  </section>
);
}
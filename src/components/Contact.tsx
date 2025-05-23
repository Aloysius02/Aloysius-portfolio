import {
  motion
} from "framer-motion";
import {
  Mail,
  Phone
} from "lucide-react";
import ContactForm from "./contactForm";


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
        <motion.div
          className="text-center mb-16"
          initial={ { opacity: 0, y: 20 }}
          whileInView={ { opacity: 1, y: 0 }}
          transition={ { duration: 0.8 }}
          viewport={ { once: true }}
          >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out
            through the form below or directly via email or phone.
          </p>
        </motion.div>

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
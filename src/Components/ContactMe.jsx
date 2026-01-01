import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React, { useRef } from "react";
import emailJs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactMe = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Mail sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Something went wrong ❌");
        }
      );
  };

  return (
    <section className="py-24 px-4 bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* LEFT */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">
                      nikjain2504@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-muted-foreground">+91 95560 69181</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-muted-foreground">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
              <a
                href="https://www.linkedin.com/in/nikunjjain25042000/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-3 rounded-full bg-primary text-white hover:scale-110 transition"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border"
              />

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-md border"
              />

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

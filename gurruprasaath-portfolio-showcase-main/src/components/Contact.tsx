
import { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - you'll need to set these up
      const serviceId = 'service_exn3rfi';
      const templateId = 'template_n7r3n2m';
      const publicKey = 'PuoLXaOThDKV76uLs';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Gurruprasaath M K',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly at gurru9440@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a chat about technology!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:gurru9440@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                    gurru9440@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+916382911708" className="text-blue-600 hover:text-blue-700 transition-colors">
                    +91 6382911708
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Find me on</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/gurruprasaath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors hover-scale"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gurruprasaath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors hover-scale"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://leetcode.com/u/23ADR052/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
  id="leet"
  src="data:image/png;base64,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" 
  alt="LeetCode"
  style={{
    width: "50px",
    height: "50px",
    backgroundColor: "#000",
    padding: "8px",
    borderRadius: "10px",
    objectFit: "contain"
  }}
/>

                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send me a message</h3>
            
            
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover-scale"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

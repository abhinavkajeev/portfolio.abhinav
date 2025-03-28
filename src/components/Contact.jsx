import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Get current time
    const currentTime = new Date().toLocaleString();

    const templateParams = {
      name: formData.name,
      time: currentTime,
      message: formData.message
    };

    emailjs.send(
      import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      templateParams,
      import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again.');
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'abhinavajeev@gmail.com',
      link: 'mailto:abhinavajeev@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+91 9344790864',
      link: 'tel:9344790864'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Chennai, India',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-yellow-300 drop-shadow-lg">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-0 md:px-50">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.title === 'Location' ? '_blank' : ''}
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/20 text-yellow-400 mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">{info.title}</h3>
              <p className="text-white/80">{info.content}</p>
            </motion.a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/10 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div 
                className="text-center text-green-400 py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <>
                {submitError && (
                  <div className="mb-4 text-red-400 text-center">
                    {submitError}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      Send Message <Send size={18} className="ml-2" />
                    </span>
                  )}
                </motion.button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
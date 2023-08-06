import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailsjs from '@emailjs/browser';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailsjs
      .send(
        'service_y6in1yz',
        'template_s55lv7i',
        {
          form_name: form.name,
          to_name: 'Ruben',
          from_email: form.email,
          to_email: 'rubenmiguel.rr2001@gamil.com',
          message: form.message,
        },
        'NNzCLZxPM8aBdM2ma'
      )
      .then(
        () => {
          setLoading(false);
          alert('Merci beaucoup. Je reviendrai vers vous le plus vite possible :)');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Une erreur est survenue');
        }
      );
  };

  return (
    <div className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-x1 uppercase job-gradient font-bold mb-2 tracking-wide">Me contacter</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Travaillons <br /> ensemble!
              </h2>
            </div>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2x1 border-gradient flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <motion.input
              variants={fadeIn('up', 0.3)}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Votre Nom"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <motion.input
              variants={fadeIn('up', 0.4)}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre Email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <motion.textarea
              variants={fadeIn('up', 0.5)}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre Message"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            ></motion.textarea>
            <motion.button
              type="submit"
              variants={fadeIn('up', 0.6)}
              className="btn btn-lg bg-white text-black font-bold"
            >
              {loading ? 'Envoie en cours...' : 'Envoyer Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

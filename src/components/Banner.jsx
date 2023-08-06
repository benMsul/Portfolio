import Image from '../assets/avatar.png';
import { FaLinkedin, FaGithub, FaAddressCard } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import resumePDF from '../assets/RIBEIRO_Ruben_CV.pdf';
import { Link } from 'react-scroll';

const Banner = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'RIBEIRO_Ruben_CV.pdf';
    link.click();
  };

  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] "
            >
              Ruben <span>RIBEIRO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 mt-6 text-[20px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1] "
            >
              <span className="mb-4">Je suis </span>
              <TypeAnimation
                sequence={['Intégrateur', 2000, 'Développeur', 2000]}
                speed={50}
                className="job-gradient"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 font-primary"
            >
              Je suis actuellement à la recherche d'un contrat d'apprentissage
              (septembre 2023 à novembre 2024) pour acquérir une expérience
              professionnelle en développement Full Stack.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                href="#"
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                className="btn p-3 text-black font-bold"
              >
                Contact
              </Link>
              <Link
                href="#"
                to="work"
                activeClass="active"
                spy={true}
                smooth={true}
                className="text-gradient btn-link"
              >
                Mon Portfolio
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a
                href="https://www.linkedin.com/in/ruben-ribeiro-ramos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/benMsul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a href="#" onClick={handleDownloadResume}>
                <FaAddressCard />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('up', 0.9)}
            initial="hidden"
            whileInView={'show'}
            className="flex justify-center mt-8 lg:mt-0 lg:flex-1 lg:max-w-[482] "
          >
            <img
              className="photo rounded-full w-[250px]"
              src={Image}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

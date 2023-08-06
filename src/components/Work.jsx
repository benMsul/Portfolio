import { Suspense} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/snapchat.jpg';
import Img2 from '../assets/spotify.jpg';
import Img3 from '../assets/twitter.jpg';


const Work = () => {
  const redirectToLinkedIn = () => {
    const link = document.createElement('a');
    link.href = 'https://www.linkedin.com/in/ruben-ribeiro-ramos/';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
      <div className="flex flex-col items-center lg:flex-row">
        <motion.div 
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center lg:text-left">
          <h2 className="h2 leading-tight job-gradient">
            Mes derniers projets
          </h2>
          <p className="max-w-sm mb-10 font-primary">
            - My_Twitter. (PHP, Javascript, MySQL) <br />
            - My_Snapchat. (React Native) <br />
            - My_Spotify. (React js) <br />
            - my_Meetic (PHP, Javascript) <br />
            - My_Cinéma. (HTML, CSS, PHP, Mysql) <br />
            - CSS generator. (création d'un framework CSS avec du SCSS et du
            PHP) <br />
            - PiePHP. (création d'un framework PHP) <br />
            - Battleship. (Javascript) <br />
            - Puissance 4. (HTML, CSS, Javascript)
          </p>
          <button
            onClick={redirectToLinkedIn}
            className="btn btn-sm font-bold text-black mx-auto lg:mx-0"
          >
            Work with me
          </button>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex-1 mb-0 mt-10 lg:mb-0"
        >
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
              className="group-hover:scale-125 transition-all duration-500 image-size"
              src={Img1}
              alt="Image 1"
              />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-img text-black font-bold bg-white p-1 ">
                Titre de Projet
              </span>
            </div>

            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-img text-3x1 font-bold bg-black p-1 text-white">
                My_Snapchat
              </span>
            </div>

            <div className="absolute -bottom-full right-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a
                className="text-img text-black font-bold bg-white p-1"
                href="https://github.com/benMsul"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </div>

            <div className="absolute -bottom-full right-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <a className="text-img text-3x1 font-bold bg-black p-1 text-white" href="#">
                Live Demo
              </a>
            </div>
          </div>

        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="flex-1 mb-0 mt-10 lg:mb-0"
        >
          
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500 image-size"
              src={Img2}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-img text-black font-bold bg-white p-1">
                Titre de Projet
              </span>
            </div>

            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-img text-3x1 font-bold bg-black p-1 text-white">
                My_Spotify
              </span>
            </div>

            <div className="absolute -bottom-full right-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a
                className="text-img text-black font-bold bg-white p-1"
                href="https://github.com/benMsul"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </div>

            <div className="absolute -bottom-full right-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <a className="text-img text-3x1 font-bold bg-black p-1 text-white" href="#">
                Live Demo
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500 image-size"
              src={Img3}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-img text-black font-bold bg-white p-1">
                Titre de Projet
              </span>
            </div>

            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-img text-3x1 font-bold bg-black p-1 text-white">
                My_Twitter
              </span>
            </div>

            <div className="absolute -bottom-full right-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a
                className="text-img text-black font-bold bg-white p-1"
                href="https://github.com/benMsul"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </div>

            <div className="absolute -bottom-full right-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <a className="text-img text-3x1 font-bold bg-black p-1 text-white" href="#">
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Work;

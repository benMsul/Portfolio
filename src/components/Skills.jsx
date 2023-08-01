import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaLinkedin, FaGithub, FaAddressCard } from 'react-icons/fa';
import { Link } from 'react-scroll';
import resumePDF from '../assets/RIBEIRO_Ruben_CV.pdf';

const Skills = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'RIBEIRO_Ruben_CV.pdf';
    link.click();
  };

  return (
    <div className="section" id="skills">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <div className="flex-1">
            <motion.div
              className="flex-1"
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="h2 mb-6 font-bold job-gradient">Compétences</h2>
              <h3 className="h3 mb-4">Développement Web:</h3>
              <p className="text-[20px] font-primary mb-6">
                - Gestion de projets web <br /> <br />
                - Gestion de base de données <br /> <br />
                - Travail en groupe / autonomie <br /> <br />
                - Design Responsive <br /> <br />
                - Design UX et UI <br /> <br />
                - Résolution de problèmes <br /> <br />
                - Environnement Linux / Git <br /> <br />
                - Apprentissage de nouveaux langages en autonomie <br /> <br />
                - Capacité d'organisation et priorisation des tâches <br /> grâce à des outils comme Trello ou Notion
              </p>
            </motion.div>
          </div>
          <motion.div
            className="flex-1"
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 mb-6 font-bold job-gradient">Expériences</h2>
            <h3 className="h3 mb-0">Assistant Administratif / Animateur:</h3>
            <p className="text-[20px] font-primary mb-6">Lycée Les Coteaux | Cannes</p>
            <h3 className="h3 mb-0">Assistant Administratif:</h3>
            <p className="text-[20px] font-primary mb-6">
              Agence Harmonie | Cannes <br />
              Auto école Jules Ferry | Cannes <br />
              Network Intérim | Le Cannet
            </p>
            <h3 className="h3 mb-0">Compétences:</h3>
            <p className="text-[20px] font-primary mb-6">
              Gestion des les relations externes <br />
              Gestion des relations internes <br />
              Gestion du personnel <br />
              Gestion des plannings <br />
              Gestion des stocks <br />
              Gestion des commandes <br />
              Gestion des factures <br />
              Gestion des devis <br />
            </p>
            <motion.div
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 items-center"
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <a href="https://www.linkedin.com/in/ruben-ribeiro-ramos/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/benMsul" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="#" onClick={handleDownloadResume}>
                <FaAddressCard />
              </a>
              <Link href="#" to="contact" activeClass="active" spy={true} smooth={true} className="btn p-3 text-black font-bold">
                Contact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

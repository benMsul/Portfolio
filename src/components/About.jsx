import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import CountUp from 'react-countup';
import Tech from './Tech';
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 justify-center lg:justify-between">
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <h2 className="h2 mb-0 font-bold job-gradient">Formation</h2>
              <div className="text-[32px] font-tertiary job-gradient mb-4">
                {inView ? (
                  <CountUp start={0} end={2022} duration={1.75} separator="" />
                ) : null}{' '}
                -{' '}
                {inView ? (
                  <CountUp start={0} end={2024} duration={1.75} separator="" />
                ) : null}
              </div>
              <h3 className="h3 mb-4">La Web@cadémie by Epitech,</h3>
              <p className="font-primary mb-6">
                est un cursus en deux ans, 10 mois de formation et 14 mois en
                alternance, qui me permettra d'accéder à des postes qualifiés en
                développement web. <br />
                Le programme prépare au métier d'intégrateur développeur web
                (titre de niveau 5 reconnu par le RNCP).
              </p>
              <div>
                <h3 className="mb-0 h3">Technologies maîtrisées :</h3>
              </div>
              <div className="flex flex-wrap gap-x-6 lg:gap-x-10 mb-12">
                <Tech />
              </div>
            </motion.div>
          </motion.div>

          <div className="hidden lg:block" style={{ flexBasis: '2rem' }}></div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="h2 font-bold job-gradient">Qui je suis.</h2>
            <h3 className="h3 mb-4">Je suis Ruben, 22 ans et étudiant à la Web@cadémie by Epitech.</h3>
            <p className="font-primary mb-6">
              Je suis passionné par la musique, le développement web et j'apprécie énormément l'art sous toutes ses
              formes, ainsi que la nature et les balades en plein air. Je recherche constamment de nouveaux défis et
              opportunités afin d'élargir mes compétences en informatique.
            </p>
            <div>
              <h3 className="mb-2 h3">Niveau de langues en % :</h3>
            </div>
            <div className="flex flex-wrap gap-x-6 lg:gap-x-10 mb-12 justify-center lg:justify-start">
              <div>
                <div className="text-[40px] font-tertiary job-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={5} /> : null} %
                </div>
                <div className="font-primary text-sm tracking-[2px]">Italien</div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary job-gradient mb-2">
                  {inView ? <CountUp start={0} end={90} duration={4} /> : null} %
                </div>
                <div className="font-primary text-sm tracking-[2px]">Anglais</div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary job-gradient mb-2">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null} %
                </div>
                <div className="font-primary text-sm tracking-[2px]">Portugais</div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center justify-center lg:justify-start">
              <Link href="#" to="contact" activeClass="active" spy={true} smooth={true} className="btn p-3 text-black font-bold">
                Contact
              </Link>
              <Link href="#" to="work" activeClass="active" spy={true} smooth={true} className="text-gradient btn-link">
                Mon Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

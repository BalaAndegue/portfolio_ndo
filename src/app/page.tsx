"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Mail, Briefcase, GraduationCap, Code, PenTool, Layout, ChevronDown, ExternalLink, Download, MonitorPlay, Palette, MonitorSmartphone, PlaySquare, Blocks, ArrowRight } from "lucide-react";

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-purple-500/30">
      {/* Background ambient light */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Navigation / Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl mx-auto py-8 px-6 flex justify-between items-center"
        >
          <div className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            NAJ.
          </div>
          <a
            href="mailto:ndolarissa08@gmail.com"
            className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex items-center gap-2 text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            Me Contacter
          </a>
        </motion.header>

        <main className="w-full max-w-5xl mx-auto px-6 pb-24 flex flex-col items-center">

          {/* Hero Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full flex md:flex-row flex-col-reverse items-center justify-between gap-12 mt-16 md:mt-24 mb-32"
          >
            <div className="flex-1 flex flex-col items-start gap-6 relative group">
              <motion.div variants={fadeUp} className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-2"></motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Salut, je suis <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                  NDO AYO JACKY
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
                Étudiante passionnée en <span className="text-zinc-200 font-medium">Génie informatique des systèmes audiovisuels visuels</span>.
                Je crée des expériences numériques immersives alliant design et technologie.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-4">
                <a
                  href="#experience"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105"
                >
                  Voir mon parcours
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  <Download className="w-4 h-4" /> Télécharger mon CV
                </a>
                <a
                  href="mailto:ndolarissa08@gmail.com"
                  className="px-8 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 font-medium transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Contact
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="relative w-72 md:w-80 h-72 md:h-80 shrink-0"
            >
              {/* Animated rings */}
              <div className="absolute inset-0 border border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-10px] border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-[-20px] border border-pink-500/10 rounded-full animate-[spin_20s_linear_infinite]" />

              {/* Photo Placeholder Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-800 border-2 border-zinc-700/50 shadow-2xl p-1 group-hover:p-2 transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-zinc-900 flex items-center justify-center">
                  <Image
                    src="https://i.pinimg.com/1200x/0b/2e/98/0b2e988dcec7af0209aa42d919c6967b.jpg"
                    alt="NDO AYO JACKY"
                    fill
                    className="object-cover object-top grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
                    priority
                  />
                  {/* Fallback pattern overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent mix-blend-overlay pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            id="experience"
            className="w-full mb-32 pt-16 scroll-mt-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-zinc-900 text-purple-400 rounded-xl border border-zinc-800 shadow-inner">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Mon Expérience</h2>
            </motion.div>

            <div className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              <div className="absolute left-[39px] md:left-[50%] top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2"></div>

              <motion.div variants={fadeUp} className="relative flex md:justify-between items-center md:items-start group w-full mb-12">
                <div className="hidden md:block w-[45%] text-right pr-12 pt-2">
                  <div className="text-xl font-bold text-zinc-100 group-hover:text-purple-400 transition-colors">Betalab</div>
                  <div className="text-zinc-500 mt-1 font-mono text-sm">Expérience Pratique</div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 mt-3 md:mt-0 w-4 h-4 rounded-full bg-zinc-950 border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10"></div>

                <div className="w-full md:w-[45%] pl-12 md:pl-12">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300">
                    <div className="md:hidden text-xl font-bold text-zinc-100 mb-2">Betalab</div>
                    <h3 className="text-lg font-semibold text-white mb-3">Déploiement de Site Web</h3>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                      Travail pratique réalisé consistant à déployer un site web en ligne, assurant ainsi sa disponibilité et son accessibilité sur internet.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-lg text-xs font-medium">Déploiement</span>
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-lg text-xs font-medium">Hosting</span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-lg text-xs font-medium flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" /> Live
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="relative flex md:justify-between items-center md:items-start group w-full">
                <div className="w-full md:w-[45%] md:text-right pr-12 md:pr-12 md:pl-0 pl-12">
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300">
                    <div className="md:hidden text-xl font-bold text-zinc-100 mb-2">Formation Académique</div>
                    <h3 className="text-lg font-semibold text-white mb-3">Génie Informatique & Systèmes Audiovisuels</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Études approfondies combinant l'informatique moderne et les technologies des systèmes audiovisuels.
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 mt-3 md:mt-0 w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500 z-10 group-hover:scale-125 transition-transform duration-300"></div>

                <div className="hidden md:block w-[45%] pl-12 pt-2">
                  <div className="flex flex-col items-start gap-1 text-zinc-100 group-hover:text-blue-400 transition-colors">
                    <GraduationCap className="w-6 h-6 mb-1" />
                    <span className="text-xl font-bold">Formation Active</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full mb-24"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-zinc-900 text-blue-400 rounded-xl border border-zinc-800 shadow-inner">
                <Code className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Mes Compétences</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Skill 1 */}
              <motion.div variants={fadeUp} className="group relative bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/80 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-all duration-500"></div>
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                  <Layout className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Design</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Conception d'interfaces utilisateurs intuitives et esthétiques, pensées pour offrir la meilleure expérience audiovisuelle et numérique.
                </p>
              </motion.div>

              {/* Skill 2 */}
              <motion.div variants={fadeUp} className="group relative bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/80 hover:border-pink-500/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-[50px] rounded-full group-hover:bg-pink-500/20 transition-all duration-500"></div>
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_20px_rgba(236,72,153,0.15)]">
                  <PenTool className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Style</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Maîtrise de l'intégration stylistique avancée, assurant une harmonie visuelle, des animations fluides et une réactivité parfaite sur tous supports.
                </p>
              </motion.div>

              {/* Skill 3 */}
              <motion.div variants={fadeUp} className="group relative bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <Code className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Rédaction</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Création de contenus pertinents et structurés. Communication technique claire pour accompagner les projets audiovisuels et informatiques.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full mb-32 pt-16 scroll-mt-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-zinc-900 text-pink-400 rounded-xl border border-zinc-800 shadow-inner">
                <MonitorPlay className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Ce que je propose</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 group">
                <MonitorSmartphone className="w-10 h-10 text-purple-400 mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">Création Web & Interfaces</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Développement de sites vitrines, portfolios et interfaces interactives avec les dernières technologies (React, Next.js, Tailwind). Une attention particulière au responsive design.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 group">
                <PlaySquare className="w-10 h-10 text-blue-400 mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">Production Audiovisuelle</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Montage vidéo, traitement visuel et post-production. Intégration de médias riches pour offrir une expérience utilisateur captivante et professionnelle.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full mb-32 pt-16 scroll-mt-16"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 text-green-400 rounded-xl border border-zinc-800 shadow-inner">
                  <Layout className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Projets Récents</h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <motion.div variants={fadeUp} className="group rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 flex flex-col">
                <div className="relative w-full h-64 overflow-hidden bg-zinc-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent z-10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                    alt="Projet Web"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-6 z-20 flex gap-2">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">Next.js</span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">Vercel</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">Plateforme E-Learning</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6 flex-1">
                    Déploiement d'un site éducatif interactif avec gestion de streaming vidéo et suivi d'apprentissage des élèves.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors w-fit">
                    Voir le projet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div variants={fadeUp} className="group rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all duration-500 flex flex-col">
                <div className="relative w-full h-64 overflow-hidden bg-zinc-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent z-10"></div>
                  <Image
                    src="https://i.pinimg.com/1200x/4d/0a/9e/4d0a9e70871124f8efe9fe13bde42d0d.jpg"
                    alt="Projet Audiovisuel"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-6 z-20 flex gap-2">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">Premiere Pro</span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">After Effects</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">Montage Promotionnel</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6 flex-1">
                    Conception et édition vidéo pour la campagne publicitaire d'une application mobile, alliant effets visuels et sound design immersif.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors w-fit">
                    Voir le projet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Tools & Tech Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full mb-16 pt-16 border-t border-zinc-800/50"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-2xl font-bold text-zinc-300 mb-2">Technologies & Outils</h2>
              <p className="text-zinc-500">Un aperçu des outils que j'utilise au quotidien</p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {['React JS', 'Next.js', 'Tailwind CSS', 'Figma', 'Adobe Premiere Pro', 'Adobe After Effects', 'TypeScript', 'Git/GitHub', 'Vercel'].map((tool) => (
                <div key={tool} className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium flex items-center gap-2 hover:bg-zinc-800 hover:border-zinc-700 transition-colors">
                  <Blocks className="w-4 h-4 text-zinc-500" /> {tool}
                </div>
              ))}
            </motion.div>
          </motion.section>

        </main>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full border-t border-zinc-800/50 py-12 flex flex-col items-center justify-center gap-6 mt-10"
        >
          <div className="flex flex-col items-center gap-2">
            <a href="mailto:ndolarissa08@gmail.com" className="hover:text-pink-400 transition-colors bg-zinc-900 px-6 py-3 rounded-full border border-zinc-800 hover:border-pink-500/50 shadow-sm flex items-center gap-2">
              <Mail className="w-5 h-5" />
              ndolarissa08@gmail.com
            </a>
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} NDO AYO JACKY. Fait avec passion.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

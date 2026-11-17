import { motion } from "framer-motion"
import { Mail, MessageCircle, AtSign, Globe, ArrowDownRight, MapPin, Clock } from "lucide-react"
import { siteConfig } from "./config/site"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

function App() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12"
      >
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-ink">
          {siteConfig.name}
        </a>
        <div className="flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-sm font-medium text-ink-light hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-24 md:px-12 lg:px-20">
        <div className="max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-terracotta"
            >
              {siteConfig.role}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-display text-display-xl font-medium text-ink text-balance"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              custom={0.2}
              className="mt-8 max-w-xl"
            >
              <p className="font-sans text-xl font-light leading-relaxed text-ink-light md:text-2xl">
                {siteConfig.tagline}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-12 flex flex-wrap items-center gap-6 text-sm text-ink-light"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-terracotta" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-terracotta" />
                <span>{siteConfig.timezone}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-0 left-6 h-32 w-px origin-top bg-ink/10 md:left-12 lg:left-20"
        />
      </section>

      {/* About */}
      <section id="about" className="px-6 py-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
                01 / 关于
              </span>
              <h2 className="mt-4 font-display text-display-lg font-medium text-ink">
                建造者，<br />而非只是使用者。
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <div className="space-y-6">
                {siteConfig.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-sans text-lg font-light leading-relaxed text-ink-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 editorial-line" />

              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-light">
                    身份
                  </p>
                  <p className="mt-2 font-sans text-base font-medium text-ink">
                    {siteConfig.role}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-light">
                    坐标
                  </p>
                  <p className="mt-2 font-sans text-base font-medium text-ink">
                    {siteConfig.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-ink px-6 py-32 text-cream md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
                02 / 联系
              </span>
              <h2 className="mt-4 font-display text-display-lg font-medium">
                开始一段<br />对话。
              </h2>
              <p className="mt-6 font-sans text-lg font-light leading-relaxed text-cream/60">
                如果你有一个想做的产品、一个想验证的想法，或只是想聊聊技术与设计，欢迎随时联系。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <div className="space-y-1">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: siteConfig.contact.email,
                    href: `mailto:${siteConfig.contact.email}`,
                  },
                  {
                    icon: MessageCircle,
                    label: "WeChat",
                    value: siteConfig.contact.wechat,
                    href: "#",
                  },
                  {
                    icon: Globe,
                    label: "GitHub",
                    value: siteConfig.contact.github,
                    href: `https://${siteConfig.contact.github}`,
                  },
                  {
                    icon: AtSign,
                    label: "X / Twitter",
                    value: siteConfig.contact.twitter,
                    href: `https://${siteConfig.contact.twitter}`,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-between border-b border-cream/10 py-6 transition-colors hover:border-terracotta/50"
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className="h-5 w-5 text-terracotta" />
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-cream/50">
                          {item.label}
                        </p>
                        <p className="mt-1 font-sans text-lg text-cream transition-colors group-hover:text-terracotta">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <ArrowDownRight className="h-5 w-5 -rotate-90 text-cream/30 transition-all duration-300 group-hover:rotate-0 group-hover:text-terracotta" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink px-6 py-8 text-cream md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-display text-sm">
            {siteConfig.name}
          </p>
          <p className="font-mono text-xs text-cream/40">
            © {new Date().getFullYear()} {siteConfig.name}. Built with intention.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

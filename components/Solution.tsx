"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Watch 3 Short Videos",
    description:
      "No boring theory. Immediately applicable insights about identity, where you are now, and where you want to go.",
    duration: "30 min",
  },
  {
    number: "2",
    title: "Talk With The AI",
    description:
      "15 voice prompts. The AI listens, asks questions, and sees patterns you can't see yourself.",
    duration: "20 min",
  },
  {
    number: "3",
    title: "Get Your Personal Report",
    description:
      "No generic advice. An action plan based on YOUR answers, YOUR situation, YOUR brain.",
    duration: "Instant",
  },
];

const whatYouGet = [
  {
    icon: "🧠",
    title: "Kill Your Limiting Beliefs",
    description:
      "Exercises that prove you can finish things. Stop feeling broken. Start launching businesses.",
  },
  {
    icon: "⚡",
    title: "The 3 Money-Making Skills",
    description:
      "We help you to finally pick ONE idea (not 47). Build systems that work. Create habits that stick.",
  },
  {
    icon: "📦",
    title: "Templates & AI-first",
    description:
      "Website templates. $10K+ offer scripts. Sales emails. Just fill in blanks and launch. No perfectionism.",
  },
  {
    icon: "💪",
    title: "Built-in Accountability",
    description:
      "Personal accountability from Jim. Group momentum that pulls you forward. A system that makes quitting harder than continuing.",
  },
];

export default function Solution() {
  return (
    <>
      {/* What You Get Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-black text-center mb-16"
          >
            The 4 Things That{" "}
            <span className="gradient-text">Actually Launch Your Business</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whatYouGet.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl border border-adhd-yellow/20"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-adhd-yellow">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-black text-center mb-16"
          >
            Why You Failed Before{" "}
            <span className="gradient-text">(It Wasn't Your Fault)</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-black mb-8 text-adhd-red">
                ❌ Built for Neurotypical Brains
              </h3>
              <div className="space-y-4">
                {[
                  "Just be consistent → Your dopamine doesn't work that way",
                  "Time blocking → Falls apart after day 3",
                  "Accountability buddy → Both ghost after a week",
                  "More discipline → Shame spiral when you fail",
                  "Take medication → Still can't launch a business",
                  "New app → Abandoned after dopamine wears off",
                  "$1000's in courses → All unfinished",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-gray-400"
                  >
                    <span className="text-adhd-red">✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-black mb-8 text-adhd-green">
                ✅ Built BY Someone With ADHD
              </h3>
              <div className="space-y-4">
                {[
                  "Fix your identity → Business becomes automatic",
                  "Bite-sized daily tasks → Fits your attention span",
                  "Energy tracking → Work when you're ON",
                  "Templates for everything → Ship before perfection kicks in",
                  "Jim checks daily → Can't ghost when he's watching",
                  "Community → They get why you struggle",
                  "Miss a day? → Jim messages you personally",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-adhd-green">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto border border-adhd-yellow/20">
              <p className="text-xl font-bold text-adhd-yellow mb-4">
                The difference that changes everything:
              </p>
              <p className="text-lg text-gray-300">
                Every other program starts with tactics. We start with WHO YOU
                ARE. Because when you fix your identity, the business part
                becomes easy.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                That's why members say "Why didn't I find this sooner?"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 border border-adhd-yellow/30"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black mb-6">
                  From burnout to 7-figure digital agency
                </h3>
                <p className="text-gray-300 mb-4">
                  Hey, I'm Jim. At 24 I got my ADHD diagnosis. Finally
                  understood why I'd started 37 projects and finished 0.
                </p>
                <p className="text-gray-300 mb-4">
                  I tried everything. Ritalin made me a productive zombie. Time
                  blocking worked for 4 days. Discipline? I had more shame than
                  discipline.
                </p>
                <p className="text-gray-300 mb-4">
                  Then I stopped fighting. Instead of 'managing' my ADHD, I
                  started working with it. I built systems that fit my brain.
                  Result? I now run a 7-figure digital agency.
                </p>
                <p className="text-adhd-yellow font-semibold">
                  This is what I'm giving you today: The exact method that took
                  me from chronic starter to 7-figure entrepreneur. No BS, no
                  discipline lectures. Just a system that works for ADHD brains.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-adhd-yellow/30">
                  <Image
                    src="/images/jim.jpg"
                    alt="Jim - Founder of ADHD Harmony"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

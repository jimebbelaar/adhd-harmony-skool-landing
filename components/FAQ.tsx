"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question:
      "I've started 47 programs and finished 0. Why won't I quit this one?",
    answer:
      "Jim checks your progress daily. Miss a task? He messages you personally. The group sees your daily posts. You've never had accountability like this - not shame-based, but 'we won't let you disappear' based. Plus, tasks are only 30 minutes. Even on your worst days, you can manage 30 minutes.",
  },
  {
    question: "$297 feels like a lot. What if I can't afford it?",
    answer:
      "Real talk: You've probably spent 10x this on courses you never finished. The difference? This one you'll actually complete. The real question: can you afford to stay stuck another year?",
  },
  {
    question:
      "How is this different from every other 'launch your business' program?",
    answer:
      "Every other program starts with tactics (pick a niche, build a funnel). We start with WHO YOU ARE. We fix your identity first, then business becomes automatic. Plus: built BY someone with ADHD, FOR people with ADHD. Jim failed at 37 businesses before cracking the code. This is that code.",
  },
  {
    question: "What if I don't have time? My days are already chaotic.",
    answer:
      "30 minutes average per day. That's it. You can batch tasks during hyperfocus sessions. Miss a day? Fine, catch up tomorrow. The system is flexible because Jim knows ADHD brains don't work 9-5. Most members do their tasks at weird hours when their brain is ON.",
  },
  {
    question: "Do I need a business idea already?",
    answer:
      "No. Module 3 helps you find your 'thing' using your ADHD patterns (your failures contain clues). We have a decision matrix that kills analysis paralysis. You'll pick ONE idea by day 20 and stick with it for 90 days. Can't change. That's the rule.",
  },
  {
    question: "I hate group programs. I don't want to look stupid.",
    answer:
      "Everyone in the group has ADHD. We've ALL been the 'stupid' one who couldn't do 'simple' things. This is the first place you'll feel normal. Plus, sharing is optional - you can lurk and still get Jim's daily accountability privately.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer:
      "Everything is copy-paste templates. Website? Fill in 5 blanks. Emails? Already written. Just customize. We assume you know nothing and build from there. If you can use Word, you can do this.",
  },
  {
    question: "The guarantee sounds too good to be true. What's the catch?",
    answer:
      "No catch. Do the daily tasks (we track them). Come to weekly calls (or watch recordings). Share in the community (even just 'done' counts). Don't launch in 90 days = full refund. Jim's reputation depends on you succeeding. That's why our members launch.",
  },
  {
    question: "Is Jim even real? How do I know this isn't a scam?",
    answer:
      "Jim runs a 7-figure agency (Seamless Agency) you can Google. Real company, real clients, real results. Plus, you get his direct access for 90 days. Check the testimonials - these are real people you can find online.",
  },
  {
    question: "I'm on ADHD medication. Will this work for me?",
    answer:
      "Yes. The system works whether you're medicated or not. Jim was on Ritalin for years, now manages without it. Many members use meds. Some don't. The strategies work regardless because they're built for how ADHD brains actually work. This is no medical advice.",
  },
  // {
  //   question: "What if I miss the founding member deal?",
  //   answer:
  //     "Price goes to $997 and becomes a monthly subscription ($197/month for 12 months). No lifetime access. No bonuses. This deal happens once. When these spots are gone, they're gone forever. Next time you see this, it costs double.",
  // },
];

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 relative">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-adhd-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="indicator-yellow px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              FAQ
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black">
            Every Question{" "}
            <span className="gradient-text">You're Thinking</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            If your question isn't here, email info@adhdharmony.com and get a
            personal response within 24 hours
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass-effect rounded-xl overflow-hidden text-left hover:border-adhd-yellow/30 transition-all duration-300 group"
              >
                <div className="p-6 flex justify-between items-center">
                  <div className="flex items-start gap-3 flex-1">
                    <HelpCircle className="w-5 h-5 text-adhd-yellow mt-0.5 shrink-0" />
                    <span className="font-semibold text-lg group-hover:text-adhd-yellow transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform text-adhd-yellow/50 group-hover:text-adhd-yellow ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-300"
                  >
                    <div className="pl-8">{faq.answer}</div>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

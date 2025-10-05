import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StripePaymentForm from "./StripePaymentForm";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function FinalCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [spotsLeft, setSpotsLeft] = useState(7);

  useEffect(() => {
    const calculateSpotsLeft = () => {
      const now = new Date();
      const amsterdamTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Europe/Amsterdam" })
      );
      const midnight = new Date(amsterdamTime);
      midnight.setHours(24, 0, 0, 0);
      const difference = midnight.getTime() - amsterdamTime.getTime();
      const hoursUntilMidnight = difference / (1000 * 60 * 60);
      const hoursPassed = 24 - hoursUntilMidnight;
      const spots = Math.max(3, Math.round(7 - (hoursPassed / 24) * 4));
      return spots;
    };

    setSpotsLeft(calculateSpotsLeft());
    const timer = setInterval(() => {
      setSpotsLeft(calculateSpotsLeft());
    }, 30 * 60 * 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-adhd-red/5 via-adhd-yellow/5 to-adhd-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-black mb-12"
          >
            This Page Disappears Soon.
            <br />
            <span className="gradient-text">What Will You Choose?</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect p-8 rounded-2xl border-2 border-adhd-red/20 relative"
            >
              <div className="absolute top-4 right-4">
                <ArrowLeft className="w-6 h-6 text-adhd-red/50" />
              </div>
              <div className="indicator-red px-3 py-1 rounded-full inline-flex items-center gap-2 mb-4">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-semibold">Path 1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-adhd-red">
                Stay In The Pattern
              </h3>
              <ul className="text-left text-gray-400 space-y-2">
                <li>• Start project #48 next week</li>
                <li>• Buy course #31 you won't finish</li>
                <li>• Keep watching others succeed</li>
                <li>• Another year of "almost"</li>
                <li>• Wonder if you're broken</li>
                <li>• Same struggles, different day</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-500">
                  Cost: Your dreams, confidence, and another year of your life
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect p-8 rounded-2xl border-2 border-adhd-green/20 glow-green relative"
            >
              <div className="absolute top-4 right-4">
                <ArrowRight className="w-6 h-6 text-adhd-green" />
              </div>
              <div className="indicator-green px-3 py-1 rounded-full inline-flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-semibold">Path 2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-adhd-green">
                Join ADHD Harmony
              </h3>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Launch in 90 days (guaranteed)</li>
                <li>• Jim checks on you daily</li>
                <li>• 47+ members have your back</li>
                <li>• First $3K client pays 6x over</li>
                <li>• Finally prove you're not broken</li>
                <li>• Join the 87% who launch</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-adhd-green/30">
                <p className="text-sm text-adhd-green font-bold">
                  Cost: $497 once (worth $10,282)
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="glass-effect p-8 rounded-2xl border border-adhd-yellow/30 max-w-3xl mx-auto">
              <p className="text-xl mb-4 font-bold text-adhd-yellow">
                The Math Is Simple:
              </p>
              <p className="text-lg text-gray-300 mb-4">
                You've already tried everything else. You've already spent years
                stuck. You've already watched everyone else succeed.
              </p>
              <p className="text-2xl font-black">
                In 90 days, you'll be 90 days older anyway.
              </p>
              <p className="text-2xl text-adhd-green font-bold mt-4">
                Will you have a business or another excuse?
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-lg mx-auto"
          >
            <div className="text-center mb-6">
              <p className="text-lg font-bold text-adhd-yellow mb-2">
                FINAL DECISION POINT
              </p>
              <p className="text-sm text-gray-400">
                After today, price doubles to $997 (if spots remain)
              </p>
            </div>

            <StripePaymentForm />

            <div className="mt-8 p-6 glass-effect rounded-xl border border-adhd-green/30">
              <p className="text-sm font-bold text-adhd-green mb-2">
                Remember:
              </p>
              <p className="text-sm text-gray-300">
                Do the work. Don't launch in 90 days. Get 100% refund.
                <br />
                Zero risk. All upside. But only if you act now.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <p className="text-xs text-gray-500">
              Questions? Email jim@adhdharmony.com for instant response
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StripePaymentForm from "./StripePaymentForm";
import { useState, useEffect } from "react";
import {
  Gift,
  Star,
  Zap,
  Brain,
  FileText,
  Phone,
  Users,
  MessageSquare,
  Rocket,
  Shield,
} from "lucide-react";

const valueItems = [
  {
    icon: Brain,
    title: "90-Day Business Launch Program (All Modules)",
    description:
      "Identity transformation + business systems. From chronic starter to $10K/month.",
    value: "$2,000",
  },
  {
    icon: FileText,
    title: "Plug-and-Play Templates",
    description:
      "Website, offer sccrips, emails that sell, sales call scripts. Everything done with you.",
    value: "$400",
  },
  {
    icon: Zap,
    title: "The Daily Accountability System™",
    description:
      "If you want: Jim checks your progress daily. Miss a day? He messages you.",
    value: "$300",
  },
  {
    icon: Users,
    title: "Private ADHD Entrepreneur Community",
    description:
      "Other members who get it. 24/7 support. Never feel alone in the 3am spirals again.",
    value: "$500",
  },
  {
    icon: Phone,
    title: "Weekly Group Coaching Calls with Jim",
    description:
      "Get unstuck in real-time. Ask anything. Recordings if you miss.",
    value: "$800",
  },
  {
    icon: MessageSquare,
    title: "BONUS: Jim's Direct Access (90 days)",
    description:
      "Message Jim directly. Get personal video responses when you're stuck. Usually $2,997 alone.",
    value: "$997",
    bonus: true,
  },
];

export default function ValueStack() {
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

  const totalValue = valueItems.reduce((sum, item) => {
    return sum + parseInt(item.value.replace("$", "").replace(",", ""));
  }, 0);

  return (
    <section ref={ref} className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-adhd-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-black mb-4">
            Everything You Need To Launch In 90 Days
          </h2>
          <div className="text-2xl">
            <span className="text-gray-500 font-medium">Total Value:</span>{" "}
            <span className="line-through text-gray-400">
              ${totalValue.toLocaleString()}
            </span>{" "}
            <span className="gradient-text text-4xl font-black">
              Today: $297
            </span>
          </div>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            One-time payment • Launch or full refund
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {valueItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-effect p-6 rounded-xl flex items-center gap-6 ${
                  item.bonus
                    ? "border-2 border-adhd-yellow/30 glow-yellow relative overflow-hidden"
                    : "border border-glass-border"
                }`}
              >
                {item.bonus && (
                  <div className="absolute -top-1 -right-1 bg-adhd-yellow text-black px-3 py-1 rounded-bl-xl text-xs font-bold">
                    BONUS
                  </div>
                )}

                <div
                  className={`p-3 rounded-lg ${
                    item.bonus ? "bg-adhd-yellow/10" : "bg-dark-surface"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      item.bonus ? "text-adhd-yellow" : "text-adhd-green"
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <h4
                    className={`text-xl font-bold mb-1 ${
                      item.bonus ? "text-adhd-yellow" : ""
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>

                <div className="text-right">
                  <div
                    className={`text-sm text-gray-500 ${
                      !item.bonus && "line-through"
                    }`}
                  >
                    {item.value}
                  </div>
                  {item.bonus && (
                    <div className="text-xs text-adhd-yellow font-bold">
                      INCLUDED
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl border border-adhd-green/30">
            <Shield className="w-12 h-12 text-adhd-green mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-4">
              The "You Actually Launch" Guarantee
            </h3>
            <p className="text-xl font-bold text-adhd-green">
              Don't launch in 90 days = 100% money back
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="max-w-lg mx-auto mt-12"
        >
          <div className="text-center mb-6">
            <p className="text-lg font-bold text-adhd-yellow mb-2">
              You save ${(totalValue - 297).toLocaleString()} today
            </p>
          </div>

          <StripePaymentForm />
        </motion.div>
      </div>
    </section>
  );
}

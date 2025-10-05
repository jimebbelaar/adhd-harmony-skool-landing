"use client";

import { motion } from "framer-motion";
import StripePaymentForm from "./StripePaymentForm";
import { CheckCircle, X, Zap, Heart, Clock, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-14 pb-10 relative overflow-hidden">
      {/* Background Effects - More subtle with blue tints */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-adhd-yellow/10 rounded-full blur-3xl float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-adhd-orange/10 rounded-full blur-3xl float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-adhd-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Shows second on mobile, first on desktop */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="indicator-yellow px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  For ADHD Entrepreneurs Who Are Done Starting & Stopping
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-3xl lg:text-5xl font-black mb-6"
              >
                Launch Your <span className="gradient-text">$10K/Month </span>
                Business <span className="gradient-text">In 90 Days </span>
                With The Only System That Actually Works For ADHD Brains
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed"
              >
                You're about to discover why you've never finished a business
                program (and it's not what you think) - get the only system
                that actually works with your ADHD, not against it
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap gap-3">
                <div className="indicator-red px-3 py-2 rounded-full flex items-center gap-1">
                  <X className="w-4 h-4" />
                  <span className="font-medium text-xs">No discipline BS</span>
                </div>
                <div className="indicator-green px-3 py-2 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium text-xs">ADHD-proof system</span>
                </div>
              </div>

              {/* Additional trust indicators */}
              {/* <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-adhd-green" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4 text-adhd-yellow" />
                  <span>Instant access (start in 2 min)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Heart className="w-4 h-4 text-adhd-red" />
                  <span>Made by ADHDer for ADHDers</span>
                </div>
              </div> */}
            </motion.div>

            {/* Desktop only: Payment form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden lg:block"
            >
              <StripePaymentForm />
            </motion.div>
          </div>

          {/* Right Content - Loom Video - Shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-1 lg:order-2 w-full"
          >
            <div className="glass-effect rounded-2xl p-2 glow-yellow">
              <div className="relative aspect-[1080/1350] bg-dark-surface rounded-xl overflow-hidden">
                <iframe
                  src="https://www.loom.com/embed/4c89601b6fc8411d89982db83df48bdc?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile only: Payment form shows after video and content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:hidden order-3 w-full"
          >
            <StripePaymentForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

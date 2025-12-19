"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQItem as FAQItemType } from "@/app/types";

interface FAQItemProps {
  item: FAQItemType;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function FAQItem({ item, isOpen = false, onToggle }: FAQItemProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  
  // Use external control if provided, otherwise use internal state
  const open = onToggle ? isOpen : internalOpen;
  const handleToggle = onToggle || (() => setInternalOpen(!internalOpen));

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={handleToggle}
        className="w-full p-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded-lg"
        aria-expanded={open}
      >
        <span
          className="text-lg font-medium text-[var(--color-text-primary)] pr-4"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[var(--color-primary)]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


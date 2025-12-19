"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerItem } from "@/app/lib/animations";
import { TeamMember } from "@/app/types";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
      variants={staggerItem}
      whileHover={{ y: -8 }}
    >
      {/* Image container */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Name overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3
            className="text-xl font-bold text-white"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {member.name}
          </h3>
          <p className="text-[var(--color-primary-light)] font-medium">
            {member.role}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {member.description}
        </p>

        {/* Qualifications */}
        {member.qualifications && member.qualifications.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              Qualifications
            </p>
            <ul className="flex flex-wrap gap-2">
              {member.qualifications.map((qual, index) => (
                <li
                  key={index}
                  className="px-3 py-1 bg-[var(--color-off-white)] text-[var(--color-text-secondary)] text-xs rounded-full"
                >
                  {qual}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}


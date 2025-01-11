"use client";
import React from "react";
import { Mail, MessageCircle, Instagram, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const contacts = [
    {
      platform: "Discord",
      icon: <MessageCircle className="w-8 h-8" />,
      value: "yourusername",
      link: "https://discord.com/users/yourid",
    },
    {
      platform: "Email",
      icon: <Mail className="w-8 h-8" />,
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      platform: "Instagram",
      icon: <Instagram className="w-8 h-8" />,
      value: "your_instagram",
      link: "https://instagram.com/your_instagram",
    },
  ];

  return (
    <div className="min-h-90vh bg-black text-white p-6">
      <div className="max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm"
        >
          <h1 className="text-4xl font-bold mb-4">Contact me</h1>
          <p className="text-zinc-400 text-lg mb-12">
            You can contact me via Email, Discord or Instagram. I usually
            respond within a day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact) => (
              <motion.a
                key={contact.platform}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center p-6 bg-black/20 rounded-xl hover:bg-black/30 transition-colors"
              >
                <div className="mb-4 text-zinc-300">{contact.icon}</div>
                <h2 className="text-xl font-semibold mb-2">
                  {contact.platform}
                </h2>
                <p className="text-zinc-400 text-center break-all">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

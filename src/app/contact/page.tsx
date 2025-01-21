"use client";
import React from "react";
import { Mail, Linkedin, Instagram, ExternalLink } from "lucide-react";

const ContactPage = () => {
  const contacts = [
    {
      platform: "LinkedIn",
      icon: <Linkedin className="w-8 h-8" />,
      value: "",
      link: "https://www.linkedin.com/in/bipin-kalakheti/",
    },
    {
      platform: "Email",
      icon: <Mail className="w-8 h-8" />,
      value: "",
      link: "mailto:bipinkalakheti7@gmail.com",
    },
    {
      platform: "Instagram",
      icon: <Instagram className="w-8 h-8" />,
      value: "",
      link: "https://www.instagram.com/beepin.7/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto mt-20">
        <div className="bg-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-4">Contact me</h1>
          <p className="text-zinc-400 text-lg mb-12">
            You can contact me via LinkedIn, Email or Instagram. I usually
            respond within a day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact) => (
              <a
                key={contact.platform}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-black/20 rounded-xl hover:bg-black/30 transition-colors"
              >
                <div className="mb-4 text-zinc-300">{contact.icon}</div>
                <h2 className="text-xl font-semibold mb-2">
                  {contact.platform}
                </h2>
                <p className="text-zinc-400 text-center break-all">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

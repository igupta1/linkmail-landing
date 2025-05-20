import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// TODO: Replace with real asset paths or <Image /> components from your framework
import screenshot1 from "../assets/ss1.png";
import screenshot2 from "../assets/ss2.png";

const features = [
  {
    title: "AI‑Personalized Outreach",
    description:
      "Generate context‑aware cold emails in one click, tailored to every LinkedIn profile you visit.",
  },
  {
    title: "Reusable Templates",
    description:
      "Capture your voice once, then scale it. Save multiple templates for coffee chats, job inquiries, or startup pitches.",
  },
  {
    title: "Seamless Attachments",
    description:
      "Linkmail automatically attaches your latest resume or portfolio so you never forget to showcase your best work.",
  },
];

const steps = [
  {
    step: "1",
    title: "Visit a LinkedIn profile",
    text: "Open LinkedIn as usual—Linkmail lives right in the sidebar, ready to help." ,
  },
  {
    step: "2",
    title: "Choose a template",
    text: "Select a saved template or start from scratch to define tone and intent.",
  },
  {
    step: "3",
    title: "Click Generate",
    text: "Our LLM personalizes an email using profile data, your bio, and recent activity.",
  },
  {
    step: "4",
    title: "Send & track",
    text: "Copy the message into LinkedIn InMail or Email and watch your network grow.",
  },
];

const LinkmailLandingPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-900 font-sans">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-blue-600 to-violet-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Linkmail
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-10">
            AI‑powered email client that turns LinkedIn visits into meaningful
            conversations—no copy‑paste required.
          </p>
          <Button size="lg" className="px-8 py-5 rounded-2xl text-lg font-semibold shadow-xl">
            Add to Chrome (Coming&nbsp;Soon)
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Screenshot Carousel */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src={screenshot1}
              alt="Linkmail sidebar – choose email template"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <Image
              src={screenshot2}
              alt="Linkmail generated email draft"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <Card key={idx} className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-gray-700 leading-relaxed">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">How Linkmail Works</h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <Image
            src={screenshot1}
            alt="Linkmail interface demo"
            className="rounded-2xl shadow-lg"
          />
          <ul className="space-y-6">
            {steps.map((s) => (
              <li key={s.step} className="flex items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                  {s.step}
                </span>
                <div>
                  <h4 className="text-xl font-semibold mb-1">{s.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call To Action */}
      <section className="w-full bg-gradient-to-br from-violet-600 to-blue-600 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Level‑up your networking in seconds
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Join our beta waitlist and get exclusive early access to Linkmail.
          </p>
          <Button size="lg" className="px-8 py-5 rounded-2xl text-lg font-semibold shadow-xl">
            Join Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 bg-gray-900 text-gray-400 text-center text-sm">
        <div className="mb-2">
          &copy; {new Date().getFullYear()} Linkmail. All rights reserved.
        </div>
        <div>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default LinkmailLandingPage;
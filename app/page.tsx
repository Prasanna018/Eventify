"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Create and manage events with ease",
    },
    {
      icon: Users,
      title: "Attendee Management",
      description: "Track and manage event participants",
    },
    {
      icon: MapPin,
      title: "Venue Selection",
      description: "Find the perfect venue for your events",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center glass-effect p-8 rounded-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-white sm:text-6xl"
          >
            Create Unforgettable Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto"
          >
            Transform your event planning experience with our comprehensive platform.
            From intimate gatherings to large-scale conferences, we've got you covered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/events">Browse Events</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/events/create">Create Event</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2 }}
              className="glass-effect p-6 rounded-xl"
            >
              <div className="text-white">
                <feature.icon className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-200">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
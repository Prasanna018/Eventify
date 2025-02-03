"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description: "Join us for the biggest tech conference of the year",
    date: "March 15, 2024",
    location: "San Francisco, CA",
    attendees: 500,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Music Festival",
    description: "A weekend of amazing music and performances",
    date: "April 20, 2024",
    location: "Austin, TX",
    attendees: 1000,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    description: "Taste the finest cuisines and wines from around the world",
    date: "May 5, 2024",
    location: "New York, NY",
    attendees: 300,
    image: "https://images.unsplash.com/photo-1510924199351-4e9d94df18a6?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect p-8 rounded-2xl mb-12"
        >
          <h1 className="text-3xl font-bold text-white">Upcoming Events</h1>
          <p className="text-gray-200 mt-2">Discover and join amazing events happening near you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden glass-effect border-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-white">{event.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-200">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} attendees
                    </div>
                  </div>
                  <Button className="w-full mt-4">View Details</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
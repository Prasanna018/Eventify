"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Globe, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const organizers = [
  {
    id: 1,
    name: "TechEvents Pro",
    description: "Leading technology conference organizer",
    email: "contact@techevents.pro",
    website: "techevents.pro",
    eventsOrganized: 50,
    rating: 4.8,
    specialties: ["Tech Conferences", "Developer Workshops", "Hackathons"],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    name: "Festival Masters",
    description: "Creating unforgettable music experiences",
    email: "info@festivalmasters.com",
    website: "festivalmasters.com",
    eventsOrganized: 75,
    rating: 4.9,
    specialties: ["Music Festivals", "Concert Series", "Artist Showcases"],
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    name: "Culinary Events Co",
    description: "Premium food and beverage event specialists",
    email: "events@culinaryevents.co",
    website: "culinaryevents.co",
    eventsOrganized: 120,
    rating: 4.7,
    specialties: ["Food Festivals", "Wine Tastings", "Chef Competitions"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function OrganizersPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect p-8 rounded-2xl mb-12"
        >
          <h1 className="text-3xl font-bold text-white">Event Organizers</h1>
          <p className="text-gray-200 mt-2">Connect with top event organizers and create amazing experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizers.map((organizer, index) => (
            <motion.div
              key={organizer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden glass-effect border-0">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-white">{organizer.name}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {organizer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-200">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {organizer.email}
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      {organizer.website}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {organizer.eventsOrganized} events organized
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      {organizer.rating} / 5.0
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Specialties:</h4>
                      <ul className="list-disc list-inside text-sm">
                        {organizer.specialties.map((specialty, i) => (
                          <li key={i}>{specialty}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6">Contact Organizer</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const tickets = [
  {
    id: 1,
    eventTitle: "Tech Conference 2024",
    type: "VIP Pass",
    price: 299,
    date: "March 15, 2024",
    location: "San Francisco, CA",
    perks: ["Priority seating", "Exclusive workshops", "Networking dinner"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    eventTitle: "Music Festival",
    type: "Weekend Pass",
    price: 199,
    date: "April 20, 2024",
    location: "Austin, TX",
    perks: ["All shows access", "Camping spot", "Festival merch"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    eventTitle: "Food & Wine Expo",
    type: "Day Pass",
    price: 89,
    date: "May 5, 2024",
    location: "New York, NY",
    perks: ["All tastings included", "Cooking demos", "Recipe book"],
    image: "https://images.unsplash.com/photo-1510924199351-4e9d94df18a6?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function TicketsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect p-8 rounded-2xl mb-12"
        >
          <h1 className="text-3xl font-bold text-white">Available Tickets</h1>
          <p className="text-gray-200 mt-2">Secure your spot at upcoming events</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden glass-effect border-0">
                <img
                  src={ticket.image}
                  alt={ticket.eventTitle}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-white">{ticket.eventTitle}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {ticket.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-200">
                    <div className="flex items-center">
                      <CreditCard className="w-4 h-4 mr-2" />
                      ${ticket.price}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {ticket.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {ticket.location}
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Ticket Perks:</h4>
                      <ul className="list-disc list-inside text-sm">
                        {ticket.perks.map((perk, i) => (
                          <li key={i}>{perk}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6">Purchase Ticket</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
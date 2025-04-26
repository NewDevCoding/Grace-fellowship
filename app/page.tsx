'use client';

import React from 'react';
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our Church</h1>
          <p className="text-xl mb-8">Join us in worship and fellowship</p>
          <div className="space-y-4">
            <p className="text-lg">Sunday School: 9:00 AM</p>
            <p className="text-lg">Corporate Gathering: 10:30 AM</p>
          </div>
        </div>
      </section> */}
      <div className="relative">
        <Carousel 
          className="w-full h-[calc(100vh-80px)]"
          opts={{
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
        >
          <CarouselContent className="h-[calc(100vh-80px)]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="p-1 h-full flex items-center justify-center">
                  <Card className="h-[90%] w-[90%]">
                    <CardContent className="flex h-full items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>

      {/* Pastor's Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">From Our Pastor</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              On behalf of the members of our church, welcome to our site. We hope that you will find the information helpful and that you will get a better feel for what God is doing in and through His people here.
            </p>
            <p className="text-lg mb-6">
              As a church, it's our desire to equip people to know Jesus Christ and to tell of his amazing grace. We seek to accomplish this through biblical expository preaching, Christ-centered worship, intentional discipleship, local evangelism, and worldwide missions.
            </p>
            <p className="text-lg">
              We hope that you will make plans to visit us soon. We would enjoy the privilege of welcoming you to our church in person.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="mb-4">Learn more about our church, our beliefs, and our leadership.</p>
              <a href="/about" className="text-accent hover:underline">Learn More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <p className="mb-4">Find out what to expect and how to get involved in our community.</p>
              <a href="/connect" className="text-accent hover:underline">Learn More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Sermons</h3>
              <p className="mb-4">Watch or listen to our latest sermons and teachings.</p>
              <a href="/sermons" className="text-accent hover:underline">Learn More →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
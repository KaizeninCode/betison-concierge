import React from "react";
import Header from "./Header";
import {
  AddInvoiceIcon,
  ConciergeBellIcon,
  ShoppingCart01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Hero = () => {
  const cards = [
    {
      service: "Diaspora Errands",
      icon: <HugeiconsIcon icon={ShoppingCart01Icon} size={40} />,
      description: "Get your home errands completed by us",
    },
    {
      service: "Concierge Services",
      icon: <HugeiconsIcon icon={ConciergeBellIcon} size={40} />,
    },
    {
      service: "Personal Assistance",
      icon: <HugeiconsIcon icon={AddInvoiceIcon} size={40} />,
    },
  ];
  return (
    <section
      id="Home"
      className="text-brand-green flex flex-col gap-8 py-16 items-center"
    >
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-garamond font-semibold">
          Betison Homebridge Concierge
        </h1>
        <h1 className="text-2xl font-garamond text-slate-500 font-light italic">
          Your trusted hands back home
        </h1>
      </div>

      {/* CARDS */}
      <div className="flex items-center justify-center gap-6  w-3/4">
        {cards.map((card) => (
          <div
            className="rounded-xl bg-brand-green p-4 flex flex-col gap-4 aspect-auto flex-1 text-brand-gold items-center justify-center"
            key={card.service}
          >
            <div className="bg-brand-gold rounded-full p-4 w-fit text-brand-green">
              {card.icon}
            </div>
            <h1 className="text-white font-poppins text-xl font-bold">
              {card.service}
            </h1>
            {/* <p className=" font-poppins font-extralight">{card.description}</p> */}
          </div>
        ))}
      </div>

      <p className="text-center">
        Providing reliable, professional and accountable support to Kenyans
        living both locally and abroad.
      </p>

      <button className="bg-brand-green px-4 py-2 text-brand-gold rounded-xl cursor-pointer hover:bg-brand-gold hover:text-brand-green transition-all duration-500 ease-in-out">
        Get Started
      </button>
    </section>
  );
};

export default Hero;

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen font-poppins bg-brand-green text-white lg:py-20 py-4"
    >
      <div className="grid md:grid-cols-3 place-content-center">
        <div className="md:p-4 md:col-span-1">
          <h1 className="text-4xl font-bold font-garamond">Company Overview</h1>
        </div>
        <div className="md:p-4 md:col-span-2 text-lg">
          <p>
            <span className="font-extrabold">Betison HomeBridge Concierge</span>{" "}
            is a diaspora-focused errand, concierge and personal assistance
            services company established to provide reliable, professional and
            accountable support to Kenyans living abroad and clients locally who
            require dependable assistance with matters back home.
          </p>
          <br />
          <p>
            We serve as a trusted local representative for our clients,
            undertaking authorised assignments with care, integrity,
            professionalism and accountability. Through personalised assistance,
            transparent communication and a growing network of reliable service
            providers, we help our clients manage their responsibilities with
            greater confidence, convenience and peace of mind.
          </p>
          <br />
          <p>
            Our approach is founded on the understanding that every assignment
            represents something important to someone. Whether it involves
            checking on a property, following up on documents, coordinating
            repairs, delivering essential supplies or checking on the welfare of
            a loved one, we recognise the responsibility that comes with being
            entrusted to act on another person&#39;s behalf.
          </p>
          <br />
          <p>
            At Betison HomeBridge Concierge, we do more than run errands. We
            build trust, bridge distance and provide the reassurance of having
            dependable hands back home.
          </p>
        </div>
      </div>

      {/* MISSION & VISION */}
      
    </section>
  );
};

export default About;

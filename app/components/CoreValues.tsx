import React from "react";

const CoreValues = () => {
  const values = [
    {
      title: "Trust and Credibility",
      description:
        "Trust is the foundation of Betison HomeBridge Concierge. We recognise that clients may entrust us with access to their properties, personal information, family matters,funds and other important responsibilities.",
    },
    {
      title: "Peace of Mind",
      description:
        "Our services are designed to reduce that uncertainty through dependable assistance, timely communication, documented updates and responsible follow-through.",
    },
    {
      title: "Accountability",
      description:
        "We take responsibility for the assignments entrusted to us and are committed to agreeing on the scope of work, obtaining the necessary authorisations, maintaining appropriate records, accounting for client funds and providing honest reports on progress and outcomes.",
    },
    {
      title: "Dependability",
      description:
        "We believe that reliability is demonstrated through consistent action. We strive to honour agreed timelines, respond to client enquiries, follow through on commitments and communicate any circumstances that may affect service delivery.",
    },
    {
      title: "Excellent Customer Service",
      description:
        "We are committed to responsive communication, courteous engagement, personalised service and professional resolution of concerns. We listen to our clients, understand their expectations and work to deliver solutions that meet their needs.",
    },
    {
      title: "Professionalism",
      description:
        "We conduct our business with discipline, respect, confidentiality and a commitment to high standards. We maintain appropriate professional boundaries, respect client instructions and engage service providers responsibly.",
    },
    {
      title: "Partnerships and Collaboration",
      description:
        "We recognise that delivering quality support services requires the right people and the right relationships. We aim to build a dependable network of vetted service providers, contractors, professionals and other partners who share our commitment to quality, integrity, safety and accountability.",
    },
  ];
  return (
    <section className="font-garamond text-brand-green lg:py-20 py-4">
      <div className="grid grid-cols-3">
        <div className="col-span-1 p-4">
          <h1 className="font-bold text-3xl">Our Core Values</h1>
        </div>
        <div className="col-span-2 p-4">
          {values.map((value) => (
            <p key={value.title} className="text-lg mb-4">
              <span className="font-bold">{value.title}</span> <br />
              {value.description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

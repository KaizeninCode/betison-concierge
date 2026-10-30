import React from 'react'
import {
  Building03Icon,
  DocumentValidationIcon,
  Home01Icon,
  QuestionIcon,
  ShoppingCart01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import ServiceIcon from '@hugeicons/core-free-icons/ServiceIcon';

const Services = () => {
  const serviceCards = [
    {
      name: 'Property Management Support and Inspections',
      icon: <HugeiconsIcon icon={Home01Icon}/>
    },
    {
      name: 'Document and Administrative Follow-ups',
      icon: <HugeiconsIcon icon={DocumentValidationIcon}/>
    },
    {
      name: 'Personal Errands and Concierge Services',
      icon: <HugeiconsIcon icon={ShoppingCart01Icon}/>
    },
    {
      name: 'Family Welfare Checks and Support Coordination',
      icon: <HugeiconsIcon icon={ServiceIcon}/>
    },
    {
      name: 'Project Supervision and Coordination',
      icon: <HugeiconsIcon icon={Building03Icon}/>
    },
    {
      name: 'Additional and Bespoke Support Services',
      icon: <HugeiconsIcon icon={QuestionIcon}/>
    },
  ]
  return (
    <section className='min-h-screen font-poppins text-brand-green lg:py-20 py-4 lg:space-y-8 space-y-4'>
      <h1 className="text-4xl text-center font-bold">Our Service Portfolio</h1>
      <p className='text-center'>Our service portfolio includes, but is not limited to, the following:</p>
      <div className="grid grid-cols-3 gap-4 w-4/5 mx-auto">
        
        {serviceCards.map(service => (
          <div
              className="rounded-xl bg-brand-green p-4 aspect-auto text-brand-gold h-full"
              key={service.name}
            >
              <div className="mb-10 bg-brand-gold rounded-full p-4 w-fit text-brand-green">
                {service.icon}
              </div>
              <h1 className="text-white font-poppins text-xl font-bold">
                {service.name}
              </h1>
              {/* <p className=" font-poppins font-extralight">{card.description}</p> */}
            </div>
        ))}
      </div>
    </section>
  )
}

export default Services

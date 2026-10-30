import React from 'react'

const GoalsObjectives = () => {
  const objectives = [
    'Build lasting client trust through honest communication, responsible service delivery and consistent accountability.',
    'Provide peace of mind by offering reliable local assistance to Kenyans abroad who need support with personal, family, property and administrative matters.',
    'Deliver excellent customer service through personalised solutions, timely updates and professional handling of assignments.',
    'Establish a dependable service network by partnering with suitably qualified, vetted and reliable professionals and service providers.',
    'Promote transparency and accountability through clear service agreements, authorised expenditure, appropriate record-keeping and verifiable completion reports.',
    'Protect client interests by respecting confidentiality, maintaining professional boundaries and handling instructions and resources responsibly.',
  ]

  return (
    <section className='font-garamond text-brand-green lg:py-20 py-4'>
      <div className="grid grid-cols-3">
        <div className="col-span-1 p-4">
          <h1 className="font-bold text-3xl">Our Goals and Objectives</h1>
        </div>
        <div className="col-span-2 p-4">
          {objectives.map((value) => (
            <p key={value} className="text-lg mb-4">
              {value}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GoalsObjectives

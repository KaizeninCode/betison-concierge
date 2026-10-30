import React from 'react'

const Header = () => {
  const links = [
    {
      name: 'Who We Are',
      url: '#about',
    },
    {
      name: 'What We Do',
      url: '#services',
    },
    {
      name: 'Reach Out',
      url: '#contact',
    },
  ]

  return (
    <header className='sticky text-brand-green p-3 min-w-6xl mx-auto flex flex-col items-center justify-between rounded-2xl '>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl font-garamond mr-auto">BHC</h1>
        <nav>
          {links.map(l => (
            <a href={l.url} key={l.url} className='mr-4'>{l.name}</a>
          ))}
        </nav>
      </div>
      <hr className='bg-brand-green w-full'/>
    </header>
  )
}

export default Header

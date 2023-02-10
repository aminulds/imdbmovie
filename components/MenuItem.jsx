import Link from 'next/link';
import React from 'react';



const MenuItem = ({ title, link, Icon }) => {
  return (
    <div className='mr-8'>
      <Link href={link} className="hover:text-indigo-600 font-bold">
        <Icon className="text-2xl sm:hidden" />
        <span className='hidden sm:inline text-sm'>{title}</span>
      </Link>
    </div>
  )
}

export default MenuItem
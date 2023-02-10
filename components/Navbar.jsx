import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-gray-100 lg:text-lg p-4 mb-6 md:mb-10">
      <NavItem title="Trending" param="fetchTrending" />
      <NavItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

export default Navbar
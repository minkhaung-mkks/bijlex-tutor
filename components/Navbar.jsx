import Link from 'next/link'
import React from 'react'
import '@/styles/navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src="logo.png" alt="" className="logo_header" />
        <div className="nav_links">
            <Link href="tel:0683355451">+3168335451</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Level</Link>
            <Link href={"/"}>Subjects</Link>
            <Link href={"/"}>Rates</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>Contact</Link>
            <button className='trial_btn'>
                Free Trial Lesson!
            </button>
        </div>
    </nav>
  )
}

export default Navbar
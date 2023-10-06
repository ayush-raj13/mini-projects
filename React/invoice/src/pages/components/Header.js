import React, { useState } from "react"
import { Link } from "react-router-dom"
import { navbar } from "../../data/data"

export default function Header() {
  const [links] = useState(navbar)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
    const navbar = document.querySelector(".navbar")
    const listItems = document.querySelectorAll(".list-item")

    navbar.classList.toggle("open")
    setIsOpen(!isOpen)

    listItems.forEach((item) => {
      item.addEventListener("click", () => navbar.classList.remove("open"))
      setIsOpen(false)
    })
  }

  return (
    <>
      <header className="p-5 flex items-center justify-between xl:max-w-7xl lg:mx-auto 2xl:px-0">
        <div>
          
        </div>

        <nav className="navbar">
          <ul>
            {links.map(({ id, title, url }) => (
              <React.Fragment key={id}>
                <li key={id} className="list-item">
                  <Link to={url} className="text-base text-slate-700">
                    {title}
                  </Link>
                </li>
              </React.Fragment>
            ))}

        
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={handleClick}
            className="text-sm uppercase transition-all duration-500 text-slate-700"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  )
}

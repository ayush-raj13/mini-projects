import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <>
      <div className="bg-teal-900 py-10 lg:py-20 relative">
        <div className="slant-footer"></div>
        <footer className="max-width grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-white text-3xl">Invoicer</h2>
          </div>

          <ul className="">
            <li>
              <Link to="/about" className="text-white">
                About Invoicer
              </Link>
            </li>
            <li className="my-3">
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/suggestion-box" className="text-white">
                Suggestion Box
              </Link>
            </li>
          </ul>

          
          <p className="text-slate-200">
            Built by{" "}
            
              Tanmoy Barman
       
          </p>
        </footer>
      </div>
    </>
  )
}

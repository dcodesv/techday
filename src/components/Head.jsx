import { useEffect, useState } from "react"
import LogoDefault from "../assets/logo-desktop.svg"
import { useLocation, useNavigate } from "react-router-dom"
import { MaterialSymbol } from "react-material-symbols"
const Head = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeMenu, setActiveMenu] = useState("")

  const { hideMenu, logo } = props

  const menu = [
    {
      name: "Asistencia",
      slug: "attendance",
      icon: "recent_actors",
    },
    {
      name: "Enrolamiento",
      slug: "enroll",
      icon: "person_add",
    },
  ]

  useEffect(() => {
    location && setActiveMenu(location.pathname)
  }, [location])

  return (
    <div
      className={`flex w-full justify-center items-center box-border px-10 py-6 flex-wrap relative z-10 ${
        !hideMenu ? "md:justify-between" : "md:justify-center"
      }`}>
      <img src={logo || LogoDefault} alt="logo" className="w-48" />
      {!hideMenu && (
        <ul className="flex w-full md:w-fit gap-8 justify-center items-center my-2 md:my-0">
          {menu.map((item, index) => (
            <li
              onClick={() => navigate("/" + item.slug)}
              key={index}
              className={`${
                activeMenu === `/${item.slug}`
                  ? "text-[#68FF33]"
                  : "text-white/40"
              } text-lg font-semibold cursor-pointer hover:text-white transition-all flex justify-center items-center gap-2`}>
              <MaterialSymbol icon={item.icon} size={24} fill grade={-25} />
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default Head

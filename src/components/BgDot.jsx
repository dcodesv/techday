import bg from "../assets/bg-element.png"
const BgDot = () => {
  return (
    <div
      className="w-8/12 h-full absolute opacity-20"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}></div>
  )
}

export default BgDot

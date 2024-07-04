import bg from "../assets/bg-element.png"
const BgDot = () => {
  return (
    <div
      className="w-8/12 h-full absolute opacity-30 box-border z-0 left-0"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}></div>
  )
}

export default BgDot

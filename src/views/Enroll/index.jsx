import Head from "../../components/Head"
import BgDot from "../../components/BgDot"

const Enroll = () => {
  return (
    <div
      className="w-full h-screen box-border overflow-y-scroll overflow-x-hidden relative"
      style={{
        background: `linear-gradient(135deg, #67096D 0%, #1A0242 35%, #000000 70%)`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}>
      <BgDot />
      <Head />
      <h1>Enroll</h1>
    </div>
  )
}

export default Enroll

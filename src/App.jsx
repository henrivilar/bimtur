import DesktopLayout from "./layouts/DesktopLayout"
import MobileLayout from "./layouts/MobileLayout"

export default function App() {
  return (
    <>
      {/* MOBILE (até md) */}
      <div className="block lg:hidden">
        <MobileLayout />
      </div>

      {/* DESKTOP (lg pra cima) */}
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
    </>
  )
}
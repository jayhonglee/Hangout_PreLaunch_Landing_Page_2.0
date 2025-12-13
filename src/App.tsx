import Carousel from "./components/Carousel";
import WaitlistForm from "./components/WaitlistForm";
import logo from "./assets/Logo.png";

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#F54945] text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-left sm:text-center">
          <h1 className="text-[40px] lg:text-[80px] font-bold mb-4 sm:mb-6 leading-[50px] lg:leading-[110%] tracking-[-0.01em]">
            Find Hangouts
            <br />
            in Vancouver
          </h1>
          <p className="text-[24px] sm:text-[32px] lg:text-[48px] font-normal mb-8 sm:mb-12 text-white leading-[128%] tracking-[-0.05em]">
            Join real hangouts
            <br />
            happening near you.
          </p>
          <div className="max-w-2xl mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Local Developers Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F54945]">
            Built by local
            <br />
            developers in
            <br />
            Vancouver
          </h2>
        </div>
      </section>

      {/* Mobile App Showcase Section with Carousel */}
      <section className="bg-[#F54945] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Carousel on left */}
            <div className="flex justify-center lg:justify-start">
              <Carousel />
            </div>

            {/* Text content on right */}
            <div className="text-white text-left pl-4 lg:pl-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Find Hangouts
                <br />
                With a Swipe
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/95 font-medium leading-relaxed">
                Find real group hangouts happening near you. Fast, fun, and zero
                pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Strategy Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 xl:gap-6 items-center">
            {/* Icon */}
            <div className="flex justify-center lg:justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-[#F6F8FA] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-sm lg:-mr-2 xl:-mr-4">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#808080]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </div>

            {/* Text content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                Launching in
                <br />
                Vancouver First
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-[#202020] leading-relaxed font-normal">
                We're starting with a small group of locals to create the best
                in-person experience before expanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-[#F54945] text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Logo and text */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-6 text-center lg:text-left">
              <img
                src={logo}
                alt="HangoutHive Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain shrink-0"
              />
              <p className="text-lg sm:text-xl lg:text-2xl font-medium">
                Join real hangouts
                <br />
                happening near you.
              </p>
            </div>

            {/* Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <div className="[&_form>div]:!flex-col">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

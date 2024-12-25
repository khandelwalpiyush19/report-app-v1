
export default function HowItWorks() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>

      <main className="relative px-6 pt-28">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
             Become a Volunteer
              <span className="block text-2xl mt-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
               Join us today
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              We are a community of volunteers who are passionate about making a difference in the world. We are always looking for new volunteers to join our team. If you are interested in becoming a volunteer, please fill out the form below.
            </p>
          </div>
          {/* Security Features */}
          <div className="mt-24 rounded-2xl bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
            Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
               {
                title: "Earn Money ",
                description: "Earn money by completing tasks and helping others.",
                icon: (
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      strokeWidth={2}
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v8m-2-4h4"
                    />
                  </svg>
                ),
              },
              

                {
                  title: "Earn social credits",
                  description: " Earn gratitude points by completing tasks.",
                  icon: (
                    <svg
                      className="h-6 w-6 text-sky-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Gain certificates",
                  description: "Gain certificates by completing tasks.",
                  icon: (
                    <svg
                      className="h-6 w-6 text-sky-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  ),
                },
              ].map((feature, i) => (
                <div key={i} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

         <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-zinc-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Volunteer Registration</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-zinc-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 selection:bg-sky-500/20"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-zinc-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 selection:bg-sky-500/20"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 bg-zinc-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 selection:bg-sky-500/20"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="interests" className="block text-sm font-medium mb-1">
              Areas/Pincode
            </label>
            <input
              id="interests"
              className="w-full px-4 py-2 bg-zinc-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 selection:bg-sky-500/20"
              placeholder="Enter the area you are available"
               
            ></input>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 rounded-md focus:outline-none focus:ring-4 focus:ring-sky-500/50"
          >
            Register
          </button>
        </form>
      </div>
    </div>
        </div>
      </main>
    </div>
  );
}

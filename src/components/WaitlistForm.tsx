import { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center items-stretch lg:items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@email.com"
          required
          className="w-full lg:flex-1 min-w-0 px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-white text-gray-800 placeholder-[#808080] focus:outline-none focus:ring-2 focus:ring-white/50 text-base lg:text-lg font-medium shadow-sm border-0"
        />
        <button
          type="submit"
          className="w-full lg:flex-1 px-6 lg:px-8 py-3 lg:py-4 bg-black text-white rounded-xl lg:rounded-2xl font-bold hover:bg-gray-900 active:scale-95 transition-all duration-200 text-base lg:text-lg whitespace-nowrap shadow-lg border-0"
        >
          Join Vancouver Waitlist
        </button>
      </div>
    </form>
  );
};

export default WaitlistForm;

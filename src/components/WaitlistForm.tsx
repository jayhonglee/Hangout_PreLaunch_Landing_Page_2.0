import { useState } from "react";
import emailjs from "@emailjs/browser";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // EmailJS Configuration
  // Use environment variables for security (recommended)
  // Or replace with your actual values directly
  // See EMAILJS_SETUP.md for detailed setup instructions
  const EMAILJS_SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_8pipe58";
  const EMAILJS_TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ku9y6nf";
  const EMAILJS_PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "T659ZfsDK3ZbC9acC";
  const RECIPIENT_EMAIL = "hangouthiveapp@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        user_email: email,
        to_email: RECIPIENT_EMAIL,
        message: `New waitlist signup from: ${email}`,
      });

      setSubmitStatus("success");
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");

      // Reset error message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
          className="w-full lg:flex-1 min-w-0 px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-white text-gray-800 placeholder-[#808080] focus:outline-none focus:ring-2 focus:ring-white/50 text-base lg:text-lg font-medium shadow-sm border-0 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full lg:flex-1 px-6 lg:px-8 py-3 lg:py-4 bg-black text-white rounded-xl lg:rounded-2xl font-bold hover:bg-gray-900 active:scale-95 transition-all duration-200 text-base lg:text-lg whitespace-nowrap shadow-lg border-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
        >
          {isSubmitting ? "Submitting..." : "Join Vancouver Waitlist"}
        </button>
      </div>
      {submitStatus === "success" && (
        <p className="mt-3 text-center text-sm text-white/90">
          ✓ Successfully joined the waitlist!
        </p>
      )}
      {submitStatus === "error" && (
        <p className="mt-3 text-center text-sm text-white/90">
          ✗ Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};

export default WaitlistForm;

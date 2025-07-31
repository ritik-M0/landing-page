import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-[#1D1D1D] py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16">
          GET IN TOUCH
        </h2>

        <form className="space-y-8">
          {/* First Row - Full Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <input
                type="text"
                placeholder="FULL NAME"
                className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 py-4 px-0 focus:outline-none focus:border-[#A1F480] transition-colors text-lg"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 py-4 px-0 focus:outline-none focus:border-[#A1F480] transition-colors text-lg"
              />
            </div>
          </div>

          {/* Second Row - Phone and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <input
                type="tel"
                placeholder="PHONE NUMBER"
                className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 py-4 px-0 focus:outline-none focus:border-[#A1F480] transition-colors text-lg"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="SUBJECT"
                className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 py-4 px-0 focus:outline-none focus:border-[#A1F480] transition-colors text-lg"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <textarea
              placeholder="WRITE YOUR MESSAGE HERE..."
              rows={4}
              className="w-full bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 py-4 px-0 focus:outline-none focus:border-[#A1F480] transition-colors text-lg resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1D1D1D] rounded-full px-8 py-6 text-base font-semibold group transition-all duration-300">
              Send Message
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;

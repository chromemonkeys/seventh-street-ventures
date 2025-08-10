import Slide from "@/components/slide"
import { ArrowRight } from "lucide-react" // Importing Lucide icon
import Image from "next/image" // Import Image component

export default function SlideThree() {
  return (
    <Slide className="relative bg-[#FDFBF8] p-4 md:p-8 lg:p-12">
      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
        {/* Content Section - Left Aligned */}
        <div className="space-y-4 sm:space-y-8 text-left md:col-span-1">
          {" "}
          {/* Smaller space on mobile */}
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">Lorem ipsum dolor sit amet?</h1>
          <p className="text-base text-gray-700 sm:text-lg md:text-xl">Consectetur adipiscing elit, sed do eiusmod tempor incididunt:</p>
          <div className="space-y-2 sm:space-y-4">
            {" "}
            {/* Smaller space on mobile */}
            <div className="flex items-start space-x-2 sm:space-x-3">
              {" "}
              {/* Smaller space on mobile */}
              <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-6 sm:w-6" />{" "}
              {/* Smaller on mobile */}
              <p className="text-base text-gray-700 sm:text-lg">Lorem ipsum dolor sit amet.</p>{" "}
              {/* Smaller on mobile */}
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-6 sm:w-6" />
              <p className="text-base text-gray-700 sm:text-lg">Ut enim ad minim veniam.</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-6 sm:w-6" />
              <p className="text-base text-gray-700 sm:text-lg">Quis nostrud exercitation ullamco.</p>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-3">
              <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600 sm:mt-1 sm:h-6 sm:w-6" />
              <p className="text-base text-gray-700 sm:text-lg">Laboris nisi ut aliquip ex ea commodo.</p>
            </div>
          </div>
        </div>

        {/* Image Section - Right Aligned */}
        <div className="flex justify-center md:col-span-1">
          <Image
            src="/placeholder.svg"
            alt="Decorative graphic"
            width={300} // Smaller on mobile
            height={300} // Smaller on mobile
            className="object-contain sm:w-[500px] sm:h-[500px]" // Larger on desktop
          />
        </div>
      </div>
    </Slide>
  )
}

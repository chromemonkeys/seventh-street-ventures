"use client"

import { X, Home, ChevronRight, Check, Mail, Printer } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface QuoteModalProps {
  onClose: () => void
}

export default function QuoteModal({ onClose }: QuoteModalProps) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div
        className={`relative h-[95vh] w-[95vw] max-w-6xl transform overflow-hidden rounded-xl bg-[#FDFBF8] shadow-2xl transition-all duration-500 ease-out ${
          showContent ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 sm:right-8 sm:top-8"
          aria-label="Close modal"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        <div className="relative z-10 flex h-full w-full flex-col bg-white text-gray-800">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-gray-200 p-3 sm:p-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Image src="/placeholder-logo.svg" alt="Company ABC Logo" width={80} height={24} className="w-16 sm:w-[100px]" />
              <nav className="flex items-center text-xs text-gray-600 sm:text-sm">
                <Home className="h-3 w-3 mr-1 sm:h-4 sm:w-4" />
                <ChevronRight className="h-2.5 w-2.5 mx-0.5 sm:h-3 sm:w-3" />
                <span>Sales Orders</span>
                <ChevronRight className="h-2.5 w-2.5 mx-0.5 sm:h-3 sm:w-3" />
                <span className="font-semibold">Quotation S00027</span>
              </nav>
            </div>
            <button className="text-xs text-gray-600 hover:text-gray-800 sm:text-sm">Sign in</button>
          </header>

          {/* Main Content Area */}
          <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
            {/* Left Sidebar */}
            <aside className="w-full md:w-1/4 md:min-w-[200px] border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50 p-4 md:p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4 sm:text-3xl sm:mb-6">$ 12,500.00</h2>
                <Button className="w-full mb-2 bg-[#6B4F6B] hover:bg-[#5A425A] text-white text-sm sm:text-base">
                  <Check className="h-4 w-4 mr-2" />
                  Accept & Pay
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-white hover:bg-gray-100 text-gray-700 border-[#CBD5E1] text-sm sm:text-base"
                >
                  <Printer className="h-4 w-4 mr-2" />
                  View Details
                </Button>

                <div className="mt-6 text-xs text-gray-600 sm:mt-8 sm:text-sm">
                  <p className="font-semibold mb-1 sm:mb-2">Quotation - S00027</p>
                  <p className="mb-2 sm:mb-4">Communication history</p>
                </div>
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="flex-1 p-4 md:p-8 overflow-y-auto">
              <h1 className="text-2xl font-bold mb-4 sm:text-3xl sm:mb-6">Quotation - S00027</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <h3 className="text-base font-semibold mb-2 sm:text-lg sm:mb-3">Your Subscription</h3>
                  <div className="text-xs space-y-1 sm:text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Date:</span>
                      <span>23/06/2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Expiration Date:</span>
                      <span>24/07/2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Plan:</span>
                      <span>Monthly</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2 sm:text-lg sm:mb-3">Invoicing and Shipping Address</h3>
                  <div className="text-xs space-y-1 sm:text-sm">
                    <p className="font-medium">Company ABC</p>
                    <p className="flex items-center">
                      <Mail className="h-3 w-3 mr-1 sm:h-4 sm:w-4 text-gray-600" />
                      info@companyabc.com
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-base font-semibold mb-2 sm:text-lg sm:mb-3">Products</h3>
              <div className="overflow-x-auto mb-6 sm:mb-8">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[400px]">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="py-2 pr-2 sm:pr-4 font-semibold">Description</th>
                      <th className="py-2 px-2 sm:px-4 font-semibold text-right">Quantity</th>
                      <th className="py-2 px-2 sm:px-4 font-semibold text-right">Unit Price</th>
                      <th className="py-2 pl-2 sm:pl-4 font-semibold text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pr-2 sm:pr-4">
                        <p className="font-medium">Lorem Ipsum (Basic)</p>
                        <p className="text-xs text-gray-600">Comprehensive third-party login monitoring.</p>
                      </td>
                      <td className="py-2 px-2 sm:px-4 text-right">50 Users</td>
                      <td className="py-2 px-2 sm:px-4 text-right">250.00</td>
                      <td className="py-2 pl-2 sm:pl-4 text-right">$ 12,500.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end">
                <div className="w-full max-w-xs text-xs sm:text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Untaxed Amount</span>
                    <span className="font-medium">$ 12,500.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-base border-t border-gray-300 pt-2 mt-2 sm:text-lg">
                    <span>Total</span>
                    <span>$ 12,500.00</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-base font-semibold mb-1 sm:text-lg sm:mb-2">Terms & Conditions</h3>
                <p className="text-xs text-gray-600 sm:text-sm">
                  This is where Terms and Conditions of the quote are set
                </p>
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <Button className="bg-[#6B4F6B] hover:bg-[#5A425A] text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base">
                  <Check className="h-4 w-4 mr-2 sm:h-5 sm:w-5" />
                  Accept & Pay
                </Button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

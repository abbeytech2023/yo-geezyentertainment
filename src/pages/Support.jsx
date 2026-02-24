import { useState } from "react";
import { FaUniversity, FaCopy, FaCheckCircle } from "react-icons/fa";

export default function SupportPage() {
  const [copied, setCopied] = useState(false);

  const accountDetails = {
    accountName: "YO GEEZY ENTERTAINMENT",
    bankName: "Access Bank",
    accountNumber: "1770558728",
  };

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(accountDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="support"
      className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-24 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Support the Movement
        </h1>

        <p className="text-gray-300 mb-12">
          Your support helps fund new music, videos, and creative projects.
          Every contribution moves the vision forward.
        </p>

        {/* Bank Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
          <FaUniversity className="text-4xl mx-auto mb-6 text-purple-500" />

          <div className="space-y-4 text-left md:text-center">
            <div>
              <p className="text-gray-400 text-sm">Account Name</p>
              <p className="text-lg font-semibold">
                {accountDetails.accountName}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Bank Name</p>
              <p className="text-lg font-semibold">{accountDetails.bankName}</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Account Number</p>
              <div className="flex items-center justify-between md:justify-center gap-4">
                <p className="text-xl font-bold tracking-widest">
                  {accountDetails.accountNumber}
                </p>

                <button
                  onClick={copyAccountNumber}
                  className="bg-purple-600 hover:bg-purple-700 p-2 rounded-lg transition"
                >
                  {copied ? <FaCheckCircle /> : <FaCopy />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Note */}
        <p className="text-gray-400 text-sm mt-10">
          Thank you for being part of the journey ❤️
        </p>
      </div>
    </section>
  );
}

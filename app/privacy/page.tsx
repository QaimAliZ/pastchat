"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c0c0c] to-[#111111] p-6 md:p-16 flex flex-col justify-between relative">

      {/* Top-left clickable logo */}
      <div
        className="absolute top-6 left-6 cursor-pointer z-50"
        onClick={() => router.push("/")}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Kronos.ai
        </h1>
      </div>

      {/* Main Container */}
      <div className="flex justify-center flex-1 mt-16">
        <div className="w-full max-w-4xl bg-[#1b1b1b]/80 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col space-y-8 overflow-y-auto">

          {/* Page Header */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Privacy Policy
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            At <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">Kronos.ai</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
          </p>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                1. Information We Collect
              </h3>
              <p className="text-gray-300">
                We may collect personal information such as your name, email address, account credentials, and any content you provide when registering or using Kronos.ai. Additionally, non-personal data like browser type, device information, and usage patterns are collected automatically to improve your experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2. How We Use Your Information
              </h3>
              <p className="text-gray-300">
                The information we collect is used to provide and maintain the platform, personalize your experience, respond to support requests, send important notifications, and improve our services. We do not sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                3. Cookies and Tracking
              </h3>
              <p className="text-gray-300">
                Kronos.ai may use cookies and similar technologies to enhance user experience, analyze trends, and track platform usage. You can manage your cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                4. Data Sharing and Disclosure
              </h3>
              <p className="text-gray-300">
                We do not share your personal information with third parties except as necessary to provide services, comply with legal obligations, or protect the rights, property, or safety of Kronos.ai, its users, or others. Aggregated and anonymized data may be shared for analytics or research purposes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                5. Data Security
              </h3>
              <p className="text-gray-300">
                We implement industry-standard security measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                6. User Rights
              </h3>
              <p className="text-gray-300">
                You have the right to access, update, or delete your personal information. You may also request that we limit the processing of your data or object to certain uses. To exercise these rights, please contact our support team through the platform.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                7. Children's Privacy
              </h3>
              <p className="text-gray-300">
                Kronos.ai is not intended for children under 13 years old. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such data, we will take steps to delete it promptly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                8. Updates to Privacy Policy
              </h3>
              <p className="text-gray-300">
                We may update this Privacy Policy periodically. Users will be notified of significant changes via email or an in-app notification. Continued use of the platform after updates constitutes acceptance of the new Privacy Policy.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 py-6 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Kronos.ai. All rights reserved.</p>
        <p>
          <span
            className="cursor-pointer text-blue-400 hover:underline"
            onClick={() => router.push("/")}
          >
            Home
          </span>{" "} |{" "}
          <span
            className="cursor-pointer text-blue-400 hover:underline"
            onClick={() => router.push("/terms")}
          >
            Terms & Conditions
          </span>{" "} |{" "}
          <span
            className="cursor-pointer text-blue-400 hover:underline"
            onClick={() => router.push("/privacy")}
          >
            Privacy Policy
          </span>
        </p>
      </footer>
    </div>
  );
}

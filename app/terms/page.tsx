"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function TermsPage() {
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
            Terms & Conditions
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">Kronos.ai</span>, the interactive platform that allows you to converse with historical figures and explore the past in a dynamic way. By accessing or using Kronos.ai, you agree to comply with these Terms and Conditions, which govern your use of the website, services, and any content provided. If you do not agree, please refrain from using the platform.
          </p>

          <div className="space-y-8">

            {/* Terms Sections */}
            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-300">
                By creating an account or using Kronos.ai in any capacity, you confirm that you have read, understood, and agreed to these Terms. These terms apply to all users, visitors, and others who access or use the platform. Acceptance of these terms is mandatory for accessing certain features, and failure to comply may result in restricted access or termination of your account.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2. Eligibility
              </h3>
              <p className="text-gray-300">
                Kronos.ai is intended for users who are at least 13 years old. Users under 18 years of age must use the platform under the supervision of a parent or legal guardian. By registering, you represent that you meet the minimum age requirement and are legally capable of entering into these Terms. Kronos.ai reserves the right to request age verification if deemed necessary.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                3. Account Registration
              </h3>
              <p className="text-gray-300">
                Certain features of Kronos.ai require account registration. You agree to provide accurate, complete, and current information during registration. You are responsible for maintaining the confidentiality of your account credentials, and you accept responsibility for all activities that occur under your account. Any unauthorized use should be reported immediately. Kronos.ai reserves the right to suspend or terminate accounts that provide false information or engage in fraudulent activity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                4. User Conduct
              </h3>
              <p className="text-gray-300">
                Users are expected to interact responsibly and respectfully. Prohibited behavior includes harassment, hate speech, impersonation, or any illegal activity. Users may not attempt to interfere with the platform’s functionality, distribute malicious code, or exploit vulnerabilities. Kronos.ai reserves the right to remove content or suspend accounts that violate these guidelines.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                5. Content and Historical Simulations
              </h3>
              <p className="text-gray-300">
                The conversations on Kronos.ai are simulations intended for educational and entertainment purposes. While we strive to ensure historical accuracy, Kronos.ai does not guarantee that the content reflects the exact thoughts, beliefs, or actions of historical figures. Users should treat all content as an interactive learning tool rather than definitive historical fact.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                6. Intellectual Property
              </h3>
              <p className="text-gray-300">
                All materials on Kronos.ai, including logos, graphics, code, and content, are the property of Kronos.ai or its licensors. Users may not reproduce, distribute, or create derivative works without prior written permission. Any user-generated content remains the property of the user, but by posting it, you grant Kronos.ai a worldwide, non-exclusive, royalty-free license to use, modify, and display it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                7. Disclaimers
              </h3>
              <p className="text-gray-300">
                Kronos.ai is provided "as is" without warranties of any kind. The platform may experience interruptions, errors, or inaccuracies. Users acknowledge that they use the platform at their own risk. Kronos.ai does not warrant that the platform will meet your specific expectations or that all interactions will be error-free.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                8. Limitation of Liability
              </h3>
              <p className="text-gray-300">
                Kronos.ai is not liable for direct, indirect, incidental, or consequential damages arising from use of the platform, including data loss, missed opportunities, or interactions with simulated historical figures. This limitation applies to all claims, whether based on contract, tort, or any other legal theory.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                9. Termination
              </h3>
              <p className="text-gray-300">
                Kronos.ai reserves the right to suspend or terminate accounts that violate these Terms, engage in prohibited behavior, or threaten the integrity of the platform. Termination does not remove obligations incurred prior to termination. Users who wish to terminate their account may request account deletion by contacting support.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                10. Changes to Terms
              </h3>
              <p className="text-gray-300">
                Kronos.ai may update these Terms and Conditions periodically. Users will be notified of significant changes via email or an in-app notification. Continued use of the platform after changes constitutes acceptance of the updated Terms.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 py-6 text-center text-gray-400 border-t border-gray-800 space-y-2">
        <p>&copy; {new Date().getFullYear()} Kronos.ai. All rights reserved.</p>
        <p>Timeless conversations, powered by AI.</p>
        <p className="flex justify-center space-x-4">
          <span
            className="cursor-pointer text-blue-400 hover:underline"
            onClick={() => router.push("/")}
          >
            Home
          </span>
          <span>|</span>
          <span
            className="cursor-pointer text-blue-400 hover:underline"
            onClick={() => router.push("/terms")}
          >
            Terms & Conditions
          </span>
          <span>|</span>
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

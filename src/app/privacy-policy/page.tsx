import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white">
      <h1 className="text-3xl font-bold mb-6">LinkMail Privacy Policy</h1>
      
      <p className="text-sm text-gray-500 mb-6">Last Updated: March 28, 2025</p>
      
      <h2 className="text-xl font-semibold mb-3">Introduction</h2>
      <p className="mb-4">
        LinkMail (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Chrome extension.
      </p>
      
      <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
      
      <h3 className="text-lg font-medium mb-2">Information You Provide</h3>
      <p className="mb-4">
        When you use LinkMail, we collect the following information:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>Google Account Information:</strong> When you sign in with Google, we access your email address and name to identify your account.
        </li>
        <li>
          <strong>Profile Information:</strong> Information you voluntarily provide including your name, college/university, graduation year, experiences, and skills.
        </li>
        <li>
          <strong>Email Templates:</strong> Custom email templates you create within the extension.
        </li>
        <li>
          <strong>Email Content:</strong> The content of emails you compose and send using the extension.
        </li>
      </ul>
      
      <h3 className="text-lg font-medium mb-2">Information Automatically Collected</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>LinkedIn Profile Data:</strong> When you use our extension on a LinkedIn profile, we temporarily collect publicly available information from that profile including name, headline, about section, and professional experience.
        </li>
        <li>
          <strong>Usage Data:</strong> Basic information about how you interact with our extension.
        </li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Authenticate you and provide access to the extension&apos;s features</li>
        <li>Personalize email suggestions based on your profile information</li>
        <li>Store your sent email history for your reference</li>
        <li>Save your custom email templates</li>
        <li>Generate personalized email content using AI services</li>
        <li>Improve the extension&apos;s functionality and user experience</li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-3">Data Storage</h2>
      
      <h3 className="text-lg font-medium mb-2">Local Storage</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Your profile information, custom templates, and email history are stored locally in your browser using Chrome&apos;s storage API.</li>
        <li>This information is associated with your Google email address.</li>
      </ul>
      
      <h3 className="text-lg font-medium mb-2">External Processing</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>When generating email content, LinkedIn profile data is temporarily processed by our server which utilizes AI services.</li>
        <li>We do not permanently store LinkedIn profile data or generated email content on our servers.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-3">Data Sharing</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to third parties. Your information may be shared in the following limited circumstances:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>Third-Party Service Providers:</strong> We may use third-party services (such as AI providers) to help us operate our extension. These services have access to your information only to perform tasks on our behalf and are obligated not to disclose or use it for other purposes.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
        </li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-3">Google API Services</h2>
      <p className="mb-4">
        Our extension uses Google API Services. By using our extension, you acknowledge and agree that:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>We access and use data from Google APIs in accordance with Google&apos;s API Services User Data Policy.</li>
        <li>The use of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-3">Your Choices</h2>
      <p className="mb-4">
        You can:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Log out of the extension at any time to prevent further collection of information</li>
        <li>Edit or update your profile information</li>
        <li>Delete your email history and templates through your browser&apos;s extension settings</li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-3">Security</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
      </p>
      
      <h2 className="text-xl font-semibold mb-3">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
      </p>
      
      <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at: ishaan4g@gmail.com
      </p>
      
      <h2 className="text-xl font-semibold mb-3">California Privacy Rights</h2>
      <p className="mb-4">
        If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA). This includes the right to request disclosure of personal information we collect and share about you, and the right to request deletion of your personal information.
      </p>
      
      <h2 className="text-xl font-semibold mb-3">Children&apos;s Privacy</h2>
      <p className="mb-4">
        Our extension is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
      </p>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
} 
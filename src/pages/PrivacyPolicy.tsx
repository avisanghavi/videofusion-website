import React, { useEffect } from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.location.href = '/legal/privacy-policy.pdf';
  }, []);

  return (
    <LegalPageLayout title="Videofusion Privacy Policy">
      <div className="w-full max-w-5xl mx-auto text-center py-8">
        <p className="text-gray-700 mb-4">
          If you are not automatically redirected,{' '}
          <a 
            href="/legal/privacy-policy.pdf"
            className="text-purple-600 hover:text-purple-800 underline"
          >
            click here to view the Privacy Policy
          </a>
        </p>
      </div>
    </LegalPageLayout>
  );
}; 
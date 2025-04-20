import React, { useEffect } from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const CCPA = () => {
  useEffect(() => {
    window.location.href = '/legal/ccpa.pdf';
  }, []);

  return (
    <LegalPageLayout title="California Consumer Privacy Act (CCPA)">
      <div className="w-full max-w-5xl mx-auto text-center py-8">
        <p className="text-gray-700 mb-4">
          If you are not automatically redirected,{' '}
          <a 
            href="/legal/ccpa.pdf"
            className="text-purple-600 hover:text-purple-800 underline"
          >
            click here to view the CCPA
          </a>
        </p>
      </div>
    </LegalPageLayout>
  );
}; 
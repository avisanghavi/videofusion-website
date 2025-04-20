import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const TermsConditions = () => {
  return (
    <LegalPageLayout title="Videofusion Terms & Conditions">
      <div className="w-full h-[calc(100vh-200px)]">
        <object
          data="/legal/terms-conditions.pdf"
          type="application/pdf"
          className="w-full h-full rounded-lg shadow-lg"
        >
          <div className="text-center py-8">
            <p className="text-gray-700 mb-4">
              If you're unable to view the PDF, you can{' '}
              <a 
                href="/legal/terms-conditions.pdf"
                download
                className="text-purple-600 hover:text-purple-800 underline"
              >
                download it here
              </a>
            </p>
          </div>
        </object>
      </div>
    </LegalPageLayout>
  );
}; 
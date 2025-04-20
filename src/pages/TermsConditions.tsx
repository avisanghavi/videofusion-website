import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const TermsConditions = () => {
  return (
    <LegalPageLayout title="Videofusion Terms & Conditions">
      <div className="w-full max-w-5xl mx-auto p-4">
        <object
          data="/legal/terms-conditions.pdf"
          type="application/pdf"
          className="w-full h-[calc(100vh-200px)] border rounded-lg"
        >
          <div className="text-center py-8">
            <p className="text-gray-700 mb-4">
              Unable to display PDF.{' '}
              <a 
                href="/legal/terms-conditions.pdf"
                className="text-purple-600 hover:text-purple-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Terms & Conditions PDF
              </a>
            </p>
          </div>
        </object>
      </div>
    </LegalPageLayout>
  );
}; 
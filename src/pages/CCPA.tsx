import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const CCPA = () => {
  return (
    <LegalPageLayout title="Videofusion CCPA Notice">
      <div className="w-full max-w-5xl mx-auto p-4">
        <object
          data="/legal/ccpa.pdf"
          type="application/pdf"
          className="w-full h-[calc(100vh-200px)] border rounded-lg"
        >
          <div className="text-center py-8">
            <p className="text-gray-700 mb-4">
              Unable to display PDF.{' '}
              <a 
                href="/legal/ccpa.pdf"
                className="text-purple-600 hover:text-purple-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CCPA Notice PDF
              </a>
            </p>
          </div>
        </object>
      </div>
    </LegalPageLayout>
  );
}; 
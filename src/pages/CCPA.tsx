import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const CCPA = () => {
  return (
    <LegalPageLayout title="California Consumer Privacy Act (CCPA)">
      <div className="w-full h-[calc(100vh-200px)]">
        <object
          data="/legal/ccpa.pdf"
          type="application/pdf"
          className="w-full h-full rounded-lg shadow-lg"
        >
          <div className="text-center py-8">
            <p className="text-gray-700 mb-4">
              If you're unable to view the PDF, you can{' '}
              <a 
                href="/legal/ccpa.pdf"
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
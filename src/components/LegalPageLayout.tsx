import React from 'react';

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
      </div>
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {children}
        </div>
      </main>
    </div>
  );
}; 
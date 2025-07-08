import React, { useState } from 'react';

const LexiLegalAssistant = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // Simulated API response
  const simulatedResponse = {
    answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased's annual income should be added as future prospects.",
    citations: [
      {
        text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
        source: "Dani_Devi_v_Pritam_Singh.pdf",
        paragraph: "Para 7 of the document",
        link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
      }
    ]
  };

  const handleSubmit = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setResponse(simulatedResponse);
      setIsLoading(false);
    }, 1500);
  };

  const handleCitationClick = (citation) => {
    // Open PDF in new tab
    window.open(citation.link, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lexi Legal Assistant</h1>
          <p className="text-gray-600">Get AI-powered legal research with reliable citations</p>
        </div>

        {/* Input Panel */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div>
            <div className="mb-4">
              <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
                Ask a legal question:
              </label>
              <textarea
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={isLoading || !query.trim()}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </div>
              ) : (
                'Get Legal Answer'
              )}
            </button>
          </div>
        </div>

        {/* Answer Panel */}
        {response && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal Answer</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {response.answer}
              </p>
            </div>
          </div>
        )}

        {/* Citations Panel */}
        {response && response.citations && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Citations</h3>
            <div className="space-y-4">
              {response.citations.map((citation, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-md">
                  <blockquote className="text-gray-700 italic mb-2">
                    "{citation.text}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Source:</span> {citation.source}
                      <br />
                      <span className="font-medium">Location:</span> {citation.paragraph}
                    </div>
                    <button
                      onClick={() => handleCitationClick(citation)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm"
                    >
                      Open PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Lexi Legal Assistant - Powered by AI with verified citations</p>
        </div>
      </div>
    </div>
  );
};

export default LexiLegalAssistant;
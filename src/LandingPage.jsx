import { useState, useEffect } from "react";

export default function LandingPage() {
  const [panid, setPanId] = useState("");

  useEffect(() => {
    // Get the PanId from localStorage when the component mounts
    const storedPanId = localStorage.getItem('userPan');
    if (storedPanId) {
      setPanId(storedPanId);
    }
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  const handleRedirectToDashboard = () => {
    // Redirecting to the specified URL with the correct PAN value
    console.log("Redirecting to Dashboard");
    window.location.href = `/portf/portfolio.html?pan=ABCDE1234F`;
  };

  const handleRedirectToAssetAllocation = () => {
    console.log("Redirecting to Asset Allocation");
    window.location.href = '/portf/allocation.html';
  };

  const handleRedirectToAiBasedInvestments = () => {
    console.log("Redirecting to AI Based Investments");
    window.location.href = '/portf/recom.html';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-gray-700 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold">Track Your Investments in One Place</h1>
        <p className="mt-4 text-lg">Manage mutual funds, stocks, deposits, and gold seamlessly.</p>
        <button 
          onClick={handleRedirectToDashboard} 
          className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-lg font-semibold"
        >
          Get Started
        </button>
      </section>
      
      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-16">
        <div 
          className="bg-gray-800 p-6 rounded-xl shadow-lg text-center cursor-pointer" 
          onClick={handleRedirectToAssetAllocation}
        >
          <h2 className="text-xl font-bold">Portfolio Summary</h2>
          <p className="mt-2">View your total investments and track profit/loss in real-time.</p>
        </div>

        <div 
          className="bg-gray-800 p-6 rounded-xl shadow-lg text-center cursor-pointer" 
          onClick={() => window.location.href='/preipo/web.html'}
        >
          <h2 className="text-xl font-bold">Pre IPOs</h2>
          <p className="mt-2">Join the tokenization of pre-IPO companies, turning ownership into tradable digital tokens.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center" onClick={handleRedirectToAiBasedInvestments}>
          <h2 className="text-xl font-bold">Risk Analysis Summary and Report generation</h2>
          <p className="mt-2">✅ AI-driven portfolio insights</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-bold">Future Predictions</h2>
          <p className="mt-2">Coming soon: AI-driven future investment predictions.
            <br/>
            Under Development </p>
        </div>

      </section>
    </div>
  );
}
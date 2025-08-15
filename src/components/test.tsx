import React, { useState, useEffect } from 'react';

type RiskLevel = 'low' | 'medium' | 'high';

const FintechInvestmentCalculator: React.FC = () => {
  const [investment, setInvestment] = useState<number>(1000);
  const [risk, setRisk] = useState<RiskLevel>('medium');
  const [years, setYears] = useState<number>(5);
  const [projectedReturn, setProjectedReturn] = useState<number>(0);

  const [marketRates, setMarketRates] = useState<Record<RiskLevel, number> | null>(null);
  const [loadingRates, setLoadingRates] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch market rates from external JSON
  useEffect(() => {
    const fetchRates = async () => {
      setLoadingRates(true);
      setError(null);
      try {
        const response = await fetch('/marketRates.json');
        if (!response.ok) throw new Error('Failed to load market rates');
        const data: Record<RiskLevel, number> = await response.json();
        setMarketRates(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoadingRates(false);
      }
    };

    fetchRates();
  }, []);

  // Recalculate projected return whenever inputs or market rates change
  useEffect(() => {
    if (!marketRates) return;
    const rate = marketRates[risk];
    const futureValue = investment * Math.pow(1 + rate, years);
    setProjectedReturn(futureValue);
  }, [investment, risk, years, marketRates]);

  if (loadingRates) return <div>Loading market rates...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Investment Calculator</h2>

      <label className="block mb-2">
        Investment Amount ($):
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(parseFloat(e.target.value))}
          className="border rounded px-2 py-1 w-full mt-1"
        />
      </label>

      <label className="block mb-2">
        Risk Level:
        <select
          value={risk}
          onChange={(e) => setRisk(e.target.value as RiskLevel)}
          className="border rounded px-2 py-1 w-full mt-1"
        >
          {['low', 'medium', 'high'].map((level) => (
            <option key={level} value={level}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </option>
          ))}
        </select>
      </label>

      <label className="block mb-4">
        Years:
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(parseInt(e.target.value))}
          className="border rounded px-2 py-1 w-full mt-1"
        />
      </label>

      <div className="text-lg font-semibold">
        Projected Return: ${projectedReturn.toFixed(2)}
      </div>

      <div className="mt-2 text-sm text-gray-500">
        Based on a {risk} risk investment over {years} years with current market rates.
      </div>
    </div>
  );
};

export default FintechInvestmentCalculator;

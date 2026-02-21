import React from 'react';

interface RiskProps {
  active: boolean;
}

interface Risk {
  name: string;
  severity: 'High' | 'Medium' | 'Low';
}

const risks: Risk[] = [
  { name: 'Liquidity risk', severity: 'Medium' },
  { name: 'Operational risk', severity: 'High' },
  { name: 'Market risk', severity: 'Low' },
];

const RiskRegister: React.FC<RiskProps> = ({ active }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return '#ff4d4f';
      case 'Medium':
        return '#faad14';
      case 'Low':
        return '#52c41a';
      default:
        return '#e6f0ff';
    }
  };

  return (
    <section className={`section risk ${active ? 'active' : ''}`}>
      <h2>Risk Register</h2>
      <ul>
        {risks.map((risk, index) => (
          <li key={index} style={{ borderLeft: `5px solid ${getSeverityColor(risk.severity)}` }}>
            {risk.name} – {risk.severity} Severity
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RiskRegister;
import React from 'react';

const ComparisonTable = () => {
  const features = [
    ['Monitoring (Proactive)', false, true],
    ['Patching (OS & Panels)', false, true],
    ['Full Root Access for Linux', true, true],
    ['RDP Access for Windows', true, true],
    ['Assisted Security Firewall Configuration', false, true],
    ['OS Reload & Reboot', true, true],
    ['Monitoring with RRD tools', false, true],
    ['Website / DB Migrations', false, true],
    ['24x7 Ticket Support', false, true],
    ['24x7 Live Chat Support', false, true],
    ['24x7 Phone Support', false, true],
    ['Free SSL (Let\'s Encrypt)', 'For All', 'For All'],
  ];

  return (
    <div className="w-full px-4 py-10 bg-gray-100 flex justify-center">
      <div className="w-full max-w-5xl">
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-6">
          VPS Hosting (Self Managed) VS (Fully Managed)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-center border border-gray-200 shadow">
            <thead className="bg-gray-100">
              <tr className="text-sm md:text-base">
                <th className="py-3 px-4 border"></th>
                <th className="py-3 px-4 border text-black font-bold">Self Managed</th>
                <th className="py-3 px-4 border text-blue-600 font-bold">Fully Managed</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {features.map((row, i) => (
                <tr key={i} className="border-t border-gray-200">
                  <td className="py-2 px-4 border text-left font-medium">{row[0]}</td>
                  <td className="py-2 px-4 border">
                    {row[1] === true ? '✅' : row[1] === false ? '❌' : row[1]}
                  </td>
                  <td className="py-2 px-4 border">
                    {row[2] === true ? '✅' : row[2] === false ? '❌' : row[2]}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-gray-300 bg-gray-100 font-semibold">
                <td className="py-3 px-4 border text-left">Price</td>
                <td className="py-3 px-4 border">Free</td>
                <td className="py-3 px-4 border text-blue-600">₹999/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;

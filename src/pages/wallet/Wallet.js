import React from 'react';
import PageLayout from '../../components/PageLayout';

function Wallet() {
  return (
    <PageLayout title="Wallet">
      <h2 className="text-xl font-bold mt-4">Wallet Balance</h2>
      <p className="mt-2">Current Balance: <strong>$500.00</strong></p>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <ul className="mt-4 space-y-2">
          <li>Deposit - $200.00 (11/01/2024)</li>
          <li>Withdrawal - $50.00 (10/25/2024)</li>
          <li>Deposit - $100.00 (10/15/2024)</li>
        </ul>
      </div>

      <div className="mt-8 flex space-x-4">
        <button className="p-2 bg-green-500 text-white rounded">Add Funds</button>
        <button className="p-2 bg-red-500 text-white rounded">Withdraw</button>
      </div>
    </PageLayout>
  );
}

export default Wallet;

import { useTheme } from '../contexts/ThemeContexts'; // Ensure correct import path for useTheme

function TransactionsRecent() {
  const { isDarkMode } = useTheme(); // Access the dark mode state

  const transactions = [
    { id: "#6548", customer: "Joseph Wheeler", status: "Pending", total: "P0.00" },
    { id: "#6549", customer: "Joseph Wheeler", status: "Completed", total: "P0.00" },
    // Add more entries here
  ];

  return (
    <div className={`mt-6 p-4 rounded shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>Recent Transactions</h3>
      <table className="w-full mt-2">
        <thead>
          <tr className={`text-left border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <th className={`${isDarkMode ? 'text-white' : 'text-black'}`}>ID</th>
            <th className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Customer</th>
            <th className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Status</th>
            <th className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Total</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <td className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{t.id}</td>
              <td className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{t.customer}</td>
              <td className={t.status === "Pending" ? (isDarkMode ? "text-yellow-300" : "text-yellow-500") : (isDarkMode ? "text-green-400" : "text-green-500")}>
                {t.status}
              </td>
              <td className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{t.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsRecent;

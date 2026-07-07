import CreateCustomer from "./features/customerSlice/CreateCustomer";
import Customer from "./features/customerSlice/Customer";
import AccountOperations from "./features/accountSlcie/AccountOperations";
import BalanceDisplay from "./features/accountSlcie/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;

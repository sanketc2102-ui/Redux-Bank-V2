import CreateCustomer from "./features/customerSlice/CreateCustomer";
import Customer from "./features/customerSlice/Customer";
import AccountOperations from "./features/accountSlcie/AccountOperations";
import BalanceDisplay from "./features/accountSlcie/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const userName = useSelector((store) => store.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {userName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./screens/LoginPage";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import RigetrationPage from "./screens/RigetrationPage";
import TransactionTable from "./screens/TransactionTable";
import AddTransactions from "./screens/AddTransactions";
import Profile from "./screens/Profile";
import Updatepassword from "./screens/Updatepassword";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/ragistration" element={<RigetrationPage />} />
          <Route path="/trasaction" element={<TransactionTable />} />
          <Route path="/addtransaction" element={<AddTransactions />} />
          <Route path="/profile" element={<Profile />} />
        <Route  path="/Updatepassword" element={<Updatepassword/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;

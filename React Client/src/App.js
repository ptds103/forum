import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Dashboard } from "./pages/dashboard/dashboard";
import RegisterPage from "./pages/RegisterPage";
import { Topbar } from "./pages/Topbar";
import { Forumpage } from "./pages/Forumpage/Forumpage";
import { Viewforum } from "./pages/Viewforum";
import { Edit } from "./pages/Edit";
import { Write } from "./pages/Write";
import { Mypost } from "./pages/Mypost";
function App() {
  
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
      <Route path="/user" element={<Mypost />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/article/write" element={<Write />} />


        <Route path="/article/:para" element={<Forumpage />} />
        <Route path="/article/:para/:id" element={<Viewforum />} />
        <Route path="/article/:para/:id/edit" element={<Edit />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import WeddingInviationGreen from "./components/WeddingInvitationGreen";
import WeddingInviationGreenGirl from "./components/WeddingInvitationGreenGirl";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WeddingInviationGreen />} />
        <Route path="/girl" element={<WeddingInviationGreenGirl />} />
      </Routes>
    </>
  );
}

export default App;

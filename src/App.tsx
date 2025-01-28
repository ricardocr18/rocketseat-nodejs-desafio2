import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { SnackCreation } from "./pages/snackCreation";
import { MealResults } from "./pages/home/mealResults";
import { RefeicoesContextProvider } from "./util/context/RefeicoesContext";
import { Consult } from "./pages/consult";

function App() {
  return (
    <BrowserRouter>
      <RefeicoesContextProvider>   
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/snackCreation" element={<SnackCreation />} />
          <Route path="/mealResults" element={<MealResults />}/>            
          <Route path="/consult" element={<Consult />}/>            
        </Routes>  
      </RefeicoesContextProvider>    
    </BrowserRouter>
  );
}
export default App;

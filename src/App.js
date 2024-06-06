import { memo } from "react";
import React, { createContext } from 'react';
// import NavBar from './Component/NavBar/NavBar';
// import PortFolio from './Component/PortFolio/PortFolio';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
// import Dashboard from './Component/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Link, Routes, NavLink, useLocation } from "react-router-dom";
import AllFolderRoutes from './Component/NavBar/AllFolderRoutes';
const queryClient = new QueryClient();
export const ClientsContext = createContext({});
export const ClientsContextProvider = ({
  children
}) => {
  console.log(window.globalCount++);
  // State Variable 
  const [clientsInfo, setClientsInfo] = React.useState(true);
  return <ClientsContext.Provider value={{
    clientsInfo
  }}> 
             {children} 
     </ClientsContext.Provider>;
};
const App = memo(function App() {
  console.log(window.globalCount++);
  return <div>
    <Router>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <ClientsContextProvider>
            <div className="w-[100%] ">
              <AllFolderRoutes />
            </div>
          </ClientsContextProvider>
        </QueryClientProvider>
    </Router>
    </div>;
});
export default App;
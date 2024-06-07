import { memo } from "react";
import React from 'react';
import { ElementsContextProvider } from './DashboardContextApi';
import Home from './Home';
export default memo(function Dashboard() {
  return <div className='w-full overflow-x-hidden'>
        <ElementsContextProvider>
            <Home />
      </ElementsContextProvider>
    </div>;
});
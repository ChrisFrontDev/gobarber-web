import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SigIn';
// import SignUp from './pages/SigUp';

import AppProvider from './context';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;

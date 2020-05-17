import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SigIn';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default App;

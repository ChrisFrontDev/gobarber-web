import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SigIn';
import SignUp from './pages/SigUp';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      {/* <SignUp /> */}
      <GlobalStyle />
    </>
  );
};

export default App;

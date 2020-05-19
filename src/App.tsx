import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SigIn';
// import SignUp from './pages/SigUp';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContainer />

      <GlobalStyle />
    </>
  );
};

export default App;

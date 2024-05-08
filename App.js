import React from 'react';
import Root from './src_gk/navigations/Root';
import {StoreProvider} from './src_gk/store';

const App = () => {
  return (
    <StoreProvider>
      <Root />
    </StoreProvider>
  );
};

export default App;

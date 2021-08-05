import React from 'react';
import { Provider } from 'react-redux';

// import { StoreContext } from 'app/containers/context.js';
import { StoreContext } from './containers/context';
import CreateRouter from './router.js';
import './App.css';

class App extends React.Component {

  render() {
    const { store } = this.props

    // console.log('store',store);

    return (
      <Provider store={store} >
        <StoreContext.Provider value={store} >
          <CreateRouter />
        </StoreContext.Provider>
      </Provider>
    );
  }
}
export default App
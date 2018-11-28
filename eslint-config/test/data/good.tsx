import React from 'react';

class App extends React.Component {
  state = {
    loading: true,
  };

  render() {
    const { loading } = this.state;

    return <div prop={loading} />;
  }
}

export default App;

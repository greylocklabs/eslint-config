import React from 'react';

class App extends React.Component {
  state = {
    loading: true,
  };

  render() {
    const { loading } = this.state;

    return <div loading={loading} />;
  }
}

export default App;

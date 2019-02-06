import React from 'react';

class App extends React.Component {
  state = {
    loading: true,
  };

  render(): JSX.Element {
    const { loading } = this.state;

    return <div loading={loading} />;
  }
}

export default App;

import React from 'react';
import Loadable from 'react-loadable';

export class Loading extends React.Component<Loadable.LoadingComponentProps> {
  render() {
    return <div>Loading...</div>;
  }
}

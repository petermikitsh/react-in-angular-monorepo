import React from 'react';
import { createDevTools } from 'redux-devtools';
import reduxDevtoolsLogMonitor from 'redux-devtools-log-monitor';
import reduxDevtoolsDockMonitor from 'redux-devtools-dock-monitor';

const ReduxDevtoolsLogMonitor = reduxDevtoolsLogMonitor;
const ReduxDevtoolsDockMonitor = reduxDevtoolsDockMonitor;

const DevTools = createDevTools(
  <ReduxDevtoolsDockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={true}
  >
    <ReduxDevtoolsLogMonitor/>
  </ReduxDevtoolsDockMonitor>,
);

export default DevTools;

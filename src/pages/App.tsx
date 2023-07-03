import { FC } from 'react';
import React from 'react';
import { ToDoList } from '../components/index';
import { Layout } from '../components/Layout/index';

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <div>
      <Layout>App</Layout>
    </div>
  );
};

export default App;

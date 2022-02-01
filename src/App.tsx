import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE_NAMES } from './constants/routeNames';
import { Main } from './page/Main';
import { WrongPage } from './page/WrongPage';
import './App.scss';
import { useSelector } from 'react-redux';

export const App = () => {
  const { main, wrongPage } = ROUTE_NAMES;
  const { showContextMenu } = useSelector(
    (state: AppState) => state.tooltipsReducer
  );
  const renderRoutes = () => {
    return (
      <>
        <Routes>
          <Route path={main} element={<Main />} />
          <Route path={wrongPage} element={<WrongPage />} />
        </Routes>
        {showContextMenu && <div className="screen"></div>}
      </>
    );
  };

  return renderRoutes();
};

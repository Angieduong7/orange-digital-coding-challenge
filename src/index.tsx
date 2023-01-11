import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fontsource/roboto';
import Gallery from './pages /gallery';
import DetailPage from './pages /detailPage';
import { ThemeProvider } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Gallery />,
  },
  {
    path: '/detailpage',
    element: <DetailPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

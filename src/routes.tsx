import { createBrowserRouter, redirect } from 'react-router';
import React from 'react';
import { fetchProductsById } from './utils/index';

const HomePage = React.lazy(() =>
  import('./pages/Homepage/Homepage').then((module) => ({
    default: module.HomePage,
  }))
);

export const routes = createBrowserRouter([
  {
    path: '/',
    lazy: {
      Component: async () => (await import('./pages/RootLayout')).RootLayout,
      loader: async () => (await import('./helper')).validateAuthState,
    },
    // loader: validateAuthState,

    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '/dashboard',
        lazy: {
          loader: async () => (await import('./utils/index')).fetchProducts,
          Component: async () =>
            (await import('./pages/dashboard/Layout')).DashBoardLayout,
        },
        children: [
          {
            path: ':userId',
            // mock loading
            // loader: async () =>
            //   await new Promise((resolve) =>
            //     setTimeout(() => {
            //       resolve({ data: "true" });
            //     }, 1000)
            //   ),
            loader: async (props) => {
              try {
                const { params } = props;
                const data = await fetchProductsById(Number(params.userId));
                return data;
              } catch (e) {
                console.error(e);
                return redirect('/error');
              }
            },
            lazy: {
              Component: async () =>
                (await import('./pages/dashboard/DashBoard')).DashBoard,
            },
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    lazy: {
      Component: async () => (await import('./pages/RootLayout')).RootLayout,
    },
    children: [
      {
        index: true,

        lazy: {
          Component: async () => (await import('./pages/Login')).LoginPage,
        },
      },
    ],
  },
  {
    path: '/app/*',
    loader: async (props) => {
      console.log(props.params['*']);
    },
    lazy: {
      Component: async () => (await import('./App')).default,
    },
  },
  {
    path: '*',
    loader: (props) => {
      console.error('Error Route', props.request);
    },
    Component: () => <div>Error</div>,
  },
  {
    path: '/error',
    loader: (props) => {
      console.error('Error Route', props.request);
    },
    Component: () => <div>Error</div>,
  },
]);

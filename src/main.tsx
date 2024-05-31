import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.tsx'
import './index.css'
import Home from './components/home/Home.tsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { store } from './app/Store'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-y-auto overflow-x-hidden">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>,
)

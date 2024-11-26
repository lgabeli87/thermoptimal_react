import { useState } from 'react'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from "./router"
import Layout from "./Layout"

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


import { getMapData, show3dMap } from "@mappedin/mappedin-js"
import "@mappedin/mappedin-js/lib/index.css"

// See Demo API key Terms and Conditions
// https://developer.mappedin.com/v6/demo-keys-and-maps/
const options = {
  key: "mik_yeBk0Vf0nNJtpesfu560e07e5",
  secret: "mis_2g9ST8ZcSFb5R9fPnsvYhrX3RyRwPtDGbMGweCYKEq385431022",
  mapId: "65c0ff7430b94e3fabd5bb8c"
}

async function init() {
  const mapData = await getMapData(options)
  const mapView = await show3dMap(
    document.getElementById("mappedin-map"),
    mapData
  )
}

init()
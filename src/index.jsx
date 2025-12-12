import { createRoot } from 'react-dom/client'
import './index.css'
import {App as Canvas} from './Canvas.jsx'
import Overlay from './Overlay.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Canvas />
    <Overlay />
  </>,
)

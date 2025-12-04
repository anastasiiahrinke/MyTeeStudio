import { createRoot } from 'react-dom/client'
import './index.css'
import {App as Canvas} from './Canvas.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Canvas />
  </>,
)

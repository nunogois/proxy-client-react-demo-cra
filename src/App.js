import logo from './logo.svg'
import './App.css'

import {
  useFlag,
  useFlagsStatus,
  useVariant
} from '@unleash/proxy-client-react'

function App() {
  const enabled = useFlag('test-feature')
  const variant = useVariant('test-feature')
  const { flagsReady } = useFlagsStatus()

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {!flagsReady ? (
          <div v-if='!flagsReady'>Loading...</div>
        ) : (
          <div
            style={{ fontSize: '24px', color: enabled ? 'lightgreen' : 'red' }}
          >
            {enabled ? 'Feature is enabled!' : 'Feature is disabled!'}
            <div v-if='variant.enabled'>{variant.name}</div>
          </div>
        )}
      </header>
    </div>
  )
}

export default App

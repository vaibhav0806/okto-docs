'use client';

import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

function App() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: 'http://localhost:3000/api-sec',
        },
        theme: 'none',
        hideRequestButton: false,
        darkMode: false,
        favicon: '../../public/logo/okto-icon.png',
        hiddenClients: [],
        metadata: {
          title: 'Okto API Reference'
        }
      }}
    />
  )
}

export default App
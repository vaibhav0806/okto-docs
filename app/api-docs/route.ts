import { ApiReference } from '@scalar/nextjs-api-reference'

const config = {
  spec: {
    content: 'https://okto-sdk-docs-new.vercel.app/api-sec',
  },
  theme: 'none',
  hideRequestButton: false,
  darkMode: false,
  favicon: '../../public/logo/okto-icon.png'
}

export const GET = ApiReference(config)
import { configure } from '@storybook/react'

import '../styles/globals.css'

configure(require.context('../stories', true, /\.stories\.tsx?$/), module)

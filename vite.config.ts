import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import viteSvgr from 'vite-plugin-svgr'

export default ({
  build: {
    outDir: 'build'
  },
  plugins: [
    reactRefresh(),
    viteSvgr({
      svgrOptions: {
        icon: true
      }
    })
  ]
})

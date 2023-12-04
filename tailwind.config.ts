import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				// 'open-menu': "url('./src/app/imgs/burger-menu.svg')",
				// 'close-menu': "url('./src/app/imgs/burger-menu.svg')",
      },

			colors: {
				primary: '#3490dc',
        // secondary: '#ffed4a',
				
				// Elements
				background: '#004643',
 				button :'#f9bc60',
				headline :'#fffffe',
				paragraph :'#abd1c6',

				//  Illustration
				stroke :'#001e1d',
				secondary :'#abd1c6',
				main :'#e8e4e6',
				tertiary :'#e16162',
				highlights :'#f9bc60',
			}
    },
  },
  plugins: [],
}
export default config

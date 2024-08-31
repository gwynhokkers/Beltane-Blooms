import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem'
			},

			fontFamily: {
				sans: ['New York', ...defaultTheme.fontFamily.serif]
			},
			colors: {
				'merino': {
					50: '#faf7f2',
					100: '#f6f3ea',
					200: '#e5dbc3',
					300: '#d4c39d',
					400: '#c2a675',
					500: '#b58f5a',
					600: '#a77d4f',
					700: '#8b6543',
					800: '#71523b',
					900: '#5c4432',
					950: '#312219'
				},
				'fuscous-gray': {
					50: '#f5f4f0',
					100: '#e8e5df',
					200: '#d3cec3',
					300: '#b7b09f',
					400: '#9d947e',
					500: '#817861',
					600: '#655e4b',
					700: '#534e3f',
					800: '#413d33',
					900: '#39372e',
					950: '#1d1b16'
				}

			}
		}
	}
}

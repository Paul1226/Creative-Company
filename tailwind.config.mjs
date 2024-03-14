/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary: "#515DEF",
				secondary: "#FBFBFB",
				tertiary: "#909090",
			},
			gridTemplateColumns: {
				"3p":"repeat(auto-fill, minmax(300px, 1fr))",
				"2":"1.3fr 1fr"
			},
		},
	},
	plugins: [],
}

import { SVGProps } from 'react';
const AlinioLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		xmlSpace='preserve'
		viewBox='0 0 597.4 598.7'
		className='logo'>
		<path
			fill='#1c1c1c'
			d='M357.5 598.7v-1.9c0-132.1 107.1-239.2 239.2-239.2h.7V0h-.7C267.2 0 0 267.2 0 596.8v1.9h357.5z'
		/>
	</svg>
);

export default AlinioLogo;

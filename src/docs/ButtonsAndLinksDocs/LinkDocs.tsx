import { useState } from 'react';
import { Link } from 'alinio-ui';
import IconArrow from '../../assets/media/custom-icons/IconArrow';
import LiveCodeExample from '../MainDocs/LiveCodeExample';

const LinkDocs = () => {
	const [showCodeExample1, setShowCodeExample1] = useState(false);
	const [showCodeExample2, setShowCodeExample2] = useState(false);
	const [showCodeExample3, setShowCodeExample3] = useState(false);
	const [showCodeExample4, setShowCodeExample4] = useState(false);
	const [showCodeExample5, setShowCodeExample5] = useState(false);

	const exampleCode1 = `<>
	<Link 
		// styling
		linkStyle='link' 
		color='dark'
		icon=''
		fillIconWrapper=''
		size='md'
		className='yourCustomClasses'

		// accessibility
		iconAriaLabel=''

		// Behavior and Functionality
		to='/' 
		// or href=''
		// Other standard attributes e.g. target='_blank
		>
		Standard Link
	</Link>

	<Link
		// styling
		linkStyle='button' 
		color='primary'
		icon=''
		fillIconWrapper=''
		size='md'
		className='yourCustomClasses'

		// accessibility
		iconAriaLabel=''

		// Behavior and Functionality
		to='/' 
		// or href=''
		// Other standard attributes (e.g. target='_blank etc)
		>
		Button Style Link
	</Link>

	<Link
		// styling
		linkStyle='icon' 
		color='primary'
		fillIconWrapper='false'
		size='md'
		className='yourCustomClasses'
		icon={<IconArrow />}

		// accessibility
		iconAriaLabel='Icon Description'

		// Behavior and Functionality
		to='/' 
		// or href=''
		// Other standard attributes (e.g. target='_blank etc)
		>
		Icon Style Link
	</Link>
</>`;

	const exampleCode2 = `<>
	<Button color='primary'>Primary</Button>
	<Button color='secondary'>Secondary</Button>
	<Button color='tertiary'>Tertiary</Button>
	<Button color='quaternary'>Quaternary</Button>
	<Button color='dark'>Dark</Button>
	<Button color='light'>Light</Button>
</>`;

	const exampleCode3 = `<>
	<Button icon={<IconArrow/>}>Button with icon</Button>
	<Button icon={<IconArrow/>}>Button with filled icon</Button>
	<Button icon={<IconArrow/>}></Button>
</>`;

	const exampleCode4 = `<>
	<Button size='sm'>Sm button</Button>
	<Button size='sm' icon={<IconArrow />}></Button>
	<Button size='md'>Md button</Button>
	<Button size='md' icon={<IconArrow />}></Button>
	<Button size='lg'>Lg button</Button>
	<Button size='lg' icon={<IconArrow />}></Button>
</>`;

	const exampleCode5 = `<>
	<Button isLoading={true} loadingMessage='Loading button'>
			A button
	</Button>
</>`;

	return (
		<>
			<div className='row'>
				<div className='col-md-12'>
					<div className='panel-lg'>
						{/* Doc title */}
						<div className='row'>
							<div className='col-md-12 d-flex align-items-center justify-content-between'>
								<h2 className='mb-0'>Link</h2>
								<code>import &#123; Link &#125; from 'alinio-ui';</code>
							</div>
						</div>
						<hr></hr>
						{/* Example 1 */}
						<LiveCodeExample
							code={exampleCode1}
							scope={{ Link, IconArrow }}
							showCode={showCodeExample1}
							setShowCode={setShowCodeExample1}
						/>

						<div className='divider'></div>
						<table>
							<thead>
								<tr>
									<th>Prop</th>
									<th>Description</th>
									<th>Type</th>
									<th>Default</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>linkStyle</td>
									<td>Determines the style of the link. Options: 'link', 'button', 'icon'.</td>
									<td>string</td>
									<td>'link'</td>
								</tr>
								<tr>
									<td>color</td>
									<td>
										Sets the color theme of the link. Options{' '}
										<code>'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'light' | 'dark'</code>
									</td>
									<td>string</td>
									<td>'primary'</td>
								</tr>
								<tr>
									<td>ClassName</td>
									<td>
										Add a custom class name for the link. This renders last in the selector. It auto adds a
										class for global style overrides if you don't want to manage the styles in the locally
										scoped css. These are '.buttonLink' for a button style link, '.iconLink' for an icon style
										link, and '.link' for a standard link.
									</td>
									<td>string</td>
									<td>None</td>
								</tr>

								<tr>
									<td>icon</td>
									<td>
										Add a React component for an icon, e.g., an SVG. For example:{' '}
										<code>{`<IconArrow />`}</code>
									</td>
									<td>ReactNode</td>
									<td>None</td>
								</tr>

								<tr>
									<td>iconPosition</td>
									<td>
										Position of the icon - left or right. Options: <code>'left' | 'right'</code>. Defaults to
									</td>
									<td>String</td>
									<td>Right</td>
								</tr>

								<tr>
									<td>iconAriaLabel</td>
									<td>
										If you've included an icon, add an aria-label for accessibility with this prop. It will
										auto add an aria-label of 'Link Icon' of none is added, but this is not recommended.
									</td>
									<td>string</td>
									<td>None</td>
								</tr>

								<tr>
									<td>fillIconWrapper</td>
									<td>Fill button style link icon wrapper with a color.</td>
									<td>boolean</td>
									<td>false</td>
								</tr>
								<tr>
									<td>size</td>
									<td>
										Size of the 'button' styled link. Options: <code>'sm' | 'md' | 'lg'</code>. Defaults to
										medium if no option selected.
									</td>
									<td>string</td>
									<td>'md'</td>
								</tr>
								<tr>
									<td>...rest</td>
									<td>Any other standard anchor tag attributes, such as href, target, rel, etc.</td>
									<td>object</td>
									<td>None</td>
								</tr>
							</tbody>
						</table>
						<div className='divider'></div>

						<h3>Stylesheet</h3>
						<p>
							The Link component has locally scoped styles within it's folder structure. You'll find the Link
							stylesheet by searching <code>Link.module.css</code>
						</p>

						<p>Classes for the 'link' style:</p>

						<table>
							<thead>
								<tr>
									<th>Classes</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>.link</td>
									<td>Base class for link styles.</td>
								</tr>
								<tr>
									<td>.link</td>
									<td>Fallback classname to styling outside of the locally scoped stylesheet.</td>
								</tr>
								<tr>
									<td>.link.[color]</td>
									<td>Colors for the link.</td>
								</tr>
								<tr>
									<td>.link.iconWrapper</td>
									<td>Class for the span that wraps the icon.</td>
								</tr>
								<tr>
									<td>.content</td>
									<td>Class for the span that wraps the link text.</td>
								</tr>
								<tr>
									<td>.background</td>
									<td>Class for link underline span.</td>
								</tr>
							</tbody>
						</table>

						<p>Classes for the 'button' style:</p>

						<table>
							<thead>
								<tr>
									<th>Classes</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>.button</td>
									<td>Base class for button style.</td>
								</tr>
								<tr>
									<td>.buttonLink</td>
									<td>Fallback classname to styling outside of the locally scoped stylesheet.</td>
								</tr>
								<tr>
									<td>.button.[color]</td>
									<td>Colors for the button.</td>
								</tr>
								<tr>
									<td>.button-[size]</td>
									<td>Class for styling the size of each link (e.g., .link-sm, .link-md, .link-lg).</td>
								</tr>
								<tr>
									<td>.button.iconWrapper</td>
									<td>Class for the span that wraps the icon.</td>
								</tr>
								<tr>
									<td>.content</td>
									<td>Class for the span that wraps the link text.</td>
								</tr>
								<tr>
									<td>.background</td>
									<td>Class for div that animates on hover.</td>
								</tr>
							</tbody>
						</table>

						<p>Classes for the 'icon' style:</p>

						<table>
							<thead>
								<tr>
									<th>Classes</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>.icon.[color]</td>
									<td>Colors for the button.</td>
								</tr>
								<tr>
									<td>.inconLink</td>
									<td>Fallback classname to styling outside of the locally scoped stylesheet.</td>
								</tr>
								<tr>
									<td>.icon-[size]</td>
									<td>Class for styling the size of each link (e.g., .link-sm, .link-md, .link-lg).</td>
								</tr>
								<tr>
									<td>.background</td>
									<td>Class for div that animates on hover.</td>
								</tr>
							</tbody>
						</table>

						<div className='divider'></div>
						<h3>Example Variations</h3>
						<div className='panel-outline'>
							<h4>Color</h4>
							<p className=''>
								Set a color using <code>color=''</code>.
							</p>
							<p>
								Available classes are{' '}
								<code>'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'light' | 'dark'</code>
							</p>

							{/* Example 2 */}
							<LiveCodeExample
								code={exampleCode2}
								scope={{ Link, IconArrow }}
								showCode={showCodeExample2}
								setShowCode={setShowCodeExample2}
							/>
						</div>
						<div className='panel-outline'>
							<h4>With Icon</h4>
							<p className=''>Use a custom SVG component in your Link</p>
							<p>
								For example: <code>{`icon={<IconArrow />}`}</code>
							</p>
							<p>
								The icon also has a 'filled' color option, available by setting{' '}
								<code>fillIconWrapper={true}</code>.
							</p>

							{/* Example 3 */}
							<LiveCodeExample
								code={exampleCode3}
								scope={{ Link, IconArrow }}
								showCode={showCodeExample3}
								setShowCode={setShowCodeExample3}
							/>
						</div>
						<div className='panel-outline'>
							<h4>Sizes</h4>
							<p className=''>
								Set a size using the <code>size=''</code> option. Available size selectors:{' '}
								<code>'sm' | 'md' | 'lg'</code>. Fallback is 'md' if no option added.
							</p>
							{/* Example 4 */}
							<LiveCodeExample
								code={exampleCode4}
								scope={{ Link, IconArrow }}
								showCode={showCodeExample4}
								setShowCode={setShowCodeExample4}
							/>
						</div>
						<div className='panel-outline'>
							<h4>Loading State</h4>
							<p className=''>
								State for things such as loading, saving and submitting. Example using <code>isLoading</code>{' '}
								for demo purposes. Customise loading message with <code>loadingMessage='your text'</code>
							</p>
							{/* Example 5 */}
							<LiveCodeExample
								code={exampleCode5}
								scope={{ Link, IconArrow }}
								showCode={showCodeExample5}
								setShowCode={setShowCodeExample5}
							/>
						</div>
						<div className='divider'></div>
						<h3>Notes</h3>
						<h4>Accessibility</h4>
						<p>
							<code>ariaLabel='Download File'</code> for a download Linkor <code>ariaLabel='Play Video'</code>{' '}
							for a play Link
						</p>
						<p>
							<code>iconAriaLabel</code>: Provides a description specifically for the icon used in the Link
							It's important when the icon's purpose isn't immediately obvious from the context. For example,
							if your Linkcontains a settings gear icon, you might use{' '}
							<code>iconAriaLabel='Open Settings'</code>.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default LinkDocs;

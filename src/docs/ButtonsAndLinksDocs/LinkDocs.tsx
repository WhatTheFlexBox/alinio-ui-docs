import { useState } from 'react';
import { Link } from 'alinio-ui';
import IconArrow from '../../assets/media/custom-icons/IconArrow';
import LiveCodeExample from '../MainDocs/LiveCodeExample';

const LinkDocs = () => {
	const [showCodeExample1, setShowCodeExample1] = useState(false);
	const [showCodeExample2, setShowCodeExample2] = useState(false);
	const [showCodeExample3, setShowCodeExample3] = useState(false);
	const [showCodeExample4, setShowCodeExample4] = useState(false);
	const [showCodeExample6, setShowCodeExample6] = useState(false);
	const [showCodeExample7, setShowCodeExample7] = useState(false);

	const exampleCode1 = `<>
	<Link 
		// styling
		linkStyle='link' 
		color='dark'
		icon=''
		iconPosition='right'
		fillIconWrapper={false}
		size='md'
		className='yourCustomClasses'

		// accessibility
		iconAriaLabel=''
		>
		Standard Link
	</Link>

	<Link
		// styling
		linkStyle='button' 
		color='primary'
		icon=''
		fillIconWrapper={true}
		iconPosition='right'
		size='md'
		className='yourCustomClasses'

		// accessibility
		iconAriaLabel=''
		>
		Button Style Link
	</Link>

	<Link
		// styling
		linkStyle='icon' 
		color='primary'
		size='md'
		className='yourCustomClasses'
		icon={<IconArrow />}
		fillIconWrapper={false}

		// accessibility
		iconAriaLabel='Icon Description'
		>
		Icon Style Link
	</Link>
</>`;

	const exampleCode2 = `<>
	<Link color='primary'>Primary</Link>
	<Link color='secondary'>Secondary</Link>
	<Link color='tertiary'>Tertiary</Link>
	<Link color='quaternary'>Quaternary</Link>
	<Link color='dark'>Dark</Link>
	<Link color='light'>Light</Link>
</>`;

	const exampleCode3 = `<>
	<Link icon={<IconArrow/>}>Link style with icon</Link>
	<Link linkStyle='button' icon={<IconArrow/>}>Button style with icon</Link>
	<Link linkStyle='icon' icon={<IconArrow/>}></Link>
</>`;

	const exampleCode4 = `<>
	<Link size='xs'>Xs Link</Link>
	<Link linkStyle='button' size='xs'>XS button</Link>
	<Link linkStyle='icon' size='xs' icon={<IconArrow />}></Link>
	<Link linkStyle='button' size='sm'>Sm button</Link>
	<Link linkStyle='icon' size='sm' icon={<IconArrow />}></Link>
	<Link linkStyle='button' size='md'>Md button</Link>
	<Link linkStyle='icon' size='md' icon={<IconArrow />}></Link>
	<Link linkStyle='button' size='lg'>Lg button</Link>
	<Link linkStyle='icon' size='lg' icon={<IconArrow />}></Link>
</>`;

	const exampleCode6 = `<>
	<Link icon={<IconArrow/>} iconPosition='left'>Link style Icon left</Link>
	<Link icon={<IconArrow/>} iconPosition='right'>Link style icon right</Link>
	<Link linkStyle='button' icon={<IconArrow/>} iconPosition='left'>Button style Icon left</Link>
	<Link linkStyle='button' icon={<IconArrow/>} iconPosition='right'>Button style icon right</Link>
</>`;

	const exampleCode7 = `<>
	<Link linkStyle='link'>Link style</Link>
	<Link linkStyle='button'>Button style</Link>
	<Link linkStyle='icon' icon={<IconArrow/>}></Link>

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
									<td>
										Determines the style of the link. Options: <code>'link' | 'button' | 'icon'</code>.
									</td>
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
									<td>If link style = 'dark'. If button or icon style = 'primary'</td>
								</tr>
								<tr>
									<td>ClassName</td>
									<td>
										Add a custom class name for the link. This renders last in the selector. It auto adds a
										class for global style overrides if you don't want to manage the styles in the locally
										scoped css. These are '.button' for a button style link, '.icon' for an icon style link,
										and '.link' for a standard link.
									</td>
									<td>string</td>
									<td>None</td>
								</tr>

								<tr>
									<td>icon</td>
									<td>
										Add a react component for an icon, eg an SVG. In this example, we've created an SVG
										component and included it as: <code>&#123;{`<IconArrow />`}&#125;</code>
									</td>
									<td>ReactNode</td>
									<td>None</td>
								</tr>

								<tr>
									<td>iconPosition</td>
									<td>
										Position of the icon - left or right. Options: <code>'left' | 'right'</code>.
									</td>
									<td>String</td>
									<td>Right</td>
								</tr>
								<tr>
									<td>iconAriaLabel</td>
									<td>
										If you've included an icon, add an aria-label for accessibility to it. It will auto add an
										aria-label of 'link-icon' of none is added, but this is not recommended.
									</td>
									<td>string</td>
									<td>link-icon</td>
								</tr>
								<tr>
									<td>fillIconWrapper</td>
									<td>Fill the icon wrapper with color.</td>
									<td>boolean</td>
									<td>false</td>
								</tr>

								<tr>
									<td>size</td>
									<td>
										Size of the button. Options: <code>'xs' | 'sm' | 'md' | 'lg'</code>.
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
									<td>.button.[color]</td>
									<td>Colors for the button.</td>
								</tr>
								<tr>
									<td>.[size]</td>
									<td>Class for styling the size of each link (e.g., .sm, .md, .lg).</td>
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
									<td>.icon</td>
									<td>Base class for button style.</td>
								</tr>
								<tr>
									<td>.icon.[color]</td>
									<td>Colors for the button.</td>
								</tr>
								<tr>
									<td>.[size]</td>
									<td>Class for styling the size of each link (e.g., .sm, .md, .lg).</td>
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
							<h4>Link Style</h4>
							<p className=''>
								Set a link style using <code>linkStyle=''</code>.
							</p>
							<p>
								Options are <code>'link' | 'button' | 'icon''</code>
							</p>
							<p>Defaults to 'link' of no option selected.</p>

							{/* Example 7 */}
							<LiveCodeExample
								code={exampleCode7}
								scope={{ Link, IconArrow }}
								showCode={showCodeExample7}
								setShowCode={setShowCodeExample7}
							/>
						</div>
						<div className='panel-outline'>
							<h4>Color</h4>
							<p className=''>
								Set a color using <code>color=''</code>.
							</p>
							<p>
								Options are{' '}
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
							<h4>Sizes</h4>
							<p className=''>
								Set a size using the <code>size=''</code> option. Available size selectors:{' '}
								<code>'xs' | 'sm' | 'md' | 'lg'</code>. Fallback is 'md' if no option added.
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
							<h4>With Icon</h4>
							<p className=''>Use a custom SVG component in your button.</p>
							<p>
								In this example, we have a react component as an SVG in our project called IconArrow. And
								we've included it with: <code>{`icon={<IconArrow />}`}</code>
							</p>
							<p>
								The icon also has a 'filled' color option, available by setting{' '}
								<code>{'fillIconWrapper={true}'}</code>.
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
							<h4>Icon Position</h4>
							<p>
								Set the position of the icon using <code>iconPosition=''</code>.
							</p>
							<p>
								Options are <code>{'left | right'}</code>. Defaults to right if unset.
							</p>

							{/* Example 6 */}
							<LiveCodeExample
								code={exampleCode6}
								scope={{ Link, IconArrow }}
								showCode={showCodeExample6}
								setShowCode={setShowCodeExample6}
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

import { useState } from 'react';
import { Button } from 'alinio-ui';
import IconArrow from '../../assets/media/custom-icons/IconArrow';
import LiveCodeExample from '../MainDocs/LiveCodeExample';

const ButtonDocs = () => {
	const [showCodeExample1, setShowCodeExample1] = useState(false);
	const [showCodeExample2, setShowCodeExample2] = useState(false);
	const [showCodeExample3, setShowCodeExample3] = useState(false);
	const [showCodeExample4, setShowCodeExample4] = useState(false);
	const [showCodeExample5, setShowCodeExample5] = useState(false);

	const exampleCode1 = `<Button
			// styling
			color='primary'
			icon={<IconArrow />}
			fillIconWrapper={true}
			size='md'
			className='yourCustomClasses'

			// accessibility
			ariaLabel='Button Description'
			iconAriaLabel='Icon Description'

			// Behavior and Functionality
			type='button'
			isLoading={false}
			loadingMessage='Loading'
			onClick={() => console.log('clicked')}
			form='myFormId'
			
			// Other standard attributes (e.g. disabled)
			>
	A button
</Button>`;

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
						<h2>Button</h2>
						<hr></hr>
						<p>Component import:</p>
						<p>
							<code>import Button from 'PATH/ui_elements/Button';</code>
						</p>
						{/* Example 1 */}
						<p>Example:</p>
						<LiveCodeExample
							code={exampleCode1}
							scope={{ Button, IconArrow }}
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
									<td>color</td>
									<td>
										Sets the color theme of the button. Options include 'primary', 'secondary', etc. Defaults
										to primary if no option is set.
									</td>
									<td>string</td>
									<td>'primary'</td>
								</tr>
								<tr>
									<td>ClassName</td>
									<td>
										Add custom class name. This renders last in the selector. It auto adds a '.button' class
										for global style overrides if you don't want to manage the styles in the locally scoped
										file.
									</td>
									<td>string</td>
									<td>None</td>
								</tr>
								<tr>
									<td>ariaLabel</td>
									<td>
										Add an aria-label to the button for accessibility. It will auto add an aria-label based on
										the button content if none is added, but this is not recommended.
									</td>
									<td>string</td>
									<td>None</td>
								</tr>

								<tr>
									<td>icon</td>
									<td>
										Add a react component for an icon, eg an SVG. In this example, we've created an SVG
										component and included it as: <code>{`<IconArrow />`}</code>
									</td>
									<td>ReactNode</td>
									<td>None</td>
								</tr>
								<tr>
									<td>iconAriaLabel</td>
									<td>
										If you've included an icon, add an aria-label for accessibility with this. It will auto
										add an aria-label of 'link-icon' of none is added, but this is not recommended.
									</td>
									<td>string</td>
									<td>None</td>
								</tr>
								<tr>
									<td>fillIconWrapper</td>
									<td>Fill the icon wrapper with color.</td>
									<td>boolean</td>
									<td>false</td>
								</tr>
								<tr>
									<td>isLoading</td>
									<td>Boolean to show a loading state.</td>
									<td>boolean</td>
									<td>false</td>
								</tr>
								<tr>
									<td>loadingMessage</td>
									<td>Custom loading message. Shown when isLoading is true.</td>
									<td>string</td>
									<td>'Loading'</td>
								</tr>
								<tr>
									<td>size</td>
									<td>
										Size of the button. Options: <code>'sm', 'md', 'lg'</code>. Defaults to medium if no
										option selected.
									</td>
									<td>string</td>
									<td>'md'</td>
								</tr>
								<tr>
									<td>type</td>
									<td>
										Add a type. Options <code>'button' | 'submit' | 'reset'</code>. Defaults to 'button' if no
										option selected.
									</td>
									<td>string</td>
									<td>button</td>
								</tr>
								<tr>
									<td>...rest</td>
									<td>Any other standard button attributes, such as type, form, disabled, onClick, etc.</td>
									<td>object</td>
									<td>None</td>
								</tr>
							</tbody>
						</table>
						<div className='divider'></div>

						<h3>Stylesheet</h3>
						<p>
							The button has locally scoped styles within it's folder structure. You'll find the button
							stylesheet by searching <code>Button.Module.css</code>
						</p>

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
									<td>Base class for global button styles.</td>
								</tr>
								<tr>
									<td>.[color]</td>
									<td>Class for each color of button (e.g., .btn-primary, .btn-secondary).</td>
								</tr>
								<tr>
									<td>.content</td>
									<td>Class for the span that wraps the button text.</td>
								</tr>
								<tr>
									<td>.IconWrapper</td>
									<td>Class for the div that wraps the icon.</td>
								</tr>

								<tr>
									<td>.[size]</td>
									<td>Class for styling the size of each button (e.g., .btn-sm, .btn-md, .btn-lg).</td>
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
								scope={{ Button, IconArrow }}
								showCode={showCodeExample2}
								setShowCode={setShowCodeExample2}
							/>
						</div>
						<div className='panel-outline'>
							<h4>With Icon</h4>
							<p className=''>Use a custom SVG component in your button.</p>
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
								scope={{ Button, IconArrow }}
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
								scope={{ Button, IconArrow }}
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
								scope={{ Button, IconArrow }}
								showCode={showCodeExample5}
								setShowCode={setShowCodeExample5}
							/>
						</div>
						<div className='divider'></div>
						<h3>Notes</h3>
						<h4>Accessibility</h4>
						<p>
							<code>ariaLabel='Download File'</code> for a download button or{' '}
							<code>ariaLabel='Play Video'</code> for a play button.
						</p>
						<p>
							<code>iconAriaLabel</code>: Provides a description specifically for the icon used in the button.
							It's important when the icon's purpose isn't immediately obvious from the context. For example,
							if your button contains a settings gear icon, you might use{' '}
							<code>iconAriaLabel='Open Settings'</code>.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ButtonDocs;

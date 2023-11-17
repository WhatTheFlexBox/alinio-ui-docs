import IconEmail from '../../ui_components/Forms/input/InputIcons/IconEmail';
import InputField from '../../ui_components/Forms/input';
import IconArrow from '../../assets/media/custom-icons/IconArrow';

const InputFieldDocs = () => {
	return (
		<>
			<div className='row'>
				<div className='col-md-12'>
					<div className='panel-lg'>
						<h2>InputField Component</h2>
						<hr></hr>
						<p>
							The <code>InputField</code> component is a customizable input field suitable for 'text-like'
							inputs eg text, email, password, url, tel, search, number, date, time, month, week,
							datetime-local.
						</p>
						<p>Component import:</p>
						<p>
							<code>import InputField from 'PATH/ui_elements/InputField';</code>
						</p>
						<p>Example snippet with options:</p>
						<pre>
							<code>
								{`<InputField 
	type="email"
	label="Email Address"
	placeholder="Enter your email"
	width="full"
	icon={<IconEmail />}
	iconPosition="left"
	iconAriaLabel="Email Icon"
	errorMessage="Invalid email address"
	hasError={false}
	onIconClick={() => console.log('Icon clicked')}
	showHidePassword={false}
	autocompleteOverride="email"
	min=""
	max=""
	step=""
/>`}
							</code>
						</pre>

						<div className='divider'></div>
						<h3>Form Validation and Agnostic Design</h3>
						<p>
							The <code>InputField</code> component is designed to be agnostic with respect to form validation
							libraries and methodologies. It does not include built-in validation logic, which provides
							flexibility to use any form validation approach or library of your choice.
						</p>
						<p>
							For instance, you can integrate <code>InputField</code> with popular form handling libraries
							like <code>Formik</code> or <code>React Hook Form</code>, leveraging their validation
							capabilities while using the custom UI and features of <code>InputField</code>.
						</p>
						<p>
							The component's <code>hasError</code> and <code>errorMessage</code> props allow you to display
							validation feedback. These can be controlled externally based on your form's validation state,
							making <code>InputField</code> adaptable to various validation patterns.
						</p>
						<p>Example with external validation:</p>
						<pre>
							<code>
								{`// Example assuming useForm hook from React Hook Form
import { useForm } from 'react-hook-form';
import InputField from 'PATH/ui_elements/InputField';

const MyForm = () => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                name="email"
                label="Email Address"
                ref={register({ required: 'Email is required' })}
                hasError={!!errors.email}
                errorMessage={errors.email?.message}
            />
            <button type="submit">Submit</button>
        </form>
    );
};`}
							</code>
						</pre>
						<p>
							In this example, <code>InputField</code> is used with React Hook Form's <code>register</code>{' '}
							function to connect the input to the form validation logic. The <code>hasError</code> and{' '}
							<code>errorMessage</code> props are dynamically set based on the validation state managed by
							React Hook Form.
						</p>

						<div className='divider'></div>
						<h3>Ref Forwarding</h3>
						<p>
							The <code>InputField</code> component supports ref forwarding. This allows parent components to
							directly access the DOM node of the input element for tasks like setting focus, reading values,
							etc.
						</p>
						<p>
							To use ref forwarding, create a ref using <code>React.createRef</code> or the{' '}
							<code>useRef</code> hook in your parent component and pass it to the <code>InputField</code>.
							The component forwards this ref to the actual input element.
						</p>
						<pre>
							<code>
								{`import React, { useRef } from 'react';
import InputField from 'PATH/ui_elements/InputField';

const ParentComponent = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <InputField ref={inputRef} type="text" label="Focusable Input" />
            <button onClick={focusInput}>Focus the Input</button>
        </div>
    );
};`}
							</code>
						</pre>
						<p>
							In this example, clicking the button will set focus to the <code>InputField</code> due to the
							use of the forwarded ref.
						</p>
						<div className='divider'></div>

						<h3>Clickable Icon Accessibility</h3>
						<p>
							When an icon within the <code>InputField</code> is interactive (such as a submit, search etc),
							you can add an aria-label to the icon with the <code>iconAriaLabel=''</code> option. The
							functionality for show/hide password automatically adds a show password / hide password
							aria-label.
						</p>
						<div className='divider'></div>
						<h3>The Props</h3>
						<p>Available props for the component</p>
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
									<td>type</td>
									<td>The type of input (e.g., 'text', 'email', 'password').</td>
									<td>string</td>
									<td>'text'</td>
								</tr>
								<tr>
									<td>label</td>
									<td>Label text for the input field.</td>
									<td>string</td>
									<td></td>
								</tr>
								<tr>
									<td>id</td>
									<td>
										A unique identifier for the input field. It's used to associate the input field with its
										label for accessibility. Each input field in a form should have a distinct <code>id</code>
										.
									</td>
									<td>string</td>
									<td></td>
								</tr>

								<tr>
									<td>errorMessage</td>
									<td>Message to display when `hasError` is `true`.</td>
									<td>string</td>
									<td></td>
								</tr>
								<tr>
									<td>hasError</td>
									<td>Indicates whether the field has an error.</td>
									<td>boolean</td>
									<td>false</td>
								</tr>
								<tr>
									<td>width</td>
									<td>Width of the input field (e.g., 'quarter', 'half', 'full').</td>
									<td>string</td>
									<td>'full'</td>
								</tr>
								<tr>
									<td>icon</td>
									<td>ReactNode for an optional icon.</td>
									<td>ReactNode</td>
									<td></td>
								</tr>
								<tr>
									<td>iconPosition</td>
									<td>Position of the icon ('left' or 'right').</td>
									<td>string</td>
									<td>'right'</td>
								</tr>
								<tr>
									<td>onIconClick</td>
									<td>Add this to enable function to call when the icon is clicked.</td>
									<td>function</td>
									<td></td>
								</tr>
								<tr>
									<td>iconAriaLabel</td>
									<td>
										Provides an accessible name (aria-label) for the icon when it is interactive. This is
										crucial for screen readers to understand the action or purpose of the icon. If not
										provided, defaults to a generic 'Icon' description.
									</td>
									<td>string</td>
									<td>'Icon'</td>
								</tr>
								<tr>
									<td>showHidePassword</td>
									<td>Enables a toggle to show/hide password content.</td>
									<td>boolean</td>
									<td>false</td>
								</tr>
								<tr>
									<td>autocompleteOverride</td>
									<td>Overrides the standard autocomplete attribute for the input.</td>
									<td>string</td>
									<td></td>
								</tr>
								<tr>
									<td>min</td>
									<td>Minimum value for input types like 'number'.</td>
									<td>string</td>
									<td></td>
								</tr>
								<tr>
									<td>max</td>
									<td>Maximum value for input types like 'number'.</td>
									<td>string</td>
									<td></td>
								</tr>
								<tr>
									<td>step</td>
									<td>Step interval for input types like 'number'.</td>
									<td>string</td>
									<td></td>
								</tr>
								<tr>
									<td>...rest</td>
									<td>Any other standard HTML input attributes.</td>
									<td>object</td>
									<td>None</td>
								</tr>
							</tbody>
						</table>
						<div className='divider'></div>
						<h3>Stylesheet</h3>
						<p>
							The InputField has locally scoped styles within its folder structure. You'll find the InputField
							stylesheet by searching <code>InputField.Module.css</code>
						</p>
						<table>
							<thead>
								<tr>
									<th>Class Name</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>.inputWrapper</td>
									<td>Base class for the input field wrapper, handling the layout and sizing.</td>
								</tr>
								<tr>
									<td>.inputField</td>
									<td>Class for the input element itself, defining the core styling of the input field.</td>
								</tr>
								<tr>
									<td>.inputIconWrapper</td>
									<td>Class for the wrapper when an icon is used, managing the layout of input and icon.</td>
								</tr>
								<tr>
									<td>.inputGenericWrapper</td>
									<td>Class used for the wrapper when no icon is present, typically for generic styling.</td>
								</tr>
								<tr>
									<td>.icon</td>
									<td>
										Class for the icon within the input field, responsible for icon styling and positioning.
									</td>
								</tr>
								<tr>
									<td>.inputIconInteractive</td>
									<td>
										Applied when the icon within the input is interactive, like a show/hide password toggle.
									</td>
								</tr>
								<tr>
									<td>.iconLeft</td>
									<td>Modifier class for positioning the icon on the left side of the input field.</td>
								</tr>
								<tr>
									<td>.iconRight</td>
									<td>Modifier class for positioning the icon on the right side of the input field.</td>
								</tr>
								<tr>
									<td>.label</td>
									<td>Class for the input field label.</td>
								</tr>
								<tr>
									<td>.error</td>
									<td>Class for error messages.</td>
								</tr>
								{/* Add more rows for any other classes used in your InputField component */}
							</tbody>
						</table>
						<div className='divider'></div>
						<h3>Example Variations</h3>
						<div className='panel-outline'>
							<h4>Input with Icon</h4>
							<p>
								Add a custom icon component to the field using <code>icon = ''</code>.
							</p>
							<p>
								Change the icons position with <code>icon = ''</code>. Options are
								<code>'left' | 'right' </code>. Defaults to 'right'.
							</p>

							<p>
								The icon becomes clickable with the <code>onIconClick</code> option, for situations like a
								minimal search or subscribe input.
							</p>
							<p>
								To add a show/hide password toggle icon, use <code>showHidePassword = {true}</code>.
							</p>
							<div className='panel-example'>
								<form>
									<InputField
										type='password'
										label='Password with clickable toggle icon'
										showHidePassword={true}
										id='field1'
									/>
									<InputField
										type='email'
										label='Email with icon left'
										iconAriaLabel='Email Icon'
										icon={<IconEmail />}
										iconPosition='left'
										id='field2'
									/>
									<InputField
										type='search'
										onIconClick={() => console.log('clicked')}
										label='Search with clickable submit icon'
										iconAriaLabel='Submit email address'
										icon={<IconArrow />}
										id='field3'
									/>
								</form>
							</div>
						</div>
						<div className='panel-outline'>
							<h4>Input Sizes</h4>
							<p>
								Change the width of an input field using <code>width=''</code>. Options:{' '}
								<code>'quarter' | 'third' | 'half' | 'half'</code>. Defaults to 'full'.
							</p>
							<div className='panel-example'>
								<form>
									<InputField type='text' label='Half width field' width='half' id='field4' />
									<InputField type='text' label='Half width field' width='half' id='field5' />
									<InputField type='text' label='Third width field' width='third' id='field6' />
									<InputField type='text' label='Third width field' width='third' id='field7' />
									<InputField type='text' label='Third width field' width='third' id='field8' />
									<InputField type='text' label='Quarter width field' width='quarter' id='field9' />
									<InputField type='text' label='Quarter width field' width='quarter' id='field10' />
									<InputField type='text' label='Quarter width field' width='quarter' id='field11' />
									<InputField type='text' label='Quarter width field' width='quarter' id='field12' />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InputFieldDocs;

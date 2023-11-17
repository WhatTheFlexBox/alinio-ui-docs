import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

interface LiveCodeExampleProps {
	code: string;
	scope: { [key: string]: any }; // Adjust this type according to what you pass in scope
	showCode: boolean;
	setShowCode: React.Dispatch<React.SetStateAction<boolean>>;
}

const LiveCodeExample: React.FC<LiveCodeExampleProps> = ({ code, scope, showCode, setShowCode }) => {
	return (
		<div className='code-example'>
			<LiveProvider code={code} scope={scope}>
				<LivePreview className='code-preview' />
				<button className='code-button' onClick={() => setShowCode(!showCode)}>
					{showCode ? 'Hide Code' : 'Show Code'}
				</button>
				{showCode && (
					<>
						<LiveEditor className='code-editor' />
						<LiveError className='code-error' />
					</>
				)}
			</LiveProvider>
		</div>
	);
};

export default LiveCodeExample;

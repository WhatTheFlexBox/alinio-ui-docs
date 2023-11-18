import { useState, useRef } from 'react';
import { Link } from 'alinio-ui';
import ButtonDocs from '../ButtonsAndLinksDocs/ButtonDocs';
import LinkDocs from '../ButtonsAndLinksDocs/LinkDocs';
import InputFieldDocs from '../formDocs/InputFieldDocs';
import './docs.css';

function MainDocs() {
	const [activeSection, setActiveSection] = useState('inputFieldsComponent');
	const [fade, setFade] = useState(true);
	const contentRef = useRef<HTMLDivElement>(null);

	const handleSectionChange = (section: string) => {
		setFade(false); // Start fade-out
		if (contentRef.current) {
			contentRef.current.scrollIntoView({ behavior: 'smooth' });
		}

		setTimeout(() => {
			setActiveSection(section);
			setFade(true); // Start fade-in after the scroll is likely complete
		}, 150); // This duration should be equal to or slightly longer than the scroll duration
	};

	const renderSection = () => {
		switch (activeSection) {
			case 'inputFieldsComponent':
				return <InputFieldDocs />;
			case 'Link':
				return <LinkDocs />;
			case 'buttonComponent':
				return <ButtonDocs />;
			default:
				return null;
		}
	};

	return (
		<div className='App'>
			<header>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h1 className='mb-0'>UI Docs</h1>
						</div>
					</div>
				</div>
			</header>
			<div className='container'>
				<div className='row'>
					<div className='col-md-3'>
						<aside className='sidebar'>
							<h4>UI Components</h4>
							<hr></hr>
							<nav>
								<p className='h6'>Buttons & Links</p>
								<ul className='aside-links'>
									<li>
										<Link onClick={() => handleSectionChange('Link')}>Link Component</Link>
									</li>
									<li>
										<Link onClick={() => handleSectionChange('buttonComponent')}>Button Component</Link>
									</li>
								</ul>
								<p className='h6'>Forms</p>
								<ul className='aside-links'>
									<li>
										<Link onClick={() => handleSectionChange('inputFieldsComponent')}>Input field</Link>
									</li>
								</ul>
							</nav>
						</aside>
					</div>
					<div className='col-md-9'>
						<div ref={contentRef} className={`content ${fade ? 'fade-in' : 'fade-out'}`}>
							{renderSection()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainDocs;

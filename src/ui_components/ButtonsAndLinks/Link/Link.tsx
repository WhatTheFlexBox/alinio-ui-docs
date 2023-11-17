import { ReactNode, AnchorHTMLAttributes } from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import styles from './Link.module.css';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children?: ReactNode;
	className?: string;
	icon?: ReactNode;
	fillIconWrapper?: boolean;
	linkStyle?: 'link' | 'button' | 'icon';
	size?: 'sm' | 'md' | 'lg';
	to?: string;
	iconAriaLabel?: string; // New prop for accessible icon label
}

const Link = ({
	children,
	color = 'dark',
	className,
	icon,
	fillIconWrapper = false,
	linkStyle = 'link',
	size = 'md',
	to,
	iconAriaLabel, // Destructure the new prop
	...rest
}: Props) => {
	const additionalGlobalClass = linkStyle === 'button' ? 'button' : linkStyle === 'icon' ? 'icon' : 'link';

	const combinedClassName = `${styles[linkStyle]} ${styles[color]} ${styles[size]} ${
		className || ''
	} ${additionalGlobalClass}`;

	const iconWrapperClass = fillIconWrapper
		? `${styles.iconWrapper} ${styles.filledIconWrapper}`
		: styles.iconWrapper;

	const renderLinkContent = () => (
		<>
			<span className={styles.content}>{children}</span>
			{icon && (
				<span
					className={iconWrapperClass}
					aria-label={iconAriaLabel || 'Link Icon'} // Apply aria-label
				>
					{icon}
				</span>
			)}
			<span className={styles.background}></span>
		</>
	);

	const renderLink = () => {
		if (to) {
			return (
				<RouterLink
					to={to}
					className={combinedClassName}
					{...rest}
					scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
					{renderLinkContent()}
				</RouterLink>
			);
		} else {
			return (
				<a className={combinedClassName} {...rest}>
					{renderLinkContent()}
				</a>
			);
		}
	};

	return renderLink();
};

export default Link;

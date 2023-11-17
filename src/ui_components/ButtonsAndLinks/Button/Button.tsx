import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'light' | 'dark';
	className?: string;
	fillIconWrapper?: boolean;
	icon?: ReactNode;
	iconAriaLabel?: string; // Renamed prop
	isLoading?: boolean;
	loadingMessage?: string;
	size?: 'sm' | 'md' | 'lg';
	ariaLabel?: string;
	type?: 'button' | 'submit' | 'reset';
}

const Button = ({
	children,
	color = 'primary',
	fillIconWrapper = false,
	className = 'button',
	icon,
	iconAriaLabel, // Renamed prop
	isLoading = false,
	loadingMessage = 'Loading...',
	size = 'md',
	ariaLabel,
	type = 'button', // Default type set to 'button'

	...rest
}: Props) => {
	const isIconOnly = !children && icon;
	const combinedClassName = [
		styles.button,
		styles[color],
		styles[size],
		className,
		isIconOnly && styles.icon, // Add the icon class if applicable
	]
		.filter(Boolean)
		.join(' ');

	const iconWrapperClass = fillIconWrapper
		? `${styles.iconWrapper} ${styles.filledIconWrapper}`
		: styles.iconWrapper;

	const buttonAriaLabel =
		ariaLabel || (typeof children === 'string' ? children : isIconOnly ? 'Icon button' : 'Button');
	const resolvedIconAriaLabel = iconAriaLabel || (icon ? 'Icon' : undefined);

	return (
		<button
			type={type}
			className={combinedClassName}
			disabled={isLoading || rest.disabled}
			aria-label={buttonAriaLabel}
			{...rest}>
			{isLoading ? (
				<>
					<span className={styles.content}>{loadingMessage}</span>
					<span className={styles.spinner}></span>
				</>
			) : (
				<>
					<span className={styles.background}></span>
					<span className={styles.content}>{children}</span>
					{icon && (
						<span
							className={iconWrapperClass}
							aria-label={resolvedIconAriaLabel}
							role={resolvedIconAriaLabel ? 'img' : undefined}>
							{icon}
						</span>
					)}
				</>
			)}
		</button>
	);
};

export default Button;

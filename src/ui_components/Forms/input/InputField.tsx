import React, { InputHTMLAttributes, useState, forwardRef } from 'react';
import IconPasswordShow from './InputIcons/IconPasswordShow';
import IconPasswordHide from './InputIcons/IconPasswordHide';
import styles from './InputField.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	id?: string;
	errorMessage?: string;
	hasError?: boolean;
	width?: 'quarter' | 'third' | 'half' | 'full';
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	onIconClick?: () => void;
	showHidePassword?: boolean;
	autocompleteOverride?: string;
	iconAriaLabel?: string;
	min?: string;
	max?: string;
	step?: string;
}

const InputField = forwardRef<HTMLInputElement, Props>(
	(
		{
			label,
			id,
			errorMessage,
			hasError = false,
			icon,
			onIconClick,
			width = 'full',
			className,
			iconPosition = 'right',
			type = 'text',
			showHidePassword = false,
			autocompleteOverride,
			iconAriaLabel,
			min,
			max,
			step,
			...rest
		},
		ref
	) => {
		const [isPasswordShown, setIsPasswordShown] = useState(false);
		const togglePasswordVisibility = () => setIsPasswordShown(!isPasswordShown);

		const inputType =
			showHidePassword && type === 'password' ? (isPasswordShown ? 'text' : 'password') : type;

		// Determine which icon to display and its aria-label
		const isPasswordIcon = showHidePassword && type === 'password';
		const displayIcon = isPasswordIcon ? isPasswordShown ? <IconPasswordHide /> : <IconPasswordShow /> : icon;
		const iconLabel = isPasswordIcon
			? isPasswordShown
				? 'Hide password'
				: 'Show password'
			: iconAriaLabel || 'Icon';

		const handleIconClick = isPasswordIcon ? togglePasswordVisibility : onIconClick;
		const isIconUsed = isPasswordIcon || icon;

		const inputWrapperClass = `${styles.inputWrapper} ${width !== 'full' ? styles[width] : ''}`;
		const combinedClassName = `${styles.inputField} ${className || ''}`;
		const iconWrapperClass = isIconUsed
			? [
					styles.inputIconWrapper,
					handleIconClick ? styles.inputIconInteractive : null,
					iconPosition === 'left' ? styles.iconLeft : styles.iconRight,
			  ]
					.filter(Boolean)
					.join(' ')
			: styles.inputGenericWrapper;

		const getAutocompleteValue = (inputType: string): string => {
			if (autocompleteOverride) {
				return autocompleteOverride;
			}
			switch (inputType) {
				case 'email':
					return 'email';
				case 'tel':
					return 'tel';
				case 'password':
					return isPasswordShown ? 'text' : 'current-password';
				case 'url':
					return 'url';
				default:
					return '';
			}
		};

		return (
			<div className={inputWrapperClass}>
				{label && (
					<label htmlFor={id} className={styles.label}>
						{label}
					</label>
				)}
				<div className={iconWrapperClass}>
					{displayIcon && iconPosition === 'left' && (
						<span
							className={styles.icon}
							onClick={handleIconClick}
							role={handleIconClick ? 'button' : undefined}
							tabIndex={handleIconClick ? 0 : undefined}
							aria-label={iconLabel}>
							{displayIcon}
						</span>
					)}
					<input
						id={id}
						ref={ref}
						className={combinedClassName}
						type={inputType}
						min={min}
						max={max}
						step={step}
						autoComplete={getAutocompleteValue(type)}
						{...rest}
					/>
					{displayIcon && iconPosition === 'right' && (
						<span
							className={styles.icon}
							onClick={handleIconClick}
							role={handleIconClick ? 'button' : undefined}
							tabIndex={handleIconClick ? 0 : undefined}
							aria-label={iconLabel}>
							{displayIcon}
						</span>
					)}
				</div>
				{hasError && errorMessage && <span className={styles.error}>{errorMessage}</span>}
			</div>
		);
	}
);

export default InputField;

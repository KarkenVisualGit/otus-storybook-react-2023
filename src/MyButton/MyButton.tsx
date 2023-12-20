import React, { FC, ReactNode } from 'react';
import './MyButton.css'

export interface MyButtonProps {
	color: string;
	big?: boolean;
	children?: ReactNode;
}

const MyButton: FC<MyButtonProps> = (
	{
		children,
		color,
		big,
		...props
	}
) => {
	const rootClasses = ['my-button'];
	if (big) {
		rootClasses.push('big-btn');
	}
	return (
		<button {...props} className={rootClasses.join(' ')} style={{ color, ...(big ? { fontSize: '20px' } : {}) }}>
			{children}
		</button>
	);
};

export default MyButton;
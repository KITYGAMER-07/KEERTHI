import React, { forwardRef } from 'react';

const FlowerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 10.2C9.7 10.2 8 8.55 8 6.35C8 4.55 9.25 3 11 3C12.15 3 13.05 3.7 13.5 4.75C13.95 3.7 14.85 3 16 3C17.75 3 19 4.55 19 6.35C19 8.55 17.3 10.2 15 10.2C17.3 10.2 18.95 11.85 18.95 14.05C18.95 15.85 17.7 17.4 15.95 17.4C14.8 17.4 13.9 16.7 13.45 15.65C13 16.7 12.1 17.4 10.95 17.4C9.2 17.4 7.95 15.85 7.95 14.05C7.95 11.85 9.7 10.2 12 10.2ZM12 10.2C9.7 10.2 8.05 8.55 8.05 6.35C8.05 4.55 6.8 3 5.05 3C3.3 3 2.05 4.55 2.05 6.35C2.05 8.55 3.7 10.2 6 10.2C3.7 10.2 2.05 11.85 2.05 14.05C2.05 15.85 3.3 17.4 5.05 17.4C6.2 17.4 7.1 16.7 7.55 15.65C8 16.7 8.9 17.4 10.05 17.4C11.8 17.4 13.05 15.85 13.05 14.05C13.05 11.85 14.3 10.2 16.6 10.2"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.2" r="2.25" fill="currentColor" />
      <path
        d="M12 12.45V21M12 17.2C10.7 17.2 9.55 16.7 8.7 15.85M12 17.2C13.3 17.2 14.45 16.7 15.3 15.85"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  )
);

FlowerIcon.displayName = 'FlowerIcon';

export default FlowerIcon;

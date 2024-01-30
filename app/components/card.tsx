import clsx from 'clsx';

interface CardProps {
  className?: string; // Define className as a string or optional
  isActive: boolean;
}

function Card({ className, isActive }: CardProps) {
  // Constructing classes using clsx
  const classes = clsx('card', className, {
    active: isActive,
  });

  // Return a div element with the constructed classes
  return <div className={classes}>Card content</div>;
}

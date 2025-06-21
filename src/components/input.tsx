import { cva, cx, type VariantProps } from 'class-variance-authority';
import { textVariants } from './text';

export const inputVariants = cva(
  'border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none',
  {
    variants: {
      size: {
        md: 'pb-2 px-2',
      },
      disabled: {
        true: 'pointer-events-none',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  },
);

interface InputProps
  extends VariantProps<typeof inputVariants>,
    Omit<React.ComponentProps<'input'>, 'size' | 'disabled'> {}

export function Input({ size, disabled, className, ...props }: InputProps) {
  return (
    <input
      className={cx(
        inputVariants({ size, disabled }),
        textVariants(),
        className,
      )}
      {...props}
    />
  );
}

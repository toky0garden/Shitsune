'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const avatarVariants = cva('relative flex size-10 shrink-0 overflow-hidden', {
  variants: {
    rounded: {
      full: 'rounded-full',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      none: 'rounded-none',
    },
  },
  defaultVariants: {
    rounded: 'md',
  },
});

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

const Avatar = ({
  ref,
  className,
  rounded,
  ...props
}: AvatarProps & {
  ref?: React.RefObject<React.ElementRef<typeof AvatarPrimitive.Root> | null>;
}) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ rounded, className }))}
    {...props}
  />
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
  ref?: React.RefObject<React.ElementRef<typeof AvatarPrimitive.Image> | null>;
}) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square size-full', className)}
    {...props}
  />
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
  ref?: React.RefObject<React.ElementRef<
    typeof AvatarPrimitive.Fallback
  > | null>;
}) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex size-full items-center justify-center bg-muted',
      className,
    )}
    {...props}
  />
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };

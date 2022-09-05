import React from 'react'

export type BadgeColor = 'default' | 'blue' | 'pink' | 'gradient'
export type BadgeSize = 'default' | 'medium' | 'large'

export interface BadgeProps {
  children?: React.ReactChild | React.ReactChild[]
  color?: BadgeColor
  size?: BadgeSize
}

export const COLOR = {
  default: '',
  blue: 'bg-blue bg-opacity-20 outline-[#11998E] rounded text-xs text-[#11998E] px-2 py-1',
  pink: 'bg-[#38EF7D] bg-opacity-20 outline-[#38EF7D] rounded text-xs text-[#38EF7D] px-2 py-1',
  gradient:
    'bg-gradient-to-r from-[#11998E] to-[#38EF7D] opacity-80 hover:opacity-100 bg-[#38EF7D] bg-opacity-20 outline-pink rounded text-base text-white px-2 py-1',
}

export const SIZE = {
  default: 'text-xs',
  medium: 'text-sm',
  large: 'text-lg',
}

function Badge({
  color = 'default',
  size = 'default',
  children,
  className = '',
}: BadgeProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={`${COLOR[color]} ${SIZE[size]} ${className}`}>{children}</div>
}

export default Badge

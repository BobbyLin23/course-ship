'use client'

import { cn } from '@/lib/utils'

interface SelectProps {
  options: string[]
  className?: string
}

export const Select = ({ options, className }: SelectProps) => {
  return (
    <select className={cn('select w-full max-w-xs', className)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

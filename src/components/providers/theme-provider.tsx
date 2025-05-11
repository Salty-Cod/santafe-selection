'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

type Props = ThemeProviderProps & {
  /** Force mounted state - useful for server-side rendering */
  forceMounted?: boolean
}

const defaultProps = {
  attribute: 'class',
  defaultTheme: 'system',
  enableSystem: true,
  disableTransitionOnChange: false,
  forceMounted: false,
}

export function ThemeProvider({ children, ...props }: Props) {
  const mergedProps = { ...defaultProps, ...props }
  
  return (
    <NextThemesProvider {...mergedProps}>
      {children}
    </NextThemesProvider>
  )
}

ThemeProvider.defaultProps = defaultProps

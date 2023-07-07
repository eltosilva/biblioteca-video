import localFont from 'next/font/local'

export const jakarta = localFont({
  src: [
    {
      path: 'Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf',
      style: 'italic'
    },
    {
      path: 'Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf',
      style: 'normal'
    }
  ],
  display: 'swap'
})
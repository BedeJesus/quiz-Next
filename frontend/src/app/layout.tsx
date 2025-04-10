import StyledComponentsRegistry from '../../lib/styled-registry'
import GlobalStyle from '../styles/global'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Quiz',
    description: 'Tela inicial do quiz',
    openGraph: {
        title: 'Quiz',
        description: 'Tela inicial do quiz',
    }
}


export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle/>
          {props.children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
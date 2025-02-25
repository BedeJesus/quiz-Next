import StyledComponentsRegistry from '../../lib/styled-registry'
import GlobalStyle from '../styles/global'

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
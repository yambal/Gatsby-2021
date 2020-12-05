import * as React from "react"
import styled from '@xstyled/styled-components'
import { Box } from '@xstyled/styled-components'
import { Link } from "gatsby"


const Wrapper = styled(Box)``
// ______________________________________________________
//
const Component: React.FC = () => (
  <Wrapper
    style={{
      background: "rebeccapurple",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </Wrapper>
)
// ______________________________________________________
//
export default Component

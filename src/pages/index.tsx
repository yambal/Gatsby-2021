import React from 'react'
import styled from '@xstyled/styled-components'
import { Box } from '@xstyled/styled-components'
import { Link, graphql } from "gatsby"
import { IndexHogeQuery } from "../../types/graphql-types"
import { Sample } from '../components/sample/Sample'
import { default as Layout } from '../layouts/index'
import { Button } from '../components/Buttons/Button'
import { useColorMode } from '@xstyled/styled-components'

const Wrapper = styled(Box)``

// ______________________________________________________
//
type Props = {
  data: IndexHogeQuery
}

// ______________________________________________________
//
function Component({
  data
}: Props){
  const [colorMode, setColorMode] = useColorMode()

  return(
    <Layout>
      <Wrapper>
        <Sample as="h1" mt="1rem">Hi people</Sample>
        <strong>{data.site?.siteMetadata?.title}</strong> site.
        <p>Welcome to your new </p>
        <p>Now go build something great.</p>
        <ul>
          <li>
            <Link to="/page-2/">Go to page 2</Link>
          </li>
          <li>
            <Link to="/authors/">Go to authors</Link>
          </li>
        </ul>
        <Button
          onClick={(e: any) => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default')
          }}
        >Hello</Button>
      </Wrapper>
    </Layout>
  )
}
// ______________________________________________________
//
export const pageQuery = graphql`
  query IndexHoge {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// ______________________________________________________
//
export default Component

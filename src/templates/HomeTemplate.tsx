import React from 'react'
import styled from '@xstyled/styled-components'
import { Box } from '@xstyled/styled-components'
import { Link, graphql } from "gatsby"
import { HomeTemplateQuery } from "../../types/graphql-types"
import { Sample } from '../components/sample/Sample'
import { default as Layout } from '../layouts/index'
import { Button } from '../components/Buttons/Button'
import { useColorMode } from '@xstyled/styled-components'

const Wrapper = styled(Box)``

// ______________________________________________________
//
type HomeTemplateProps = {
  data: HomeTemplateQuery
}

// ______________________________________________________
//
const HomeTemplate: React.FC<HomeTemplateProps> = props => {
  const { data } = props
  const [colorMode, setColorMode] = useColorMode()
  
  return (
    <>
      <Button
        onClick={(e: any) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}
      >Hello</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <pre>{JSON.stringify(data.mdData?.html, null, 2)}</pre>
    </>
  )

}

/**
 * Node の id を受け取り、詳細データをリクエストする
 */
export const pageQuery = graphql`
  query HomeTemplate($id: String) {
    mdData: markdownRemark(id: {eq: $id}) {
      html
    }
  }
`
// ______________________________________________________
//
export default HomeTemplate
import React, { ComponentProps } from 'react'
import styled, { SystemProps } from '@xstyled/styled-components'
import { Box } from '@xstyled/styled-components'
import { Link, graphql } from "gatsby"
import { HomeTemplateQuery } from "../../types/graphql-types"
import { Sample } from '../components/sample/Sample'
import { default as Layout } from '../layouts/index'
import { Button } from '../components/Buttons/Button'
import { useColorMode } from '@xstyled/styled-components'
import { GatsbyProps } from '../../types/GatsbyTypes'
import { useSiteMetadata } from '../provider/SiteMetadataProvider'
import { CounterContainer } from '../redux/features/counter/CounterContainer'


/**
 * pageQuery のレスポンス
 * gatsby-plugin-graphql-codegen で types\graphql-types.d.ts に自動追記される型を参照する
 **/
type HomeTemplateDataProps = {
  data: HomeTemplateQuery
}

/**
 * context として受けるデータの型
 * createPage(gatsby-node.js) で挿入している
 * pageQuery に 暗黙的に利用できる
 */
type HomeTemplateContext = {
  pageContext: {
    id: string
  }
  pathContext: {
    id: string
  }
}

/**
 * コンポーネントのラッパー
 * xstyled の Box を継承
 */
const HomeTemplateWrapper = styled(Box)`
  /**
   * ThemeProvider を使用していれば
   * このような theme を利用した指定ができる（theme は gatsby-browser.js で注入している）
   * color: ${props => props.theme.colors.black50};
   **/
  /**
   * xstyled のコンポーネントを継承しているので、下記のような表現もできる
   * <HomeTemplateWrapper color="text">
   **/
`

/**
 * Props のマージ
 * SystemProps を入れているのは、親要素から xstyled の props を受け取りたいから
 */
type HomeTemplateProps = HomeTemplateDataProps & HomeTemplateContext & GatsbyProps & SystemProps

function HomeTemplate(props: HomeTemplateProps){
  /**
   * xstyled の SystemProps を抽出したいので冗長
   * 親でスタイリング（mt, ml, mr, mb, color）をpropで指示できるようになる
   * テンプレートで利用シーンが思いつかないが
   **/
  const { data, path, uri, params, location, pageContext, pathContext, pageResources, ...WrapperProps } = props
  
  /**
   * カラーモードのセット
   * gatsby-browser.js で注入している
   */
  const [colorMode, setColorMode] = useColorMode()

  const site = useSiteMetadata()
  
  return (
    <HomeTemplateWrapper {...WrapperProps}>
      <Box as="h1" color="primary">{site?.title}</Box>
      <Button
        m="1rem"
        buttonSize="sm"
        onClick={(e: any) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}
      >Hello</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <pre>{JSON.stringify(data.pageQueryData?.html, null, 2)}</pre>
      WrapperProps
      <pre>{JSON.stringify(WrapperProps, null, 2)}</pre>
      <CounterContainer />
    </HomeTemplateWrapper>
  )

}

/**
 * Node の id を受け取り、詳細データをリクエストする
 * $id は createPage(gatsby-node.js) で挿入された context である
 * 
 * 本当は useStaticQuery で組んだ方がスマートだろうけど、変数が使えない
 */
export const pageQuery = graphql`
  query HomeTemplate($id: String) {
    pageQueryData: markdownRemark(id: {eq: $id}) {
      html
    }
  }
`

export default HomeTemplate
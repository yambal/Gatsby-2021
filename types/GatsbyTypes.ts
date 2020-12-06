type GatsbyQuery = {
  path: string
  uri: string
  params: any
  location: {
    pathname: string
    search: string
    hash: string
    href: string
    origin: string
    protocol: string
    host: string
    hostname: string
    port: string
    state: string
    key: string
  }
}

type GatsbyPageResources = {
  pageResources: any
}

export type GatsbyProps = GatsbyQuery & GatsbyPageResources
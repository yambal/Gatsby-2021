import { Box } from '@xstyled/styled-components'
import React, { useCallback } from 'react'
import { useQuery, useMutation, useQueryCache, QueryCache, ReactQueryCacheProvider } from 'react-query'
const axios = require('axios');

/**
 * APIにリクエストする本体
 */
type WeatherQ = {
  city: string
  state: string
  country: string
}
const fetchWeather = (queryId:string, q: WeatherQ) => {
  const { city, state, country } = q
  console.log(`fetchWeather queryId:${queryId}, city:${city}, state:${state}, country:${country}`)

  /**
   * fetch を使うとエラーがハンドリングできん
   */
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&lang=ja&appid=33f256dee6b4d40abccd9c502cadd68e`)
  .then((res: any) => {
    return res.data
  })
}

export function WeatherContainer () {
  /**
   * useQuery's options
   */
  const [staleTime, setStaleTime] = React.useState<number>(20000)
  const [cacheTime, setCacheTime] = React.useState<number>(60000)
  const [refetchInterval, setRefetchInterval] = React.useState<number>(30000)
  const [retry, setRetry] = React.useState<boolean | number>(3)
  const retryDelay = (retryAttempt: number) => {
    const delay = retryAttempt * 3000 + 3000
    console.log(`retry ${retryAttempt + 1}/${retry} after ${delay}msec`)
    return delay
  }

  /**
   * 天気を取得する都市名
   */
  const [city, setCity] = React.useState('ibaraki')
  const [state, setState] = React.useState('osaka')
  const [country, setCountry] = React.useState('ja')

  /**
   * 心臓部
   * 第一引数はfetchに渡される変数セットであると同時に、識別し、一意にキャッシュ管理するものでもある（重要）
   * https://react-query.tanstack.com/docs/api
   **/
  const queryInfo = useQuery(
    ['weatherData', {city, state, country}],
    fetchWeather,
    {
      staleTime,
      cacheTime,
      refetchInterval,
      retry,
      retryDelay,
      refetchIntervalInBackground: true
    }
  );

  const onCityChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedCity = event.currentTarget.value
      setCity(selectedCity)
    },
    [city]
  )

  return (
    <div>
      <div>
        <select onChange={onCityChange}>
          <option value="tokyo">Tokyo</option>
          <option value="osaka">Osaka</option>
        </select>
      </div>
      <button onClick={() => {queryInfo.refetch()}}>Weather Container</button>
      <Box as="table">
        <Box as="thead">
          <Box as="tr">
            <Box as="th">option</Box>
            <Box as="th">設定値</Box>
            <Box as="th">概要</Box>
          </Box>
        </Box>
        <Box as="tbody">
          <Box as="tr">
            <Box as="th">refetchInterval</Box>
            <Box as="td">{refetchInterval}</Box>
          </Box>
          <Box as="tr">
            <Box as="th">cacheTime</Box>
            <Box as="td">{cacheTime}</Box>
          </Box>
          <Box as="tr">
            <Box as="th">staleTime</Box>
            <Box as="td">{staleTime}</Box>
          </Box>
          <Box as="tr">
            <Box as="th">initialData</Box>
            <Box as="td">not set</Box>
            <Box as="td">クエリキャッシュの初期データとして使用</Box>
          </Box>
          <Box as="tr">
            <Box as="th">retry</Box>
            <Box as="td">{retry}</Box>
            <Box as="td">リトライするか or リトライ回数</Box>
          </Box>
          <Box as="tr">
            <Box as="th">retryDelay</Box>
            <Box as="td">...</Box>
            <Box as="td">リトライ遅延を返す関数</Box>
          </Box>
        </Box>
      </Box>
      <table>
        <tr>
          <th>failureCount</th>
          <td>{queryInfo.failureCount}</td>
          <td>クエリの失敗数:クエリが失敗するたびにインクリメントされます。クエリが成功したときにリセット</td>
        </tr>
        <tr>
          <th>isError</th>
          <td>{queryInfo.isError? 'true' : 'false'}</td>
          <td>status　から便宜上派生したもの</td>
        </tr>
        <tr>
          <th>isFetched</th>
          <td>{queryInfo.isFetched? 'true' : 'false'}</td>
          <td>クエリがフェッチされた場合に true</td>
        </tr>
        <tr>
          <th>isFetchedAfterMount</th>
          <td>{queryInfo.isFetchedAfterMount? 'true' : 'false'}</td>
          <td>コンポーネントがマウントされたときにフェッチされたものか</td>
        </tr>
        <tr>
          <th>isFetching</th>
          <td>{queryInfo.isFetching? 'true' : 'false'}</td>
          <td>バックグラウンドフェッチを含め、クエリが現在フェッチ中かどうか</td>
        </tr>
        <tr>
          <th>isIdle</th>
          <td>{queryInfo.isIdle? 'true' : 'false'}</td>
          <td>status　から便宜上派生したもの</td>
        </tr>
        <tr>
          <th>isLoading</th>
          <td>{queryInfo.isLoading? 'true' : 'false'}</td>
          <td>status　から便宜上派生したもの</td>
        </tr>
        <tr>
          <th>isPreviousData</th>
          <td>{queryInfo.isPreviousData? 'true' : 'false'}</td>
          <td>keepPreviousData が true の？</td>
        </tr>
        <tr>
          <th>isStale</th>
          <td>{queryInfo.isStale? 'true' : 'false'}</td>
          <td>キャッシュデータが古くなっている場合に true</td>
        </tr>
        <tr>
          <th>isSuccess</th>
          <td>{queryInfo.isSuccess? 'true' : 'false'}</td>
          <td>status　から便宜上派生したもの</td>
        </tr>
        <tr>
          <th>refetch</th>
          <td>{JSON.stringify(queryInfo.refetch)}</td>
          <td>クエリを手動で再フェッチする関数。</td>
        </tr>
        <tr>
          <th>remove</th>
          <td>{JSON.stringify(queryInfo.remove)}</td>
          <td>キャッシュからクエリを削除する関数。</td>
        </tr>
        <tr>
          <th>status</th>
          <td>{queryInfo.status}</td>
          <td>?</td>
        </tr>
      </table>
      <pre>{JSON.stringify(queryInfo.data, null, 2)}</pre>
    </div>
  )
}
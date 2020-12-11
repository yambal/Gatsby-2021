import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Counter, CounterProps } from './Counter'
import { Box } from '@xstyled/styled-components'

/**
 * Redux サンプル Counter の Storybook 掲載サンプル
 **/

export default {
  title: 'Example/organisms/Counter',
  component: Counter,
  argTypes: {
    count: {
      name: 'count',
      type: { name: 'number', required: true },
      defaultValue: 0,
      description: 'カウント数として表示する',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: {
        /**
         * Controls に更新UIを表示する：値を操作するためのUIを指定している
         * https://storybook.js.org/docs/react/essentials/controls#annotation
         */
        type: 'number'
      }
    },
    add: {
      description: '追加をクリックしたときのハンドラ',
      action: 'Clicked'
    },
    bg: {
      name: '-',
      type: { name: 'string', required: false },
      defaultValue: '#FFF',
      description: '背景色テスト用',
      table: {
        type: { summary: 'color string' },
        defaultValue: { summary: '#FFF' },
      },
      control: { type: 'color' }
    }
  }
}

/**
 * 複数バリエーションを作る場合は複製で使いまわせるようにテンプレ化
 * この例では、背景色をテストできるよう、Box でラップしている
 **/
type TemplateProps = CounterProps & {
  bg: string
}

const Template = (args: TemplateProps) => {
  const { bg, ...counterProps } = args
  return (
    <Box bg={bg} p='40px'>
      <Counter {...counterProps} />
    </Box>
  )
}

/**
 * export するとカタログ対象として認識される（のかな）
 **/
export const _counter: Story<TemplateProps> = Template.bind({})
_counter.args = {
  count: 0,
  bg: '#FFF'
}

/**
 * バリエーションやスナップショット用パターンを追加してもいい
export const test1: Story<CounterProps> = Template.bind({})
test1.args = {
  count: 999999,
  bg: '#FFF'
}
*/

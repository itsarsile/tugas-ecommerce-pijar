// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Carousel> = (args) => {
//   return <Carousel {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Carousel from './Carousel'

export const generated = () => {
  return <Carousel />
}

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

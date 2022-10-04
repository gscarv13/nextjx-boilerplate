import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

const story = {
  title: 'Main',
  component: Main
} as Meta

export default story

export const Basic: Story = (args) => <Main {...args} />

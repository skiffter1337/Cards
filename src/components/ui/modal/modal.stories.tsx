import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Input } from '../input'
import { Typography } from '../typography'

import { Modal } from './modal.tsx'

const meta = {
  title: 'Components/Modal',
  component: Modal.Root,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    trigger: (
      <Button variant={'primary'}>
        <Typography variant={'subtitle2'} style={{ color: 'var(--color-light-100' }}>
          Open modal
        </Typography>
      </Button>
    ),
  },
} satisfies Meta<typeof Modal.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Modal',
    children: (
      <>
        <Modal.Body>
          <Input />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'primary'} type={'submit'}>
            <Typography variant={'subtitle2'}>Add New Pack</Typography>
          </Button>
          <Button variant={'secondary'}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
        </Modal.Footer>
      </>
    ),
  },
}

export const Header: Story = {
  args: {
    title: 'Modal',
  },
}

export const Body: Story = {
  args: {
    children: (
      <Modal.Body>
        <Typography variant={'body1'} style={{ color: 'var(--color-light-100' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
        </Typography>
      </Modal.Body>
    ),
  },
}

export const FooterTwoButtons: Story = {
  args: {
    children: (
      <Modal.Footer>
        <Button variant={'primary'} type={'submit'}>
          <Typography variant={'subtitle2'}>Add New Pack</Typography>
        </Button>
        <Button variant={'secondary'}>
          <Typography variant={'subtitle2'}>Cancel</Typography>
        </Button>
      </Modal.Footer>
    ),
  },
}

export const FooterOneButton: Story = {
  args: {
    children: (
      <Modal.Footer>
        <Button variant={'primary'} type={'submit'}>
          <Typography variant={'subtitle2'}>Add New Pack</Typography>
        </Button>
      </Modal.Footer>
    ),
  },
}

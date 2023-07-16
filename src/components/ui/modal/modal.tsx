import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

import { Button } from '../button'
import { Typography } from '../typography'

import s from './modal.module.scss'

export const Modal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={s.button}>Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={s.content}>
          <Dialog.Title className={s.title}>Edit profile</Dialog.Title>
          <Dialog.Description className={s.description}>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className={s.fieldset}>
            <label className={s.label} htmlFor="name">
              Name
            </label>
            <input className={s.input} id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <button className={s.button}>Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button aria-label="Close">X</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

// <Dialog.Root>
//   <Dialog.Trigger asChild>
//     <Button variant={'primary'}>
//       <Typography variant={'subtitle2'} className={s.button_text}>
//         Modal
//       </Typography>
//     </Button>
//   </Dialog.Trigger>
//   <Dialog.Portal>
//     <Dialog.Overlay />
//     <Dialog.Content>
//       <Dialog.Title>
//         <Typography variant={'body1'}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
//         </Typography>
//       </Dialog.Title>
//       <Dialog.Description>
//         Make changes to your profile here. Click save when you're done.
//       </Dialog.Description>
//       <Dialog.Close>X</Dialog.Close>
//     </Dialog.Content>
//   </Dialog.Portal>
// </Dialog.Root>

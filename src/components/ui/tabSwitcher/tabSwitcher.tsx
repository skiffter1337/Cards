import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import { Label } from '../label/label.tsx'
import { Typography } from '../typography'

import s from './tabSwitcher.module.scss'

type TabsType = {
  value: string
  title: string
  disabled?: boolean
}

type TabSwitcherPropsType = {
  label: string
  tabs: TabsType[]
  ariaLabel: string
  defaultValue: string
  callback: () => void
}

export const TabSwitcher: FC<TabSwitcherPropsType> = ({
  tabs,
  label,
  ariaLabel,
  defaultValue,
  callback,
}) => {
  return (
    <>
      <Label title={label} htmlFor={''} variant={'body2'} classname={s.label} />
      <Tabs.Root className={s.root} defaultValue={defaultValue} onValueChange={callback}>
        <Tabs.List className={s.list} aria-label={ariaLabel}>
          {tabs.map(tab => (
            <Tabs.Trigger
              key={tab.value}
              className={s.trigger}
              value={tab.value}
              disabled={tab.disabled}
            >
              <Typography variant={'body1'} className={s.trigger_text}>
                {tab.title}
              </Typography>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </>
  )
}

import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import { Typography } from '../typography'

import s from './tabSwitcher.module.scss'

type TabsType = {
  value: string
  text: string
  disabled?: boolean
}

type TabSwitcherPropsType = {
  label: string
  tabs: TabsType[]
}

export const TabSwitcher: FC<TabSwitcherPropsType> = ({ tabs, label }) => {
  return (
    <>
      <label>
        <Typography variant={'body2'} className={s.label}>
          {label}
        </Typography>
      </label>
      <Tabs.Root className={s.tabs_root} defaultValue="tab1">
        <Tabs.List className={s.tabs_list} aria-label="Manage your account">
          {tabs.map((tab, i) => (
            <Tabs.Trigger
              key={i}
              className={s.tabs_trigger}
              value={tab.value}
              disabled={tab.disabled}
            >
              <Typography variant={'body1'} className={s.tabs_trigger_text}>
                {tab.text}
              </Typography>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </>
  )
}

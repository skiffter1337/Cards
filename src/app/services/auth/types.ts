export type User = {
  email: string
  name: string
  id: string
  isEmailVerified: boolean
  avatar: string
  created: string
  updated: string
}

export type SignUpData = {
  id: string
  name: string
  email: string
}

export type UpdateProfileType = {
  name?: string
  avatar?: string
}

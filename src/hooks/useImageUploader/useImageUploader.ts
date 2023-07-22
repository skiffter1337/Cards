import { ChangeEvent, useRef, useState } from 'react'

export const useImageUploader = (initialValue: string) => {
  const [image, setImage] = useState<string>(initialValue)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const onImageChange = (event: ChangeEvent<HTMLInputElement>, name: string) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }))
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const allowedTypes = ['image/jpeg', 'image/png']
      const maxSizeInBytes = 5 * 1024 * 1024

      if (allowedTypes.includes(file.type) && file.size <= maxSizeInBytes) {
        setImage(URL.createObjectURL(file))
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
      } else {
        if (!allowedTypes.includes(file.type)) {
          setErrors(prevErrors => ({
            ...prevErrors,
            [name]: 'Invalid file type. Only PNG and JPG files are allowed.',
          }))
        }
        if (file.size > maxSizeInBytes) {
          setErrors(prevErrors => ({
            ...prevErrors,
            [name]: 'File size exceeds the maximum allowed limit of 5 megabytes.',
          }))
        }
      }
    }
  }

  return { image, errors, onImageChange, fileInputRef, handleButtonClick }
}

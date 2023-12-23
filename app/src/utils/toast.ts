import { toast, ToastOptions } from 'react-toastify'

interface Toast {
  type: 'success' | 'warning' | 'error'
  text: string
}

export const showToast = ({ type, text }: Toast) => {
  const options: ToastOptions = {
    theme: 'colored',
    hideProgressBar: true,
    closeButton: false,
  }

  toast[type](text, options)
}

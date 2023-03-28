import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NotificationProps {
  message?: string;
  type: 'info' | 'success' | 'warning' | 'error';
}


export function showNotification({ message, type = "info" }: NotificationProps) {
  const config: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",

  }

  switch (type) {
    case 'success':
      toast.success(message, { ...config, toastId: 'success', });
      break;
    case 'warning':
      toast.warn(message, { ...config, toastId: 'warning', });
      break;
    case 'error':
      toast.error(() => message, { ...config, toastId: 'error', });
      break;
    default:
      toast.info(message, { ...config, toastId: 'info', });
      break;
  }





}


import { useEffect } from 'react';
import { Toast as BSToast, ToastHeader, ToastBody } from 'reactstrap';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { deleteToast } from '../redux/slices/toastsSlice';
import { IToast } from '../model';

interface ToastProps {
  dispatch: Dispatch;
  toasts: IToast[];
}

export const Toast = connect()((props: ToastProps) => {
  const { dispatch, toasts } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      if (toasts.length > 0) {
        dispatch(deleteToast(toasts[0].id));
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, toasts]);

  return (
    <div
      className="position-fixed m-2"
      style={{ top: 0, right: 0, width: 350 }}
    >
      {toasts.map((toast) => (
        <BSToast key={toast.id} className="mb-2">
          <ToastHeader toggle={() => dispatch(deleteToast(toast.id))}>
            {toast.header}
          </ToastHeader>
          <ToastBody>{toast.body}</ToastBody>
        </BSToast>
      ))}
    </div>
  );
});

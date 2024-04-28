import { useState, useEffect } from "react";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const ToastContainer = ({ toasts }) => {
  return (
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          message={toast.message}
          onClose={() => toasts.splice(index, 1)}
        />
      ))}
    </div>
  );
};

const MyApp = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    setToasts([...toasts, { message }]);
  };

  return (
    <div>
      <h1>My App</h1>
      <button onClick={() => showToast("Hello, world!")}>Show Toast</button>
      <ToastContainer toasts={toasts} />
      <style jsx>{`
        .toast-container {
          position: fixed;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          z-index: 9999;
        }

        .toast {
          background-color: #333;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }

        .toast p {
          margin: 0;
          flex-grow: 1;
        }

        .toast button {
          background-color: transparent;
          color: #fff;
          border: none;
          cursor: pointer;
          padding: 5px 10px;
          border-radius: 3px;
        }

        .toast button:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default MyApp;

import React from 'react';

export default function ConfirmPopup({
  dismissPopup,
  message,
  actionTitle,
  action
}) {
  return (
    <div className="ConfirmPopup">
      <div className="popup-container" onClick={dismissPopup} />
      <div className="popup">
        <p className="lead mb-5">{message}</p>
        <div>
          <button className="btn btn-light mr-2" onClick={dismissPopup}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={action}>
            {actionTitle}
          </button>
        </div>
      </div>
    </div>
  );
}

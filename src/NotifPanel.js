import React, { useState, useEffect } from "react";

const NotifPanel = ({ channel }) => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    if (channel != null) {
      channel.bind("demo-event", function (data) {
        setNotifications((prevNotifs) => [...prevNotifs, data.value]);
        console.log(data.value);
      });
    }
  }, [channel]);

  return (
    <div
      className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
      style={{ overflowY: "auto", textAlign: "left", minWidth: "25rem" }}
    >
      <a
        href="#"
        className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
      >
        <span className="fs-5 fw-semibold">Notifications</span>
      </a>
      <div className="list-group list-group-flush border-bottom scrollarea"></div>
      {notifications.map((notification) => (
        <React.Fragment>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">There was an update</strong>
              <small>Tue</small>
            </div>
            <div className="col-10 mb-1 small">{notification}</div>
          </a>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NotifPanel;

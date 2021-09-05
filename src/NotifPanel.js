import React, { useState, useEffect } from "react";

const NotifPanel = ({ channel }) => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    if (channel != null) {
      channel.bind("my-event", function (data) {
        setNotifications((prevNotifs) => [...prevNotifs, JSON.stringify(data)]);
      });
      console.log(channel);
    }
  }, [channel]);

  return (
    <div
      className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
      style={{ overflowY: "auto", textAlign: "left" }}
    >
      <a
        href="#"
        className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
      >
        <span className="fs-5 fw-semibold">Notifications</span>
      </a>
      <div className="list-group list-group-flush border-bottom scrollarea">
        <a
          href="#"
          className="list-group-item list-group-item-action active py-3 lh-tight"
          aria-current="true"
        >
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small>Wed</small>
          </div>
          <div className="col-10 mb-1 small">
            Some placeholder content in a paragraph below the heading and date.
          </div>
        </a>
      </div>
    </div>
  );
};

export default NotifPanel;

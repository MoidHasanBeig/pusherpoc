import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import CreateMessage from "./CreateMessage";
import NotifPanel from "./NotifPanel";
import Pusher from "pusher-js";

function App() {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    let pusher = new Pusher("771ebd160a78735cc59c", {
      cluster: "us2",
    });

    setChannel(pusher.subscribe("my-channel"));
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <CreateMessage />
      <NotifPanel channel={channel} />
    </div>
  );
}

export default App;

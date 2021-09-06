import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import CreateMessage from "./CreateMessage";
import NotifPanel from "./NotifPanel";
import Pusher from "pusher-js";

function App() {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    let pusher = new Pusher("0be31a14ca9048264b1c", {
      cluster: "us2",
    });

    setChannel(pusher.subscribe("skyit-demo-channel"));

    return () => pusher.unsubscribe("skyit-demo-channel");
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

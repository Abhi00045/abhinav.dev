'use-client'
import { GoDotFill } from "react-icons/go"
// import { useState } from "react";

const Available = () => {
  // const [status, setStatus] = useState<"online" | "offline" | "idle">("offline");

  // useEffect(() => {
  //   const fetchStatus = async () => {
  //     try {
  //       const res = await fetch("/api/discord-status");
  //       const data = await res.json();
  //       setStatus(data.status || "offline");
  //     } catch {
  //       setStatus("offline");
  //     }
  //   };

  //   fetchStatus();
  //   const interval = setInterval(fetchStatus, 10000); // refresh every 10s
  //   return () => clearInterval(interval);
  // }, []);

  // const colorClass =
  //   status === "online"
  //     ? "border-green-400 text-green-400"
  //     : status === "idle"
  //     ? "border-yellow-400 text-yellow-400"
  //     : "border-gray-400 text-gray-400";

  return (
    <div className="select-none font-medium text-xs w-fit  border px-1.5 py-0.5 rounded-md flex gap-0.5 items-center border-green-400 text-green-400">
      <span className="animate-pulse">
        <GoDotFill />
      </span>
      <pre>Available</pre>
    </div>
  )
}

export default Available
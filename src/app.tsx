import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export function App(){
  return (
    <div className="flex gap-2">
      <Header></Header>
      <AttendeeList></AttendeeList>

    </div>
  )
}
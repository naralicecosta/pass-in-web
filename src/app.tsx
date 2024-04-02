import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export function App(){
  return (
    <div className="flex gap-2">
      <div className="max-w-[1216px] mx-auto py-5">
      <Header ></Header>
      <AttendeeList></AttendeeList>
      </div>


    </div>
  )
}
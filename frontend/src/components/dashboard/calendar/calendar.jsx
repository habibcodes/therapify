import './calendar.css'


import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  AppointmentTooltip,
  ViewSwitcher,
  Toolbar,
  Resources,
  DateNavigator,
  AppointmentForm
} from "@devexpress/dx-react-scheduler-material-ui";

import {
  ViewState,
  IntegratedEditing,
  EditingState
} from "@devexpress/dx-react-scheduler";

import randomColor from 'randomcolor'


import { owners, appointments } from './appointments';
import { useEffect, useState } from "react";


export default function SchedulerExample() {
  const [appointmentData, setAppointmentData] = useState(appointments);


  useEffect(() => {
    setAppointmentData(appointments);

    
    }, []);
    
  

 
  const TimeTableCell = ({ onDoubleClick, ...restProps }) => {
    return <DayView.TimeTableCell onClick={onDoubleClick} {...restProps} />;
  };
  const resources = [{
    fieldName: 'ownerId',
    title: 'Select Practitioner',
    instances: owners,
  }];

  const commitChanges = ({ added, changed, deleted }) => {
 
    
  
    let data = appointmentData;
    if (added) {
      const startingAddedId =
        data.length > 0 ? data[data.length - 1].id + 1 : 0;
      data = [...data, { id: startingAddedId, ...added }];
    }
    if (changed) {
      data = data.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      );
    }
    if (deleted !== undefined) {
      data = data.filter((appointment) => appointment.id !== deleted);
    }
    setAppointmentData(data);
  };

  return (
  
    <Scheduler height= "auto" data={appointmentData}>
      <ViewState defaultCurrentDate={new Date()} />
      <DayView startDayHour={8} endDayHour={17} cellDuration={60} timeTableCellComponent={TimeTableCell} />
      <WeekView startDayHour={8} endDayHour={17} cellDuration={60} timeTableCellComponent={TimeTableCell} />
   
      
      <EditingState onCommitChanges={(e) => commitChanges(e)} />
      <IntegratedEditing />
      <Appointments />
      <Resources
      data={resources} />
      <Toolbar />
      <DateNavigator />
      
     
      <ViewSwitcher />
      <AppointmentTooltip showOpenButton showDeleteButton />
      <AppointmentForm />
    </Scheduler>
  );
}


import axios from "axios";
import randomColor from "randomcolor";

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
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

import {
  ViewState,
  IntegratedEditing,
  EditingState,
} from "@devexpress/dx-react-scheduler";

// import { appointments } from "./appointments";
import { useEffect, useState } from "react";

export default function SchedulerExample() {
  const [appointmentData, setAppointmentData] = useState([]);
  const [practitioners, setPractitioners] = useState([]);

  useEffect(() => {
    axios.get('/api/appointments').then(res => {
      console.log(res)
      const appData = res.data
      const filteredAppointments = appData.map((appoint) => ({
        id: appoint.id,
        title: appoint.title,
        startDate: new Date(appoint.start_date),
        endDate: new Date(appoint.end_date)
        
      }))
      setAppointmentData(filteredAppointments)
    })

   
    axios.get(`/api/practitioners`).then((res) => {
      const pracData = res.data;
    
      const filteredPracs = pracData.map((person) => ({
        id: person.id,
        text: `${person.first_name} ${person.last_name}`,
        color: randomColor(),
      }));
      setPractitioners(filteredPracs);
    });
  }, []);

  const TimeTableCell = ({ onDoubleClick, ...restProps }) => {
    return <DayView.TimeTableCell onClick={onDoubleClick} {...restProps} />;
  };
  const resources = [
    {
      fieldName: "ownerId",
      title: "Select Practitioner",
      instances: practitioners,
    },
  ];

  const commitChanges = ({ added, changed, deleted }) => {
    let data = appointmentData;
    console.log(added)
    if (added) {
      axios.post('/api/appointments/new', { appointment: added })
      .then(
        setAppointmentData(prev => [...prev, added])
      )
      
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
    setAppointmentData(prev => [...prev, data]);
  };

  return (
    <Scheduler className="scheduler" data={appointmentData}>
      <ViewState defaultCurrentDate={new Date()} />
      <DayView
        startDayHour={8}
        endDayHour={17}
        cellDuration={60}
        timeTableCellComponent={TimeTableCell}
      />
      <WeekView
        startDayHour={8}
        endDayHour={17}
        cellDuration={60}
        timeTableCellComponent={TimeTableCell}
      />

      <EditingState onCommitChanges={(e) => commitChanges(e)} />
      <IntegratedEditing />
      <Appointments />
      <Resources data={resources} />
      <Toolbar />
      <DateNavigator />

      <ViewSwitcher />
      <AppointmentTooltip showOpenButton showDeleteButton />
      <AppointmentForm />
    </Scheduler>
  );
}

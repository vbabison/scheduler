export function getAppointmentsForDay(state, day) {
  const apptObj = state.days.find(e => e.name === day);
  if (apptObj === undefined) {
    return [];
  } else {
    const apptArray = apptObj.appointments;
    const appointments = apptArray.map(x => state.appointments[x]);
    return appointments === undefined ? [] : appointments;
  }
}

export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter(singleDay => {
    return singleDay.name === day;
  });
  if (filteredDays.length === 0) {
    return [];
  }
  const interviewersMapped = filteredDays[0].interviewers.map(int => {
    return state.interviewers[int];
  });
  return interviewersMapped;
}

export function getInterview(state, interview) {
  if (!interview) {
    return interview;
  } else {
    const interviewerInfo = state.interviewers[interview.interviewer];
    const newInterview = {
      student: interview.student,
      interviewer: interviewerInfo
    };
    return newInterview;
  }
}
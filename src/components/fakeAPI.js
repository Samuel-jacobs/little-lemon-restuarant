

const availableTimesData = {
  
  '2023-10-10': ['17:00', '18:00', '19:00'],
  '2023-10-11': ['18:00', '19:00', '20:00'],

};

export function fetchAPI(date) {
  const availableTimes = availableTimesData[date] || ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  return availableTimes;
}

export function submitAPI(formData) {
  // Simulate a successful submission
  return true;
}


export const addJobs = jobs => ({
  type: 'ADD_JOBS',
  jobs
})

export const setActiveJob = id => ({
  type: 'SET_ACTIVE_JOB',
  id
})

export const getJob = id => ({
  type: 'GET_JOB',
  id
})
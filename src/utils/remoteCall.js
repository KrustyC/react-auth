/**
 * Status definitions for call status
 */
export const STATUS = {
  NOT_ASKED: 'NOT_ASKED',
  PENDING: 'PENDING',
  ERROR: 'ERROR',
  OK: 'OK'
}

export const Action = {
  Reset: TYPE => `${TYPE}_RESET`,
  Pending: TYPE => `${TYPE}_PENDING`,
  Error: TYPE => `${TYPE}_FAILURE`,
  Ok: TYPE => TYPE
}

/**
 * Call helper
 */
export const Call = {
  // setters
  notAsked: () => ({
    status: STATUS.NOT_ASKED
  }),
  pending: () => ({
    status: STATUS.PENDING
  }),
  error: content => ({
    status: STATUS.ERROR,
    content
  }),
  ok: content => ({
    status: STATUS.OK,
    content
  }),

  // checkers
  isNotAsked: ({ status }) => status === STATUS.NOT_ASKED,
  isPending: ({ status }) => status === STATUS.PENDING,
  isError: ({ status }) => status === STATUS.ERROR,
  isOk: ({ status }) => status === STATUS.OK,

  // helpers
  getContent: ({ content }) => content || null
}

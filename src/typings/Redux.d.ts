/* ----------------------------- Redux ----------------------------- */
interface combinedReducerType {
  rootScreenReducer: MessageStateType,
}

type ActionAvailableToDispatch = (args?: any)=>object;

// -------------------------- Root reducer --------------------------
interface MessageActionType {
  readonly type: string,
  message: string,
}
interface MessageStateType {
  message: string,
}

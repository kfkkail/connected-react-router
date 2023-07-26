import { Iterable, fromJS, Record } from "immutable"
import getIn from "./getIn"

const structure = {
  fromJS: fromJS,
  getIn,
  merge: (state, payload) => state.merge(payload),
  toJS: (value) => (Iterable.isIterable(value) || Record.isRecord(value)) ? value.toJS() : value,
}

export default structure

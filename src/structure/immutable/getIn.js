/* Code from github.com/erikras/redux-form by Erik Rasmussen */
import { Iterable, Record } from "immutable"
import plainGetIn from "../plain/getIn"

const getIn = (state, path) => {
const blah = Iterable.isIterable(state) || Record.isRecord(state) ? state.getIn(path) : plainGetIn(state, path)
console.log("getIn", Iterable.isIterable(state) || Record.isRecord(state), state, path, blah);
return blah
}


export default getIn

import { fork, all, spawn, call, delay } from "redux-saga/effects";
import * as Action from "user/rootWatcher";
import * as Actions from "service-provider/rootWatcher";
import * as Actionses from "technician/rootWatcher";
const makeRestartable = (saga) => {
  return function* () {
    yield spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          console.error(
            "unexpected root saga termination. The root sagas are supposed to be sagas that live during the whole app lifetime!",
            saga
          );
        } catch (e) {
          console.error("Saga error, the saga will be restarted", e);
        }
        yield delay(1000); // Workaround to avoid infinite error loops
      }
    });
  };
};
const arrays = [...Object.values({ ...Action, ...Actions, ...Actionses })];
export function* RootSaga() {
  yield all(arrays.map(fork));
}

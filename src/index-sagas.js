import SignupSaga from './signup/sagas'

export default function* IndexSaga () {
  yield [
    SignupSaga(),
  ]
}

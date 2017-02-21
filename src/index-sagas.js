import SignupSaga from './signup/sagas'
import LoginSaga from './login/sagas'

export default function* IndexSaga () {
  yield [
    SignupSaga(),
    LoginSaga(),
  ]
}

enum ResponseCode {
  // HTTP Status 200 (성공)
  SUCCESS = "SU",

  // HTTP Status 400
  VALIDATION_FAILED = "VF",
  EXISTED_EMAIL = "EE",
  EXISTED_TELNUMBER = "ET",
  EXISTED_NICKNAME = "EN",
  NO_EXISTED_BOARD_NUMBER = "NB",
  NO_EXISTED_USER = "NU",
  NO_EXISTED_CHATTINGROOM = "NC",

  // HTTP Status 401
  SIGN_IN_FAIL = "SF",
  AUTHORIZATION_FAIL = "AF",

  // HTTP Status 403
  NO_PERMISSION = "NP",

  // HTTP Status 500
  DATABASE_ERROR = "DE",


}

export default ResponseCode;
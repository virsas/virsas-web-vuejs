const isValidTelephone = (val) => {
  const telephonePattern = /^\+\d{7,15}$/
  if (telephonePattern.test(val)) {
    return true
  } else {
    return false
  }
}

export default isValidTelephone

const isValidRecord = (record: string): boolean => {
  if (record.trim().length > 0 && record.trim().length <= 20) {
    return true
  } else {
    return false
  }
}

export default isValidRecord

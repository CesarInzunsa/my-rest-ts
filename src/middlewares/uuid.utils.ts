import { v4 as uuidv4 } from 'uuid'

function generateId (): String {
  return uuidv4().replace(/-/g, '').substring(0, 24)
}

export default generateId

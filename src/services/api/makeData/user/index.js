import Api from '../../requester'

export function getUser(userId) {
  return {}
}

export async function getMe() {
  try {
    const user = await Api.get('me')
    return user && user.data
  } catch (error) {
    return null
  }
}

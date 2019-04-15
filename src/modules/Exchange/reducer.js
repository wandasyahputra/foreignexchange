import { FETCH_ALBUM } from './constant'


const initialState = {
  data: [],
  validUntil: 0,
  id: -1
}

const userAlbum = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM: {
      return {
        data: action.data,
        validUntil: action.validUntil,
        id: action.id
      }
    }
    default: {
      return state
    }
  }
}

export default userAlbum

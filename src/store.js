export const initialStore = () => {
  return {
    character:[],
    favorites: [],
    people: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
    case 'sync_people':
      const charactersData = action.payload
      return {
        ...store,
        people: charactersData
      }
      case 'sync_planets':
        const planetsData = action.payload
        return {
          ...store,
          planets: planetsData
        }
      case 'add_favorite':
        const newFav = action.payload
        if (!store.favorites.find(searchItem => searchItem.name == action.payload.name))
        return {
          ...store,
          favorites: [...store.favorites, newFav]
        }
      case 'delete_favorite':
      const deleteFavId = action.payload
      return {
        ...store,
        favorites: store.favorites.filter(favorite => favorite.uid !== deleteFavId)
      }
      case 'sync_current_character':
        const characterData = action.payload
        return {
          ...store,
          character: characterData
        }
  }

}

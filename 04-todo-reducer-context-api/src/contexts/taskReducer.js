
export const actions = {
    added: "added_task",
    deleted: "deleted_task",
    updated: "updated_task",
    checkedDone: "check_done"
}

export default function taskReducer(state, action){
    switch(action.type){
        case actions.added: {
            return  [...state, {id: Date.now(),...action.todo}]
        }
        case actions.updated:
            return state.map(task => task.id === action.id ? action.todo: task)
        case actions.deleted:
            return state.filter(item => item.id != action.id)
        case actions.checkedDone:
            return state.map(item =>{
                if (item.id === action.id){
                  return {...item, completed: !item.completed}
                }
                return item
              })
        default: {
            throw Error(`unknown ${action.type} type`)
        }
    }
}
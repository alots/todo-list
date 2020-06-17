const initialState = [
    {id: 1, text: 'сходить в магазин' },
    {id: 2, text: 'Помыть посуду' }
    
  ]
const todos = (state = initialState, action) => { 
    switch(action.type){
        case 'ADD_TODO': 
            return [
                ...state,
                {id: action.id, text: action.text }
            ]
        default: return state;     
    }  
} 


export default todos
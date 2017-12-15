import { 
    TOGGLE_MENU, 
    TOGGLE_SEARCH, 
    SEARCH, 
    SET_TITLE,
    ROUTE_CHANGED 
} from './actions';

const navStore = Ext.create('Ext.data.TreeStore', {
    root: {
        children: [
            { text: 'Companies', id: '/companies', iconCls: 'x-font-icon md-icon-business', leaf: true },
            { text: 'Websites', id: '/websites', iconCls: 'x-font-icon md-icon-language', leaf: true },
            { text: 'About this App', id: '/about', iconCls: 'x-font-icon md-icon-info-outline', leaf: true }
        ]
    }
})

const initialState = {
    navStore,
    showSearch: false
};

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ROUTE_CHANGED:
            const nodeId = '/' + location.hash.slice(1).split('/')[1];
            return { ...state, selectedNavNode: navStore.getNodeById(nodeId) };

        case TOGGLE_MENU: 
            if (action.show !== undefined) {
                return { ...state, showMenu: action.show };
            } else {
                return { ...state, showMenu: !state.showMenu };
            }

        case TOGGLE_SEARCH:
            return {
                ...state,
                showSearch: !state.showSearch
            }

        case SEARCH:
            return {
                ...state,
                query: action.query
            }

        case SET_TITLE: 
            return {
                ...state, 
                title: action.title,
                backButtonURL: action.backButtonURL 
            }
            
        default: 
            return { ...state };
    }
}
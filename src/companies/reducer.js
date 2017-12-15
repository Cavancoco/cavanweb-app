import { 
    LOAD_COMPANIES,
    LOAD_COMPANY
} from './actions';

const initialState = {
    store: Ext.create('Ext.data.Store', {
        proxy: {
            type: 'ajax',
            url: 'resources/companies.json'
        }
    }),
};

export default function companiesReducer(state = initialState, action) {
    
    switch (action.type) {
        case LOAD_COMPANIES: {
            if (!state.store.isLoaded()) {
                state.store.load()
            }
            return state;
        }
        case LOAD_COMPANY: {
            return { ...state, record: action.company, showCompany: true }
            return { ...state, record: action.company, showCompany: true }
        }
        default:
            return state;
    }
    
}
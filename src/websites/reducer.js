import { 
    LOAD_WEBSITES,
    LOAD_WEBSITE,
	ADD_WEBSITE
} from './actions';

const initialState = {
    store: Ext.create('Ext.data.Store', {
        proxy: {
            type: 'ajax',
            url: 'resources/websites.json'
        }
    }),
	showForm: false
};

export default function websitesReducer(state = initialState, action) {
    
    switch (action.type) {
        case LOAD_WEBSITES: {
            if (!state.store.isLoaded()) {
                state.store.load()
            }
            return state;
        }
        case LOAD_WEBSITE: {
            return { ...state, record: action.website, showWebsite: true }
        }
        case ADD_WEBSITE: {
			return [
        ...state,
        {
          id: action.id,
          name: action.name,
          url: action.url
        }
      ]
        }
        default:
            return state;
    }
    
}
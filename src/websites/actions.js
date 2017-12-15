export const LOAD_WEBSITES = 'WEBSITES::LOAD';
export const LOAD_WEBSITE = 'WEBSITES::LOAD_WEBSITE';
export const ADD_WEBSITE = 'WEBSITES::ADD_WEBSITE';

import { setTitle } from '../actions';

export function loadWebsites() {
    return {
        type: LOAD_WEBSITES
    }
}

export function loadWebsite(id) {
    return (dispatch, getState) => {
        const { store, website } = getState().websites;

        if (id) {
            if (!website || website.id !== id) {
                const doLoad = () => {
                    const website = store.getById(id);
                    dispatch({ type: LOAD_WEBSITE, website });
                    dispatch(setTitle(website.data.name, '/websites'));
                };

                if (store.isLoaded()) {
                    doLoad();
                } else {
                    store.on('load', doLoad, null, {single: true});
                    
                    // If store hasn't been loaded yet, load it.
                    if (!store.isLoading()) {
                        dispatch(loadWebsites());
                    }
                }
            }
        } else {
            dispatch(setTitle('Websites'))
        }
    }
}

let nextWebsiteId = 0
export function addWebsite() {
  return {
    type: 'ADD_WEBSITE',
    id: nextWebsiteId++,
    name
  }
	
}

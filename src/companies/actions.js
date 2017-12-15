export const LOAD_COMPANIES = 'COMPANIES::LOAD';
export const LOAD_COMPANY = 'COMPANIES::LOAD_COMPANY';

import { setTitle } from '../actions';

export function loadCompanies() {
    return {
        type: LOAD_COMPANIES
    }
}

export function loadCompany(id) {
    return (dispatch, getState) => {
        const { store, company } = getState().companies;

        if (id) {
            if (!company || company.id !== id) {
                const doLoad = () => {
                    const company = store.getById(id);
                    dispatch({ type: LOAD_COMPANY, company });
                    dispatch(setTitle(company.data.name, '/companies'));
                };

                if (store.isLoaded()) {
                    doLoad();
                } else {
                    store.on('load', doLoad, null, {single: true});
                    
                    // If store hasn't been loaded yet, load it.
                    if (!store.isLoading()) {
                        dispatch(loadCompanies());
                    }
                }
            }
        } else {
            dispatch(setTitle('Companies'))
        }
    }
}
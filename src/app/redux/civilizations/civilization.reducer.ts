import { Action, State, createReducer, on } from '@ngrx/store'
import { responseData } from './civilization.action';
import { CivilizationModel } from 'src/app/core/models/civilizations.model';

export interface CivilizationsState {
    civilizations: CivilizationModel[]
}

export const initialState = { 
    civilizations: []
};

const featureReducer = createReducer(
    initialState,
    on(responseData, (state, { payload }) => ({
        ...state,
        civilizations: payload
    }))
);
  
export function reducer( state: any, action: Action): any {
    return featureReducer(state, action);
}
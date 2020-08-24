import { createAction, props} from '@ngrx/store';
import { CivilizationModel } from 'src/app/core/models/civilizations.model';

export const resquestData = createAction(
    'REQUEST_DATA',
);

export const responseData = createAction(
    'RESPONSE_DATA',
    props<{ payload: CivilizationModel[] }>()
);

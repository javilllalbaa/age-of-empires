import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { resquestData, responseData } from './civilization.action';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { CivilizationModel } from 'src/app/core/models/civilizations.model';
import { CivilizationService } from 'src/app/core/services/civilization.services';

@Injectable()
export class CivilizationEffects {

    constructor(
        private actions$: Actions,
        private CivilizationService: CivilizationService
    ) {}
 
    CivilizationsEfect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(resquestData),
            switchMap(() => this.CivilizationService.getAllCivilizations()
            .pipe(
                mergeMap((payload) => [
                    responseData({ payload })
                  ])
            ))
            // switchMap(() => this.productService.getJSON().pipe(
            //     map((payload)=> responseData({ payload }))
            // ))
        )   
    });
}


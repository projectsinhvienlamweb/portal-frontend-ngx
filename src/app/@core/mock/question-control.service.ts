import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseQuestion } from '../models/student-question';

@Injectable()

export class QuestionControlService{
    constructor(){}

    toFormGroup(questions: BaseQuestion<string>[]){
        const group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required) : new FormControl(question.value || '');
        });

        return new  FormControl(group);
        
    }
    
}

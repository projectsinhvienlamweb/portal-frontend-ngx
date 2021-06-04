import { BaseQuestion } from '../question-student';

export class DropdownQuestion extends BaseQuestion<string>{
    controlType = 'dropdown';
}
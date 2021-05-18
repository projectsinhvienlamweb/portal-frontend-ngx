import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { NbTreeGridFooterRowComponent } from '@nebular/theme';

const field = document.querySelectorAll('form__field');

@Component({
  selector: 'ngx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  @ViewChild('regisForm') form: NgForm;
  fieldName;
  validationMsg = '';
  tabsCompleted = [];
  constructor() {}

  ngOnInit(): void {}

  onSubmit(data: NgForm) {}

  // REGISTRATION-Form-processing
  validation(data?: HTMLFormElement): boolean {
    let checked: boolean = false;
    const tabsField = data.querySelectorAll('.validation');
    if (tabsField) {
      tabsField.forEach((tab: HTMLInputElement | HTMLSelectElement) => {
        const minlength = tab.getAttribute('minlength');
        if (!tab.checkValidity()) {
          checked = true;
          if (minlength && tab.value.length <= Number(minlength)) {
            checked = true;
          }
        }
      });
    }
    return checked;
  } // Processing Validation
  nextTab(currentTab?: HTMLDivElement, nextTab?: HTMLDivElement) {
    currentTab
      .animate(
        [
          { opacity: 1, transform: 'translateY(0)' },
          { opacity: 0, transform: 'translateY(-30px)' },
        ],
        { duration: 1000, direction: 'alternate', easing: 'ease' },
      )
      .addEventListener('finish', () => {
        currentTab.hidden = true;
        nextTab.hidden = false;
      });
    if (this.validation) {
      this.tabsCompleted.push('checked');
    } else {
      this.tabsCompleted.push('non-checked');
    }
  }
  prevTab(currentTab?: HTMLDivElement, prevTab?: HTMLDivElement) {
    if (this.tabsCompleted) {
      this.tabsCompleted.pop();
    }
    currentTab
      .animate(
        [
          { opacity: 1, transform: 'translateY(0)' },
          { opacity: 0, transform: 'translateY(30px)' },
        ],
        { duration: 1000, direction: 'alternate', easing: 'ease-in-out' },
      )
      .addEventListener('finish', () => {
        currentTab.hidden = true;
        prevTab.hidden = false;
        prevTab.animate(
          [
            { opacity: 0, transform: 'translateY(-30px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 1000, direction: 'alternate', easing: 'ease-in-out' },
        );
      });
  }
  formCompleted(data: HTMLFormElement): boolean {
    if (
      this.tabsCompleted.length ===
        data.querySelectorAll('.form__tab').length &&
      !this.tabsCompleted.includes('non-checked')
    )
      return false;
    else {
      return true;
    }
  }
}

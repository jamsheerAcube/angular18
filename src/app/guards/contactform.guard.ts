import { CanDeactivateFn } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

export const contactformGuard: CanDeactivateFn<ContactComponent> = (component, currentRoute, currentState, nextState) => {
  return component.isCanExit();
};

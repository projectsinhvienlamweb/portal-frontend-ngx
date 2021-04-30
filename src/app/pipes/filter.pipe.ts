import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    const properties = 'name,dob,email,avatar,role'.split(',');

    return items.filter(it => {
      for (const i of properties) {
        if (it[i].toLocaleLowerCase().includes(searchText)) {
          return it[i].toLocaleLowerCase().includes(searchText);
        }
      }

      // if (it.id.toLocaleLowerCase().includes(searchText)) {
      //   return it.id.toLocaleLowerCase().includes(searchText);
      // }
      // if (it.name.toLocaleLowerCase().includes(searchText)) {
      //   return it.name.toLocaleLowerCase().includes(searchText);
      // }
      // if (it.dob.toLocaleLowerCase().includes(searchText)) {
      //   return it.dob.toLocaleLowerCase().includes(searchText);
      // }
      // if (it.email.toLocaleLowerCase().includes(searchText)) {
      //   return it.email.toLocaleLowerCase().includes(searchText);
      // }
      // if (it.avatar.toLocaleLowerCase().includes(searchText)) {
      //   return it.email.toLocaleLowerCase().includes(searchText);
      // }
      // if (it.role.toLocaleLowerCase().includes(searchText)) {
      //   return it.role.toLocaleLowerCase().includes(searchText);
      // }

    });
  }

}

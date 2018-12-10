export class Referential {
  Title: string;
  ID: string;
  CanShow: boolean;
  constructor(title: string, id: string, canShow: boolean) {
    this.Title = title;
    this.ID = id;
    this.CanShow = canShow;
  }
}

export class Task {
  id: string;
  title: string;
  description: string;
  date: Date;
  status: boolean;

  constructor( title: string, description: string ) {
    this.id = Math.floor(Math.random() * (999999999 - 111111111 + 1) + 111111111).toString();
    this.title = title;
    this.description = description;
    this.date = new Date();
    this.status = false;
  }
  
}

export class Currency {
  name: string;
  rate: number;
  date?: string;

  constructor(
    name: string,
    rate: number,
    date?: string,
  ) {
    this.name = name;
    this.rate = rate;
    this.date = date;
  }
}

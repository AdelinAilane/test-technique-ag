export class Pasq {
  constructor(
    public page?: number,
    public limit?: number,
    public sort?: string,
    public sortValue?: string,
  ) {}

  get skip() {
    const skip = this.page * this.limit;
    console.log('skip', this.page, this.limit, skip);
    return skip;
  }
}

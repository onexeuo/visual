// class stock

class Stock{
    constructor(stno, stname, stamt, stindate){
        this.stno = stno;
        this.stname = stname;
        this.stamt = stamt;
        this.stindate = stindate;
    }
    getName(){
        return this.stname;
    }
}
// const stock = new Stock(1, 'T-shirt', 2, new Date(), new Date(), 1)


// class stock

class Stock{
    constructor(stno, stname, stamt, stindate, strgdate, shno){
        this.stno = stno;
        this.stname = stname;
        this.stamt = stamt;
        this.stindate = stindate;
        this. strgdate = strgdate;
        this.shno = shno;
    }
    getName(){
        return this.stname;
    }
}
const stock = new Stock(1, 'T-shirt', 2, new Date(), new Date(), 1)
console.log(stock);
console.log(stock.strgdate);



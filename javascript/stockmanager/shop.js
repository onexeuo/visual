// class shop

class Shop{
    constructor(shno, shname, shtotst){
        this.shno = shno;
        this.shname = shname;
        this.shtotst = shtotst;
    }
}
const shop = new Shop(3, 'adidas', 10);
console.log(shop);
console.log(shop.shname);


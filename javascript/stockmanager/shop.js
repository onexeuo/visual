// class shop

class Shop{
    constructor(shno, shname){
        this.shno = shno !== undefined ? shno : 0;
        this.shname = shname;
        this.shtotst = 0;
    }
}
const shop = new Shop(3, 'adidas', 10);



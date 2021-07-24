{
    // primitive : number, string, boolean, bigint, symbol, null, undefined
    // object : function,  array... 

    // boolean
    let isDOne: boolean = false;

    // number
    const num : number = 1;
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;
    // const num: number  = '1' → 타입에러

    // string 
    let color: string = "blue";
    color = 'red';

    // undefined 
    let name : undefined; // - ❌
    let age : number | undefined; // 숫자이거나 , 할당이 안될수있음 
    age = 1; 
    function find() : number | undefined {
        return undefined;
    }

    // null 
    let person : null; // - ❌
    let person2 : string | null;

    // Array 
    let lists: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];

    // unkonwn - 가능하면 쓰지마 -> 어느 타입이 들어올지 모르겠을때
    let notSure : unknown = 0;
    notSure = 'he'
    notSure = true;

    // any 가능하면 쓰지마 -> 어떤 타입이라도 OK
    let anything : any = 0; 
    anything = 'hello'

    // void -> 리턴타입이 없는 경우, 보이드의 경우 생략가능 
    function print() : void {
        return ;
    }

    // never 
    function throwError (message: string):never {
        throw new Error("error");
    }

    // object 
    let obj : object;
    function acceptSomeOBject(obj:object) {}
    acceptSomeOBject({name : "woori"});
    
}
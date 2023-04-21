// 원시 데이터 타입 number, string, boolean을 명시적으로 설정하여 변수 선언

// 명시적으로 number 타입 설정
let product_id: number = 132465;

// 명시적으로 string 타입 설정
let product_name: string = '상품';

// 명시적으로 boolean 타입 설정
let is_remain: boolean = true;

/*
설정된 데이터 타입이 아닌 다른 타입을 할당하려고 할 경우 오류 메시지 출력
let product_id: number = 'q132465';
error TS2322: Type 'string' is not assignable to type 'number'.
*/

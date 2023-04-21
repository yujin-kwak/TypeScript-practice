/* 명시적 타입 지정 없이 작성할 경우 오류

// 명시적 타입 지정 없이 작성
let members = ['hi', 'typescript', 'bye'];
members = [9, 13, 26];
// error TS2322: Type 'number' is not assignable to type 'string'.
// 초기 배열이 string 타입으로만 아이템이 채워졌기 때문에 암시적으로 members에 설정된 데이터 타입은 string[]
// 재할당 시 number 타입으로만 데이터를 채워 오류 발생

*/

// 어떤 배열이 아이템으로 여러 데이터 타입이 필요하다면 any로 명시적 타입 선언
let members: any[] = [{ name: '유진' }, 'hi', 11];

// any[]는 배열 타입을 명시적으로 선언한 것 -> 다른 데이터 할당 x
// members = 2222;
// error TS2322: Type 'number' is not assignable to type 'any[]'.

// 숫자 아이템만 허용
let num: number[] = [100, 200, 300];

// 문자 아이템만 허용
let str: string[] = ['가', '나', '다'];

// boolean 아이템만 허용
let bool: boolean[] = [true, false];

// 모든 데이터 타입을 아이템으로 허용
let any_type: any[] = [100, '가', true];

// 특정 데이터 타입만 아이템으로 허용
let select: (number | string)[] = [100, '가'];

let coffee_type: string;

coffee_type = '콜드브루';
coffee_type = 9112304129312;

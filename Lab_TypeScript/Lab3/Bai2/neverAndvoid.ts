//2. Never & void

let something: void = undefined;
// let nothing: never = null; // Không thể nhận giá trị khác ngoài undefined
function throwError(erorMsg:string): never {
    throw new Error(erorMsg);
}
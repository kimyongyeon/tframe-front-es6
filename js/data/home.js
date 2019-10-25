import RestClient from "../common/RestClient"
import axios from "axios";

/** Sync Sample */
function axiosSyncGetTest() {
    console.log("3. axiosSyncGetTest");
    const result = axios.get("https://jsonplaceholder.typicode.com/posts?userId=1");
    console.log(`4. result=${result}`);
}

/** Async Sample */
async function axiosAsyncGetTest() {
    console.log("1. axiosAsyncGetTest");
    /** axios 같은 경우 자체적으로 promise를 감싸고 있음. 따로 감쌀 필요 없음. */
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=1");
    console.log(`2. result=${result}`);
    return result;
    // console.log(`result.data=${JSON.stringify(result.data)}`);
    // const data = await result.data;
    // length check 
    // console.log(`data length=${data.length}`);
}

/** async await 사용법, await는 반드시 promise 객체를 던져야한다. */
async function ajaxTest() {
    /** ajax 같은 경우 promise로 감싸서 던져야 함 */
    let result = await RestClient.getPromise("https://jsonplaceholder.typicode.com/posts?userId=1");
    // console.log(result);
}

/** promise function called */
// ajaxTest().catch(console.error);
// axiosAsyncGetTest().then((d)=>console.log(d));
// axiosSyncGetTest();

function htmlMaker(data) {
    return `
    <h1>Home</h1>
    <p>This is Home page</p>
    <pre>${JSON.stringify(data)}</pre>
    `;
}


/** HTML 코드 정의 */
export {axiosAsyncGetTest, htmlMaker};

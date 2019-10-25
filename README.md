# frontend-template

# 패키지 다운로드 
npm install

# 시작 
npm start

# axios 구현과제
## get
```
//axios 요청 메소드의 두 번째 인자로 config 객체를 넘길 수 있습니다

// config 객체
axios.get('/api/todos', {
  params: { // query string
    title: 'NEXT JS'
  },
  headers: { // 요청 헤더
    'X-Api-Key': 'my-api-key'
  },
  timeout: 3000 // 1초 이내에 응답이 오지 않으면 에러로 간주
}).then(res => {
    console.log(res)
})
```
## post
```
axios.post('/api/todos', {title: "ajax 공부"})
  .then(res => {
    console.log(res);
  })
```

## patch
```
axios.patch('/api/todos/3', {title: "axios 공부"})
  .then(res => {
    console.log(res);
  })
```

## delete
```
axios.delete('/api/todos/3')
  .then(res => {
     console.log(res);
  })
```
### Node 프로젝트(application, library) 만들기   

1. 프로젝트 생성  
    ```bash
    $ mdkir ex01
    ```
2. 프로젝트 이동 
    ```bash
    $ cd ex01
    ```
3. 프로젝트 초기화: 프로젝트 manifest file(pacakage.json) 생성 
    ```bash
    $ npm init -y
    ```

### 패키지
1. 완전한 애플리케이션(e.g. babel, webpack, nodemon, Lint, .. 등)
2. 프로젝트에서 사용하는 라이브러리 모듈(e.g. react, react-dom)

### 의존성
1. 개발하는 프로젝트에서 설치하는 패키지 
2. 일반 의존성: 개발하고 있는 프로젝트가 런타임 중 사용는 패키지(e.g. react, react-dom: app 작동 중 존재해야하는)
3. 개발 의존성: 개발이 필요할 때 도움이 되는 패키지로, 빌드와 배포에는 포함되지 않는 패키지(e.g. webpack)

### 패키지 설치 및 삭제 
내 프로젝트 안에서 패키지 설치 시, 애플리케이션 실행에 필요한건지 아닌지 구분 필요 
1. 전역 설치: 자주 사용하는 개발툴 설치할 때 사용 

    ```bash
    $ npm i -D -g gulp # -g -D [전역, 개발] 설치 
    ```
2. 지역 설치   
    ```bash
    $ npm i ejs # -i: [지역, 일반] 설치 
    ```
    ```bash
    $ npm i -D nodemon # -i -D: [지역, 개발] 설치 (e.g. 개발툴, 빌드툴 설치할 때 사용)
    ```
3. 설치 삭제 
    ```bash
    $ npm un ejs # un: [지역] 삭제 
    ```
    ```bash
    $ npm un nodemon # un: [지역] 삭제 
    ```
    ```bash
    $ npm un -g gulp # un -g: [전역] 삭제 
    ```

### Modules
1. 코어 모듈: node에서 제공하는 모듈(e.g. fs, os, precess, http, ..)   
→ 웹 애플리케이션에 web관련 임베디드 톰캣 느낌 
2. 
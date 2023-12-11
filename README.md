# Next JS, 강의 들으며 만드는 트위터 클론코딩

## Next JS 공부 정리

### 라우팅

[폴더명] : [] 대괄호를 감아서 폴더를 생성하면, "다이나믹 라우팅" 이라는 기능을 사용할 수 있다.
(폴더명) : () 소괄호를 감아서 폴더를 생성하면, 주소창에서는 관여를 하지 않지만 그룹을 만들수 있다.

ex) app/(afterLogin)/home 이라는 폴더명 이지만, 브라우저에서는 /home 으로 나온다.

그룹의 기준 : 레이아웃
=> 폴더 하나당 레이아웃 하나를 생성할 수 있기때문에.

### layout.tsx 와 template.tsx 의 차이점

페이지를 이동할 때, 랜더링이 안되게 하고싶다면 `layout`

페이지를 이동할 때, 랜더링이 되게하고 싶다면 `template` </br>
→ 매번 새롭게 마운트 될 때 사용

### a 태그와 Link 태그의 차이점

React는 SPA(Single Page Application)이기 때문에, 리랜더링을 권장하지 않는다.

`<a>` 태그의 경우 하이퍼 링크로 이동하게 될 경우 리랜더링이 일어나게 된다.
`<Link>` 태그의 경우 리랜더링이 일어나지 않는다.

그러므로, `<Link>` 태그 사용을 권장한다.

### Image 태그

Next JS에서는 img 태그가 아닌 Image 태그를 사용하는데, Next JS 에서는 이미지 최적화 기능이 있기 때문에 Image 태그를 사용하여 이미지 최적화를 할 수 있다.

### CSS

- tailwind -> 호불호가 너무 심하고, 가독성이 좋지 않다.
- Stlyed Component -> SSR(Server Compoents)에서 문제가 있다.
- Emotion -> Next 13 버전과 호환 문제
- SASS -> 러닝커브.
- CSS Module -> 간단하다.
- Vanilla Extract -> Windows와 호환 문제

#### Dynamic Viewport

주소 표시줄이 스크롤을 통해 축소가 되건 노출이 되건 상관없이 현재 보여지는 뷰포트 높이를 동적으로 가져온다.

- dvw : width
- dvh : heigth

### 패러렐 라우트 (Parallel Routes)

동일한 레이아웃에서 하나 이상의 페이지를 동시에 또는 조건부로 랜더링

- 최상단 폴더에 layout.tsx , page.tsx 가 필요하다.
- 최상한 layout.tsx 에 children 만 존재하는데, 아래에 같이 랜더링 할 요소도 작성.
- @foldername 폴더를 생성
- 생성된 폴더 안에 page.tsx 생성

### 인터셉팅 라우트 (Intercepting Routes)

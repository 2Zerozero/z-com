# Next JS, 강의 들으며 만드는 트위터 클론코딩

## Next JS 공부 정리

## Chapter 1

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

서로 주소가 다른데 같이 렌더링이 되게 하는 라우팅

- 다른 페이지에서 링크를 통하여 접근할 때 나타난다.
- 인터셉팅 라우트는 URL을 통하여 접근을 할 수는 없다.
- 새로고침을 하면 인터셉팅 한 페이지가 아닌, 기존 주소의 페이지가 랜더링된다.
- 폴더명을 (.) (..) 을 붙여서 사용할 수 있다.
- 인터셉팅 라우트는 서버 컴포넌트에서 관여하는게 아닌 클라이언트 컴포넌트에서 관여한다.

### 서버 컴포넌트

서버 컴포넌트는 클라이언트 컴포넌트를 Import 해도 되지만, 클라이언트 컴포넌트는 서버 컴포넌트를 Import 할 수 없다.

할 수는 있지만 서버 컴포넌트를 Import 할 경우, 클라이언트 컴포넌트화 된다.

### 클라이언트 컴포넌트

클라이언트 컴포넌트의 특징

- onClick 이벤트와 같은 상호작용성들을 포함한다.
- 클라이언트라고 불리는 브라우저에서 렌더링이 된다.
- "use client" 를 선언하면 클라이언트 컴포넌트화가 된다.
- 기존 React Hooks 를 사용하려면 클라이언트 컴포넌트로 바꿔야한다.

### Private Folder (\_폴더)

프라이빗 폴더는 주소창에 경로가 나타나지 않는다.

주로 사용하는 용도는 폴더 정리용으로 사용된다.

## Chapter 2

### CSS

#### Flex Grow

Flex 를 이용한 레이아웃을 잡을때 양쪽의 여백을 똑같이 만들고 싶다면, 두 Flex 에 flex-grow: 1을 주면 된다.

#### Inherit

부모 width 값을 그대로 사용해야 할 때, 주로 사용된다.

일반적으로 width: 100% 를 자주사용하게 되는데, 잘 안먹히는 경우가 있어서 width: inherit; 을 권장.

### ActiveLink

해당하는 페이지로 이동하면 Nav 텍스트를 Bold 처리하며, 해당 페이지가 활성화 되어있다는 시각적인 효과를 준다.

### useSelectedLayoutSegment / useSelectedLayoutSegments

Layout 내부의 라우트 세그먼트를 가져올 수 있다.

Layout 기준으로, 바로 자식의 요소들만 필요하면 useSelectedLayoutSegment
바로 자식의 요소뿐만 아니라, 완전 자식 요소까지 모두 필요하다면 useSelectedLayoutSegments

### 'use client'

컴포넌트 내부에 React Hooks나 onClick 이벤트같은게 존재한다면 클라이언트 컴포넌트 이기 때문에,
'use client' 를 사용하면 된다.

###

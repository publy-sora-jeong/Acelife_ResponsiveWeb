<h1>에이스라이브 반응형 웹 UI구현</h1>


<h2>폴더구조</h2>
<pre>
ACELIFE 
ㄴ image //작업에 필요한 이미지 리소스와 아이콘, 썸네일등 
	ㄴ bg
	ㄴ contents 
   	ㄴ icon
	ㄴ logo
   	ㄴ main
ㄴ css 
	ㄴ abstract 
    	ㄴ _mixins.scss
        ㄴ _vars.scss
    	ㄴ components 
    	ㄴ _board.scss
        ㄴ _buttons.scss
        ㄴ _form.scss
        ㄴ _list.scss
        ㄴ _tab.scss
    ㄴ core
    	ㄴ _reset.scss
    ㄴ layout
    	ㄴ_footer, _header, _sitemap, _quick 
        ㄴ _main, _sub
    ㄴ pages
    	ㄴ _brand, _ceo... 
    ㄴ vendor 
    	ㄴ aos.css
        ㄴ swiper.css 
    style.css 
ㄴ js		
    ㄴ site.js 
    ㄴ aos.js  //스크롤에 따른 애니메이션을 추가 
    ㄴ swiper.js // 메인비주얼, 제품상세페이지의 이미지 슬라이드 
    ㄴ jquery 
ㄴ font //ens에서는 나눔스퀘어, roboto, 본고딕을 사용합니다.
ㄴ html //문서파일
</pre>



<br /><br />

스타일부분에서 컴포넌트와 레이아웃, 콘텐츠 별로 나누어 작성하였고, 반응형에 대한 부분도 각각의 파일안에 따로 선언하였습니다. 



(개선을 위해 폴더구조와 스타일, 스크립트 등을  다시 정비하고 있습니다.)


<br /><br />

![에이스라이프 PC화면](https://user-images.githubusercontent.com/54253060/159150245-2fb22942-a556-4c55-8f8c-4f3d9a42771e.jpeg)





![에이스라이프 모바일 화면](https://user-images.githubusercontent.com/54253060/159150242-68233b3f-5b3f-41e1-910b-eb50890593fe.png)






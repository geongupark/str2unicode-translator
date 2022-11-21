# str2unicode-translator
[![image](https://user-images.githubusercontent.com/66377511/202885738-3a045696-296f-4f47-9cf5-0bc82242b385.png)](https://geongupark.github.io/str2unicode-translator/)

![html](https://img.shields.io/badge/HTML-5-red)
![js](https://img.shields.io/badge/jQuery-3.6.1-yellow)
![bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-green)
![License](https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667)
![lastcommit](https://img.shields.io/github/last-commit/geongupark/str2unicode-translator)

* The `str2unicode-translator` is a translator for converting string to unicode.
## Repo Info
* Language : `HTML`, `JS(jQuery)`, `CSS(bootstrap)`
* Icon : [fontawesome (v6.2.1)](https://fontawesome.com/icons/circle-question?s=solid&f=classic)
* Font : `Nanum Gothic Coding`
* Favicon : Generate the ico file from this [page](https://www.webestools.com/favicon-generator-online-icon-fav-convert-image-ico-img2ico-free-icon-maker-online.html)

## Features
* Easy to get the unicode from the string
* Easy to get the string from the unicode
* Support eng, kor...
* Use `str2unicode-translator` by this page

## How to use
### 1) Access the `SUTrans` page
* Go to the [homepage](https://geongupark.github.io/str2unicode-translator/)
### 2) Type your string into the string text area.
* Type your string into the `string/unicode` text area.
![image](https://user-images.githubusercontent.com/66377511/202885422-58dd8af1-d5e5-4bac-9910-5efe5d58926c.png)

## Takeaway
1. root 경로에 `index.html`이 있어야 github page에 적용됨
2. javascript 파일 따로 뺐을 때 아래 코드 내에 이벤트 정의 코드들 위치해줘야함
```javascript
// $( document ).ready() 대신 아래 형식이 더 좋다고 함
$(function(){
	// 이벤트 같은거 여기에 적용해야 실행 됨
})
```
3. JS event 중 `keyup(키보드 동작)` 과 `focusout`은 함께 잘 쓰임
4. `navbar`와 `converter` 모두 `display:flex;`를 사용해서 [배치](https://developer.mozilla.org/ko/docs/Web/CSS/flex)함
    * navbar의 경우 전체적으로 펴지도록 하는데 사용
    * converter의 경우 화면 사이즈에 따라 내부 item들의 width 비율 달라지도록 함

## Reference
* [unicode ↔ string](https://chobokkiri.tistory.com/37)

## License
* Distributed under the terms of the MIT license, `str2unicode-translator` is free and open source software.

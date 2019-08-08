# pdf_fill
PoC of filling forms of PDF.

~~~
+  dest/			エントリを埋めたPDF
+  formats/		フォーマットのPDF
+  js/				JavaScriptのソース
+  python/		Pythonのソース
   LICENSE
   README.md
~~~

## JavaScript

### 必要なもの

* Node.jsの動く環境
* Visual Studio Community (C++コンパイラが動くこと)
* pdffiller
    `npm install pdffilter`としてインストール

### 実行方法

~~~bash
$node index.js
~~~

## Python

### 必要なもの

* Python 3
* pdfrw
    `pip install pdfrw`としてインストール

### 実行方法

~~~bash
$python fill.py
~~~

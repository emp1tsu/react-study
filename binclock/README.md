## npm modules
* eslint-plugin-import
  * ES2015+ (ES6+) import/export構文をサポート
* eslint-plugin-jsx-a11y
  * JSXサポート
* eslint-plugin-react
  * reactサポート

#＃ eslintrc

ここ参照 https://qiita.com/mysticatea/items/f523dab04a25f617c87d#-%E7%92%B0%E5%A2%83%E8%A8%AD%E5%AE%9A%E3%82%92%E3%81%99%E3%82%8B 

* extends
  * ルール読み込み
* rules
  * ルール追加
* plugins
  * プラグイン追加。追加したのをextendsに書いて適応
* parserOptions
  * https://eslint.org/docs/2.0.0/user-guide/configuring
  * ESLintはデフォルトでES5形式しか読み込めないためES5以降形式を読み込ませるための設定(envにも設定必要) 
  * ecmaVersion
    * 有効にしたいバージョンを設定
  * sourceType
    * ES Modules 機能を有効したい場合はmoduleを入れる
  * ecmaFeatures
    * 使用したい言語機能を追加
* env
  * globalsプロパティを一括で定義
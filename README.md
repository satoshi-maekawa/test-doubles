# Test Doubles ワークショップについて
ミサイル発射システムをコードで作成しながら test doubles について理解を深める会です。

下記の仕様に沿ってシステムを作成していきましょう。

### ①天気に応じて、ミサイルを発射する・しないを制御したい（スタブ）
天気APIが名古屋市は「晴れ」という結果を返した場合、"ミサイルを発射しました"という文字列が返ってくる。  
天気APIが名古屋市は「雨」という結果を返した場合、"自爆しました"という文字列が返ってくる。  

### ②ミサイルが発射されなかったことを確認したい（ダミー）  
ここで確認したいのは間違ったパスワードを渡したとき、ミサイルが発射されないこと。  

### ③サイルが発射されたのか・されなかったのかを確認したい（スパイ）  
パスワードが正しければミサイル発射ロジックが呼ばれていること。  
パスワードが間違っていればミサイル発射ロジックが呼ばれていないこと。  

### ④パスワード正誤に応じた一連の処理が正しく実行されたか確認したい（モック）  
パスワードが正しければミサイル発射ロジックを呼ぶこと＆無効化ロジックを呼ばないこと。  
パスワードが間違っていればミサイル発射ロジックを呼ばないこと＆無効化ロジックを呼ぶこと。  

### ⑤事前に認証されたユーザーのみが、ミサイルを発射できるようにする（フェイク）  
認証されたユーザーが実行していればミサイル発射ロジックが呼ばれる。
認証されたユーザーでなければミサイル発射ロジックが呼ばれない。

（ミサイル発射システムの仕様が気になるかもしれませんが、test doubles を説明するためのものです。）  

## これからやること
上記のミサイル発射システムには仕様がいくつかあり、  
１つずつ確実に仕様確認をするとなると、開発過程で何発も実弾を発射しなければ開発ができない。  
開発のために何発も実弾を発射してたら勿体無いし、アメリカとかから怒られちゃう。
そこで Test Doubles が登場！  
実弾に代わって Test Doubles を使用することで実弾を発射せずに、  
機能一つずつ確実に仕様確認（テスト）ができる。  

Test Doubles を用いてミサイル発射システムのコードを書くことで、  
dummy, stub, spy, mock, fake それぞれの役割について理解していこう！  

※本ワークショップはミサイルの発射を推奨するものではありません。
***



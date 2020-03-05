# set up
nodeとmariadbの開発環境を整えるdocker tutorialです
## clone

`git clone git@github.com:tatsuyafukui/docker_node_mariadb_tutorial.git`

`cd prolect_app`

## build

DBのデータをホストOSへマウントするためのフォルダ

`mkdir -p /data/mysql`

ビルド

`sudo docker-compose up --build -d`

コンテナ確認。nodeとmariadbが立ち上がっているか？
`docker-container ls`

## DB設定

アプリケーション側でDB使うので初期設定する
DB：test1
TABLE: users

mariadbのコンテナにアクセス

`docker container exec -it node_db_1 bash`

mariadbにsign in

`mysql -u root -p password123`

```
CREATE DATABASE IF NOT EXISTS test1;

CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name char(255) not null);

INSERT INTO `users`
SELECT * FROM (SELECT 1, 'first data') AS tmp
WHERE NOT EXISTS (
 SELECT name FROM users WHERE name = 'first data'
) LIMIT 1;
```


## アクセス
node serverへは
`172.25.0.8:8080`でアクセスできる。




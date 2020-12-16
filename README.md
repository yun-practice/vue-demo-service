**_注意_**

1. git pull ==> fatal: refusing to merge unrelated histories
   git pull origin master --allow-unrelated-histories

2. 将 master 分支上的文件带到当前分支上
   git checkout origin/master server.js

3. 回滚到某个 commitid
   git reset --hard b7057a9

    git 回退到上个版本

    git reset --hard HEAD^

    回退到前 3 次提交之前，以此类推，回退到 n 次提交之前

    git reset --hard HEAD~3
    退到/进到 指定 commit 的 sha 码

    git reset --hard dde8c25694f34acf8971f0782b1a676f39bf0a46
    强推到远程

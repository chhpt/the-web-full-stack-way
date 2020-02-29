(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{361:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-使用"}},[t._v("#")]),t._v(" Git 使用")]),t._v(" "),a("p",[t._v("Git 是一种分布式"),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("版本控制系统"),a("OutboundLink")],1),t._v("，没有了解过 Git 的同学可以去看看"),a("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000",target:"_blank",rel:"noopener noreferrer"}},[t._v("廖雪峰的教程"),a("OutboundLink")],1),t._v("，简单易懂。")]),t._v(" "),a("h2",{attrs:{id:"仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仓库"}},[t._v("#")]),t._v(" 仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建初始化一个文件夹为 Git 仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆远程 Git 仓库到本地")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone url\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程仓库信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加新的仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote remove origin\n")])])]),a("h2",{attrs:{id:"代码修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码修改"}},[t._v("#")]),t._v(" 代码修改")]),t._v(" "),a("h3",{attrs:{id:"添加文件到暂存区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加文件到暂存区"}},[t._v("#")]),t._v(" 添加文件到暂存区")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看工作区状态")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加单个文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" some.js\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加全部文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("h3",{attrs:{id:"提交到本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交到本地仓库"}},[t._v("#")]),t._v(" 提交到本地仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit message"')]),t._v("\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("建议")]),t._v("：使用 "),a("code",[t._v('git commit -am "message"')]),t._v(" 命令，可以暂存修改并提交修改，相当于 "),a("code",[t._v("git add .")]),t._v(" 和 "),a("code",[t._v('git commit -m "message"')]),t._v(" 的合并。")])]),t._v(" "),a("h3",{attrs:{id:"贮藏（stash）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贮藏（stash）"}},[t._v("#")]),t._v(" 贮藏（Stash）")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将当前工作区的修改贮藏")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果有未被追踪的文件，需要先使用 git add 命令，才能被贮藏")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有的贮藏")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将最近的贮藏恢复到当前工作区（保留贮藏信息）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将最近的贮藏恢复到当前工作区，并删除贮藏信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除所有贮藏")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v("\n")])])]),a("h3",{attrs:{id:"更新与推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新与推送"}},[t._v("#")]),t._v(" 更新与推送")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取远程仓库更新")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将远程仓库的更新应用到本地对应的分支中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将本地的修改推送到远程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("git pull")]),t._v(" 指令相当于 "),a("code",[t._v("git fetch")]),t._v(" + "),a("code",[t._v("git merge")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"代码版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码版本"}},[t._v("#")]),t._v(" 代码版本")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看历史提交信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看历史提交信息（简介）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退到当前最新的提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退到上次提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退到上 n 次提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD~n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退到某次提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard commitId\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 丢弃某个文件的修改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 文件名\n")])])]),a("h2",{attrs:{id:"分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch 分支名\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并切换")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -b 分支名\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 分支\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并某分支到当前分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除一个分支（）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d 分支名\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制删除一个分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D 分支名\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin -d 分支名\n")])])]),a("h2",{attrs:{id:"标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地的 tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程的 tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -r\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给当前版本添加 tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag 标签名\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除标签名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d 标签名\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程标签")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin -d 标签名\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送单个 tag 到远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin 标签名\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送所有 tag 到远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --tags\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新远程 tag 到本地")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin --tags\n")])])]),a("h2",{attrs:{id:"git-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-remote"}},[t._v("#")]),t._v(" git remote")]),t._v(" "),a("p",[t._v("https 协议和 ssh 协议不同 ？")])])}),[],!1,null,null,null);s.default=e.exports}}]);
# TymianWeb
个人网站搭建

## 目录结构

```plaintext
C:.
│  .gitignore
│  LICENSE
│  package-lock.json
│  package.json
│  README.md
│  tree.txt
│  
├─node_modules
│              
├─TymianWeb
│  │  .gitignore
│  │  index.html
│  │  jsconfig.json
│  │  package-lock.json
│  │  package.json
│  │  README.md
│  │  tsconfig.json
│  │  vite.config.js
│  │  
│  ├─.vscode
│  │      
│  ├─dist
│  │  │  
│  │  └─assets
│  │          
│  ├─node_modules
│  │          
│  ├─public
│  │      favicon.ico
│  │      
│  └─src
│      │  App.vue
│      │  main.js
│      │  Test_1.vue
│      │  
│      ├─api
│      │      bgColorgetter.js # 图片主色获取
│      │      dump2JSON.py	# 图片主色获取
│      │      octree.ts	# 图片主色获取
│      │      shared.ts	# 图片主色获取
│      │      
│      ├─assets	#vue项目默认
│      │      
│      ├─resource
│      │  └─img
│      │      ├─Avatar	# 头像
│      │      │      
│      │      ├─Background	# 背景图片
│      │      │      
│      │      ├─SideBarImg	# 边栏图片
│      │      │      
│      │      └─test	# 测试octree.ts\shared.ts文件
│      │              
│      ├─styles
│      │      color.module.scss	# 将变量开放到js中
│      │      _functions.scss	# 定义方法，全局
│      │      _variables.scss	# 定义变量，全局
│      │      
│      ├─typings
│      │      scss.d.ts	# 编译器无法找到@开头的路径爆红后新增，删除不影响系统运行
│      │      
│      └─views
│          │  Home.vue # 主页
│          │  
│          └─components	# 构成要素
│              │  
│              │  background.vue	# 背景
│              │  navigationBar.vue	# 菜单栏
│              │  test.vue	# 测试octree.ts\shared.ts文件
│              │  window.vue	# 窗口栏
│              │  
│              └─icons
│                      icons.vue # Election-Plus
│                      
└─快照
        

```
import $ from 'jquery';

$(function () {
  initData();
  localStorage.setItem("timer_witch",false);

  $(".start").click(function () {
    localStorage.setItem("timer_witch",true);
    console.log(23232);
  });
})

function initData(){
	var data = {};

	// 一个番茄钟的时间
	data.baseTime = 25;

	// 休息时间
	data.restTime = 5;

	// 长休时间
	data.longRestTime = 30;

	// 长休所需的番茄钟数量
	data.tomatoCountToLongRest = 4;

	if(localStorage.getItem("baseTime") == null){
		localStorage.setItem("baseTime",data.baseTime);
	}

	if(localStorage.getItem("restTime") == null){
		localStorage.setItem("restTime",data.restTime);
	}

	if(localStorage.getItem("longRestTime") == null){
		localStorage.setItem("longRestTime",data.longRestTime);
	}

	if(localStorage.getItem("tomatoCountToLongRest") == null){
		localStorage.setItem("tomatoCountToLongRest",data.tomatoCountToLongRest);
	}
}



// import { remote , ipcRenderer } from "electron";
// const Menu = remote.Menu;
// const MenuItem = remote.MenuItem;

// var menu = new Menu.buildFromTemplate([
//     {
//         label: '菜单',
//         submenu: [
//             {
//                 label: '打开新窗口',
//                 click: function(){
//                     ipcRenderer.send('show') //注册的指令。send到主进程index.js中。
//                 }
//             }
//         ]
//     }
// ])

// Menu.setApplicationMenu(menu);

// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');
// import low from 'lowdb';
// import FileSync from 'lowdb/adapters/FileSync';
// import path from 'path';
// import { app } from 'electron';
// import fs from 'fs-extra';


// console.log(app);
// const STORE_PATH = app.getPath('data')
// const adapter = new FileSync(path.join(STORE_PATH, '/data.json'));
// const db = low(adapter)

// // Set some defaults
// db.defaults({ posts: [], user: {} })
//   .write()

// // Add a post
// db.get('posts')
//   .push({ id: 1, title: 'lowdb is awesome'})
//   .write()

// // Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode')
//   .write()
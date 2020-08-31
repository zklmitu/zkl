//发送异步发请求
	function ajax(method,url,data,call){
		
		//创建一条狗--ajax引擎
		let xhr = new XMLHttpRequest();
		
		//设置骨头的方位
		xhr.open(method,url);
		// xhr.open("GET","https://www.baidu.com/rec?platform=wise&ms=1&lsAble=1&rset=rcmd&word=%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91&qid=11197444350115079500&rq=%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91&from=844b&baiduid=7E376D594625E69CD9854300AC1D4A2A%3AFG%3D1&tn=&clientWidth=400&t=1597636916416&r=7970");
		
		 // 如果想要使用post提交数据,必须添加此行
		//如果是post请求才有下面这一行代码
		if(method && method == "POST"){
		  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  xhr.send(data);
		}else{
			 xhr.send();
		}
	
		
		//检查狗是否完成任务--创建监听
		xhr.onreadystatechange=function(){
			/*
			0: 请求未初始化
			1: 服务器连接已建立
			2: 请求已接收
			3: 请求处理中
			4: 请求已完成，且响应已就绪
			*/
			if(xhr.readyState == 4){
				//请求已完成，数据已就位
				if(xhr.status == 200){
					//只有响应状态码是200我们才能正常获取数据，不是200，就算失败
					
					return call && call(xhr.responseText);
				}
			}	
		}
	}
	
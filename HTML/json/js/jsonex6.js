//진짜 실습
//score.jsp파일에 3명의 성적데이터(이름 국영수)를 보내서 
//이름, 국어, 영어, 수학, 총점 json을 응답으로 보내서 테이블에 출력하는 프로그램

window.onload = function(){
	document.getElementById("btn").addEventListener("click", function(){
		
		const name = document.getElementById("s1name").value;
		const kor = document.getElementById("s1kor").value;
		const eng = document.getElementById("s1eng").value;
		const math = document.getElementById("s1math").value;
		
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8888/ajaxtest/score.jsp", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(`name=${s1name}&kor=${s1kor}&eng=${s1eng}&math=${s1math}`);
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				const txt = xhr.responseText;
				const obj = JSON.parse(txt);
				const objLeng = obj.length;
				let trs = "";
				for(let i=0; i<objLeng; i++){
					trs = `
					<tr>
						<td>${objLeng[i].s1name}</td>
						<td>${objLeng[i].s1kor}</td>
						<td>${objLeng[i].s1eng}</td>
						<td>${objLeng[i].s1math}</td>
						
						<td>${objLeng[i].s2name}</td>
						<td>${objLeng[i].s2kor}</td>
						<td>${objLeng[i].s2eng}</td>
						<td>${objLeng[i].s2math}</td>
						
						<td>${objLeng[i].s3name}</td>
						<td>${objLeng[i].s3kor}</td>
						<td>${objLeng[i].s3eng}</td>
						<td>${objLeng[i].s3math}</td>
					</tr>
					`;
				}		
				document.getElementById("tbody")[0].innerHTML = trs;
			}
		}
	});
}
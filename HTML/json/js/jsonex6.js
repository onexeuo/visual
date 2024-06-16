//진짜 실습
//score.jsp파일에 3명의 성적데이터(이름 국영수)를 보내서 
//이름, 국어, 영어, 수학, 총점 json을 응답으로 보내서 테이블에 출력하는 프로그램

//parseInt(ducument.getElementById(" ").value, num);
//	은 숫자를 해석하고 뒤에 num 만큼 쓸 수 있다



window.onload = function(){
	document.getElementById("btn").addEventListener("click", function(){
		
		const name1 = document.getElementById("s1name").value;
		const kor1 = document.getElementById("s1kor").value;
		const eng1 = document.getElementById("s1eng").value;
		const math1 = document.getElementById("s1math").value;

		const name2 = document.getElementById("s2name").value;
		const kor2 = document.getElementById("s2kor").value;
		const eng2 = document.getElementById("s2eng").value;
		const math2 = document.getElementById("s2math").value;

		const name3 = document.getElementById("s3name").value;
		const kor3 = document.getElementById("s3kor").value;
		const eng3 = document.getElementById("s3eng").value;
		const math3 = document.getElementById("s3math").value;
		
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8888/ajaxtest/score.jsp", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(`name1=${s1name}&kor1=${s1kor}&eng1=${s1eng}&math1=${s1math}`);

		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				const txt = xhr.responseText;
				const obj = JSON.parse(txt);
				const objLeng = obj.length;
				let trs = "";
				for(let i=0; i<objLeng; i++){
					const all = obj[i].kor + obj[i].eng + obj[i].math;
					trs += `
					<tr>
						<td>${obj[i].s1name}</td>
						<td>${obj[i].s1kor}</td>
						<td>${obj[i].s1eng}</td>
						<td>${obj[i].s1math}</td>
					</tr>
					`;
				}		
				document.getElementById("tbody")[0].innerHTML = trs;
			}
		}
	});
}
const remainTime = document.querySelector(".progress");

function diffDay() {
	const targetTime = new Date("Jan 1, 2023, 00:00:00");
	const todayTime = new Date();

	const diff = todayTime - targetTime;

	const diffDay = (diff / (10 * 60 * 60 * 24 * 365)).toFixed(5);

	remainTime.innerText = `2023년이 ${diffDay}% 지나갔습니다.`;
}

diffDay();
setInterval(diffDay, 10);

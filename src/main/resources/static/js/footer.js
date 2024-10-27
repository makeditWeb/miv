// 스크롤에 따라 Top 버튼 보이기/숨기기
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "flex";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
};

// Top 버튼 클릭 시 상단으로 스크롤
document.getElementById("topBtn").onclick = function() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
};

// 채팅 뱃지 클릭 이벤트 (추가 기능에 따라 변경 가능)
document.getElementById("chatBadge").onclick = function() {
    alert('채팅 시작!');
};

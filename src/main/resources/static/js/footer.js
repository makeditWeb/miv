window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("topBtn").style.display = "flex";
        document.getElementById("chatBtn").style.display = "flex";
    } else {
        document.getElementById("topBtn").style.display = "none";
        document.getElementById("chatBtn").style.display = "none";
    }
};

// Top 버튼 클릭 시 상단으로 부드럽게 스크롤
document.getElementById("topBtn").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // 부드러운 스크롤
    });
};
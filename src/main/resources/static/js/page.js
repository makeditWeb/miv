

document.querySelectorAll('.filter-button button').forEach(button => {
    button.addEventListener('click', () => {
        // 같은 ul 내의 버튼들만 selected 클래스 제거
        button.closest('ul').querySelectorAll('button').forEach(btn => {
            btn.classList.remove('selected');
        });
        // 클릭된 버튼에 selected 클래스 추가
        button.classList.add('selected');
    });
});


(function() {
    // 요소 선택
    const regionButton = document.getElementById('regionButton');
    const regionButtonMobile = document.getElementById('regionButtonMobile');
    const regionPopup = document.getElementById('regionPopup');
    const closePopupBtn = document.getElementById('closePopup');
    const popupOverlay = document.getElementById('popupOverlay');
    const arrowIcon = document.getElementById('arrowIcon');
    const arrowIconMobile = document.getElementById('arrowIconMobile');

    // 팝업 열기 함수
    function openPopup() {
        if (regionPopup) {
            regionPopup.classList.remove('hidden');
        }
        
        // 모바일에서만 dim 배경 적용
        if (window.innerWidth < 768 && popupOverlay) {
            popupOverlay.style.background = 'rgba(0, 0, 0, 0.15)';
            popupOverlay.style.backdropFilter = 'blur(2.5px)';
        }
        
        // 화살표 회전
        if (arrowIcon) {
            arrowIcon.style.transform = 'rotate(180deg)';
        }
        if (arrowIconMobile) {
            arrowIconMobile.style.transform = 'rotate(180deg)';
        }
    }

    // 팝업 닫기 함수
    function handleClosePopup() {
        if (regionPopup) {
            regionPopup.classList.add('hidden');
        }
        
        // 화살표 원위치
        if (arrowIcon) {
            arrowIcon.style.transform = 'rotate(0deg)';
        }
        if (arrowIconMobile) {
            arrowIconMobile.style.transform = 'rotate(0deg)';
        }
    }

    // 이벤트 리스너 등록
    if (regionButton) {
        regionButton.addEventListener('click', openPopup);
    }
    if (regionButtonMobile) {
        regionButtonMobile.addEventListener('click', openPopup);
    }
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', handleClosePopup);
    }
    if (popupOverlay) {
        popupOverlay.addEventListener('click', handleClosePopup);
    }

    // ESC 키로 팝업 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            handleClosePopup();
        }
    });
})();
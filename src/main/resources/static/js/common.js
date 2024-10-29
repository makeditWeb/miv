// header
document.addEventListener('DOMContentLoaded', function() {
    // 데스크탑용 코드
    const productLink = document.getElementById('product-link');
    const productSubmenu = document.getElementById('product-submenu');

    productLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (productSubmenu.style.display === 'none') {
            productSubmenu.style.display = 'flex';
        } else {
            productSubmenu.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.relative')) {
            productSubmenu.style.display = 'none';
        }
    });

    // 모바일용 코드
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const mobileSubmenuTrigger = document.getElementById('mobile-submenu-trigger');
    const submenu = mobileSubmenuTrigger.nextElementSibling;

    // 모바일 메뉴 열기
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(0)';  // 메뉴를 화면 안으로 이동
    });

    // 모바일 메뉴 닫기
    closeMobileMenu.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(110%)';  // 메뉴를 화면 밖으로 이동
    });

    // 모바일 서브메뉴 토글
    mobileSubmenuTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        if (submenu.style.display === 'none' || !submenu.style.display) {
            submenu.style.display = 'flex';
        } else {
            submenu.style.display = 'none';
        }
    });

    // 모바일 메뉴 외부 클릭 시 닫기
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#mobile-menu') && !e.target.closest('#mobile-menu-toggle')) {
            mobileMenu.style.transform = 'translateX(100%)';  // 메뉴를 화면 밖으로 이동
            submenu.style.display = 'none';  // 서브메뉴도 닫기
        }
    });
});


// 알림 아이콘 클릭 시 알림 창 표시/숨기기
document.getElementById("notificationIcon").onclick = function(event) {
    event.preventDefault(); // 링크 기본 동작 방지
    var popup = document.getElementById("notificationPopup");
    popup.classList.toggle("hidden"); // hidden 클래스 추가/제거
};

// 페이지 클릭 시 알림 창 닫기
document.addEventListener("click", function(event) {
    var icon = document.getElementById("notificationIcon");
    var popup = document.getElementById("notificationPopup");

    if (!icon.contains(event.target) && !popup.contains(event.target)) {
        popup.classList.add("hidden");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const notificationIcon = document.getElementById("notificationIconMobile");
    const notificationPopup = document.getElementById("notificationPopupMobile");
  
    if (notificationIcon && notificationPopup) {
      notificationIcon.addEventListener("click", function() {
        notificationPopup.classList.toggle("active");
      });
  
      // Close notification popup when clicking outside
      document.addEventListener("click", function(event) {
        if (!notificationIcon.contains(event.target) && !notificationPopup.contains(event.target)) {
          notificationPopup.classList.remove("active");
        }
      });
    }
  });
  


// 좋아요기능
document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const img = this.querySelector('img');
            const isLiked = this.dataset.liked === 'true';
            
            if (isLiked) {
                img.src = '/images/heart_un.png';
                this.dataset.liked = 'false';
            } else {
                img.src = '/images/heart.png';
                this.dataset.liked = 'true';
            }
            
            // API 호출 예시
            // const campaignId = this.dataset.id;
            // fetch('/api/like', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ campaignId }),
            // })
            // .then(response => response.json())
            // .then(data => console.log('좋아요 처리 완료:', data))
            // .catch(error => console.error('좋아요 처리 실패:', error));
        });
    });
});

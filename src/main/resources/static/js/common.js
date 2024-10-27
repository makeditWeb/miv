// header
document.addEventListener('DOMContentLoaded', function() {
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

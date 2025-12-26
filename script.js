let currentImageSrc = '';

function openWork(imageSrc, title, description) {
    currentImageSrc = imageSrc;
    
    document.getElementById('modal-img').src = imageSrc;
    document.getElementById('modal-img').alt = title;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-desc').textContent = description;
    
    document.getElementById('modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeWork() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }

    document.getElementById('modal-img').classList.remove('fullscreen-quality');
}


function openFullscreen() {
    const img = document.getElementById('modal-img');
    

    img.classList.add('fullscreen-quality');
    
    if (img.requestFullscreen) {
        img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) { 
        img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen();
    }
}

document.addEventListener('fullscreenchange', function() {
    const img = document.getElementById('modal-img');
    if (!document.fullscreenElement) {

        const closeBtn = document.querySelector('.close');
        if (closeBtn) {
            closeBtn.style.display = 'block';
        }

        img.classList.remove('fullscreen-quality');
    } else {
  
        const closeBtn = document.querySelector('.close');
        if (closeBtn) {
            closeBtn.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeWork();
            }
        });
    }
    

    const modalImg = document.getElementById('modal-img');
    if (modalImg) {
        modalImg.addEventListener('click', function(e) {
            e.stopPropagation(); 
            openFullscreen();
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeWork();
        }
    });

});

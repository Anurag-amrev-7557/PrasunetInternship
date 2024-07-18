document.addEventListener('DOMContentLoaded', () => {
    const nextElements = document.querySelectorAll('.next');
    const next2Elements = document.querySelectorAll('.next2');
    const menuItems = document.querySelectorAll('.outer > div');
    const slidingBox = document.querySelector('.sliding-box');
    const openspace = document.querySelector('.open-space');
    const opendiv = document.querySelector('#open');
    const health = document.querySelector('.health');
    const healthdiv = document.querySelector('#fitness');
    const summer = document.querySelector('.summer');
    const summerdiv = document.querySelector('#hot');
    const community = document.querySelector('.community');
    const communitydiv = document.querySelector('#society');
    const imagebox = document.querySelector('.relativeimage');
    const learn = document.querySelector('#learn');
    const bar = document.querySelector('.bar');
    const btn2 = document.querySelector('.btn2 span');
    const blobcontain = document.querySelector('.blob-container');
    const blob = document.querySelector('.blob');
    const movediv = document.querySelector('.move div');
    const breaked = document.querySelector('#break');

    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    };
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    nextElements.forEach(element => {
        observer.observe(element);
    });
    
    next2Elements.forEach(element => {
        observer.observe(element);
    });
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollTop === 0) {
            nextElements.forEach(element => {
                element.classList.remove('in-view');
                observer.unobserve(element);
                observer.observe(element);
            });
            next2Elements.forEach(element => {
                element.classList.remove('in-view');
                observer.unobserve(element);
                observer.observe(element);
            });
        }
        
        lastScrollTop = scrollTop;
    });
    
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const itemRect = item.getBoundingClientRect();
            const parentRect = item.parentElement.getBoundingClientRect();
            const offsetLeft = itemRect.left - parentRect.left;

            slidingBox.style.width = `${itemRect.width}px`;
            slidingBox.style.transform = `translateX(${offsetLeft}px)`;
        });

        item.addEventListener('mouseout', () => {
            slidingBox.style.width = '0';
        });
    });


    community.addEventListener('mouseenter', function (){
        imagebox.style.backgroundImage = 'url(/community-small.avif)';
        communitydiv.classList.add('padded');
    })
    community.addEventListener('mouseleave', function (){
        imagebox.style.backgroundImage = 'url(/community-small.avif)';
        communitydiv.classList.remove('padded');
    })

    health.addEventListener('mouseenter', function (){
        imagebox.style.backgroundImage = 'url(/gym.png)';
        healthdiv.classList.add('padded');
    })
    health.addEventListener('mouseleave', function (){
        healthdiv.classList.remove('padded');
    })

    summer.addEventListener('mouseenter', function (){
        imagebox.style.backgroundImage = 'url(/summer.png)';
        summerdiv.classList.add('padded');
    })
    summer.addEventListener('mouseleave', function (){
        summerdiv.classList.remove('padded');
    })

    openspace.addEventListener('mouseenter', function (){
        imagebox.style.backgroundImage = 'url(/tree.jpg)';
        opendiv.classList.add('padded');
    })
    openspace.addEventListener('mouseleave', function (){
        opendiv.classList.remove('padded');
    })

    learn.addEventListener("mouseenter", function () {
        bar.style.width = '7.673rem';
    })

    learn.addEventListener("mouseleave", function () {
        bar.style.width = '5.573rem';
    })

    btn2.addEventListener('click', () => {
        btn2.classList.add('animate__animated', 'animate__bounce');

        setTimeout(() => {
            btn2.classList.remove('animate__animated','animate__bounce');
        }, 2400);
    })

    blobcontain.classList.add('animate__animated', 'animate__fadeIn');
    blob.classList.add('animate__animated', 'animate__fadeIn');
    movediv.classList.add('animate__animated', 'animate__fadeInUp');
    setTimeout(() => {
        movediv.classList.remove('animate__animated', 'animate__fadeInUp');
    }, 1000);

    movediv.addEventListener('click', () => {
        breaked.classList.add('animate__animated', 'animate__hinge');
        movediv.style.transform = 'translateY(-5rem)';
    })

});

function createBlob() {
    const blob = document.createElement("div");
    blob.classList.add("blob");
    blob.style.width = `${Math.random() * 100}px`;
    blob.style.height = blob.style.width; 
    blob.style.left = `${Math.random() * 100}vw`;
    blob.style.animationDuration = `${Math.random() * 5 + 10}s`;
    blob.style.borderRadius = `${Math.random() * 100}px`;
    document.querySelector(".blob-container").appendChild(blob);
};

setInterval(loop, 10000);
for (let i = 0; i < 10; i++) {
    createBlob();
};

function loop()  {
    for (let i = 0; i < 10; i++) {
        createBlob();
    };
}    
loop();




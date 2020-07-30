let check = document.getElementById('check');
check.addEventListener('click', () => {
    check.classList.toggle('annually');
    let a = document.querySelectorAll('.card__price')
    a.forEach((item)=>{
        item.classList.toggle('annually');
    })
});
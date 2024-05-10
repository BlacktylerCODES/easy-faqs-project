const faqs = document.querySelectorAll(".faqs")

faqs.forEach(faq => {
    faq.addEventListener("click",() =>{
        let faqBtn = faq.querySelector('button')
        faq.classList.toggle("active");
        if (faqBtn.textContent === '+'){
            faqBtn.textContent = '-';
        } else{
            faqBtn.textContent ='+';
        }
    })
})
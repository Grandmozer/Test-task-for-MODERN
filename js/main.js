const defaultSelect = () => {
    const element = document.querySelector('.default');
    const choices = new Choices(element,{
        searchEnabled: false,
        itemSelectText: '',
    });

    element.closest('.choices').querySelector('#choices--subject-item-choice-7').style.display = 'none'
};

defaultSelect();
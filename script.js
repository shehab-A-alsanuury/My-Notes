const boldBtn = document.getElementById('boldBtn');
const editor = document.getElementById('editor');

boldBtn.addEventListener('click', () => {
    editor.style.fontWeight='bold';
});
italicBtn.addEventListener('click', () => {
    editor.style.fontStyle ='italic';  
});
underlineBtn.addEventListener('click', () => {
    editor.style.textDecoration = 'underline';
});
leftAlignBtn.addEventListener('click', () => {
    editor.style.textAlign = 'left';
});

centerAlignBtn.addEventListener('click', () => {
    editor.style.textAlign = 'center';
});

rightAlignBtn.addEventListener('click', () => {
    editor.style.textAlign = 'right';
});

uppercaseBtn.addEventListener('click', () => {
    editor.style.textTransform = 'uppercase';
});

lowercaseBtn.addEventListener('click', () => {
    editor.style.textTransform = 'lowercase';
});

capitalizeBtn.addEventListener('click', () => {
    editor.style.textTransform = 'capitalize';
});

clearBtn.addEventListener('click', () => {
    if (editor) {
       
        const hasFormatting = editor.style.fontWeight === 'bold' ||
                              editor.style.fontStyle === 'italic' ||
                              editor.style.textDecoration === 'underline' ||
                              editor.style.textAlign !== '' ||
                              editor.style.textTransform !== '' ||
                              editor.style.color !== '' ||
                              editor.style.backgroundColor !== '' ||
                              editor.style.fontSize !== '' ||
                              editor.style.fontFamily !== '';

        if (hasFormatting) {
            
            editor.style = {};
           
        } else {
            
            editor.textContent = '';
            console.log('All content cleared');
        }
    } else {
        console.error('Editor element not found');
    }
});

textColorBtn.addEventListener('click', () => {
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = editor.style.color;
    colorInput.addEventListener('input', () => {
        editor.style.color = colorInput.value;
    });
    document.body.appendChild(colorInput);
});

bgColorBtn.addEventListener('click', () => {
    const bgColorInput = document.createElement('input');
    bgColorInput.type = 'color';
    bgColorInput.value = editor.style.backgroundColor;
    bgColorInput.addEventListener('input', () => {
        editor.style.backgroundColor = bgColorInput.value;
    });
    document.body.appendChild(bgColorInput);
});

fontSizeBtn.addEventListener('click', () => {
    const fontSizeInput = document.createElement('input');
    fontSizeInput.type = 'number';
    fontSizeInput.value = parseInt(editor.style.fontSize);
    fontSizeInput.addEventListener('input', () => {
        editor.style.fontSize = fontSizeInput.value + 'px';
    });
    document.body.appendChild(fontSizeInput);
});

fontStyleBtn.addEventListener('click', () => {
    const fontSelect = document.createElement('select');
    const fontOptions = ['Arial', 'Times New Roman', 'Courier', 'Verdana', 'Georgia'];
    fontOptions.forEach((font) => {
        const option = document.createElement('option');
        option.value = font;
        option.text = font;
        fontSelect.appendChild(option);
    });
    fontSelect.value = editor.style.fontFamily;
    fontSelect.addEventListener('change', () => {
        editor.style.fontFamily = fontSelect.value;
    });
    document.body.appendChild(fontSelect);
});
printBtn.addEventListener('click', () => {
    window.print();
});







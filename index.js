
let container = document.createElement('div');
container.className = "container";
document.body.append(container);

let title = document.createElement('h1')
title.className = "title"
title.innerHTML = "Виртуальная Клавиатура"
container.append(title)

let textarea = document.createElement('textarea')
textarea.className = "textarea"
container.append(textarea)

/*клавиатура*/
let keyboard = document.createElement('div')
keyboard.className = "keyboard"
container.append(keyboard)




const buttons = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
'Tab', 'q', 'w', 'e' ,'r', 't' , 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock' , 'a', 's', 'd', 'f', 'g', 'h', 'j',
'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.' , '/', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt',
'Space', 'Alt', 'Ctrl', 'Lt', 'Dn', 'Rt', 'Ctrl'
]

const buttonsWithText = buttons.map(text => {
  const button = document.createElement('div')

  button.className = "button" + " " + text.toLowerCase()
  button.innerHTML = text

  return button
})

keyboard.append(...buttonsWithText)



/*------*/

let instruction = document.createElement('p')
instruction.className = "instruction"
instruction.innerHTML = "Клавиатура создана в операционной системе Windows Для переключения языка комбинация: левыe ctrl + alt"
container.append(instruction)
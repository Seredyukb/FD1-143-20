
'use strict';

var formDef1 =
    [
        { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
        { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
        { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
        { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
        },
        { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
        { label: 'Описание сайта:', kind: 'memo', name: 'description' },
        { label: 'Опубликовать:', kind: 'submit' },
    ];

var formDef2 =
    [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { label: 'Зарегистрироваться:', kind: 'submit' },
    ];

function createForm(data, forma) {
    var doc = document;
    for (let i = 0; i < data.length; i++) {
        var formElem = data[i];
        switch (formElem.kind) {
            case "longtext":
                var label = doc.createElement('label');
                label.textContent = formElem.label;
                var input = doc.createElement('input');
                input.type = 'text';
                input.name = formElem.name;
                var br = doc.createElement('br');
                forma.appendChild(label);
                label.appendChild(input);
                forma.appendChild(br);
                break;
            case "number":
                var label = doc.createElement('label');
                label.textContent = formElem.label;
                var input = doc.createElement('input');
                input.type = 'number';
                input.name = formElem.name;
                var br = doc.createElement('br');
                forma.appendChild(label);
                label.appendChild(input);
                forma.appendChild(br);
                break;
            case "shorttext":
                var label = doc.createElement('label');
                label.textContent = formElem.label;
                var input = doc.createElement('input');
                input.type = 'email';
                input.name = formElem.name;
                var br = doc.createElement('br');
                forma.appendChild(label);
                label.appendChild(input);
                forma.appendChild(br);
                break;
            case "combo":
                var label = doc.createElement('label');
                label.textContent = formElem.label;
                var select = doc.createElement('select');
                select.name = formElem.name;
                var selectBar = formElem.variants;
                for (let q = 0; q < selectBar.length; q++) {
                    var selectItem = selectBar[q];
                    var option = doc.createElement('option');
                    option.textContent = selectItem.text;
                    select.appendChild(option);
                }
                var br = doc.createElement('br');
                forma.appendChild(label);
                label.appendChild(select);
                forma.appendChild(br);
                break;
            case "radio":
                var label = doc.createElement('label');
                label.textContent = formElem.label;
                forma.appendChild(label);
                var radioVariants = formElem.variants;
                for (let z = 0; z < radioVariants.length; z++) {
                    var radioItem = radioVariants[z];
                    var input = doc.createElement('input');
                    var subLabel = doc.createElement('label');
                    subLabel.textContent = radioItem.text;
                    input.name = formElem.name;
                    input.type = "radio";
                    input.value = radioItem.variants;
                    forma.appendChild(subLabel);
                    subLabel.appendChild(input);
                }
                var br = doc.createElement('br');
                forma.appendChild(br);
                break;
            case "check":
                var label = doc.createElement('label');
                label.textContent = formElem.label;
                var input = doc.createElement('input');
                input.type = 'checkbox';
                input.name = formElem.name;
                var br = doc.createElement('br');
                forma.appendChild(label);
                label.appendChild(input);
                forma.appendChild(br);
                break;
            case "memo":
                var label = doc.createElement('label');
                label.textContent = formElem.label;
                var textarea = doc.createElement('textarea');
                textarea.name = formElem.name;
                var br = doc.createElement('br');
                forma.appendChild(label);
                label.appendChild(textarea);
                forma.appendChild(br);
                break;
            case "submit":
                var label = doc.createElement('label');
                var input = doc.createElement('input');
                input.type = 'submit';
                input.value = formElem.label;
                var br = doc.createElement('br');
                forma.appendChild(label);
                label.appendChild(input);
                forma.appendChild(br);
                break;
        }
    }
};
createForm(formDef1, ff1);
createForm(formDef2, ff2);



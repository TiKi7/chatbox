let myName = 'Tiki-8590';
let nearby_names = [
    'Randsome',
    'VitaminC-0154',
    'Legend-4015',
    'NovaVoidSpirit-3580',
    'TheNick-1981',
    'Halila-2275',
    'Terje-9294',
    'MijekaMunro',
    'Daisy-Sansar',
    'Nop'
];

// let temp = [];
// function fetch_pic(name) {
//     fetch(`https://profiles.sansar.com/proxies/web/profiles-api/v1/profiles/${name}`)
//         .then(res => res.json())
//         .then(b => {
//             let img_src = b['data']['avatarImageUrl'];
//             console.log(img_src);
//             a.push({
//                 name: name,
//                 img: img_src
//             });
//         });
// }
// nearby_names.forEach(p => { fetch_pic(p); });
// JSON.stringify(temp);

// let nearby_obj = [
//     { "name": "Tiki-8590", "img": "https://s3-us-west-2.amazonaws.com/sansar-asset-production/dc3dfec4613b5bdfa64850344f565898.import.png" },
//     { "name": "Randsome", "img": "https://s3-us-west-2.amazonaws.com/sansar-asset-production/58d5d80c2fe5e22c67d0183850d98194.import.png" },
//     { "name": "TheNick-1981", "img": "https://s3-us-west-2.amazonaws.com/sansar-asset-production/0fbf48000b097f150ab82c96d9d7393d.import.png" },
//     { "name": "VitaminC-0154", "img": "https://s3-us-west-2.amazonaws.com/sansar-asset-production/697d3a5ff06149e734706b8cc684e639.import.png" },
//     { "name": "Legend-4015", "img": "https://s3-us-west-2.amazonaws.com/sansar-asset-production/0ef1073e3d944337b05b0fa771414a2e.import.png" },
//     { "name": "NovaVoidSpirit-3580", "img": "https://s3-us-west-2.amazonaws.com/sansar-asset-production/a67e87539ca8d57a746f176fe825cba6.import.png" },
//     { "name": "Halila-2275", "img": "https://s3-us-west-2.amazonaws.com/sansar-asset-production/86f2f5dabeb65f1f3c90b01ac5a68130.import.png" },
//     { "name": "Terje-9294", "img": "https://s3-us-west-2.amazonaws.com/sansar-asset-production/078028ee72d692d5255ecff361dade85.import.png" },
//     { "name": "Daisy-Sansar", "img": "https://s3-us-west-2.amazonaws.com/sansar-asset-production/9f12a44e0f0896e97e33eb9b30a5567e.import.png" },
//     { "name": "MijekaMunro", "img": "https://s3-us-west-2.amazonaws.com/sansar-asset-production/09c9e500e2ce329804037769e497ba3e.import.png" },
//     { "name": "Nop", "img": "https://s3-us-west-2.amazonaws.com/sansar-asset-production/0123456789abcdef0123456789abcdff.import.png" }
// ];
let nearby_obj = [
    { "name": "Tiki-8590", "img": "./pp/me.png" },
    { "name": "Randsome", "img": "./pp/4.png" },
    { "name": "TheNick-1981", "img": "./pp/1.png" },
    { "name": "VitaminC-0154", "img": "./pp/6.png" },
    { "name": "Legend-4015", "img": "./pp/8.png" },
    { "name": "NovaVoidSpirit-3580", "img": "./pp/10.png" },
    { "name": "Halila-2275", "img": "./pp/5.png" },
    { "name": "Terje-9294", "img": "./pp/7.png" },
    { "name": "Daisy-Sansar", "img": "./pp/3.png" },
    { "name": "MijekaMunro", "img": "./pp/2.png" },
    { "name": "Nop", "img": "./pp/me.png" }
];
let div_nearby = $('#window>#nearby');
nearby_obj.forEach(p => {
    div_nearby.append(`
    <div class="profile">
        <img src="${p['img']}" alt="">
        <span>${p['name']}</span>
    </div>`)
});

let chats = [{
    name: 'Randsome',
    text: 'Hey'
}, {
    name: 'Tiki',
    text: 'Hi how are you'
}, {
    name: 'NovaVoidSpirit',
    text: 'this is nova\'s chat here'
}, {
    name: 'Tiki',
    text: 'Im looking for Daisy, have to send her a link, anyone knows where is she?'
}, {
    name: 'Randsome',
    text: 'idk'
}, {
    name: 'MijekaMunro',
    text: 'Hi everyone, i know where you can find her!'
}, {
    name: 'Tiki',
    text: 'where?'
}, {
    name: 'NovaVoidSpirit',
    text: 'hi mijeka?'
}, {
    name: 'TheNick',
    text: 'i dont like bananas'
}, {
    name: 'Legend',
    text: 'lol i dont know what i can write in this chat anymore but its fine, just text text...'
}, {
    name: 'VitaminC',
    text: 'and text and text and ......'
}, {
    name: 'Nop',
    text: 'yes and more texts x3'
}, {
    name: 'Tiki',
    text: '- -" just kidding nop xD'
}];

let div_chat = $('#window>#chat');
for (i = chats.length - 1; i >= 0; i--) {
    let p = chats[i];
    let html = `
    <div class="chat">
        <div class="name">${p["name"]}</div>
        <div class="text">
            ${p["text"]}                  
        </div>
        <div class="time">12:34:23</div>
    </div>`;
    div_chat.append(html);
}

(function() {
    let x_delta = 0,
        y_delta = 0,
        x = 0,
        y = 0;

    let window = document.querySelector('#window');
    document.querySelector('#window>#header').addEventListener('mousedown', dragInit);

    function dragInit(e) {
        if (e.target != document.querySelector('#window>#header')) { return; }
        x = e.clientX;
        y = e.clientY;
        addEventListener('mouseup', dragStop);
        addEventListener('mousemove', dragMove);

    }

    function dragMove(e) {
        // calculate the new cursor position:
        x_delta = x - e.clientX;
        y_delta = y - e.clientY;
        x = e.clientX;
        y = e.clientY;
        // set the element's new position:
        window.style.top = (window.offsetTop - y_delta) + "px";
        window.style.left = (window.offsetLeft - x_delta) + "px";
    }

    function dragStop(e) {
        removeEventListener('mouseup', dragStop);
        removeEventListener('mousemove', dragMove);
    }
})();
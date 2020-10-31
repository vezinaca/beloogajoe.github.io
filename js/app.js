console.log('allo');

const beloogajoe = document.querySelector('h1');

beloogajoe.addEventListener('click', testCarl);


function testCarl(){
    console.log('allo carl');
    const li = document.createElement('li');
    li.textContent = 'allo';
    document.querySelector('ul').appendChild(li);

}


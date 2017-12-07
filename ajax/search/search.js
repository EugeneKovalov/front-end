function findHint() {
    let str = document.getElementById('search').value;
    if (str.length === 0) {
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (document.getElementById('container')) {
                document.getElementById('container').remove();
            }

            let results = xhr.responseText.split(', ');
            let container = document.createElement('div');

            container.setAttribute('id', 'container');
            document.getElementById('hint').appendChild(container);

            for (let i in results) {
                let divHint = document.createElement('div');
                divHint.setAttribute('class', 'container-item');
                divHint.addEventListener('click', details);
                divHint.innerHTML = results[i];

                container.appendChild(divHint);
            }
        }
    };

    xhr.open('GET', 'search.php?a=' + str, true);
    xhr.send();
}

function details() {
    let detailContainer = document.getElementsByClassName('result')[0];
    detailContainer.innerText = this.innerText;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'search.php', true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // let json = JSON.parse(xhr.responseText);
            // console.log(json);
        }
    };
    xhr.send(this.innerText);
}

document.getElementById('search').addEventListener('keyup', findHint);
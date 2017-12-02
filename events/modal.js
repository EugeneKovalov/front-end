let widthEl = 0;
let heightEl = 0;
let priority = 1;

document.body.addEventListener('keypress', function (e) {
    createModal(e.which);
});

function createModal(key) {
    let modal = document.createElement('div');
    modal.setAttribute("id", "myModal");
    modal.setAttribute("class", "modal");

    modal.style.display = "block";
    modal.style.left = widthEl + 'px';
    modal.style.top = heightEl + 'px';

    let modalContent = document.createElement('div');
    modalContent.setAttribute("id", "modal-content");

    let closeBtn = document.createElement('span');
    closeBtn.setAttribute("id", "close");
    closeBtn.innerHTML = "&times";

    let contentSpan = document.createElement('span');
    contentSpan.setAttribute("id", "content");
    contentSpan.innerText = 'You are pressed: ' +  String.fromCharCode(key);

    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    modal.appendChild(contentSpan);

    document.body.appendChild(modal);

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    widthEl += 70;
    heightEl += 50;

    addDraggable(modal);
}

function addDraggable(element) {
    element.onmousedown = function(e) {
        let shiftX = e.pageX - element.getBoundingClientRect().left + pageYOffset;
        let shiftY = e.pageY - element.getBoundingClientRect().top + pageXOffset;

        moveTo(e);

        element.style.zIndex = ++priority;

        function moveTo(e) {
            element.style.left = e.pageX - shiftX + 'px';
            element.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function(e) {
            moveTo(e);
        };

        element.onmouseup = function() {
            document.onmousemove = null;
        };
    }
}
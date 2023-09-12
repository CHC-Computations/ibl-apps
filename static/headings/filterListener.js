const filterInput = document.getElementById('filter-input');
filterInput.addEventListener('input', filterTree);

function filterTree() {
    var highestNodes = document.querySelectorAll('div#main-content-container > div[name="heading_node"]');
    if (this.value !== '') {
        highestNodes.forEach(node => checkNode(node, this.value.toLowerCase()));
    } else {
        highestNodes.forEach(node => showAllNodes(node));
    }
}

function checkNode(node, filterString) {
    var nodeString = node.textContent.replaceAll('KOPIUJ', '').toLowerCase();
    if (!nodeString.includes(filterString)) {
        node.style.display = 'none';
    } else {
        node.removeAttribute('style');
        var nodeBody = node.getElementsByClassName('accordion-body');
        if (nodeBody.length) {
            var children = nodeBody[0].querySelectorAll(':scope > div[name="heading_node"]');
            if (children.length) {
                children.forEach(child => {
                    checkNode(child, filterString);
                });
            }
        }
    }   
}

function showAllNodes(node) {
    node.removeAttribute('style');
    var nodeBody = node.getElementsByClassName('accordion-body');
    if (nodeBody.length) {
        var children = nodeBody[0].querySelectorAll(':scope > div[name="heading_node"]');
        if (children.length) {
            children.forEach(child => {
                showAllNodes(child);
            });
        }
    }
}
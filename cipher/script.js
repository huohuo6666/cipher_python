
function displayContent() {
    const select = document.getElementById('mySelect');
    const selectedOption = select.options[select.selectedIndex].value;
    const contentArea = document.getElementById('contentArea');
 
    // 根据选项值显示不同内容
    switch (selectedOption) {
        case 'option1':
            contentArea.innerHTML = 'nihao';
            contentArea.style.display = 'block';
            break;
        case 'option2':
            contentArea.innerHTML = '这是选项2的内容';
            contentArea.style.display = 'block';
            break;
        case 'option3':
            contentArea.innerHTML = '这是选项3的内容';
            contentArea.style.display = 'block';
            break;
        default:
            contentArea.style.display = 'none';
    }

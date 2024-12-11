// You need to have the binary data in an array, which you can get from the debugger
// then just save it to global vars and pass into the script

const blob = new Blob([temp1], { type: 'application/octet-stream' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'extracted-book.epub';
a.style.display = 'none';  
document.body.appendChild(a);
setTimeout(() => { 
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}, 100);

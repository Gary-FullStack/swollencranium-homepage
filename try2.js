const body = document.body;

  function createCodeStream(x) {
    const code = document.createElement('div');
    code.className = 'matrix-code';
    code.style.left = x + 'px';
    body.appendChild(code);

    const lines = Math.floor(Math.random() * 5) + 3; // 3-7 lines per stream
    for (let i = 0; i < lines; i++) { 
      const line = document.createElement('span');  // Create a span for each line
      for (let j = 0; j < 20; j++) {
        line.textContent += String.fromCharCode(Math.random() * 128);
      }
      code.appendChild(line);  // Append the line span to the code div
    }
  }
  
  for (let i = 0; i < 50; i++) {
    createCodeStream(Math.random() * window.innerWidth);
  }
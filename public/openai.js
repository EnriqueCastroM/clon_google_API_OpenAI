async function searchText() {
    const inputSearch = document.getElementById('input-search');
    const query = inputSearch.value;

    if (!query) {
        alert('Por favor, ingresa un texto para buscar.');
        return;
    }

    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block'; // Muestra el spinner

    try {
        const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        // Mostrar resultados
        showResults(data);
    } catch (error) {
        console.error(error);
        alert('Error al realizar la búsqueda.');
    } finally {
        spinner.style.display = 'none'; // Oculta el spinner
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchText();
    }
}

function showResults(text) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = `<p>${text}</p>`;
}

function copyToClipboard() {
    const resultsContainer = document.getElementById('results-container');
    const text = resultsContainer.innerText;
    
    if (!text) {
      alert('No hay resultados para copiar.');
      return;
    }
  
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    alert('Resultado copiado al portapapeles.');
  }
  

// Function to fetch data from an API
async function fetchWebData(endpoint) {
  const displayArea = document.getElementById('output');
  
  try {
    displayArea.innerHTML = "<p>Loading data...</p>";
    
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    renderData(data);
    
  } catch (error) {
    console.error("Fetch failed:", error);
    displayArea.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

// Function to inject the data into your HTML
function renderData(data) {
  const container = document.getElementById('output');
  // Assuming the API returns an array or object
  container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

// Initialize when the button is clicked
document.getElementById('fetchBtn').addEventListener('click', () => {
  fetchWebData('https://api.github.com/zen'); // Example: GitHub's "Zen" API
});

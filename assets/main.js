// Initialize AOS library
AOS.init();

// Example: Chart.js initialization
const ctx = document.getElementById('progressChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Module 1', 'Module 2', 'Module 3'],
    datasets: [{
      label: 'Progress',
      data: [60, 80, 40],
      backgroundColor: '#007bff'
    }]
  }
});

document.addEventListener('DOMContentLoaded', function() {
    // Caring Machines Chart
    const caringCtx = document.getElementById('caringChart').getContext('2d');
    new Chart(caringCtx, {
        type: 'bar',
        data: {
            labels: ['Student Essays', 'ML Algorithms', 'Rubric Criteria', 'Redundancy Reduction'],
            datasets: [{
                label: 'Caring Machines Stats',
                data: [17000, 3, 6, 30],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // CNDE Chart
    const cndeCtx = document.getElementById('cndeChart').getContext('2d');
    new Chart(cndeCtx, {
        type: 'bar',
        data: {
            labels: ['Web Pages', 'Dashboards', 'Platforms Diagnosed', 'User Satisfaction', 'Mobile UI Designs', 'Prototypes Converted'],
            datasets: [{
                label: 'CNDE at IIT Madras Stats',
                data: [100, 3, 4, 40, 15, 5],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // TMSS Chart
    const tmssCtx = document.getElementById('tmssChart').getContext('2d');
    new Chart(tmssCtx, {
        type: 'bar',
        data: {
            labels: ['Applications Augmented', 'Websites Scraped', 'Lead Platforms', 'Time (Weeks)'],
            datasets: [{
                label: 'Techno Media Software Solutions Stats',
                data: [3, 5, 2, 3],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

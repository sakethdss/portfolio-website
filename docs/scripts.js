function showDetails(id) {
    let content = '';
    
    if (id === 'caring') {
        content = `
            <ul>
                <li>Progressing towards a model to classify over 17,000 student essays using advanced NLP and ML techniques.</li>
                <li>Evaluated unsupervised ML algorithms for pattern recognition and data analysis.</li>
                <li>Devised methods to assess essays based on a rubric with 6 criteria.</li>
                <li>Optimized data analysis and pre-processing with Python libraries, reducing redundancies by 30%.</li>
            </ul>`;
    } else if (id === 'cnde') {
        content = `
            <ul>
                <li>Architected 100+ web pages and revamped 3 existing dashboards to enhance user experience.</li>
                <li>Reengineered web designs into mobile layouts for the iGenie mobile application.</li>
                <li>Converted design prototypes into fully functional web pages using React.</li>
            </ul>`;
    } else if (id === 'tmss') {
        content = `
            <ul>
                <li>Augmented 3 applications using Python (Tkinter) and Java.</li>
                <li>Conducted web scraping to extract data from 5 websites.</li>
                <li>Delivered 2 lead-gathering platforms within a 3-week timeframe.</li>
            </ul>`;
    }

    document.getElementById(id).innerHTML = content;
}

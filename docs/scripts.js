function readMore(id) {
    let fullText = '';
    
    if (id === 'caring') {
        fullText = `
            Progressing towards a model to classify over 17,000 student essays using advanced NLP and ML techniques. Evaluated unsupervised ML algorithms for pattern recognition and data analysis. Devised methods to assess essays based on a rubric with 6 criteria. Optimized data analysis and pre-processing with Python libraries, reducing redundancies by 30%.
        `;
    } else if (id === 'cnde') {
        fullText = `
            Architected 100+ web pages and revamped 3 existing dashboards to enhance user experience. Reengineered web designs into mobile layouts for the iGenie mobile application. Converted design prototypes into fully functional web pages using React. Diagnosed 4 platforms to identify issues and improved user satisfaction by 40%.
        `;
    } else if (id === 'tmss') {
        fullText = `
            Augmented 3 applications using Python (Tkinter) and Java. Conducted web scraping to extract data from 5 websites. Delivered 2 lead-gathering platforms within a 3-week timeframe. Collaborated with clients to tailor websites based on specific requirements.
        `;
    }

    document.getElementById(id + '-description').innerHTML = fullText;
    document.querySelector(`button[onclick="readMore('${id}')"]`).style.display = 'none';
}

# Random book selector
Uses a JSON object to randomly select some books to display. For each book it creates a clickable cover image and adds the title and the authors.

JSON objects should have this structure:

    {
        "link": "",
        "imgSrc": "",
        "title": "",
        "authors": ""
    }

Invoke it like this:

`randomImageSelector.init(data, config);`

Where the config is a simple configuration object and the data is the array of JSON objects. The configuration object has just several properties:

    config = {
        numberOfBooks: {integer=3},
        selector: {selector='#books'},
        title: {string='Books'},
        imgPath: {string='/content/books/'},
        urlPrefix: {string=''}
    }
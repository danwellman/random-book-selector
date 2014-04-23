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

`randomImageSelector.init(config, data);`

Where the config is a simple configuration object and the data is the array of JSON objects. The configuration object has just 2 properties:

    config = {
        numberOfBooks: _integer_,
        selector: _selector_
    }
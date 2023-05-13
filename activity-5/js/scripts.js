/**
 * Wrap everything in an IIFE (Immediatelly Invoked  function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function(){
    /**
     * Package data and constructor objects
     */
    var data = [
        {
            name: 'emmet',
            description: 'Emmet is the number one code snippet tool.',
            author: 'emmetio',
            url: 'https://atom.io/packages/emmet',
            downloads: 1662209,
            stars: 2534,
            price: 10.50,
            selector: 'p1'
        },
        {
            name: 'atom-beautify',
            description: 'The atom-beautify package will clean up you code and make it more readable',
            author: 'Glavin001',
            url: 'https://atom.io/packages/atom-beautify',
            downloads: 4228040,
            stars: 4541,
            price: 6.75,
            selector: 'p2'
        }
    ];

    // Package/Extensions constructor function
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function() {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function(){
            return this.stars.toLocaleString();
        };
    }

    /**
     * Utility functions
     */

    //Returns today's date, formatted
    var getTodayDate = function(){
        var today = new Date();
        return today.toDateString();
    };

    //Returns DOM element by id
    var getEl = function(id){
        return document.getElementById(id);
    };

    /**
     * Writes the package objects's data to the appropriate
     * DOM elements utilizing the package selector property
     * @param {*} package 
     * @return {void}
     */

    var writePackageInfo = function(package){
        //Get reference to DOM elements
        var selector = package.selector,
            nameEL = getEl(selector + '-name'),
            descEL = getEl(selector + '-description'),
            authEL = getEl(selector + '-author'),
            downloadEL = getEl(selector + '-downloads'),
            starsEL = getEl(selector + '-stars');

        // Write package data to DOM elements
        nameEL.textContent = package.name;
        descEL.textContent = package.description;
        authEL.textContent = package.author;
        downloadEL.textContent = package.getFormattedDownloads();
        starsEL.textContent = package.getFormattedStars();
    };

    // Write data
    dateEl = getEl('date');
    dateEl.textContent = getTodayDate();

    // Write package data
    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);


}());
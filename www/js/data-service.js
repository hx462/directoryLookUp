companyService = (function () {

    var baseURL = "";

    // The public API
    return {
        findById: function(id) {
            return $.ajax(baseURL + "/companies/" + id);
        },
        findByName: function(searchKey) {
            return $.ajax({url: baseURL + "/companies", data: {name: searchKey}});
        }
    };

}());
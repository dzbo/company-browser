(function($) {

  var Item = function (name, address, phone, www) {
    var obj = this;

    this.name = name;
    this.address = address;
    this.phone = phone;
    this.www = www;

    this.compare = function(item) {
      // no name
      if (obj.name == '') {
        return false;
      }

      // first element
      if (item == undefined) {
        return true;
      }

      // duplicate
      if (item.name == obj.name 
        && item.phone == obj.phone) {
        return false;
      } else {
        return true;
      }
    };
  };

  var request = function(location, offset) {
    var API = "http://localhost/panorama.json";

    $.ajax({
      type: "post",
      url: API,
      data: {
        allegro: null,
        category: null,
        close: false,
        count: 25,
        offset: offset,
        crossEnabled: true,
        disableNameAndOfferCount: true,
        forceAlgorithm: true,
        groupBy: "VOIV|CITY|DISTRICT|CITY_RESTRICTED_VOIV|KITCHEN|EXTRA_INFORMATIONS",
        kitchen: null,
        location: location,
        openNow: null,
        pictureReq: null,
        searchType: "ALGORITHM",
        snippet: "yellow",
        sort: null,
        typ: undefined,
        what: ""
      },
      success: function(data){

        var result = $.parseJSON(data);

        if (result.e == 1) {
          return false;
        }

        var $content = $(result.m);
        var lastItem;

        $content.each(function() {
          var name = $(this).find('.nameArea a').text();
          var address = $(this).find('.addressArea').text();
          var phone = $(this).find('.phoneArea a').text();
          var www = $(this).find('.wwwArea a').text();

          var item = new Item(name, address, phone, www);

          if (item.compare(lastItem)) {
            $('#result').append('Nazwa: ' + name + ', ' + address + ', ' + phone + ', ' + www + '<br>');
          }

          lastItem = item;
        });
      }
    });
  };

  var totalOffset = 1000;

  for (var i = 25; i < totalOffset; i = i + 25) {
    request("mazowieckie,,Warszawa", i);
  };
})(jQuery);

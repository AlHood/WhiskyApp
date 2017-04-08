var ListItem = function(options) {
this.item = options.item; //assuming we just put the entire json object in here
this.visited = options.visited || false;

}

ListItem.prototype = {

}

module.exports = ListItem;


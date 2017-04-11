//need coords for one that is missing, think getting the place_id might also be handy for all locations.
use whisky;
db.dropDatabase();
db.whisky_distilleries.insert([
{
  name: "Springbank",
  location: "Longrow, Campbeltown",
  region: "Campbeltown",
  description: "Springbank is perched on the edge of Campbeltown Loch towards the bottom of the Mull of Kintyre in the West of Scotland, about three hours' drive south-west from Glasgow.",
  tourInfo: "Tours run Monday to Friday at 10am, 11:30am, 1:30pm & 3pm and Saturdays at 10am & 2pm.",
  cost: "£7 per person",
  website: 'http://www.springbankwhisky.com',
  image: ".",

  coords:{

    lat: 55.425439,
    lng: -5.608951
  }
},
{
  name: "Dalmore",
  location: "Alness",
  region: "Highland",
  description: "Dalmore distillery was built in 1839 by Alexander Matheson, who immediately leased it to the Sunderland family, who ran it for over thirty years until 1869, when the lease was taken over by three Mackenzie brothers, Alexander, Charles and Andrew.",
  tourInfo: "Bespoke tours on request - book through website to avoid disappointment.",
  cost: "£8 per person",
  website: 'https://www.thedalmore.com',
  image: ".",
  coords:{
    lat: 57.688252,
    lng: -4.239218
  }
},
{
  name: "Talisker",
  location: "Carbost, Isle of Skye",
  region: "Island",
  description: "The Isle of Skye's only single malt, and one that is loved all over the world for its maritime character.",
  tourInfo: "Monday – Saturday: 9.30am – 5.00pm, Tours throughout the day, last tour at 4pm",
  cost: "£7 per person",
  website: 'https://www.discovering-distilleries.com/talisker/',
  image: ".",
  coords:{
    lat: 57.302336,
    lng: -6.356749
  }
},
{
  name: "Highland Park",
  location: "Kirkwall, Orkney.",
  region: "Island",
  description: "Highland Park was named 'Best Spirit in the World' by USA whisky expert Paul Pacult in his 2005, Spirit Journal 100 listing of the world's best 100 distilled spirits. Highland Park's award-winning quality has its roots in the whisky's Orkney home and the obsession of the people who craft it..",
  tourInfo: "Mon-Fri 10am-5pm, Tours on the hour every hour until 4pm, Closed weekends",
  cost: "£7.50 per person",
  website: 'https://www.highlandparkwhisky.com/',
  image: ".",
  coords:{
    lat: 58.973751,
    lng: -2.953371
  }
},
{
  name: "Jura",
  location: "Craighouse, Isle of Jura",
  region: "Island",
  description: "The only (legal) distillery operating on the island of Jura to the north of Islay. With less than 200 people living on the island, it's at the heart of their community and sits in the middle of Craighouse, the island's biggest town.",
  tourInfo: "Monday – Saturday: 10:00 – 16:30 Sunday: Closed Tour: Every day 11:00 & 14:00, Monday – Saturday Please book onto the tours in advance to avoid disappointment.",
  cost: "Distillery tours are £6. No children under eight years of age allowed in production areas.",
  website: 'http://www.jurawhisky.com',
  image: ".",
  coords:{
    lat: 55.832908,
    lng: -5.950832
  }
},
{
  name: "Arran",
  location: "Lochranza, Isle of Arran",
  region: "Island",
  description: "A dynamic new force in the Scotch whisky industry, Isle of Arran Distillers is one of the few remaining independent distilleries in Scotland.They are based at Lochranza on the Isle of Arran, one of the most beautiful and famous in Scotland which lies off the west coast between Ayrshire and Kintyre.",
  tourInfo: "Times 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00 Duration: 45mins.",
  cost: "Cost £8.00 Concessions £7.00 Children 8-17 Free ",
  website: 'https://www.arranwhisky.com',
  image: ".",
  coords:{
    lat: 55.698241,
    lng: -5.275240
  }
},
{
  name: "Tobermory",
  location: "Island of Mull",
  region: "Island",
  description: "Tobermory is the only distillery on the picturesque Hebridean Isle of Mull, lying off the west coast of Scotland, south of the remote Ardnamurchan and Morvern peninsulas.",
  tourInfo: "Mondays to Fridays 10am-5pm Saturdays and Sundays 10am-4pm",
  cost: "£8 per person",
  website: 'http://tobermorydistillery.com',
  image: ".",
  coords:{
    lat: 56.620734,
    lng: -6.069800
  }
}, 
{

  name: "Bowmore",
  location: "Isle of Islay",
  region: "Islay",
  description: "Bowmore was the first of Islay's distilleries to receive a licence, springing fully-formed into official existence in 1779. It is likely that the founder of the distillery, one William Simson, had been been distilling in Bowmore since shortly after his arrival in 1766,at a time when Daniel Campbell the Younger (the laird of the island) was expanding the village into the island's capital.",
  tourInfo: "Mon - Sat: 9.30am / 10:30am / 1.30pm / 2.30pm  Sun:  12.30pm / 2pm",
  cost: "£7 per person",
  website: 'http://www.bowmore.com',
  image: ".",
  coords:{
    lat: 55.756868,
    lng: -6.289846
  } 
},
{
  name: "Ailsa Bay",
  location: "Girvan, South Ayrshire",
  region: "Lowland",
  description: "Ailsa Bay was built within Girvan grain distillery in 2007 to produce malt whisky for William Grant's range of blends. The first single malt, a heavily peated no-age-statement release, was launched in February 2016, after eight years of operation.",
  tourInfo: "Mon - Sat: 9.30am / 10:30am / 1.30pm / 2.30pm Sun:  12.30pm / 2pm",
  cost: "£7 per person",
  website: '.',
  image: ".",
  coords:{
    lat: 55.260702,
    lng: -4.833403
  }
},
{
  name: "Glenfiddich",
  location: "Dufftown",
  region: "Speyside",
  description: "A colossus, Glenfiddich was established by William Grant in 1876, with the first spirit running off the stills in 1887. Today the company is still run by his descendants and as the first whisky to truly market itself as a single malt, Glenfiddich now accounts for about 30% of all single malt sales worldwide.",
  tourInfo: "Daily 9:30am - 4:00pm DURATION: 1 Hour 30 Minutes",
  cost: "£10",
  website: 'http://www.glenfiddich.com/distillery/',
  image: ".",
  coords:{
    lat: 57.454765,
    lng: -3.128660
  }
},
{
  name: "The Macallan",
  location: "Craigellachie, Moray",
  region: "Speyside",
  description: "Macallan is the most sought-after whisky for collectors, and over the past four decades, Macallan has built probably the best reputation for quality malt whisky; rare expressions can change hands for thousands of pounds, and prices for such bottles are continuously going up.",
  tourInfo: "TIMES: Monday to Friday 9.30am-5.00pm DURATION: Tour duration: approx. 1 hour 45 minutes.",
  cost: "COST: Price per person - £15",
  website: 'https://www.themacallan.com/visit#',
  image: ".",
  coords:{
    lat: 57.484647,
    lng: -3.206955
  }
},
{
  name: "Glenlivet",
  location: "Ballindalloch",
  region: "Speyside",
  description: "One of the most famous malts in the world, perhaps on account of the story of George Smith,an illegal distiller in Speyside who went legit when he obtained the first licence to legally distill whisky in 1824.",
  tourInfo: "DURATION: 1 ¼ hours* Departs every 30 minutes from 10am, last tour at 4.30pm",
  cost: "PRICE: £10.00",
  website: 'https://www.theglenlivet.com',
  image: ".",
  coords:{
    lat: 57.343908,
    lng: -3.337552
  }
},
{
  name: "Auchentoshan",
  location: "Clydebank, Glasgow",
  region: "Lowland",
  description: "The closest distillery to Glasgow and readily accessible by train from the city’s Central station, Auchentoshan is a great little distillery to visit and produces some of the country’s lightest whiskies.",
  tourInfo: "The Classic Tour last 1 hour however there is various in-depth tours on offer",
  cost: "PRICE: £10.00",
  website: 'http://www.auchentoshan.com',
  image: ".",
  coords:{
    lat: 55.922313,
    lng: -4.439655
  }
},
{
  name: "Edradour",
  location: "Pitlochry, Perthshire",
  region: "Lowland",
  description: "Hidden in the very heart of Perthshire, this picturesque ‘little Model Village’ of Edradour is steeped in a history of intrigue to inspire the imagination. And, with matchless commitment to retaining authentic small scale production, Edradour uniquely boasts over 25 distinctive expressions of Highland Single Malt Scotch Whisky with their wonderful characters and flavours.",
  tourInfo: "April to October, Mon - Sat 10am to 5pm. Tour duration 1 Hour",
  cost: "PRICE: Adult £7.50 Children (12-17 years) £2.50",
  website: 'http://www.edradour.com/',
  image: ".",
  coords:{
    lat: 56.701458,
    lng: -3.701010
  }
},
{
  name: "Benromach",
  location: "Forres, Speyside",
  region: "Speyside",
  description: "Benromach is a distillery that continues to win awards for its excellent core range of malts.  Situated in Forres and drawing its water from the foot of the Romach hills, the distillery is the smallest in Speyside and isn’t too far from Elgin",
  tourInfo: "The Classic Tour is 1 hour duration - just turn up! Jan - March (Monday to Friday 10am – 4pm), April - Sept (Monday to Saturday 9.30am – 5pm), Oct - Dec (Monday to Friday 10am – 4pm). Other types of tours are avaiable.",
  cost: "Price: £6.00 per person " ,
  website: 'http://www.benromach.com/',
  image: ".",
  coords:{
    lat: 57.613608,
    lng: -3.620026
  }
},
{
  name: "Ardbeg",
  location: "Isle of Islay",
  region: "Islay",
  description: "Ardbeg has been called “as close to perfection as makes no difference,” by whisky connoisseurs. Proof then, that Ardbeg truly deserves its incredible reputation. It’s a whisky that’s worshipped around the world and has been named ‘World Whisky of the Year’ no less than 4 times out of the last 7 years…",
  tourInfo: "The Distillery Tour & Wee Taste is 1 hour duration. March - 7th April (11am Monday - Friday), 10th April - end October (11am Monday - Sunday), November (11am Monday - Friday), 23rd January – 7th April (3pm Monday – Friday), 10th April – end October (3pm Monday – Sunday )",
  cost: "Price: £6.00 per person " ,
  website: 'https://www.ardbeg.com',
  image: ".",
  coords:{
    lat: 55.642079,
    lng: -6.112060
  }
},
{
  name: "Abhainn Dearg Distillery",
  location: "Isle of Lewis",
  region: "Outer Hebrides",
  description: "Abhainn Dearg Distillery (pronounced Aveen Jarræk), or Red River in English, is located in Uig on the Outer Hebridean Isle of Lewis.  The distillery was founded by Mark Tayburn and is the first legal whisky distillery in the Outer Hebrides in almost two hundred years.",
  tourInfo: "Summer tours - Monday to Saturday between 11am - 1pm and 2pm - 4pm. Winter tours Monday to Friday - between 11am - 1pm and 2pm - 4pm.",
  cost: "Price: £5.00 per person, children go free. 30 mins tour" ,
  website: 'http://www.abhainndearg.co.uk/',
  image: ".",
  coords:{
    lat: 58.176065,
    lng: -7.048035
  }
},
]);

use users;
db.dropDatabase();
db.whisky_users.insert([
{
  name: "Colin",
  bucket_list: [],
  visited_list: []
}])

const constants = require('../constants');

const activeFeeds = [
  'https://www.scmp.com/rss/320663/feed',
  'https://webfeeds.brookings.edu/brookingsrss/topics/technology',
  'https://www.xinwengao.com/china-pr/business-finance/feed/',
  'http://www.xinhuanet.com/english/rss/scirss.xml',
  'https://www.epic.org/index.xml',
  'https://www.nber.org/rss/newdae.xml',
  'https://www.nber.org/rss/newpe.xml',
  'https://www.piie.com/rss/update.xml',
  'https://www.piie.com/rss/books.xml',
  'https://www.urban.org/index/just-released/feed',
  'https://www.epi.org/feed/',
  'https://www.aspeninstitute.org/feed/',
  'https://www.americanprogress.org/issues/economy/feed/',
  'https://www.rand.org/blog.xml2',
  'https://www.aei.org/rss',
  'https://mises.org/about/social/media/rss-feed',
  'https://www.cato.org/rss/recent-opeds',
  'https://www.cato-unbound.org/rss',
  'https://www.reddit.com/r/Futurology/.rss',
  'http://feeds.feedburner.com/kff/healthreform',
  'http://feeds.feedburner.com/kff/latest',
  'https://www.belfercenter.org/rss/blog/50178/feed',
  'http://feeds.feedburner.com/cbpp/fYJq',
  'https://feeds.feedburner.com/TheNewSecurityBeat',
  'https://www.hoover.org/rss.xml',
  'https://www.manhattan-institute.org/rss.xml',
  'https://cis.org/ImmigrationBlog/feed',
  'http://carnegieendowment.org/rss/solr/?fa=feeds&channel=report&center=dc&lang=en',
  'http://carnegieendowment.org/rss/solr/?fa=feeds&channel=article&center=dc&lang=en',
  'http://carnegieendowment.org/rss/solr/?fa=feeds&lang=en&fltr={!raw%20f=taxonomyTag}::1279:1531:Technology',
  'https://www.newamerica.org/feed/',
  'https://blog.independent.org/feed/',
  'https://blog.heartland.org/feed',
  'https://centerforintelligence.org/feed',
  'https://blog.acton.org/feed',
  'https://www.atlanticcouncil.org/feed',
  'https://www.ppic.org/feed/rss/?topic=economy',
  'https://www.mercatus.org/feed',
  'https://www.lawfareblog.com/feed/',
  'https://ec.europa.eu/information_society/newsroom/cf/generaterss.cfm?tpa_id=16547&sub=1&pr=all',
  'http://news.mit.edu/rss/topic/artifici'
];

const feedGroups = {
  [constants.FEEDGROUP.CHINABUSINESS]: ['https://36kr.com/feed']
};

module.exports = { activeFeeds, feedGroups };
/*
// Allstars
// from https://guides.library.yale.edu/c.php?g=296224&p=5088008
// https://ec.europa.eu/information_society/newsroom/cf/rss-list.cfm
- https://www.lawfareblog.com/feed/
- http://carnegieendowment.org/rss/solr/?fa=feeds&lang=en&fltr={!raw%20f=taxonomyTag}::1279:1531:Technology
- https://www.cato.org/rss/recent-opeds
// TECH
https://webfeeds.brookings.edu/brookingsrss/topics/technology
// Monetary Policy
'https://webfeeds.brookings.edu/brookingsrss/topics/monetarypolicy'


'https://www.xinwengao.com/china-pr/business-finance/feed/'
'https://www.scmp.com/rss/320663/feed'
'http://www.xinhuanet.com/english/rss/scirss.xml'
'https://www.scmp.com/rss/320663/feed'
'https://36kr.com/feed',
  'https://news.mingpao.com/rss/ins/s00002.xml',
  'http://www.ftchinese.com/rss/news',
  'http://www.ftchinese.com/rss/hotstoryby7day',
  'http://www.ftchinese.com/rss/letter',
  'https://www.worldjournal.com/caterss/?cat=207792'
https://dedicated.wallstreetcn.com/rss.xml
"https://www.worldjournal.com/caterss/?cat=207853",
"https://www.worldjournal.com/caterss/?cat=207853",
"http://cn.engadget.com/rss.xml",
"https://36kr.com/feed",
"https://news.mingpao.com/rss/ins/s00002.xml",
"http://www.ftchinese.com/rss/news",
"http://www.ftchinese.com/rss/hotstoryby7day",
"http://www.ftchinese.com/rss/letter",
"https://www.worldjournal.com/caterss/?cat=207792"
good:
http://cn.engadget.com/rss.xml
https://36kr.com/feed
https://news.mingpao.com/rss/ins/s00002.xml
https://dedicated.wallstreetcn.com/rss.xml
http://www.ftchinese.com/rss/news
http://www.ftchinese.com/rss/hotstoryby7day
http://www.ftchinese.com/rss/letter
https://www.worldjournal.com/caterss/?cat=207792
https://www.worldjournal.com/caterss/?cat=207853




https://libguides.mit.edu/c.php?g=176072&p=1160813

// not good
http://www.adaymag.com/feed (seems literary good?)
http://www.duxieren.com/duxieren.xml
http://www.read.org.cn/feed
https://news.mingpao.com/rss/pns/s00004.xml
https://news.mingpao.com/rss/pns/s00013.xml (okish)
http://today-america.com/feed/
http://cn.chinadaily.com.cn/
http://www.chinadaily.com.cn/rss/index.html
https://www.rthk.hk/?lang=en
https://rss.sina.com.cn/
http://www.ftchinese.com/rss/feed
http://www.chinadaily.com.cn/rss/bizchina_rss.xml
// "http://www.chinadaily.com.cn/rss/bizchina_rss.xml"
        // " http://www.chinanews.com/rss/finance.xml"

http://std.stheadline.com/
https://www.worldjournal.com
http://www.china.com.cn


*/

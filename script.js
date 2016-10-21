
var quotes=['“Go where you are celebrated – not tolerated. If they can\’t see the real value of you, it\’s time for a new start.” – Unknown', 
			'“Nobody ever wrote down a plan to be broke, fat, lazy, or stupid. Those things are what happen when you don’t have a plan.” – Larry Winget',
			'“Being happy doesn’t mean that everything is perfect. it means that you’ve decided to look beyond the imperfections.” – Unknown',
			'“The greatest discovery of all time is that a person can change his future by merely changing his attitude.”– Oprah Winfrey',
			'“Turn your wounds into wisdom.”– Oprah Winfrey',
			'“Wisdom tends to grow in proportion to one\'s awareness of one\'s ignorance.” - Anthony de Mello, One Minute Wisdom', 
			'“I know for sure that what we dwell on is who we become.” – Oprah Winfrey',
			'“People mistakenly assume that their thinking is done by their head; it is actually done by the heart which first dictates the conclusion, then commands the head to provide the reasoning that will defend it.” - Anthony de Mello',
			'“Follow your instincts. That’s where true wisdom manifests itself.” – Oprah Winfrey',
			'“With every experience, you alone are painting your own canvas, thought by thought, choice by choice.”– Oprah Winfrey', 
			'“When someone shows you who they are, believe them the first time.”– Oprah Winfrey',
			'“As the Arabs say, \"The nature of rain is the same, but it makes thorns grow in the marshes and flowers in the gardens.”- Anthony de Mello, Awareness', 
			'“Every time you state what you want or believe, you\’re the first to hear it. It’s a message to both you and others about what you think is possible. Don\’t put a ceiling on yourself.”– Oprah Winfrey',
			'“You see persons and things not as they are but as you are. ”- Anthony de Mello'];





var i=0;
function quoteLoop(input){
  if(i>=input.length){
    i=0;
  }
		document.getElementsByTagName("h1")[0].innerHTML = input[i];
		i++;
	};
			
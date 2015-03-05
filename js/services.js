var module = angular.module("displayitem.service",[]);

module.service( 'Item', [ '$rootScope', function( $rootScope ) {
    var itemIdex = -1;
    var allItems = [
        {
          type: "single",
          content: {
              title : "当你有机会去做新奇或陌生的事情的时候，你____表现出了创造力和独创性。",
              img:"image/tian_test.jpg",
              options: {
                  1 : "罕有",
                  2 : "偶然",
                  3 : "有时",
                  4 : "经常",
                  5 : "总是"
            }
          }
        },
        {
            type: "single",
            content: {
                title : "当你有机会去探索新事物或做一些不同的事情的时候，你_____表现出了好奇心或兴趣。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当你要做一个复杂而重要的决定的时候，你____表现出批判性的思考、开放的态度、或良好的判断力。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当你有机会在常规工作之外，深入学习有关某个问题的知识的时候，你____表现出对学习的喜爱。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当你给别人建议的时候，你____表现出洞察力或智慧。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当你觉得恐惧或被威胁的时候，你____表现出勇敢或勇气。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当你面临一个艰巨任务的时候，你____表现出持之以恒、坚持不懈、用功和勤奋。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "你有可能去欺骗别人的时候，你____表现出诚实或真挚。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "在你的日常生活中，你____觉得有兴致或热情。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "在你的日常生活中，你____表达你对别人（朋友、家庭成员）的爱或依恋。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "在你的日常生活中，你____表现出你对别人的仁慈或宽宏。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当别人需要你去理解他，并做出适当回应的时候，你____表现出社交智慧或社交技能。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "作为一个成员，当你的团队需要你的帮助和忠诚的时候，你____表现出团队精神。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当你能对两个以上的人实施一些权力或影响力的时候，你____表现出公平。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "作为一个成员，当你在的团队需要帮助的时候，你____表现出领导能力。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当你被别人伤害的时候，你____表现出宽恕或仁慈。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "在你的日常生活中，你____表现出谦逊或谦卑。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当你面对诱惑的时候，你____表现出审慎、谨慎或小心。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当你需要控制情绪/渴望/冲动的时候，你____能够自我控制或自我调节。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "在日常生活中，你____表现出对于美丽和卓越的欣赏或敬畏。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当别人给予你帮助的时候，你____表现出感恩或感激。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "当你遇到挫折或失败的时候，你____表现出希望或乐观精神。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "在日常生活中，你____表现出调皮和幽默。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        },
        {
            type: "single",
            content: {
                title : "在日常生活中，你____表现出虔诚或精神灵性。",
                img:"image/tian_test.jpg",
                options: {
                    1 : "罕有",
                    2 : "偶然",
                    3 : "有时",
                    4 : "经常",
                    5 : "总是"
                }
            }
        }
    ]



    var service = {

        hasResult : true,
        observerCallbacks : [],
        registerObserverCallback : function(callback){
            this.observerCallbacks.push(callback);
        },
        notifyObservers : function(){
            angular.forEach(this.observerCallbacks, function(callback){
                 callback();
            });
        },
        next: function () {
            itemIdex ++;
            if(itemIdex > allItems.length){
                itemIdex = allItems.length;
            }

            this.hasResult = false;
            this.notifyObservers();
            return allItems[itemIdex];
        },
        current : function(){
            return allItems[itemIdex];
        },
        setResult : function(result){
            this.hasResult = true;
            this.notifyObservers();
            allItems[itemIdex].result = result;
            console.log("service::set result");
            console.log( allItems[itemIdex]);
        },
        getAllItems : function(){
            return allItems;
        }
    }
    return service;
}]);
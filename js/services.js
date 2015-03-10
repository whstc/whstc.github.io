var module = angular.module("displayitem.service",[]);

module.service( 'Item', [ '$rootScope', function( $rootScope ) {
    var itemIdex = -1;
    var allItems = [
        {
            id : 1,
          type: "single",
          content: {
              title : "当你有机会去做新奇或陌生的事情的时候，你____表现出了创造力和独创性。",
              img:"image/1.png",
              options: {
                  1 : "image/A.png",
                  2 : "image/B.png",
                  3 : "image/C.png",
                  4 : "image/D.png",
                  5 : "image/E.png"
            }
          },
            describe:{
                name:"创造力",
                content:"运用新颖、富有成效的方式使思维更加概念化；体现在做事的方式上"
            }
        },
        {id : 2,
            type: "single",
            content: {
                title : "当你有机会去探索新事物或做一些不同的事情的时候，你_____表现出了好奇心或兴趣。",
                img:"image/2.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"好奇心",
                content:"基于自己的兴趣爱好进行的活动；确定目标，开始探索"
            }
        },
        {
            id : 3,
            type: "single",
            content: {
                title : "当你要做一个复杂而重要的决定的时候，你____表现出批判性的思考、开放的态度、或良好的判断力。",
                img:"image/3.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"开放性思维",
                content:"从各个维度进行思考而不过早下结论；公正的权衡各种证据和迹象"
            }
        },
        {
            id : 4,
            type: "single",
            content: {
                title : "当你有机会在常规工作之外，深入学习有关某个问题的知识的时候，你____表现出对学习的喜爱。",
                img:"image/4.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"好学",
                content:"主动掌握新的技能，确定新的目标和获取知识"
            }
        },
        {
            id : 5,
            type: "single",
            content: {
                title : "当你给别人建议的时候，你____表现出洞察力或智慧。",
                img:"image/5.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"洞察力",
                content:"为他人提供明智的建议；拥有对自己和他人都有意义的世界观"
            }
        },
        {
            id : 6,
            type: "single",
            content: {
                title : "当你觉得恐惧或被威胁的时候，你____表现出勇敢或勇气。",
                img:"image/6.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"勇敢",
                content:"在威胁、挑战、困难或痛苦面前不畏缩；在有反对意见时依然能够为正义、真理辩护；即使不受欢迎依然能够坚持自己的信念"
            }
        },
        {
            id : 7,
            type: "single",
            content: {
                title : "当你面临一个艰巨任务的时候，你____表现出持之以恒、坚持不懈、用功和勤奋。",
                img:"image/7.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"毅力",
                content:"做事有始有终；面对困难时坚持不懈，并以乐观积极地心态完成任务"
            }
        },
        {
            id : 8,
            type: "single",
            content: {
                title : "你有可能去欺骗别人的时候，你____表现出诚实或真挚。",
                img:"image/8.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"正直",
                content:"以非常诚恳的方式，更加全面的看待事情的本质；从不吹嘘和炫耀；能够对自己的情感和行为负责"
            }
        },
        {
            id : 9,
            type: "single",
            content: {
                title : "在你的日常生活中，你____觉得有兴致或热情。",
                img:"image/9.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"热情",
                content:"以一种充满活力、激情四射的心态感悟生活；不会半途而废；对生活具有一定的冒险精神；积极的感受生活"
            }
        },
        {
            id : 10,
            type: "single",
            content: {
                title : "在你的日常生活中，你____表达你对别人（朋友、家庭成员）的爱或依恋。",
                img:"image/10.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"爱与被爱的能力",
                content:"和他人保持亲密友好的关系，特别是那些乐于分享并具有同情心的人"
            }
        },
        {
            id : 11,
            type: "single",
            content: {
                title : "在你的日常生活中，你____表现出你对别人的仁慈或宽宏。",
                img:"image/11.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"善良",
                content:"乐于帮助他人，关怀他人"
            }
        },
        {
            id : 12,
            type: "single",
            content: {
                title : "当别人需要你去理解他，并做出适当回应的时候，你____表现出社交智慧或社交技能。",
                img:"image/12.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"社交能力(情商)",
                content:"有效的意识到他人的动机和情感；明白在不同的社交场合如何行事"
            }
        },
        {
            id : 13,
            type: "single",
            content: {
                title : "作为一个成员，当你的团队需要你的帮助和忠诚的时候，你____表现出团队精神。",
                img:"image/3.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"合作",
                content:"作为一名团队成员能够很好的与大家协作；对团队忠实；乐于分担"
            }
        },
        {
            id : 14,
            type: "single",
            content: {
                title : "当你能对两个以上的人实施一些权力或影响力的时候，你____表现出公平。",
                img:"image/5.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"公平",
                content:"对所有人能够做到一视同仁；不因个人情感而有所偏倚；给每个人公平的机会"
            }
        },
        {
            id : 15,
            type: "single",
            content: {
                title : "作为一个成员，当你在的团队需要帮助的时候，你____表现出领导能力。",
                img:"image/7.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"领导力",
                content:"合理安排团队活动，与团队成员关系良好；组织团队活动并能使每个人都感到快乐"
            }
        },
        {
            id : 16,
            type: "single",
            content: {
                title : "当你被别人伤害的时候，你____表现出宽恕或仁慈。",
                img:"image/9.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"宽恕",
                content:"原谅他人的错误；接受他人的不足并给予第二次机会"
            }
        },
        {
            id : 17,
            type: "single",
            content: {
                title : "在你的日常生活中，你____表现出谦逊或谦卑。",
                img:"image/11.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"谦逊",
                content:"保持谦虚的态度；不认为自己高人一等"
            }
        },
        {
            id : 18,
            type: "single",
            content: {
                title : "当你面对诱惑的时候，你____表现出审慎、谨慎或小心。",
                img:"image/18.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"谨慎",
                content:"对自己的决定谨慎小心；不做过度的冒险行为；不说或不做以后很可能会后悔的事情"
            }
        },
        {
            id : 19,
            type: "single",
            content: {
                title : "当你需要控制情绪/渴望/冲动的时候，你____能够自我控制或自我调节。",
                img:"image/19.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"自我调节(自律)",
                content:"所作所为能够遵守规定和纪律，能够控制自己的情绪和行为"
            }
        },
        {
            id : 20,
            type: "single",
            content: {
                title : "在日常生活中，你____表现出对于美丽和卓越的欣赏或敬畏。",
                img:"image/4.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"对美和卓越的欣赏",
                content:"从自然到艺术、科学，对生活中不同领域的美丽、卓越和才华欣赏"
            }
        },
        {
            id : 21,
            type: "single",
            content: {
                title : "当别人给予你帮助的时候，你____表现出感恩或感激。",
                img:"image/6.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"感激",
                content:"对他人的帮助予以感激，并时常表达出这种谢"
            }
        },
        {
            id : 22,
            type: "single",
            content: {
                title : "当你遇到挫折或失败的时候，你____表现出希望或乐观精神。",
                img:"image/8.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"希望",
                content:"对未来充满希望并努力去实现它；相信自己的未来是可以靠自己创造的"
            }
        },
        {
            id : 23,
            type: "single",
            content: {
                title : "在日常生活中，你____表现出调皮和幽默。",
                img:"image/10.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"幽默",
                content:"时常带给他人欢乐；能够看到事物积极的一面"
            }
        },
        {
            id : 24,
            type: "single",
            content: {
                title : "在日常生活中，你____表现出虔诚或精神灵性。",
                img:"image/9.png",
                options: {
                    1 : "image/A.png",
                    2 : "image/B.png",
                    3 : "image/C.png",
                    4 : "image/D.png",
                    5 : "image/E.png"
                }
            },
            describe:{
                name:"信仰",
                content:"对生活的意义，对更高的目标拥有坚定一致的信念，并能将这种信仰付诸实"
            }
        }
    ];




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
            nextItem = allItems[itemIdex];
            if(nextItem){
                nextItem.index = itemIdex + 1;
            }

            return nextItem;
        },
        before: function () {
            itemIdex --;
            if(itemIdex< 0){
                itemIdex = 0;
            }

            this.hasResult = false;
            this.notifyObservers();
            nextItem = allItems[itemIdex];
            if(nextItem){
                nextItem.index = itemIdex + 1;
            }

            return nextItem;
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


function ItemManager($scope,Item) {
    $scope.version="0.1.1";

    var curItem;
    $scope.showerUrl = "begin";
    $scope.showNextItem = function (){
        curItem = Item.next();
        if(!!curItem){
            console.log("showNextItem::" + curItem.type);
            $scope.showerUrl = curItem.type;
        }else{
            $scope.showerUrl = "report";
        }
    }

    $scope.showBeforeItem = function(){
        curItem = Item.before();
        $scope.showerUrl = curItem.type;
    }

    $scope.hasResult = Item.hasResult;
    Item.registerObserverCallback(function(){
        $scope.hasResult = Item.hasResult;
        console.log("registerObserverCallback::"+Item.hasResult);
    });

}

function SingleController($scope,Item){
    $scope.curItem = Item.current();

    $scope.getCurItem = function(){
        $scope.curItem = Item.current();
        return $scope.curItem;
    }

    $scope.selectOption = function (optionId){
        console.log("selectOption :: " + optionId );
        $scope.selectId = optionId;
        Item.setResult(optionId);

        $scope.showNextItem();
    }

    $scope.hasSelected = function() {
        return Item.current.result && Item.current.result  === Item.id;
    }

}

function ReportController($scope, Item){
    $scope.getAllSortedItems = function(){
        return  _.sortBy(Item.getAllItems(), function(oneItem){return -oneItem.result});
    }
}

function FillinController($scope,Item){
    $scope.result = {};

    var curItem = Item.current();
    var title = curItem.content.title;
    //是数组的形式，其中第一个是普通字符串，第二个是键值
//    var titleSplit = title.split(/\[\[(.{2})\]\]/);
    var first = title.split("[[");
    var titleSplit = [];
    for(var index in first){
        titleSplit = titleSplit.concat(first[index].split("]]"));
    }
    console.log(titleSplit)
    var fillinContent = [];

    for(var i = 0; i < titleSplit.length; i++){
        var subContent = {};
        if(i%2 == 0){
            subContent.type="content";
        }else{
            subContent.type="key";
        }
        subContent.value = titleSplit[i];

        fillinContent.push(subContent);
    }

    $scope.fillinContent = fillinContent;

    $scope.changeResult = function(){
        console.log(this.result);
        Item.setResult(this.result);
    }




}


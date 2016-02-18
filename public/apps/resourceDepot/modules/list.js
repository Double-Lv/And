define(['knockout', 'Tools', './dataMap', 'ko-mapping'], function(ko, $tools, dataMap){
	return function (context) {
		var self = this;

        self.parent = context.parent;
        self.data = context.data;

        self.dataList = ko.observableArray([]);
        self.typeList = ko.observableArray(dataMap.types);

        $('body').on('list_page_ready', function(){
        	//请求列表数据
        	$tools.ajax({
        		url: '/resourceDepot/list',
        		success: function(data){
        			self.dataList(data.data);
        		}
        	});
        });

        //debug
        window.list = self;


	};
});
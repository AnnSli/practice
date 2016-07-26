var controller = {
	model: null,
	view: null,
	index: null,
	dataOnload: function (url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
    	var self = this;
    	xhr.onerror = function() {
    		alert('Sorry, there is no data');
    	};
    	xhr.onload = function() {
       		self.model.data = controller.idGenerator(JSON.parse(xhr.responseText));
        	callback(self.model.data);
    	};
    	xhr.send();
	},
	idGenerator: function(dataName) {
		for (var i = 0; i < dataName.length; i++) {
			var nameArr = dataName[i].name.split(' ');
			var result = nameArr[0].split('', 1) + nameArr[1].split('', 5).join('');
			dataName[i]._id = result.toLowerCase();
		}
		return dataName;
	},
	handleLoad: function() {
		controller.dataOnload('http://beta.json-generator.com/api/json/get/V1DIqsgOZ', controller.view.loadTable);
	},
	getData: function(event) {
		var arrData = self.model.data;
		var rowIndex1 = $(this).index();
		for (var i = 0; i < arrData.length; i++) {
			if (arrData[i].index + 1 === rowIndex1) {
				var fullName = arrData[i].name;
				view.fillForm(fullName);
				var companyName = arrData[i].company;
				view.fillSelect(companyName);
				console.log(arrData[i].index);
				controller.index =  arrData[i].index;
			} 
		}	
	},
	clickEvent: function() {
		this.view.getTable().on('click', 'tr', this.getData);
	},
	getFormText: function(event) {
		var newText = $('#inputName');
		var newValue = newText.val();
		var newCompany = $('#departmentName option:selected');
		var newCompanyValue = newCompany.val();
		view.updateTable(newValue, newCompanyValue);
	},
	clickSave: function() {
		this.view.getBtn().on('click', this.getFormText);
	}
}





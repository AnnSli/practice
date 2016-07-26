var view = {
	loadTable: function (tabledata) {
		if (tabledata.length && tabledata.length > 0) {
			var tbody = $('#table-data');
			var dataSize = tabledata.length;
			var colNumber = 4;
			var rowNumber = dataSize;
			//creating table
			for (var i = 0, j = 0; i < rowNumber; i++) {
				var tr = $('<tr></tr>');
				for (var k = 0; k < colNumber; k++) {
					var td = $('<td></td>');
					$(tr).append(td);
				}
				j++;
				$(tbody).append(tr);
			}  
			//adding data into table
			for (var f = 0; f < rowNumber; f++) {
				var number = $('tr td:nth-child(1)');
				$(number[f]).text(f + 1);
				var id = $('tr td:nth-child(2)');
				$(id[f]).text(tabledata[f]._id);
				var nameData = $('tr td:nth-child(3)');
				$(nameData[f]).text(tabledata[f].name);
				var companyData = $('tr td:nth-child(4)');
				$(companyData[f]).text(tabledata[f].company);
				var selectField = $('#departmentName');	
			}
			//making option list
			var selectField = $('#departmentName');
			function onlyUnique(value, index, self) { 
				return self.indexOf(value) === index;
			}
			var itemArr = [];
			for (var x = 0; x < rowNumber; x++) {
				var item = tabledata[x].company;
				itemArr.push(item);
			}
			var unique = itemArr.filter( onlyUnique ).sort();
			for (var u = 0; u < unique.length; u++) {
				var inner = '<option>' + unique[u] +'</option>';
				selectField.append(inner);
			}
		}
	},
	getTable: function() {
		return $('#table-list');
	},
	fillForm: function(name) {
		var inputForm = $('#inputName');
		inputForm.val(name);
	},
	fillSelect: function(name) {
		var select = $('#departmentName option:selected');
		select.text(name);
	},
	getBtn: function() {
		return $('#save');
	},
	updateTable: function(value, companyValue){
		var elemIndex = controller.index;
		var rowsNumber = controller.model.data.length;
		for (var i = 0; i < rowsNumber; i++) {
			if (elemIndex === i) {
				var nameData = $('tr td:nth-child(3)');
				$(nameData[i]).text(value);
				var companyData = $('tr td:nth-child(4)');
				$(companyData[i]).text(companyValue);
			}
		}
	}
}
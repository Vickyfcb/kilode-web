const selectAll = document.querySelector('.setup-group.select-all input');
const allCheckbox = document.querySelectorAll('.setup-group:not(.select-all) input');
let listBoolean = [];

allCheckbox.forEach(item=> {
	item.addEventListener('change', function () {
		allCheckbox.forEach(i=> {
			listBoolean.push(i.checked);
		})
		if(listBoolean.includes(false)) {
			selectAll.checked = false;
		} else {
			selectAll.checked = true;
		}
		listBoolean = []
	})
})

selectAll.addEventListener('change', function () {
	if(this.checked) {
		allCheckbox.forEach(i=> {
			i.checked = true;
		})
	} else {
		allCheckbox.forEach(i=> {
			i.checked = false;
		})
	}
})
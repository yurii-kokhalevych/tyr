var check_field_main_form = {
            			'route':{"required":"Будь ласка, введіть Маршрут"},
            			'date':{"required":"Будь ласка, введіть Дата"},
            			'custom_date':{"required":"Будь ласка, введіть Дата"},
            			'quantity':{"required":"Будь ласка, введіть Кількість осіб"},
            			'duration':{"required":"Будь ласка, введіть Тривалість"},
            			'comments':{"required":"Будь ласка, введіть Побажання"},
            			'name':{"required":"Будь ласка, введіть Прізвище, Ім'я та по-Батькові"},
            			'phone':{"required":"Будь ласка, введіть Телефон"},
            			'email':{"required":"Будь ласка, введіть Електронна пошта", "email":"Будь ласка, введіть правильну email адресу"},
            		}
            		function check_main_form(form_element, check_field) {
            			var rt = check(form_element, check_field);

            			return rt;
            		}
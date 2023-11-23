/** ИНТЕРФЕЙС - ДАННЫЕ ДЛЯ ШАБЛОНОВ EJS
 * Определяет информацию для шаблонов EJS
 *   user:         объект USER после аутентификации (или undefined) number  - ID  (обязательный параметр)
 *   title:        название страницы
 *   data:         основные данные для отображения
 *
 * Обязательным являются ВСЕ поля
 */
export interface IEjsData {
	user: object;
	title: string;
	data: any;
};

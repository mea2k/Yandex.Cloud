import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class ConfigService {
	private _config: object;

	constructor() {
		/////////////////////////////////////////////////
		// КОНСТАНТЫ ПО УМОЛЧАНИЮ
		/////////////////////////////////////////////////
		this._config = {
			// ПОРТ приложения
			PORT: 3000,

			// ПУТИ ДЛЯ ХРАНЕНИЯ ДАННЫХ
			// И ЗАГРУЗКИ ФАЙЛОВ
			DATA_PATH: 'data/',
			PUBLIC_PATH: 'public/',
			UPLOAD_PATH: 'public/upload/',
		};

		/////////////////////////////////////////////////
		// ЗАГРУЗКА ДАННЫХ ИЗ ПЕРЕМЕННЫХ ОКРУЖЕНИЯ PROCESS.ENV
		/////////////////////////////////////////////////
		this._config = {
			...this._config,
			...process.env,
		};
	}

	/** ПОЛУЧЕНИЕ ЗНАЧЕНИЕ НАСТРОЕК ПО КЛЮЧУ
	 * @params {string} key - ключ параметра
	 * @returns string - значение параметра ИЛИ NULL
	 */
	get(key: string): string {
		return this._config[key] || null;
	}

	/** ПОЛУЧЕНИЕ ЗНАЧЕНИЕ ВСЕХ НАСТРОЕК
	 * @returns IConfig - JSON-объект типа IConfig со значениями всех параметров
	 */
	getAll() {
		return this._config;
	}
}

export const environment = {
	production: false,
	isMock: true,
	apiUrl: 'http://localhost:8080',
	api: {
		category: {
			url: 'category',
			one: 'category/{id}',
			getTasks: 'category/{id}/tasks',
			addTask: 'category/{id}/add-task',
		},
		task: {
			url: 'task',
			one: 'task/{id}',
		},
	},
};

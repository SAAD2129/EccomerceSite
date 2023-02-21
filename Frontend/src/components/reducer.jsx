const reducer = (state, action) => {
	if (action.type === 'ABOUT_UPDATE' || action.type === 'HOME_UPDATE') {
		return {
			...state,
			name: action.payload.name,
			image: action.payload.image,
		};
	}
	return state;
};

export default reducer;

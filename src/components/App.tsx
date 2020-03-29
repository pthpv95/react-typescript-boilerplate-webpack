import React from 'react';
import { hot } from 'react-hot-loader';
import 'react-app-polyfill/ie11';
import '../scss/style.scss';

export interface IAppProps {}

export interface IAppState {}

class App extends React.PureComponent<IAppProps, IAppState> {
	constructor(props: any){
		super(props);
	}

	data = {
		id: '12',
		name: 'no name',
		address: {
			street: {
				get(){
					return 'hello world';
				}
			}
		}
	}

	componentDidMount(){
		// const result = this.data?.address?.street?.get();
	}

	render() {
		return (
			<div className="dummy-class">
				<h1>Hello World!</h1>
				<h2>This is basic sample react app using typescript + webpack + babel.</h2>
			</div>
		);
	}
}

export default hot(module)(App);

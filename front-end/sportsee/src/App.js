import Header from './components/Header/Header';
import Router from './components/Router/Router';
import './style/style.css'
import './style/colors.css'

function App() {

	return (
		<div className="App">
			<Header />
			<main>
				<Router />
			</main>
		</div>
	);
}

export default App;

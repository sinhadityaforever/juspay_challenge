import Companies from './Components/Companies';
import Guide from './Components/Guide';
import Hero from './Components/Hero';
import Properties from './Components/Properties';
import Details from './Components/Details';
import GetStarted from './Components/GetStarted';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
	// const [isFloating, setIsFloating] = useState(true);

	return (
		<>
			<Hero />
			<Companies />
			<Guide />
			<Details />
			<GetStarted />
			<Footer />
		</>
	);
}

export default App;
